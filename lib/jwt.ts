import jwt from "jsonwebtoken";
import { ContentWriterStatus } from "@prisma/client";

const NEXTAUTH_SECRET = process.env.NEXTAUTH_SECRET!;

export function signToken(
    id: string,
    email: string,
    status: ContentWriterStatus
) {
    return jwt.sign(
        { id: id, email, status },
        NEXTAUTH_SECRET,
        { expiresIn: "7d" }
    );
}