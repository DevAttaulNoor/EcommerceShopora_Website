import connectDB from "@/libs/database.js";
import { NextResponse } from "next/server";
import { loginUser } from "@/controllers/auth.controller";

export async function POST(req) {
    try {
        await connectDB();
        const body = await req.json();

        // Call your controller
        const { token, user } = await loginUser(body);

        // ✅ Create a response object
        const response = NextResponse.json(
            { message: "Login successfully", user },
            { status: 200 }
        );

        // ✅ Set cookie on the response
        response.cookies.set({
            name: "token",
            value: token,
            httpOnly: true,
            secure: process.env.NODE_ENV === "production",
            sameSite: "strict",
            maxAge: 7 * 24 * 60 * 60,
            path: "/",
        });

        return response;
    } catch (error) {
        return NextResponse.json(
            { message: error.message },
            { status: 400 }
        );
    }
}
