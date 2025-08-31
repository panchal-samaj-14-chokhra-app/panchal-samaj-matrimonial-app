import { NextResponse } from "next/server"
import { clearAuthCookies } from "@/lib/auth"

export async function POST() {
  try {
    await clearAuthCookies()
    return NextResponse.json({ success: true })
  } catch (error) {
    console.error("[v0] Logout error:", error)
    return NextResponse.json({ error: "लॉगआउट में त्रुटि" }, { status: 500 })
  }
}
