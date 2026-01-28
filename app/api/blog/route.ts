import jwt from "jsonwebtoken";
import { prisma } from "@/lib/prisma";
import { NextRequest, NextResponse } from "next/server";
import { ContentWriterStatus } from "@prisma/client";

import { Category } from "@/store/category.store";

const WRITTER_JWT_SECRET = process.env.WRITTER_JWT_SECRET!;
const TOKEN_NAME = process.env.WRITTER_TOKEN!;

export async function POST(req: NextRequest) {
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

        const writer = await prisma.contentWriter.findUnique({
            where: { id: decoded.id },
        });

        if (!writer) {
            return NextResponse.json({ message: "Unauthorized" }, { status: 401 });
        }


        const { title, blog, img, tags }: {
            title: string;
            blog: string;
            img?: string;
            tags: Category[];
        } = await req.json();

        if (!title || !blog || !tags?.length) {
            return NextResponse.json(
                { message: "Title, blog and tags are required" },
                { status: 400 }
            );
        }

        const categoryId = tags.map((cat) => { return cat.id })


        const categories = await prisma.category.findMany({
            where: {
                id: { in: categoryId },
            },
            select: { id: true },
        });

        if (!categories.length) {
            return NextResponse.json(
                { message: "Invalid categories" },
                { status: 400 }
            );
        }

        const post = await prisma.$transaction(async (tx) => {
            const blogPost = await tx.blogPost.create({
                data: {
                    title,
                    desc: blog,
                    img,
                    authorId: writer.id,
                },
            });

            await tx.blogPostCategory.createMany({
                data: categories.map((cat) => ({
                    postId: blogPost.id,
                    categoryId: cat.id,
                })),
            });

            return blogPost;
        });

        return NextResponse.json(
            {
                message: "Blog post created successfully",
                post,
            },
            { status: 201 }
        );
    } catch (error) {
        console.error("CREATE POST ERROR:", error);
        return NextResponse.json(
            { message: "Internal server error" },
            { status: 500 }
        );
    }
}
