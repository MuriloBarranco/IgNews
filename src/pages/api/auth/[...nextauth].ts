import { query as q } from "faunadb"

import NextAuth from "next-auth"
import GitHubProvider from "next-auth/providers/github"

import { fauna } from "../../../services/fauna"

export default NextAuth({
  providers: [
    GitHubProvider({
      clientId: process.env.GITHUB_CLIENT_ID,
      clientSecret: process.env.GITHUB_CLIENT_SECRET,
      authorization: {
        params: {
          scope: "read:user",
        },
      },
    }),
  ],

  // jwt: {
  //   signingKey: process.env.SIGNING_KEY,
  // },

  callbacks: {
    async signIn({ user, account, profile }) {
      const { email } = user

      // Funcao para setar o usuario logado no faubadb
      try {
        await fauna.query(
          // Se nao existe usuarios na user_by_email...
          q.If(
            q.Not(
              q.Exists(
                q.Match(q.Index("user_by_email"), q.Casefold(user.email))
              )
            ),
            // Criar um usuario
            q.Create(q.Collection("users"), { data: { email } }),

            // Se existir, buscar as informacoes dele
            q.Get(q.Match(q.Index("user_by_email"), q.Casefold(user.email)))
          )
        )
        return true
      } catch {
        return false
      }
    },
  },
})
