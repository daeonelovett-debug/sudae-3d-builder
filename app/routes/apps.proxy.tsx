import { json, type ActionFunctionArgs, type LoaderFunctionArgs } from "@remix-run/node";
import { authenticate } from "../shopify.server";
import { designService } from "../services/design.service";

// LOAD existing designs
export const loader = async ({ request }: LoaderFunctionArgs) => {
  try {
    const { session } = await authenticate.public.appProxy(request);
    
    if (!session) {
      return json({ error: "Unauthorized" }, { status: 401 });
    }

    // Fetch designs from database
    const designs = await designService.getDesigns(session.shop);
    
    return json({ designs, success: true });
  } catch (error) {
    console.error("Loader error:", error);
    return json({ error: "Failed to load designs" }, { status: 500 });
  }
};

// SAVE a new design
export const action = async ({ request }: ActionFunctionArgs) => {
  if (request.method !== "POST") {
    return json({ error: "Method not allowed" }, { status: 405 });
  }

  try {
    const { session } = await authenticate.public.appProxy(request);
    
    if (!session) {
      return json({ error: "Unauthorized" }, { status: 401 });
    }

    const formData = await request.formData();
    const designData = formData.get("designData");
    const designName = formData.get("designName");

    if (!designData || !designName) {
      return json(
        { error: "Missing required fields" },
        { status: 400 }
      );
    }

    // Save design to database
    const savedDesign = await designService.saveDesign(
      session.shop,
      {
        name: designName as string,
        data: JSON.parse(designData as string),
      }
    );

    return json({ success: true, design: savedDesign });
  } catch (error) {
    console.error("Action error:", error);
    return json({ error: "Failed to save design" }, { status: 500 });
  }
};
