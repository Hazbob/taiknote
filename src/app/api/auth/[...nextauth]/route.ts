import NextAuth from "next-auth";
import { db } from "@/server";
import { DrizzleAdapter } from "@auth/drizzle-adapter";
import { accounts, verificationTokens, users } from "@/server/schema";
import GithubProvider from "next-auth/providers/github";
import Resend from "@auth/core/providers/resend";

export const nextConfig = {
  adapter: DrizzleAdapter(db, {
    verificationTokensTable: verificationTokens,
    accountsTable: accounts,
    usersTable: users,
  }),
  secret: process.env.AUTHSECRET,
  providers: [
    GithubProvider({
      clientId: process.env.GITHUB_ID,
      clientSecret: process.env.GITHUB_SECRET,
    }),
    Resend({
      apiKey: process.env.AUTH_RESEND_KEY,
      from: "onboarding@resend.dev",
    }),
  ],
  callbacks: {
    session: async (session) => {
      session.userId = session.user.id;
      return session;
    },
  },
};
const handler = NextAuth(nextConfig);

export default handler;

export { handler as GET, handler as POST, handler };
