import NextAuth from "next-auth";
import { authConfig } from "./lib/auth.config";

export default NextAuth(authConfig).a

export const config = {
    matcher: ["/((?!api|static|.*\\..*|_next).*)"],
};