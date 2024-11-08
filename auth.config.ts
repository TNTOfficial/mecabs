import type { NextAuthConfig } from "next-auth";
import bcrypt from "bcryptjs";
import Google from "next-auth/providers/google";
import Facebook from "next-auth/providers/facebook";
import Credentials from "next-auth/providers/credentials";
import { getUserByEmail, getUserByPhone } from "./utils/user";
import { LoginSchema } from "./schemas/schema";

export default {
  providers: [
    Google({
      clientId: process.env.AUTH_GOOGLE_ID,
      clientSecret: process.env.AUTH_GOOGLE_SECRET,
    }),
    Facebook,
    Credentials({
      credentials: {
        email: { type: "text", optional: true },
        password: { type: "password", optional: true },
        phoneNumber: { type: "text", optional: true },
      },
      async authorize(credentials) {
        if (!credentials) return null;

        // For phone number login
        if (credentials.phoneNumber) {
          const user = await getUserByPhone(credentials.phoneNumber as string);
          if (!user) return null;
          return user;
        }

        // For email/password login
        if (credentials.email && credentials.password) {
          const validatedFields = LoginSchema.safeParse(credentials);
          if (!validatedFields.success) return null;

          const { email, password } = validatedFields.data;
          const user = await getUserByEmail(email);

          if (!user || !user.password) return null;

          const passwordMatch = await bcrypt.compare(password, user.password);
          if (!passwordMatch) return null;

          return user;
        }

        return null;
      },
    }),
  ],
} satisfies NextAuthConfig;
