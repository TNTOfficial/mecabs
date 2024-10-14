"use server";

import { sendPasswordResetEmail } from "@/lib/mail";
import { generatePasswordResetToken } from "@/lib/tokens";
import { ResetSchema } from "@/schemas/schema";
import { getUserByEmail } from "@/utils/user";
import * as z from "zod";

export const reset = async (values: z.infer<typeof ResetSchema>) => {
  const validatedFields = ResetSchema.safeParse(values);
  if (!validatedFields.success) {
    return { error: "Invalid email" };
  }

  const { email } = validatedFields.data;
  const exisingUser = await getUserByEmail(email);
  if (!exisingUser) {
    return { error: "User not found!" };
  }
  const passwordResetToken = await generatePasswordResetToken(
    exisingUser.email!
  );
  await sendPasswordResetEmail(
    passwordResetToken.email,
    passwordResetToken.token
  );
  return { success: "reset email sent" };
};
