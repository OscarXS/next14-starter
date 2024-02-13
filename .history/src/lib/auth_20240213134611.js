import NextAuth from "next-auth";
import GitHub from 'next-auth/providers/github'
import { connectToDb } from "./utils";

export const { handlers: { GET, POST }, auth, signIn, signOut } = NextAuth({ 
    providers: [
        GitHub({
          clientId: process.env.GITHUB_ID,
          clientSecret: process.env.GITHUB_SECRET,
        }),
    ],
    callbacks: {
      async signIn(user, account, profile) {
        console.log(user, account, profile);
        if(account.provider === "github"){
          connectToDb()

          try {
            
          } catch (error) {
            console.log(error);
            return false
          }
        }
      }
    }
 })