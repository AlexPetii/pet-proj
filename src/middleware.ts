import { authMiddleware } from "@clerk/nextjs";

export default authMiddleware({
  // allow access to the page /
  publicRoutes: ["/",],
});

export const config = {
  matcher: ["/((?!.+\\.[\\w]+$|_next).*)","/","/(api|trpc)(.*)"],
};