"use server";
import * as z from "zod";
import { RegisterSchema } from "@/schemas/schema";
import { getUserByEmail } from "@/utils/user";
import { db } from "@/lib/db";
import { saltAndHashPassword } from "@/utils/password";
import { generateVerificationToken } from "@/lib/tokens";
import { sendVerificationEmail } from "@/lib/mail";

export const register = async (values: z.infer<typeof RegisterSchema>) => {
  const validatedFields = RegisterSchema.safeParse(values);
  if (!validatedFields) {
    return { error: "Invalid fields!" };
  }

  const { name, email, password } = validatedFields.data!;

  const hashedPassword = saltAndHashPassword(password);
  const existingUser = await getUserByEmail(email);

  if (existingUser) {
    return { error: "User already exists!" };
  }

  await db.user.create({
    data: {
      name,
      email,
      password: hashedPassword,
    },
  });
  const verificationToken = await generateVerificationToken(email);
  await sendVerificationEmail(verificationToken.email, verificationToken.token);
  return { success: "Confirmation email sent!", verification: true };
};
