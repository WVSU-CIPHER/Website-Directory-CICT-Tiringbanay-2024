"use client";

import { chopsic } from "../layout";
import { Poppins } from "next/font/google";
import Image from "next/image";
import bg from "/public/assets/images/background.png"


// Fonts
const poppins = Poppins({
    weight: ["400", "900"],
    variable: "--font-poppins",
    subsets: ["latin"],
});

// Import data for this page
import { morningProgramFlow, afternoonProgramFlow, morningTitle, afternoonTitle } from "@/data/programs";



export default function ProgrammePage() {
    return (
        <div>
            <div className="h-screen w-screen overflow-hidden">
                {/* Background */}
                <Image
                    src={bg}
                    alt="Background"
                    layout="fill"
                    objectFit="cover"
                    quality={100}
                />

                <div className="relative w-full h-full flex flex-col overflow-y-scroll">

                    <div className=" lg:pb-2 items-center justify-center flex flex-col w-full  md:w-[90%] mx-auto pt-[90px]">
                        <div className="py-[64px]">

                            <h1 className={`${chopsic.className} text-[40px] text-center`}>
                                program
                            </h1>
                        </div>

                        {/* Cards for program flow */}
                        <div className="flex flex-col gap-0 md:gap-[64px] w-full z-[200]">

                            {/* Morning session */}
                            <div className="w-full  md:rounded-2xl px-[64px] h-fit py-[32px] gap-[32px] backdrop-blur-md flex flex-col bg-black/50 z-[200]">
                                <h1 className={`${chopsic.className} text-[24px]`}>{morningTitle}</h1>
                                {/* timeline */}
                                <div className="flex flex-col w-full gap-2">

                                    {morningProgramFlow.map((program, index) => (

                                        <button key={index} className="flex justify-between items-center w-full  duration-100 focus:bg-white text-white  focus:text-black rounded-full">
                                            <div className="max-w-[90%] gap-[32px] grid grid-cols-2 md:flex md:justify-between  text-left w-full">

                                                <p className="px-[12px]">{program.title}</p>

                                                <div className="md:w-1/2 text-left ">
                                                    <p className="">{program.time}</p>

                                                </div>
                                            </div>
                                        </button>
                                    ))}

                                </div>
                            </div>

                            {/* Afternoon session */}
                            <div className="w-full  md:rounded-2xl px-[64px] h-fit py-[32px] gap-[32px] backdrop-blur-md flex flex-col bg-black/50 z-[200]">
                                <h1 className={`${chopsic.className} text-[24px]`}>{afternoonTitle}</h1>
                                {/* timeline */}
                                <div className="flex flex-col w-full gap-2">

                                    {afternoonProgramFlow.map((program, index) => (

                                        <button key={index} className="flex justify-between items-center w-full duration-100 focus:bg-white text-white  focus:text-black rounded-full">
                                            <div className="max-w-[90%] gap-[32px] grid grid-cols-2 md:flex md:justify-between  text-left w-full">

                                                <p className="px-[12px]">{program.title}</p>

                                                <div className="md:w-1/2 text-left ">
                                                    <p className="">{program.time}</p>

                                                </div>


                                            </div>
                                        </button>
                                    ))}

                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    );
}
