/**
 * An array of routes that are accessible to the public. These routes doesn't require authentication.
 * @type {string[]}
 */
export const publicRoutes = [
  "/",
  "/about",
  "/booking",
  "/policy",
  "/services",
  "/contact",
  "/terms",
  "/test",
  "/blogs",
];

export const protectedRoutes = [
  "/settings",
  "/dashboard",
  "/dashboard/user-bookings",
  "/dashboard/leads",
  "/dashboard/ip-trackings",
  // ... other protected routes
];
/**
 * An array of routes that are accessible to the public. These routes  require authentication.
 * These routes will redirect logged in users  to /settings
 * @type {string[]}
 */
export const authRoutes = [
  "/auth/login",
  "/register",
  "/auth/error",
  "/auth/reset",
  "/auth/new-password",
];

/**
 *
 * The prefix for api authentication routes
 * It is a special case so that both loggedIn or loggedOut users have access to that.
 * @type {string}
 */
export const apiAuthPrefix = "/api/auth";

/**
 * The default redirect path after logging in
 * @type {string}
 */
export const DEFAULT_LOGIN_REDIRECT = "/";
