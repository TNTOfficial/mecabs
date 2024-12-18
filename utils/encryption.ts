import crypto from "crypto";

// 32-character encryption key

const NEXT_PUBLIC_PENCRYPTION_KEY =
  process.env.NEXT_PUBLIC_PENCRYPTION_KEY ||
  "your-32-character-secret-key-here";
const ALGORITHM = "aes-256-cbc";

// Custom error class for encryption-related errors
class EncryptionError extends Error {
  constructor(message: string) {
    super(message);
    this.name = "EncryptionError";
  }
}

// Function to decrypt text
export const decrypt = (encryptedText: string): string => {
  try {
    if (!encryptedText) {
      throw new EncryptionError("Input text is required for decryption");
    }

    const parts = encryptedText.split(":");
    if (parts.length !== 2) {
      throw new EncryptionError("Invalid encrypted text format");
    }

    const [ivHex, encryptedHex] = parts;
    const iv = Buffer.from(ivHex, "hex"); // Extract IV
    const decipher = crypto.createDecipheriv(
      ALGORITHM,
      Buffer.from(NEXT_PUBLIC_PENCRYPTION_KEY),
      iv
    );
    let decrypted = decipher.update(encryptedHex, "hex", "utf8");
    decrypted += decipher.final("utf8");

    return decrypted; // Return decrypted text
  } catch (error) {
    throw new EncryptionError(
      `Decryption failed: ${
        error instanceof Error ? error.message : "Unknown error"
      }`
    );
  }
};
