import NextAuth from "next-auth";
import GoogleProvider from "next-auth/providers/google";
const handler = NextAuth({
  providers: [
    GoogleProvider({
      clientId:
        "85823771625-je3d2dfhou3d4brqj2q4g0q015s7mc8o.apps.googleusercontent.com",
      clientSecret: "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",
    }),
  ],
});
export { handler as GET, handler as POST };
