'use client';

import { useSession } from "next-auth/react";
import { useCallback, useEffect, useState } from "react";
import { http } from "@/lib/http";

interface UseLikeProps {
    postId: string;
    likedIds: string[];
}

const useLike = ({ postId, likedIds }: UseLikeProps) => {
    const { data: session, status } = useSession();

    const userId = session?.user.id;

    const [hasLiked, setHasLiked] = useState(false);
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState<string | null>(null);
    const [success, setSuccess] = useState(false);

    useEffect(() => {
        if (!userId) return;
        setHasLiked(likedIds.includes(userId));
    }, [likedIds, userId]);

    const toggleLike = useCallback(async () => {
        if (!userId) {
            setError("You must be logged in to like a post");
            return;
        }

        setIsLoading(true);
        setError(null);
        setSuccess(false);

        const nextLikedState = !hasLiked;
        setHasLiked(nextLikedState);

        try {
            if (nextLikedState) {
                await http.post("/api/blog/like", { blogId: postId });
            } else {
                await http.delete("/api/blog/like", {
                    data: { blogId: postId },
                });
            }

            setSuccess(true);
        } catch (err: any) {

            setHasLiked(!nextLikedState);

            setError(err?.response?.data?.message || "Something went wrong");
        } finally {
            setIsLoading(false);
        }
    }, [hasLiked, postId, userId]);

    return {
        hasLiked,
        toggleLike,
        isLoading,
        success,
        error,
        isAuthenticated: status === "authenticated",
    };
};

export default useLike;
