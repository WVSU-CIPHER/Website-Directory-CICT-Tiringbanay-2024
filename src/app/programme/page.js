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

// Footer component
import Footer from "../components/Footer";

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
                                {/* Header */}
                                <h1 className={`${chopsic.className} text-[24px]`}>{morningTitle}</h1>
                                {/* timeline */}
                                <div className="flex flex-col w-full gap-2">
                                    <ProgrammeItem program={morningProgramFlow[0]} id="a" defaultChecked={true} name="program" />
                                    <ProgrammeItem program={morningProgramFlow[1]} id="b" name="program" />
                                    <ProgrammeItem program={morningProgramFlow[2]} id="c" name="program" />
                                    <ProgrammeItem program={morningProgramFlow[3]} id="d" name="program" />
                                    <ProgrammeItem program={morningProgramFlow[4]} id="e" name="program" />
                                    <ProgrammeItem program={morningProgramFlow[5]} id="f" name="program" />
                                    <ProgrammeItem program={morningProgramFlow[6]} id="g" name="program" />

                                </div>
                            </div>

                            {/* Afternoon session */}
                            <div className="w-full  md:rounded-2xl px-[64px] h-fit py-[32px] gap-[32px] backdrop-blur-md flex flex-col bg-black/50 z-[200] text-white">
                                {/* Header */}
                                <h1 className={`${chopsic.className} text-[24px]`}>{afternoonTitle}</h1>
                                {/* timeline */}
                                <div className="flex flex-col w-full gap-2 text-white">
                                    <ProgrammeItem program={afternoonProgramFlow[0]} id="h" name="program" />
                                    <ProgrammeItem program={afternoonProgramFlow[1]} id="i" name="program" />
                                    <ProgrammeItem program={afternoonProgramFlow[2]} id="j" name="program" />
                                    <ProgrammeItem program={afternoonProgramFlow[3]} id="k" name="program" />
                                    <ProgrammeItem program={afternoonProgramFlow[4]} id="l" name="program" />
                                    <ProgrammeItem program={afternoonProgramFlow[5]} id="m" name="program" />
                                    <ProgrammeItem program={afternoonProgramFlow[6]} id="n" name="program" />
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


function ProgrammeItem({ program, defaultChecked, id, name }) {
    return (

        <div className="relative w-full z-[300]">
            <input type="radio" defaultChecked={defaultChecked ?? false} id={id} name={name} value={program.title} className="hidden peer" />
            <label for={id} className="font-semibold inline-flex items-center w-full p-1 h-full rounded-full border border-transparent peer-checked:bg-white peer-checked:px-2 peer-checked:text-black duration-200 cursor-pointer peer-checked:border-[#7AD7C9] text-nowrap">
                <div className="w-full lg:max-w-[50%] gap-x-4 grid grid-cols-2 lg:flex items-center lg:justify-between">
                    <p className="block font-normal text-wrap">{program.title}</p>
                    <p className="block font-normal ">{program.time}</p>
                </div>
            </label>

        </div>
    )

}


