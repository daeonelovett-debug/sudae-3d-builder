import prisma from "../db.server";

export interface DesignData {
  name: string;
  data: Record<string, any>;
  modelUrl?: string;
  customText?: string;
}

// Helper function to safely parse JSON
function safeJsonParse(jsonString: string, fallback: any = {}): any {
  try {
    return JSON.parse(jsonString);
  } catch (error) {
    console.error("Failed to parse JSON:", error);
    return fallback;
  }
}

class DesignService {
  async getDesigns(shop: string) {
    try {
      const designs = await prisma.design.findMany({
        where: { shop },
        orderBy: { createdAt: "desc" },
      });
      // Parse JSON strings back to objects
      return designs.map((design) => ({
        ...design,
        data: safeJsonParse(design.data),
      }));
    } catch (error) {
      console.error("Error fetching designs:", error);
      throw new Error("Failed to fetch designs");
    }
  }

  async saveDesign(shop: string, designData: DesignData) {
    try {
      const design = await prisma.design.create({
        data: {
          shop,
          name: designData.name,
          modelUrl: designData.modelUrl,
          customText: designData.customText,
          data: JSON.stringify(designData.data),
        },
      });
      // Parse the data back to object for return value
      return {
        ...design,
        data: safeJsonParse(design.data),
      };
    } catch (error) {
      console.error("Error saving design:", error);
      throw new Error("Failed to save design");
    }
  }

  async deleteDesign(shop: string, designId: string) {
    try {
      await prisma.design.delete({
        where: { id: designId },
      });
      return { success: true };
    } catch (error) {
      console.error("Error deleting design:", error);
      throw new Error("Failed to delete design");
    }
  }

  async getDesignById(shop: string, designId: string) {
    try {
      const design = await prisma.design.findFirst({
        where: { id: designId, shop },
      });
      if (!design) {
        return null;
      }
      // Parse JSON string back to object
      return {
        ...design,
        data: safeJsonParse(design.data),
      };
    } catch (error) {
      console.error("Error fetching design:", error);
      throw new Error("Failed to fetch design");
    }
  }
}

export const designService = new DesignService();
