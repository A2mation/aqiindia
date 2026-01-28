import bcrypt from "bcryptjs";
import { NextResponse } from "next/server";

import { prisma } from "@/lib/prisma";
import { signWriterToken } from "@/lib/jwt";


export async function POST(req: Request) {
    try {
        const { email, password } = await req.json();

        const writer = await prisma.contentWriter.findUnique({
            where: { email },
        });

        if (!writer) {
            return NextResponse.json(
                { message: "Invalid credentials" },
                { status: 401 }
            );
        }

        const isValid = await bcrypt.compare(password, writer.password);

        if (!isValid) {
            return NextResponse.json(
                { message: "Invalid credentials" },
                { status: 401 }
            );
        }

        const token = signWriterToken(writer.id, writer.email, writer.status);

        const response = NextResponse.json({
            message: "Login successful",
            writer: {
                id: writer.id,
                name: writer.name,
                email: writer.email,
                status: writer.status
            },
        });

        response.cookies.set(process.env.WRITTER_TOKEN!, token, {
            httpOnly: true,
            secure: process.env.NODE_ENV === "production",
            sameSite: "strict",
            path: "/",
            maxAge: 60 * 60 * 24 * 7, // 7 Days
        });

        return response;

    } catch (error) {
        return new NextResponse("INTERNAL SERVER ERROR", {
            status: 500
        })
    }
}
