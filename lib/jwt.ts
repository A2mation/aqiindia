import jwt from "jsonwebtoken";
import { ContentWriterStatus } from "@prisma/client";

const WRITTER_JWT_SECRET = process.env.WRITTER_JWT_SECRET!;

export function signWriterToken(
    writerId: string,
    email: string,
    status: ContentWriterStatus
) {
    return jwt.sign(
        { id: writerId, email, status },
        WRITTER_JWT_SECRET,
        { expiresIn: "7d" }
    );
}