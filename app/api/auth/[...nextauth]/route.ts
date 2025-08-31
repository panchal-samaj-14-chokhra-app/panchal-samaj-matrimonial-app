import NextAuth from "next-auth"
import CredentialsProvider from "next-auth/providers/credentials"
import type { NextAuthOptions } from "next-auth"

const authOptions: NextAuthOptions = {
  providers: [
    CredentialsProvider({
      name: "credentials",
      credentials: {
        email: { label: "Email", type: "email" },
        password: { label: "Password", type: "password" },
      },
      async authorize(credentials) {
        if (!credentials?.email || !credentials?.password) {
          console.log("[v0] Missing credentials")
          return null
        }

        try {
          const apiUrl = `${process.env.NEXT_PUBLIC_API_URL}/api/auth/login`
          console.log("[v0] Attempting login to:", apiUrl)

          const response = await fetch(apiUrl, {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({
              email: credentials.email,
              password: credentials.password,
            }),
          })

          console.log("[v0] Response status:", response.status)
          console.log("[v0] Response headers:", Object.fromEntries(response.headers.entries()))

          const contentType = response.headers.get("content-type")

          if (!response.ok) {
            let errorMessage = `HTTP ${response.status}`

            if (contentType && contentType.includes("application/json")) {
              try {
                const errorData = await response.json()
                errorMessage = errorData.message || errorMessage
              } catch (e) {
                console.log("[v0] Failed to parse error JSON")
              }
            } else {
              const textResponse = await response.text()
              console.log("[v0] Non-JSON error response:", textResponse.substring(0, 200))
              errorMessage = `Server returned ${response.status} error`
            }

            console.log("[v0] Authentication failed:", errorMessage)
            return null
          }

          if (!contentType || !contentType.includes("application/json")) {
            console.log("[v0] Response is not JSON:", contentType)
            return null
          }

          const data = await response.json()
          console.log("[v0] Login response data:", { ...data, token: data.token ? "[REDACTED]" : undefined })

          if (data && data.userId && data.token) {
            return {
              id: data.userId,
              email: data.email,
              name: data.email, // Using email as name since name is not provided
              token: data.token,
              role: data.role,
              choklaId: data.choklaId,
              villageId: data.villageId,
            }
          }

          console.log("[v0] Invalid response data structure")
          return null
        } catch (error) {
          console.error("[v0] Authentication error:", error)
          if (error instanceof TypeError && error.message.includes("fetch")) {
            console.error("[v0] Network error - check if API server is running and accessible")
          }
          return null
        }
      },
    }),
  ],
  session: {
    strategy: "jwt",
  },
  callbacks: {
    async jwt({ token, user }) {
      if (user) {
        token.accessToken = user.token
        token.role = user.role
        token.choklaId = user.choklaId
        token.villageId = user.villageId
      }
      return token
    },
    async session({ session, token }) {
      if (token) {
        session.user.id = token.sub!
        session.accessToken = token.accessToken as string
        session.user.role = token.role as string
        session.user.choklaId = token.choklaId as string | null
        session.user.villageId = token.villageId as string | null
      }
      return session
    },
  },
  pages: {
    signIn: "/login",
  },
  debug: process.env.NODE_ENV === "development",
}

const handler = NextAuth(authOptions)

export { handler as GET, handler as POST }
