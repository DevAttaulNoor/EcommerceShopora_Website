import connectDB from "@/libs/database.js";
import { cookies } from "next/headers";
import { NextResponse } from "next/server";
import { loginUser } from "@/controllers/auth.controller.js";

export async function POST(req) {
    try {
        await connectDB();

        const body = await req.json();
        const { token, user } = await loginUser(body);

        cookies().set("token", token, {
            httpOnly: true,
            secure: process.env.NODE_ENV === "production",
            sameSite: "strict",
            maxAge: 7 * 24 * 60 * 60,
            path: "/",
        });

        return NextResponse.json(
            { message: "Login successful", user },
            { status: 200 }
        );
    } catch (error) {
        return NextResponse.json(
            { message: error.message },
            { status: 400 }
        );
    }
}