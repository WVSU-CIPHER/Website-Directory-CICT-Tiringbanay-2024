"use client";

import React from 'react';
import bg from "/public/assets/images/background.png"
import Image from 'next/image';

// fonts
import { Poppins } from "next/font/google";
import { chopsic } from "../layout";
const poppins = Poppins({
    weight: ["400", "900"],
    variable: "--font-poppins",
    subsets: ["latin"],
});

// Footer component
import Footer from '../components/Footer';


// Data for contests page
import { objectiveList } from '@/data/contests';
import { ragList } from '@/data/contests';
import { contestList } from '@/data/contests';



// Warning component icon
import { WarningIcon } from '../components/icons/Warning';


export default function ContestsPage() {
    return (
        <div>

            {/* Content */}
            <div className="h-screen w-screen overflow-hidden">
                {/* Background */}
                <Image
                    src={bg}
                    alt="Background"
                    layout="fill"
                    objectFit="cover"
                    quality={100}
                />

                {/* overscroll-y-scroll to cater scrolling on y axis */}
                <div className=" w-full h-full flex flex-col overflow-y-scroll relative gap-4">
                    <div className="items-center justify-center flex flex-col w-[90%] mx-auto pt-[128px] gap-[32px]">
                        <div className=" flex flex-col max-w-full w-full gap-[32px] ">

                            <h1 className={`${chopsic.className} text-[40px] text-center`}>
                                contests
                            </h1>
                            <div className="mx-auto flex flex-col gap-4 max-w-full w-full">
                                {/* Banner for Rules and Guidelines PDF */}
                                <RulesAndGuidelinesPDF />
                                <ContestsOptionPicker />
                            </div>
                        </div>
                        {/* Cards for rag content */}
                        <div className="flex flex-col gap-0 md:gap-[64px] w-screen md:w-full z-[200]">
                            <div className="uppercase w-full flex flex-col gap-4 mb-4 md:mb-0 md:justify-between md:gap-0  text-center md:text-left">
                                <h1 className={`${chopsic.className} text-[24px] `}>sugilanon: professional development</h1>
                                <p className="uppercase">top prize: 0 points</p>
                            </div>

                            {/* Objective card */}
                            <div className="w-full  md:rounded-2xl px-[24px] py-[24px] sm:px-[32px] sm:py-[32px] md:px-[64px] h-fit md:py-[32px] gap-[32px] backdrop-blur-md flex flex-col bg-black/50 ">
                                {/* timeline */}
                                <h1 className={`${chopsic.className} text-[24px]`}>objectives</h1>
                                <div className="flex flex-col w-full gap-1">
                                    {objectiveList.map((objective, index) => (
                                        <div key={index} className="flex gap-1">
                                            <p className={`${poppins.className} text-[14px]`}>{index + 1}.</p>
                                            <p className={`${poppins.className} text-[14px]`}>{objective}</p>
                                        </div>

                                    ))}
                                </div>
                            </div>

                            {/* Objective card */}
                            <div className="w-full  md:rounded-2xl px-[24px] py-[24px] sm:px-[32px] sm:py-[32px] md:px-[64px] gap-[32px] backdrop-blur-md flex flex-col bg-black/50 ">
                                {/* timeline */}
                                <h1 className={`${chopsic.className} text-[24px]`}>Rules and Regulations</h1>
                                <div className="flex flex-col w-full gap-1">
                                    {ragList.map((rules, index) => (
                                        <div key={index} className="flex gap-1">
                                            <p className={`${poppins.className} text-[14px]`}>{index + 1}.</p>
                                            <p className={`${poppins.className} text-[14px]`}>{rules}</p>
                                        </div>

                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Added footer */}
                    <Footer />
                </div>
            </div>

        </div>
    );


}





function RulesAndGuidelinesPDF() {
    return (
        <div className="flex w-fit items-center gap-6 rounded-md p-4 bg-black/50 backdrop-blur-sm max-w-full mx-auto h-fit">

            <WarningIcon />
            <div className="flex flex-col gap-1">
                <h1 className={`font-semibold md:text-[14px] text-[12px] uppercase text-white`}>rules and guidelines</h1>

                <span>
                    Download the updated version:{" "}
                    <a
                        href="/TIRINGBANAY-2024-GUIDELINES.pdf"
                        className="ml-2 underline"
                    >
                        PROGRAM-FLOW-RULES-and-GUIDELINES.pdf
                    </a>
                </span>

            </div>
        </div>
    )
}


function ContestsOptionPicker() {
    return (
        <div className="relative w-fit mx-auto px-[8px] py-[8px] bg-[#5D6D5C] rounded-md max-w-full overflow-hidden">
            <div className="flex gap-[16px] py-[4px] w-full overflow-x-auto scrollbar scrollbar-thumb-white scrollbar-track-[#5D6D5C]">
                <ContestItem contest={contestList[0]} defaultChecked={true} id="a" name="contest" />
                <ContestItem contest={contestList[1]} id="b" name="contest" />
                <ContestItem contest={contestList[2]} id="c" name="contest" />
                <ContestItem contest={contestList[3]} id="d" name="contest" />
                <ContestItem contest={contestList[4]} id="e" name="contest" />
                <ContestItem contest={contestList[5]} id="f" name="contest" />
                <ContestItem contest={contestList[6]} id="g" name="contest" />
            </div>
        </div>
    )
}


function ContestItem({ contest, defaultChecked, id, name }) {
    return (
        <div className="">
            <input type="radio" defaultChecked={defaultChecked ?? false} id={id} name={name} value={contest} className="hidden peer" />
            <label for={id} className="uppercase font-semibold inline-flex items-center w-full p-2 h-full rounded-md border border-transparent peer-checked:bg-[#5A8070] duration-200 cursor-pointer peer-checked:border-[#7AD7C9] text-nowrap"><div className="block">{contest}</div></label>
        </div>
    )
}
