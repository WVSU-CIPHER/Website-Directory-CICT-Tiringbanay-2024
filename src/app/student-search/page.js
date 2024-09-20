
"use client";
import React from "react";
import Image from "next/image";
import bg from "/public/assets/images/background.png"

// fonts
import { chopsic } from "../layout";
import { SearchIcon } from "../components/icons/Search";

// Search icon component

export default function StudentSearchPage() {
    return (
        <div className="h-screen w-screen overflow-hidden">
            <Image
                src={bg}
                alt="Background"
                layout="fill"
                objectFit="cover"
                quality={100}
            />
            {/* pt-64px from the header's height */}
            <div className="relative flex flex-col w-full h-full pt-[128px]">
                <div className="w-full flex flex-col gap-4 text-center  max-w-[60%]  mx-auto">
                    <h1 className={`${chopsic.className} uppercase text-[24px]`}>student search</h1>
                    {/* Search input */}
                    <div className="w-full flex gap-2 items-center justify-between  max-w-[60%] mx-auto">
                        <input type="text" className="focus:ring-[#7AD7C9] focus:outline-none focus:border-2 duration-200 rounded-xl flex-grow border border-[#7AD7C9] bg-transparent p-1" />
                        <button className="rounded-md p-2 bg-[#5A8070] border border-[#7AD7C9]">
                            <SearchIcon />
                        </button>
                    </div>
                </div>

            </div>

        </div>
    )


}