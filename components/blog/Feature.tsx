"use client"
import React from "react";
import Image from "next/image";

const user = {
    id: "user_001",
    name: "John Doe",
    email: "john@example.com",
    avatar: "https://i.pravatar.cc/150?img=3",
}
const Featured = () => {
    //   TODO: Get the user session and vaidate


    return (
        (<div className="mt-10">
            <h1 className="text-6xl font-light mb-8">
                <b>Hey, {user?.name} !</b> Discover stories and creative ideas.
            </h1>
            <div className="flex flex-col lg:flex-row items-center lg:gap-16">
                <div className="lg:flex-1 lg:h-96 relative">
                    <img
                        src="https://images.unsplash.com/photo-1677442136019-21780ecad995"
                        alt=""
                        // fill
                        sizes="100vw"
                        style={{
                            objectFit: "cover"
                        }} />
                </div>
                <div className="lg:flex-1 mt-8 lg:mt-0">
                    <h1 className="text-3xl font-semibold mb-4">
                        Stay Ahead of the Curve: Delve into Our Tech Blogs for the Latest Trends.
                    </h1>
                    <p className="text-lg font-light mb-4">
                        Our Tech Blogs section is a treasure trove of insights, offering a
                        rich tapestry of articles that delve into the heart of technology.
                        Here, users can discover a wealth of knowledge, from the latest industry
                        trends to expert analyses and practical tips.

                    </p>

                </div>
            </div>
        </div>)
    );
};

export default Featured;