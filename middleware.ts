import authConfig from "./auth.config";
import NextAuth from "next-auth";
import {
  DEFAULT_LOGIN_REDIRECT,
  apiAuthPrefix,
  authRoutes,
  publicRoutes,
} from "@/routes";
import { NextResponse } from "next/server";

// Helper function to check if a path matches a dynamic route pattern
const matchDynamicRoute = (path: string, pattern: string) => {
  // Convert the pattern into a regex
  // Replace [param] with a regex group that matches any characters except '/'
  const regexPattern = pattern.replace(/\[.*?\]/g, "([^/]+)");
  const regex = new RegExp(`^${regexPattern}$`);
  return regex.test(path);
};

const { auth } = NextAuth(authConfig);
export default auth((req) => {
  const { nextUrl } = req;
  const isLoggedIn = !!req.auth;

  const isApiAuthRoute = nextUrl.pathname.startsWith(apiAuthPrefix);
  const isPublicRoute =
    publicRoutes.includes(nextUrl.pathname) ||
    matchDynamicRoute(nextUrl.pathname, "/blogs/[blogId]");
  const isAuthRoute = authRoutes.includes(nextUrl.pathname);

  //Handling api auth routes
  if (isApiAuthRoute) {
    return NextResponse.next();
  }

  // Handling auth routes
  if (isAuthRoute) {
    if (isLoggedIn) {
      return NextResponse.redirect(new URL(DEFAULT_LOGIN_REDIRECT));
    }
    return NextResponse.next();
  }

  // Handling protected routes
  if (!isLoggedIn && !isPublicRoute) {
    let callbackUrl = nextUrl.pathname;
    if (nextUrl.search) {
      callbackUrl += nextUrl.search;
    }
    const encodedCallbackUrl = encodeURIComponent(callbackUrl);
    return NextResponse.redirect(
      new URL(`/auth/login?callbackUrl=${encodedCallbackUrl}`, nextUrl)
    );
  }

  return NextResponse.next(); // Passing the control to the next fn by calling next method
});

// Optionally, don't invoke Middleware on some paths
export const config = {
  matcher: [
    "/((?!_next|[^?]*\\.(?:html?|css|js(?!on)|jpe?g|webp|png|gif|svg|ttf|woff2?|ico|csv|docx?|xlsx?|zip|webmanifest)).*)",
    "/(api|trpc)(.*)",
  ],
};
