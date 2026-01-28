import { NextRequest, NextResponse } from "next/server";
import jwt from "jsonwebtoken";
import { prisma } from "@/lib/prisma";
import { ContentWriterStatus } from "@prisma/client";

const WRITTER_JWT_SECRET = process.env.WRITTER_JWT_SECRET!;
const TOKEN_NAME = process.env.WRITTER_TOKEN!;

export async function DELETE(
    req: NextRequest,
    { params }: { params: { blogId: string } }
) {
    try {

        const token = req.cookies.get(TOKEN_NAME)?.value;

        if (!token) {
            return NextResponse.json({ message: "Unauthorized" }, { status: 401 });
        }

        let decoded: {
            id: string;
            email: string;
            status: ContentWriterStatus;
        };

        try {
            decoded = jwt.verify(token, WRITTER_JWT_SECRET) as typeof decoded;
        } catch {
            return NextResponse.json({ message: "Invalid token" }, { status: 401 });
        }

        if (decoded.status !== ContentWriterStatus.ACTIVE) {
            return NextResponse.json(
                { message: "Account not active" },
                { status: 403 }
            );
        }


        const post = await prisma.blogPost.findUnique({
            where: { id: params.blogId },
            select: { id: true, authorId: true },
        });

        if (!post) {
            return NextResponse.json(
                { message: "Post not found" },
                { status: 404 }
            );
        }

        if (post.authorId !== decoded.id) {
            return NextResponse.json(
                { message: "Forbidden" },
                { status: 403 }
            );
        }

        await prisma.blogPost.delete({
            where: { id: post.id },
        });

        return NextResponse.json(
            { message: "Post deleted successfully" },
            { status: 200 }
        );
    } catch (error) {
        console.error("DELETE POST ERROR:", error);
        return NextResponse.json(
            { message: "Internal server error" },
            { status: 500 }
        );
    }
}
