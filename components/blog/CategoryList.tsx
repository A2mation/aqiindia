"use client"


import Link from "next/link"
import Image from 'next/image'
import { FunnelX } from "lucide-react"

import { Button, buttonVariants } from "@/components/ui/button"
import { Skeleton } from "@/components/ui/skeleton"
import { useCategoryStore } from "@/store/category.store"
import { cn } from "@/lib/utils"

const colorCodes = [
    "#57c4ff31",
    "#da85c731",
    "#7fb88133",
    "#ff795736",
    "#ffb04f45",
    "#5e4fff31",
]

export const CategoryList = () => {
    const {
        categories: category,
        loading
    } = useCategoryStore();

    if (loading) {
        return (
            <section className="flex flex-col mx-auto gap-4 my-5">
                <div className="flex flex-col space-y-3">
                    {[...Array(6)].map((_, index) => (
                        <Skeleton key={index} className="h-12 w-[90%]" />
                    ))}
                </div>
            </section>
        )
    }

    return (
        <div>
            <h1 className="my-8 text-3xl flex items-center gap-x-4 font-semibold">
                Popular Categories
                <Image src={'/assets/cheer.webp'} width={45} height={45} alt="cheer" />
            </h1>

            <div className="flex flex-wrap gap-4">

                {category.toSpliced(4).map((item, index) => (
                    <Link
                        key={item.id}
                        href={`/blogs?cat=${item.slug}`}
                        className="flex items-center gap-2 p-2 rounded-lg"
                    >
                        <Button
                            size="default"
                            style={{
                                backgroundColor:
                                    colorCodes[index % colorCodes.length],
                            }}
                            className="text-black font-light hover:opacity-80 hover:cursor-pointer"
                        >
                            {item.title}
                        </Button>
                    </Link>
                ))}
                <div className="flex justify-center items-center">

                    <Link
                        href={`/blogs`}
                        className={cn(
                            "flex items-center gap-2 p-2 rounded-lg",
                            buttonVariants({
                                variant: "destructive"
                            })
                        )}

                    >
                        <span
                            className="font-light flex items-center gap-2 hover:opacity-80 hover:cursor-pointer"

                        >
                            <FunnelX /> Clear Filter
                        </span>
                    </Link>
                </div>
            </div>

        </div>
    )
}
