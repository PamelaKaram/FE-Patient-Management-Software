import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import axios from "../../../../lib/axios.js";
export default NextAuth({
  secret: process.env.SECRET,
  providers: [
    CredentialsProvider({
      name: "Credentials",
      credentials: {
        email: { label: "Email", type: "text", placeholder: "Email" },
        password: { label: "Password", type: "password" },
      },
      async authorize(credentials, req) {
        try {
          console.log(credentials);
          const res = await axios.post("/auth/login", {
            email: credentials.email,
            password: credentials.password,
          });
          return {
            ...res.data.user,
            accessToken: res.data.accessToken,
            refreshToken: res.data.refreshToken,
          };
        } catch (err) {
          throw new Error(err.response.data.msg);
        }
      },
    }),
  ],
  pages: {
    signIn: "/login",
  },
  callbacks: {
    jwt({ token, user }) {
      return { ...token, ...user };
    },
    session({ session, token, user }) {
      session.user = token;
      return session;
    },
  },
});
