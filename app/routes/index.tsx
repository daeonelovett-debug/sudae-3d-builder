import { json, type LoaderFunctionArgs } from "@remix-run/node";
import { useLoaderData } from "@remix-run/react";

export const loader = async ({ context }: LoaderFunctionArgs) => {
  return json({
    welcomeMessage: "Welcome to Sudae 3D Builder",
  });
};

export default function Index() {
  const { welcomeMessage } = useLoaderData<typeof loader>();

  return (
    <div className="app-container">
      <h1>{welcomeMessage}</h1>
      <p>Your Shopify 3D customization app is ready.</p>
      <p>Configure your app in the admin panel to get started.</p>
    </div>
  );
}
