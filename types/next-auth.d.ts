declare module "next-auth" {
  interface Session {
    user: {
      id: string
      email: string
      name: string
      profileId: string
      memberType: "14-chokhra" | "other"
    }
  }

  interface User {
    id: string
    email: string
    name: string
    profileId: string
    memberType: "14-chokhra" | "other"
  }
}

declare module "next-auth/jwt" {
  interface JWT {
    profileId: string
    memberType: "14-chokhra" | "other"
  }
}
