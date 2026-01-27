"use client"

import Link from "next/link";


import { Button } from "@/components/ui/button";
import { Skeleton } from "@/components/ui/skeleton"
import { dummyBlogContents } from "./BlogCardList";
import { truncateText } from "@/helpers/truncateText";

interface MenuPostProps {
    withImage: boolean;
}



const MenuPosts = ({ withImage }: MenuPostProps) => {
    const isLoading = false


    // TODO:: LOAD MOST POPULAR POST

    if (isLoading) {
        return (
            <div className="flex items-center space-x-4">
                <Skeleton className="h-12 w-12 rounded-full" />
                <div className="space-y-2">
                    <Skeleton className="h-4 w-[250px]" />
                    <Skeleton className="h-4 w-[200px]" />
                </div>
            </div>
        )
    }

    return (
        <div className="mt-9 mb-16 flex flex-col gap-9">
            <Link href="/" className="flex items-stretch gap-4">
                {dummyBlogContents.map((items: any, index: number) => (
                    <div
                        key={index}
                        className="flex-1 flex flex-col justify-between min-h-[160px]"
                    >
                        <Button
                            size="icon"
                            className="px-8 rounded-lg bg-red-500 hover:bg-red-600 text-white text-xs w-fit"
                        >
                            {items.catSlug}
                        </Button>

                        <h3
                            className="text-sm pt-2 font-semibold text-gray-800 line-clamp-3"
                            dangerouslySetInnerHTML={{
                                __html: truncateText(items.title, 5),
                            }}
                        />

                        <div className="flex flex-col md:items-center text-sm text-gray-600 mt-auto">
                            <span className="pt-2 md:pt-0">{items.user.name}</span>
                            <br />
                            <span className="text-xs">10.02.2025</span>
                        </div>
                    </div>
                ))}
            </Link>
        </div>

    );
};

export default MenuPosts;