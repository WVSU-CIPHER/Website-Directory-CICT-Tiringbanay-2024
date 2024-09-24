"use client";

import { chopsic } from "../layout";
import { Poppins } from "next/font/google";
import Image from "next/image";
import bg from "/public/assets/images/background.webp"
import Footer from "../components/Footer";
import { morningProgramFlow, afternoonProgramFlow, morningTitle, afternoonTitle } from "@/data/programs";
import Countdown from "../components/programme/CountDown";

import moment from "moment";

// Store current time now
const now = moment();

console.log("Time now: ", now.format("HH"));

const poppins = Poppins({
    weight: ["400", "900"],
    variable: "--font-poppins",
    subsets: ["latin"],
});

export default function ProgrammePage() {
    return (
        <div className="relative min-h-screen overflow-hidden pt-16">
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
                <main className="flex-grow overflow-y-auto">
                    <div className="lg:pb-2 items-center justify-center flex flex-col w-full md:w-[90%] mx-auto">
                        <div className="pb-8 flex flex-col gap-4">
                            <h1 className={`${chopsic.className} text-2xl sm:text-3xl md:text-4xl lg:text-5xl text-center
                                text-transparent bg-clip-text bg-gradient-to-br from-[#81ECDE] to-[#59958480] drop-shadow
                                  mt-10 md:mt-16  tracking-[1.6px]
                                `}>
                                programme
                            </h1>
                            <Countdown />

                        </div>

                        <div className="flex flex-col gap-10 w-full mb-10">
                            {/* Morning session */}
                            <div className="w-full md:rounded-2xl px-10 md:px-[64px] h-fit py-[32px] gap-[32px] backdrop-blur-md flex flex-col bg-black/50 text-white">
                                <h1 className={`${chopsic.className} text-lg md:text-xl lg:text-3xl text-transparent 
                                    bg-clip-text bg-gradient-to-b from-[#81ECDE] to-[#59958480] drop-shadow`}>{morningTitle}</h1>
                                <div className="flex flex-col w-full gap-2 text-sm md:text-base lg:text-lg">
                                    {morningProgramFlow.map((program, index) => (
                                        <ProgrammeItem
                                            key={`morning-${index}`}
                                            program={program}
                                            id={`morning-${index}`}
                                            defaultChecked={index === 0}
                                            name="morning-program"
                                        />
                                    ))}
                                </div>
                            </div>

                            {/* Afternoon session */}
                            <div className="w-full md:rounded-2xl px-10 md:px-[64px] h-fit py-[32px] gap-[32px] backdrop-blur-md flex flex-col bg-black/50 text-white">
                                <h1 className={`${chopsic.className} text-lg md:text-xl lg:text-3xl  text-transparent bg-clip-text bg-gradient-to-b from-[#81ECDE] to-[#59958480] drop-shadow`}>{afternoonTitle}</h1>
                                <div className="flex flex-col w-full gap-2 text-sm md:text-base lg:text-lg">
                                    {afternoonProgramFlow.map((program, index) => (
                                        <ProgrammeItem
                                            key={`afternoon-${index}`}
                                            program={program}
                                            id={`afternoon-${index}`}
                                            name="afternoon-program"
                                        />
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

function ProgrammeItem({ program, defaultChecked, id, name }) {
    const now = moment();
    // as of the moment time
    const currentTime = now.format("HH");
    const currentDate = now.format("YYYY-MM-DD");

    // Extract the time from the schedule
    const timeSchedRange1 = program.time.slice(0, 2);
    const timeSchedRange2 = program.time.slice(8, 10);


    const timeFormat = program.time.slice(14, 16);
    const targetDate = moment('2024-09-24', 'YYYY-MM-DD').format("YYYY-MM-DD");

    const isTiringbanayDay = targetDate === currentDate;
    const isTimeSchedMatched = currentDate === targetDate && (currentTime >= timeSchedRange1 && currentTime <= timeSchedRange2)

    return (
        <div className="relative w-full">
            <input
                type="radio"
                defaultChecked={isTimeSchedMatched}
                id={id}
                name={name}
                value={program.title}
                className="hidden peer"

            />
            <label
                htmlFor={id}
                className="font-semibold inline-flex items-center w-full p-1 h-full rounded-full border border-transparent peer-checked:bg-white peer-checked:px-2 peer-checked:text-black duration-200 cursor-pointer peer-checked:border-[#7AD7C9] text-nowrap"
            >
                <div className="w-full lg:max-w-[50%] gap-x-4 grid grid-cols-2 lg:flex items-center lg:justify-between">
                    <p className="block font-normal text-wrap">{program.title}</p>
                    <p className="block font-normal">{program.time}</p>
                </div>
            </label>
        </div>
    )
}