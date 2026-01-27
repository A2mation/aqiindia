"use client"
import {
  useEffect,
  useState
} from "react";
import axios from "axios";
import toast from "react-hot-toast";

import Pagination from "./Pagination";
import { BlogCard, BlogContentProps } from "./BlogCard";
import { Skeleton } from "@/components/ui/skeleton";



interface BlogCardListProps {
  page: number;
  cat: string;
}


const dummyUser = {
  id: "user_001",
  name: "John Doe",
  email: "john@example.com",
  avatar: "https://i.pravatar.cc/150?img=3",
}

export const dummyBlogContents: BlogContentProps[] = [
  {
    id: "blog_001",
    createdAt: new Date("2024-12-01T10:30:00Z"),
    updatedAt: new Date("2024-12-02T08:15:00Z"),
    slug: "getting-started-with-nextjs-14",
    title: "Getting Started with Next.js 14",
    desc: "A beginner-friendly guide to building modern web apps using Next.js 14 and the App Router.",
    img: "https://images.unsplash.com/photo-1516116216624-53e697fedbea",
    views: 1245,
    userId: "user_001",
    user: dummyUser,
  },
  {
    id: "blog_002",
    createdAt: new Date("2024-12-10T14:00:00Z"),
    updatedAt: new Date("2024-12-10T14:00:00Z"),
    slug: "why-zod-is-perfect-for-form-validation",
    title: "Why Zod Is Perfect for Form Validation",
    desc: "Learn how Zod simplifies schema validation and type safety in modern React and Next.js apps.",
    img: "https://images.unsplash.com/photo-1555066931-4365d14bab8c",
    views: 876,
    userId: "user_001",
    user: dummyUser,
  },
  {
    id: "blog_003",
    createdAt: new Date("2025-01-05T09:20:00Z"),
    updatedAt: new Date("2025-01-06T11:45:00Z"),
    slug: "building-scalable-auth-flows-in-nextjs",
    title: "Building Scalable Auth Flows in Next.js",
    desc: "A deep dive into authentication patterns, server actions, and best practices in Next.js.",
    img: "https://images.unsplash.com/photo-1498050108023-c5249f4df085",
    views: 2310,
    userId: "user_001",
    user: dummyUser,
  },
]



export const BlogCardList = ({ page, cat }: BlogCardListProps) => {
  const [post, setPost] = useState<BlogContentProps[]>([]);
  const [postCount, setPostCount] = useState<number>(0);
  const [loading, setLoading] = useState(false);


  const POST_PER_PAGE = 5;

  const hasPrev = POST_PER_PAGE * (page - 1) > 0;
  const hasNext = POST_PER_PAGE * (page - 1) + POST_PER_PAGE < postCount;

  useEffect(() => {
    let timeoutId: NodeJS.Timeout;

    const getData = async () => {
      try {
        setLoading(true);

        //TODO:  simulate API call
        timeoutId = setTimeout(() => {
          setPostCount(dummyBlogContents.length);
          setPost(dummyBlogContents);
          setLoading(false);
        }, 1000);

      } catch (err) {
        console.error(err);
        toast.error("Something went wrong");
        setLoading(false);
      }
    };

    getData();

    return () => {
      if (timeoutId) clearTimeout(timeoutId);
    };
  }, [page, cat]);


  if (loading) {
    return (
      <section className='flex flex-col mx-auto gap-4 my-5'>
        {[...Array(3)].map((_, index) => (
          <div key={index} className="flex flex-col space-y-3">
            <Skeleton className="h-[125px] w-[100%] rounded-xl" />
            <div className="space-y-2">
              <Skeleton className="h-4 w-[100%]" />
              <Skeleton className="h-4 w-[100%]" />
            </div>
          </div>
        ))}
      </section>
    )
  }


  return (
    <div className="flex-5">
      <h1 className="my-8 text-3xl font-semibold">Recent Posts</h1>
      <div>
        {post?.map((item: BlogContentProps, index) => (
          <div key={index}>
            <BlogCard item={item} />
          </div>
        ))}

      </div>
      <Pagination page={page} hasNext={hasNext} hasPrev={hasPrev} />
    </div>
  );
};
