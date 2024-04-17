import { authMiddleware } from "@clerk/nextjs";

export default authMiddleware({
  // allow access to the page / and /test /signin
  publicRoutes: ["/",],
});

export const config = {
  matcher: ["/((?!.+\\.[\\w]+$|_next).*)","/","/(api|trpc)(.*)"],
};