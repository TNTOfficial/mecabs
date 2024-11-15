// "use server";

// import path from "path";
// import fs from "fs/promises";

// // Helper function to determine if a string is a base64 image
// export const isBase64Image = (str: string): boolean => {
//   return str.startsWith("data:image");
// };

// // Helper function to save base64 image to disk
// export const saveToDisk = async (imageData: string): Promise<string | null> => {
//   try {
//     // Handle base64 image
//     if (isBase64Image(imageData)) {
//       const base64Data = imageData.split(";base64,").pop();
//       if (!base64Data) return null;

//       const buffer = Buffer.from(base64Data, "base64");

//       // Create a unique filename
//       const fileName = `${Date.now()}-${Math.random()
//         .toString(36)
//         .substring(7)}.jpg`;
//       const publicDir = path.join(process.cwd(), "public", "uploads");
//       const filePath = path.join(publicDir, fileName);

//       // Ensure the uploads directory exists
//       await fs.mkdir(publicDir, { recursive: true });

//       // Write the file
//       await fs.writeFile(filePath, buffer);

//       // Return the public URL path
//       return `/uploads/${fileName}`;
//     }
//     return null;
//   } catch (error) {
//     console.error("Failed to save image:", error);
//     return null;
//   }
// };
"use server";
import path from "path";
import fs from "fs/promises";

// Helper function to determine if a string is a base64 image
export const isBase64Image = (str: string): boolean => {
  return str.startsWith("data:image");
};

// Helper function to get file extension from mime type
const getExtensionFromMimeType = (dataUrl: string): string => {
  const match = dataUrl.match(/data:image\/(\w+);base64/);
  return match ? match[1] : "jpg";
};

// Helper function to save base64 image to disk
export const saveToDisk = async (imageData: string): Promise<string | null> => {
  try {
    // Handle base64 image
    if (isBase64Image(imageData)) {
      const base64Data = imageData.split(";base64,").pop();
      if (!base64Data) return null;

      const buffer = Buffer.from(base64Data, "base64");
      const extension = getExtensionFromMimeType(imageData);

      // Create a unique filename
      const fileName = `${Date.now()}-${Math.random()
        .toString(36)
        .substring(7)}.${extension}`;

      // Determine the appropriate directory based on environment
      const isProduction = process.env.NODE_ENV === "production";
      const uploadDir = isProduction
        ? path.join("/tmp", "uploads") // Use /tmp in production (Vercel)
        : path.join(process.cwd(), "public", "uploads"); // Use public/uploads in development

      // Ensure the uploads directory exists
      await fs.mkdir(uploadDir, { recursive: true });

      // Create the full file path
      const filePath = path.join(uploadDir, fileName);

      // Write the file
      await fs.writeFile(filePath, buffer);

      // If in production, we need to copy the file to public directory
      if (isProduction) {
        // Copy file from /tmp to the public directory if needed
        // Note: This won't persist on Vercel between requests
        const publicDir = path.join(process.cwd(), "public", "uploads");
        await fs.mkdir(publicDir, { recursive: true }).catch(() => {});
        await fs
          .copyFile(filePath, path.join(publicDir, fileName))
          .catch(() => {});
      }

      // Return the public URL path
      return `/uploads/${fileName}`;
    }
    return null;
  } catch (error) {
    console.error("Failed to save image:", error);
    return null;
  }
};
