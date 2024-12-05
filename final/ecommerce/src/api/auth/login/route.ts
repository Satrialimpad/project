import { NextResponse } from "next/server"

export async function POST(req: Request) {
  try {
    const body = await req.json()
    console.log("Login attempt:", body)

    return NextResponse.json({
      message: "Login berhasil",
      user: {
        id: "1",
        name: "Test User",
        email: body.email
      }
    })

  } catch (error) {
    return NextResponse.json(
      { error: "Login gagal" },
      { status: 401 }
    )
  }
}