import { type NextRequest, NextResponse } from "next/server"
import { loginUser, setAuthCookie } from "@/lib/auth"

export async function POST(request: NextRequest) {
  try {
    const { email, password } = await request.json()

    if (!email || !password) {
      return NextResponse.json({ error: "ईमेल और पासवर्ड आवश्यक हैं" }, { status: 400 })
    }

    const result = await loginUser(email, password)

    if ("error" in result) {
      return NextResponse.json({ error: result.error }, { status: 401 })
    }

    await setAuthCookie(result.user)

    return NextResponse.json({
      success: true,
      user: {
        userId: result.user.userId,
        email: result.user.email,
        role: result.user.role,
        choklaId: result.user.choklaId,
        villageId: result.user.villageId,
      },
    })
  } catch (error) {
    console.error("[v0] Login API error:", error)
    return NextResponse.json({ error: "सर्वर त्रुटि" }, { status: 500 })
  }
}
