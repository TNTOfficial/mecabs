import crypto from "crypto";
import { NextResponse } from "next/server";

console.log("dfs");

const ENCRYPTION_KEY =
  process.env.ENCRYPTION_KEY || "your-32-character-secret-key-here";

  console.log("fdsfads",ENCRYPTION_KEY.length);
  
const ALGORITHM = "aes-256-cbc";

// Custom error class for encryption-related errors
class EncryptionError extends Error {
  constructor(message: string) {
    super(message);
    this.name = "EncryptionError";
  }
}

const encrypt = (text: string): string => {
  try {
    if (!text) {
      throw new EncryptionError("Input text is required for encryption");
    }

    const iv = crypto.randomBytes(16); // Generate a random initialization vector
    const cipher = crypto.createCipheriv(
      ALGORITHM,
      Buffer.from(ENCRYPTION_KEY),
      iv
    );
    let encrypted = cipher.update(text, "utf8", "hex");
    encrypted += cipher.final("hex");

    return `${iv.toString("hex")}:${encrypted}`; // Combine IV and encrypted text
  } catch (error) {
    throw new EncryptionError(
      `Encryption failed: ${
        error instanceof Error ? error.message : "Unknown error"
      }`
    );
  }
};
export async function GET() {
  if (!process.env.GOOGLE_MAPS_API_KEY) {
    return NextResponse.json(
      { error: "Maps configuration missing" },
      { status: 500 }
    );
  }

  const encryptedAPIKEY = encrypt(process.env.GOOGLE_MAPS_API_KEY);
  return NextResponse.json({
    mapId: process.env.NEXT_PUBLIC_GOOGLE_MAPS_ID,
    gk: encryptedAPIKEY,
  });
}
