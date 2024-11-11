// src/app/api/auth/route.ts
import { NextResponse } from "next/server";

export async function POST(request: Request) {
    const body = await request.json();
    const { username, password } = body;

    if (username === "admin" && password === "password") {
        return NextResponse.json({ message: "Authenticated!" });
    } else {
        return NextResponse.json(
            { error: "Invalid credentials" },
            { status: 401 }
        );
    }
}
