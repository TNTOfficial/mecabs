"use server";
import * as z from "zod";
import { loginSchema } from "@/schemas/schema";
import { getUserByEmail } from "@/utils/user";
import { db } from "@/lib/db";
import { saltAndHashPassword } from "@/utils/password";

export const registerUser = async (values: z.infer<typeof loginSchema>) => {
  const validatedFields = await loginSchema.safeParse(values);
  if (!validatedFields) {
    return { error: "Invalid fields!" };
  }

  const { email, password } = validatedFields.data!;

  const existingUser = await getUserByEmail(email);
  console.log(existingUser);

  if (existingUser) {
    return { error: "User already exists!" };
  }

  const hashedPassword = saltAndHashPassword(password);
  await db.user.create({
    data: {
      email,
      password: hashedPassword,
    },
  });

  return { success: "User created successfully!" };
};
