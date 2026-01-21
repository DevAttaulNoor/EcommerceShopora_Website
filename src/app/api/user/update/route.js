import jwt from "jsonwebtoken";
import connectDB from "@/libs/database.js";
import { cookies } from "next/headers";
import { NextResponse } from "next/server";
import { updateMe } from "@/controllers/user.controller";

export async function PUT(req) {
    try {
        await connectDB();

        const cookieStore = await cookies();
        const token = cookieStore.get("token")?.value;

        if (!token) {
            return NextResponse.json(
                { message: "Not authenticated" },
                { status: 401 }
            );
        }

        const decoded = jwt.verify(token, process.env.JWT_SECRET);
        const body = await req.json();
        const user = await updateMe(decoded.id, body);

        return NextResponse.json(
            { message: "Profile updated successfully", user },
            { status: 200 }
        );
    } catch (error) {
        return NextResponse.json(
            { message: error.message },
            { status: 400 }
        );
    }
}