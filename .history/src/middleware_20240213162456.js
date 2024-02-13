import NextAuth from "next-auth";
import { authConfig } from "./lib/auth.config";

export default NextAuth()

export const config = {
    matcher: ["/((?!api|static|.*\\..*|_next).*)"],
};