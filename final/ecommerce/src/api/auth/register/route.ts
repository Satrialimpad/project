import { NextResponse } from "next/server"

export async function POST(req: Request) {
  try {
    const body = await req.json()
    console.log("Register attempt:", body)

    return NextResponse.json({
      message: "Register berhasil",
      user: {
        id: "1",
        name: body.name,
        email: body.email
      }
    })

  } catch (error) {
    return NextResponse.json(
      { error: "Register gagal" },
      { status: 400 }
    )
  }
}