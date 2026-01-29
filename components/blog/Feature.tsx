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
                <b>Hey, Buddy!</b> Hold a minute and take a deep breath.
            </h1>
            <div className="flex flex-col lg:flex-row items-center lg:gap-16">
                <div className="lg:flex-1 lg:h-96 relative">
                    <img
                        src="https://www.shutterstock.com/image-photo/good-air-quality-clean-outdoor-600nw-2421635111.jpg"
                        alt=""
                        // fill
                        sizes="100vw"
                        style={{
                            objectFit: "cover"
                        }} />
                </div>
                <div className="lg:flex-1 mt-8 lg:mt-0">
                    <h1 className="text-3xl font-semibold mb-4">
                        Breathe Better: Understand Air Quality and Its Impact on Your Life.
                    </h1>
                    <p className="text-lg font-light mb-4">
                        Air quality plays a crucial role in our health, well-being, and daily
                        comfort. From the air we breathe indoors to pollution levels outdoors,
                        understanding air quality helps us make smarter choices for a healthier life.
                    </p>

                    <p className="text-lg font-light mb-4">
                        Here, you’ll find insights into air pollution, AQI levels, seasonal changes,
                        and practical tips to protect yourself and your loved ones. Take a moment,
                        slow down, and learn how cleaner air can make a real difference.
                    </p>

                </div>
            </div>
        </div>)
    );
};

export default Featured;