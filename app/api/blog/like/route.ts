import { NextResponse } from "next/server";

import { prisma } from "@/lib/prisma"
import { getAuthSession } from "@/auth";

export async function POST(
    req: Request
) {
    try {

        const session = await getAuthSession();

        if (!session) {
            return new NextResponse("Unauthorized", {
                status: 401
            })
        }

        const verifyUser = await prisma.contentWriter.findUnique({
            where: {
                email: session.user.email
            }
        })

        if (!verifyUser) {
            return new NextResponse("Unauthorized", {
                status: 401
            })
        }

        const { blogId } = await req.json();

        if (!blogId) {
            return new NextResponse("Invalid Blog Id", { status: 400 });
        }

        const blog = await prisma.blogPost.findUnique({
            where: {
                id: blogId
            }
        });


        if (!blog) {
            return new NextResponse("Post Not found", { status: 400 });
        }

        let updatetedLikeIDs = [...(blog.likedIds || [])];

        updatetedLikeIDs.push(verifyUser.id)

        const len = updatetedLikeIDs.length;

        const updatedBlog = await prisma.blogPost.update({
            where: {
                id: blogId
            },
            data: {
                likedIds: updatetedLikeIDs,
                likesCount: len | 0
            }
        })

        return NextResponse.json(updatedBlog, {
            status: 200
        })


    } catch (error) {
        return new NextResponse("Internal Server Error", { status: 500 });
    }
}

export async function DELETE(
    req: Request
) {
    try {

        const session = await getAuthSession();

        if (!session) {
            return new NextResponse("Unauthorized", {
                status: 401
            })
        }

        const verifyUser = await prisma.contentWriter.findUnique({
            where: {
                email: session.user.email
            }
        })

        if (!verifyUser) {
            return new NextResponse("Unauthorized", {
                status: 401
            })
        }

        const { blogId } = await req.json();

        if (!blogId) {
            return new NextResponse("Invalid Blog Id", { status: 400 });
        }

        const blog = await prisma.blogPost.findFirst({
            where: {
                id: blogId
            }
        })

        if (!blog) {
            return new NextResponse("Blog not found", { status: 400 });
        }


        let updatetedLikeIDs = [...(blog.likedIds || [])];

        updatetedLikeIDs = updatetedLikeIDs.
            filter((likeId) => likeId !== verifyUser.id)

        const len = updatetedLikeIDs.length;

        const updatedBlog = await prisma.blogPost.update({
            where: {
                id: blogId
            },
            data: {
                likedIds: updatetedLikeIDs,
                likesCount: len | 0
            }
        })

        return NextResponse.json(updatedBlog, {
            status: 200
        })

    } catch (error) {
        return new NextResponse("Internal Server Error", { status: 500 });
    }
}