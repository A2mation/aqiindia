"use client"

import React, { useEffect, useState } from "react"
import Link from "next/link"
import Image from "next/image"

import { Button } from "@/components/ui/button"
import { Skeleton } from "@/components/ui/skeleton"


export const dummyCategories = [
    {
        id: "1",
        title: "Technology",
        slug: "technology",
        img: "https://images.unsplash.com/photo-1518770660439-4636190af475",
    },
    {
        id: "2",
        title: "Design",
        slug: "design",
        img: "https://images.unsplash.com/photo-1492724441997-5dc865305da7",
    },
    {
        id: "3",
        title: "Programming",
        slug: "programming",
        img: "https://images.unsplash.com/photo-1515879218367-8466d910aaa4",
    },
    {
        id: "4",
        title: "AI",
        slug: "ai",
        img: "https://images.unsplash.com/photo-1677442136019-21780ecad995",
    },
]

const colorCodes = [
    "#57c4ff31",
    "#da85c731",
    "#7fb88133",
    "#ff795736",
    "#ffb04f45",
    "#5e4fff31",
]

export const CategoryList = () => {
    const [categories, setCategories] = useState<any[]>([])
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        setLoading(true)

        const timeoutId = setTimeout(() => {
            setCategories(dummyCategories)
            setLoading(false)
        }, 1000)

        return () => clearTimeout(timeoutId)
    }, [])

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
            <h1 className="my-8 text-3xl font-semibold">Popular Categories</h1>

            <div className="flex flex-wrap gap-4">
                {categories.map((item, index) => (
                    <Link
                        key={item.id}
                        href={`/blogs?cat=${item.slug}`}
                        className="flex items-center gap-2 p-2 rounded-lg"
                    >
                        {item.img && (
                            <div className="w-12 h-12 flex items-center">
                                <img
                                    src={item.img}
                                    alt={item.title}
                                    // fill
                                    className="rounded-full object-cover"
                                />
                            </div>
                        )}

                        <Button
                            size="default"
                            style={{
                                backgroundColor:
                                    colorCodes[index % colorCodes.length],
                            }}
                            className="text-black font-light hover:opacity-80"
                        >
                            {item.title}
                        </Button>
                    </Link>
                ))}
            </div>
        </div>
    )
}
