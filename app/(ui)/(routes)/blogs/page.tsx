'use client'

import { useEffect } from "react";

import Menu from "@/components/blog/Menu";
import Featured from "@/components/blog/Feature";
import { getCategoryData } from "@/store/category.actions";
import { BlogCardList } from "@/components/blog/BlogCardList";
import { CategoryList } from "@/components/blog/CategoryList";

interface Props {
    page: number
    cat: string
}

export default function BlogPage() {
    const page = 1;
    const { cat } = {
        cat: 'ayan'
    };

    useEffect(() => {
        getCategoryData();
    }, [])

    return (
        <>
            {/* <PostForm/> */}
            <div className="bg-white text-black mt-30">
                <Featured />
                <CategoryList />
                <div className="flex flex-col md:flex-row gap-[50px]">
                    <BlogCardList page={page} cat={cat} />
                    <Menu />
                </div>

            </div>
        </>
    )
}
