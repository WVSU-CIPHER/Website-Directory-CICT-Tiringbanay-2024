"use client";

import React from 'react';
import Image from 'next/image';
import bg from "/public/assets/images/background.webp"
import { Poppins } from "next/font/google";
import { chopsic } from "../layout";
import Footer from '../components/Footer';
import { objectiveList, ragList, contestList } from '@/data/contests';
import { WarningIcon } from '../components/icons/Warning';

const poppins = Poppins({
    weight: ["400", "900"],
    variable: "--font-poppins",
    subsets: ["latin"],
});

export default function ContestsPage() {
    return (
        <div className="relative min-h-screen overflow-hidden">
            <div className="fixed inset-0 z-0">
                <Image
                    src={bg}
                    alt="Background"
                    layout="fill"
                    objectFit="cover"
                    quality={100}
                />
            </div>

            <div className="relative z-10 min-h-screen flex flex-col">
                <main className="flex-grow pt-16 overflow-y-auto">
                    <div className="items-center justify-center flex flex-col w-[90%] mx-auto pt-[128px] gap-[32px]">
                        <div className="flex flex-col max-w-full w-full gap-[32px]">
                            <h1 className={`${chopsic.className} text-[40px] text-center text-white`}>
                                contests
                            </h1>
                            <div className="mx-auto flex flex-col gap-4 max-w-full w-full">
                                <RulesAndGuidelinesPDF />
                                <ContestsOptionPicker />
                            </div>
                        </div>
                        <div className="flex flex-col gap-0 md:gap-[64px] w-full">
                            <div className="uppercase w-full flex flex-col gap-4 mb-4 md:mb-0 md:justify-between md:gap-0 text-center md:text-left text-white">
                                <h1 className={`${chopsic.className} text-[24px]`}>sugilanon: professional development</h1>
                                <p className="uppercase">top prize: 0 points</p>
                            </div>

                            <div className="w-full md:rounded-2xl px-[24px] py-[24px] sm:px-[32px] sm:py-[32px] md:px-[64px] h-fit md:py-[32px] gap-[32px] backdrop-blur-md flex flex-col bg-black/50 text-white">
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

                            <div className="w-full md:rounded-2xl px-[24px] py-[24px] sm:px-[32px] sm:py-[32px] md:px-[64px] gap-[32px] backdrop-blur-md flex flex-col bg-black/50 text-white">
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
                </main>
                <Footer />
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
                {contestList.map((contest, index) => (
                    <ContestItem
                        key={index}
                        contest={contest}
                        defaultChecked={index === 0}
                        id={`contest-${index}`}
                        name="contest"
                    />
                ))}
            </div>
        </div>
    )
}

function ContestItem({ contest, defaultChecked, id, name }) {
    return (
        <div>
            <input
                type="radio"
                defaultChecked={defaultChecked ?? false}
                id={id}
                name={name}
                value={contest}
                className="hidden peer"
            />
            <label
                htmlFor={id}
                className="uppercase font-semibold inline-flex items-center w-full p-2 h-full rounded-md border border-transparent peer-checked:bg-[#5A8070] duration-200 cursor-pointer peer-checked:border-[#7AD7C9] text-nowrap"
            >
                <div className="block">{contest}</div>
            </label>
        </div>
    )
}