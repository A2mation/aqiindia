import Image from "next/image";

import MenuPosts from "./MenuPost";
import MenuCategories from "./MenuCategories";

const Menu = () => {
    return (
        <div className="flex-1 mt-16">
            <h2 className="text-gray-500 text-lg font-normal mb-4 flex flex-row items-center gap-x-2">
                What{`'`}s hot
                <Image src={'/assets/fire.webp'} width={30} height={30} alt="fire" />
            </h2>
            <h1 className="text-2xl font-bold mb-6">
                Most Popular
            </h1>
            <MenuPosts withImage={false} />
            <h2 className="text-gray-500 text-base font-normal mb-4">Discover by topic</h2>
            <h1 className="text-2xl font-bold mb-6">Categories</h1>
            <MenuCategories />
            <h2 className="text-gray-500 text-base font-normal mb-4">Chosen by the editor</h2>
            <h1 className="text-2xl font-bold mb-6">Editors Pick</h1>
            <MenuPosts withImage={false} />
        </div>
    );
};

export default Menu;