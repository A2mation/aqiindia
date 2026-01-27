"use client";

import { useRouter } from "next/navigation";
import {
    Select,
    SelectContent,
    SelectGroup,
    SelectItem,
    SelectLabel,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select";
import { dummyCategories } from "./CategoryList";

const MenuCategories = () => {
    const router = useRouter();

    return (
        <div className="mt-8 mb-16 flex flex-wrap gap-4">
            <Select
                onValueChange={(value) => {
                    router.push(`/blogs?cat=${value}`);
                }}
            >
                <SelectTrigger className="w-full max-w-48">
                    <SelectValue placeholder="Choose category" />
                </SelectTrigger>

                <SelectContent>
                    <SelectGroup>
                        <SelectLabel>Choose categories</SelectLabel>

                        {dummyCategories.map((item) => (
                            <SelectItem
                                key={item.id}
                                value={item.slug} 
                            >
                                {item.title}
                            </SelectItem>
                        ))}
                    </SelectGroup>
                </SelectContent>
            </Select>
        </div>
    );
};

export default MenuCategories;
