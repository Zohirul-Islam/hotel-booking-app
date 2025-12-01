import NextAuth from "next-auth";
import GoogleProvider from "next-auth/providers/google";
import CredentialsProvider from "next-auth/providers/credentials";
import { MongoDBAdapter } from "@auth/mongodb-adapter";
import mongoClientPromise from "./database/mongoclient";
import {userModel} from '@/models/user-model'
export const {
    handlers:{GET,POST},
    auth,
    signIn,
    signOut
} = NextAuth({
  adapter:MongoDBAdapter(mongoClientPromise,{databaseName:process.env.ENVIRONMENT}),
  providers: [
    CredentialsProvider({
      credentials: {
        email: {},
        password:{}
      },
      async authorize(credentials) {
        if (credentials === null) return null;
        try {
          const user = await userModel.findOne({ email: credentials.email });
          if (user) {
            const isMatch = user.email === credentials.email;
            if (isMatch) {
              return user
            } else {
              throw new Error("user or email is invalid");
            }
          } else {
            throw new Error("user not found");
          }
          
        } catch (error) {
          throw new Error(error);
        }
      }
    }),
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
    }),
  ],
});
