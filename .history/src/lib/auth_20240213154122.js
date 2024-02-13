import NextAuth from "next-auth";
import GitHub from 'next-auth/providers/github';
import CredentialsProvider from "next-auth/providers/credentials";
import { connectToDb } from "./utils";
import { User } from "./models";

export const { 
  handlers: { GET, POST }, auth, signIn, signOut 
  } = NextAuth({ 
    providers: [
        GitHub({
          clientId: process.env.GITHUB_ID,
          clientSecret: process.env.GITHUB_SECRET,
        }),
        CredentialsProvider({
          async authorize(credentials) {
            try {
              const user = await login(credentials);
              return user;
            } catch (err) {
              return null;
            }
          },
        }),
    ],
    callbacks: {
      async signIn({ user, account, profile}) {
        console.log(user, account, profile);
        if(account.provider === "github"){
          connectToDb()

          try {
            const user = await User.findOne({ email: profile.email })

            if(!user){
              const newUser = new User({
                username: profile.login,
                email: profile.email,
                image: <profile className="avatar_url"></profile>
              })

              await newUser.save()
            }
          } catch (error) {
            console.log(error);
            return false
          }
        }

        return true
      }
    }
 })