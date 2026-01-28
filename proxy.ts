import { NextRequest, NextResponse } from "next/server";
import jwt from "jsonwebtoken";
import { ContentWriter, ContentWriterStatus } from "@prisma/client";

const WRITTER_JWT_SECRET = process.env.WRITTER_JWT_SECRET!;
const TOKEN_NAME = process.env.WRITTER_TOKEN!;

export function proxy(req: NextRequest) {
    const path = req.nextUrl.pathname;
    const isPublic =
        path === "/blogs/sign-in" || path === "/blogs/sign-up";

    const token = req.cookies.get(TOKEN_NAME)?.value;

    // No token → redirect protected routes
    if (!token && !isPublic) {
        return NextResponse.redirect(new URL("/blogs/sign-in", req.url));
    }

    // Token exists → validate safely
    if (token) {
        try {
            // extra safety check
            if (!token.includes(".")) {
                throw new Error("Invalid JWT format");
            }

            const decoded = jwt.verify(token, WRITTER_JWT_SECRET) as {
                id: string;
                email: string;
                status: ContentWriterStatus;
            };

            // Invalid payload
            if (
                !decoded?.id ||
                !decoded?.email ||
                decoded.status !== ContentWriterStatus.ACTIVE
            ) {
                return NextResponse.redirect(
                    new URL("/blogs/sign-in", req.url)
                );
            }

            // Logged-in user hitting sign-in page
            if (isPublic) {
                return NextResponse.redirect(new URL("/blogs", req.url));
            }

            // return NextResponse.next();
        } catch (error) {
            // JWT malformed / expired / invalid
            const res = NextResponse.redirect(
                new URL("/blogs/sign-in", req.url)
            );
            res.cookies.delete(TOKEN_NAME);
            return res;
        }
    }

    return NextResponse.next();
}

export const config = {
    matcher: [
        "/blogs/write",
    ],
};