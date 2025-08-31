// Mock authentication system for demo purposes
export interface User {
  id: string
  email: string
  name: string
  profileId: string
  memberType: "14-chokhra" | "other"
}

// Demo credentials
const DEMO_USERS: User[] = [
  {
    id: "1",
    email: "demo@panchalsamaj.com",
    name: "राहुल पंचाल",
    profileId: "PS25101",
    memberType: "14-chokhra",
  },
  {
    id: "2",
    email: "test@example.com",
    name: "प्रिया शर्मा",
    profileId: "PS25102",
    memberType: "other",
  },
  {
    id: "3",
    email: "admin@panchalsamaj.com",
    name: "अमित पंचाल",
    profileId: "PS25103",
    memberType: "14-chokhra",
  },
]

// Demo passwords (in real app, these would be hashed)
const DEMO_PASSWORDS: Record<string, string> = {
  "demo@panchalsamaj.com": "demo123",
  "test@example.com": "test123",
  "admin@panchalsamaj.com": "admin123",
}

export function authenticateUser(email: string, password: string): User | null {
  const user = DEMO_USERS.find((u) => u.email === email)
  if (user && DEMO_PASSWORDS[email] === password) {
    return user
  }
  return null
}

export function getCurrentUser(): User | null {
  if (typeof window === "undefined") return null
  const userStr = localStorage.getItem("currentUser")
  return userStr ? JSON.parse(userStr) : null
}

export function setCurrentUser(user: User | null): void {
  if (typeof window === "undefined") return
  if (user) {
    localStorage.setItem("currentUser", JSON.stringify(user))
  } else {
    localStorage.removeItem("currentUser")
  }
}

export function logout(): void {
  setCurrentUser(null)
}
