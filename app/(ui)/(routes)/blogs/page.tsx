import { BlogCardList } from "@/components/blog/BlogCardList";
import { CategoryList } from "@/components/blog/CategoryList";
import Featured from "@/components/blog/Feature";
import Menu from "@/components/blog/Menu";

interface Props {
    page: number
    cat: string
}

export default function BlogPage() {
    const page = 1;
    const { cat } = {
        cat: 'ayan'
    };

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
