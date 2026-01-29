import bcrypt from "bcryptjs";
import { NextResponse } from "next/server";

import { prisma } from "@/lib/prisma";
import { signToken } from "@/lib/jwt";

export async function POST(req: Request) {
    try {
        const { email, password } = await req.json();
        console.log(email, password)

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

        
        const token = signToken(writer.id, writer.email, writer.status);

        return NextResponse.json({
            id: writer.id,
            name: writer.name,
            email: writer.email,
            role: "WRITER",
            accessToken: token,
        });

    } catch (error) {
        return NextResponse.json(
            { message: "Internal server error" },
            { status: 500 }
        );
    }
}
