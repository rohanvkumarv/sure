import { authMiddleware } from "@clerk/nextjs";

export default authMiddleware({
    publicRoutes: ["/", '/dashboard/preview(.)', '/dashboard/download(.)', '/policy', '/terms'],
    ignoredRoutes: ["/api/uploadthing", "/api/saveproject", "/api/getpreview", "/api/payment", "/api/updatepayment"]
});

export const config = {
    matcher: ["/((?!.+.[w]+$|_next).*)", "/", "/(api|trpc)(.*)"],
};