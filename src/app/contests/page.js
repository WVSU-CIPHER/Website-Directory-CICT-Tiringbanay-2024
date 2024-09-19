"use client";



import React from 'react';

import { chopsic } from "../layout";
import { Poppins } from "next/font/google";
import Link from "next/link";

// Warning Icon
export function MarketeqWarningAlt3(props) {
    return (<svg xmlns="http://www.w3.org/2000/svg" width="2rem" height="2rem" viewBox="0 0 50 50" {...props}><g fill="none" strokeLinecap="round" strokeLinejoin="round"><path stroke="#344054" strokeWidth={2} d="M25 14.583v12.5"></path><path stroke="#344054" strokeWidth={3} d="M25.104 35.417h-.208"></path><path stroke="#306cfe" strokeWidth={2} d="m36.417 7.292l9.625 16.666a2.08 2.08 0 0 1 0 2.084l-9.625 16.666a2.08 2.08 0 0 1-1.792 1.042h-19.25a2.08 2.08 0 0 1-1.792-1.042L3.958 26.042a2.08 2.08 0 0 1 0-2.084l9.625-16.666a2.08 2.08 0 0 1 1.792-1.042h19.25a2.08 2.08 0 0 1 1.792 1.042"></path></g></svg>);
}


const poppins = Poppins({
    weight: ["400", "900"],
    variable: "--font-poppins",
    subsets: ["latin"],
});

// Variables
const objectives = [
    "To provide students with knowledge and insights on career planning and development specific to the Information and Communications Technology (ICT) field.",
    "To connect students with industry professionals and faculty members who can offer guidance and mentorship on building a successful career path.",
    "To encourage early career preparation among students, emphasizing the importance of developing essential skills and gaining relevant experiences during their college years. ",
    "To expose students to various career paths and opportunities in the ICT sector, broadening their understanding of potential future roles."
]


const rulesAndRegulations = [
    "All CICT students are highly encouraged to attend the Sugilanon: Conversation with Vision.",
    "Attendees are expected to maintain proper decorum during the entire talk.",
    "Students are encouraged to actively listen and participate in the talk by asking relevant questions during the designated open forum session.",
    "Any violations of the rules or guidelines may result in consequences such as the loss of participation points or further disciplinary action."
]

const contests = ["sugilanon", "meme-icry", "pixel fusion", "avatar banners", "cispitizens", "gunter cheers", "panakayon"]

function RulesAndGuidelinesPDF() {
    return (
        <div className="flex w-full items-center gap-6 rounded-md p-4 bg-black/50 backdrop-blur-sm max-w-full mx-auto h-fit">

            <MarketeqWarningAlt3 />
            <div className="flex flex-col gap-1">
                <h1 className={`font-semibold md:text-[14px] text-[12px] uppercase text-white`}>rules and guidelines</h1>
                <span className="uppercase underline hover:text-emerald-500 duration-200">download the rules and guidelines: </span>
            </div>
        </div>
    )
}


function ContestsOptionPicker() {
    return (
        <div className="w-fit mx-auto px-[8px] py-[8px] bg-[#5D6D5C] rounded-md">
            <div className="flex  gap-[16px] py-[4px] w-full mx-auto items-center justify-between flex-wrap">
                {contests.map((contest, index) => (
                    <Link href={`/contests/${contest}`} key={index} className={`focus:bg-[#5A8070] focus:ring-[#7AD7C9] focus:ring-2  duration-100 h-full rounded-md uppercase font-semibold px-[8px] py-[4px] text-[16px] text-nowrap`}>
                        {contest}
                    </Link>
                ))}

            </div>

        </div>
    )
}

<button
    className={`${poppins.className} leading-[11px] bg-[#2f5057] rounded-[8px] w-[158px] h-[37px] border-[#FFFFFF] border-[1px] tracking-[1px] text-[14px]`}
>
    <span className="uppercase text-[#FFFFFF] font-semibold">
        About the Event
    </span>
</button>

function ContestsHeader() {
    const navigations = [
        { name: "guidelines", href: "/guidelines" },
        { name: "programme", href: "/programme" },
        { name: "contest", href: "/contests" },
        { name: "groupings", href: "/groupings" },
    ];

    return (
        <div className="w-full fixed z-[100]  top-0 right-0 flex flex-col px-[64px] py-[32px]">
            <nav className="max-w-[1400px] mx-auto w-full flex items-center justify-between">
                <Link href="/">
                    <span className="font-chopsic cursor-pointer">tiringbanay</span>
                </Link>
                <div className="flex links text-[14px]  items-center gap-[48px]">
                    {navigations.map((navigation, index) => (
                        <Link key={index} href={navigation.href}>
                            <span className={`${poppins.className} text-white font-sans`}>
                                {navigation.name.slice(0, 1).toUpperCase() +
                                    navigation.name.slice(1)}
                            </span>
                        </Link>
                    ))}
                </div>
            </nav>
        </div>
    );
}

export default function ContestsPage() {
    return (
        <div>
            <ContestsHeader font={chopsic.variable} />
            <div className="min-h-screen flex flex-col   justify-center items-center bg-tiringbanay bg-fixed bg-no-repeat bg-cover bg-center">
                <div className="pb-2 w-full h-full flex flex-col ">

                    <div className="items-center justify-center flex flex-col w-[90%] mx-auto pt-[90px]">
                        <div className="py-[64px] flex flex-col w-full gap-[32px]">

                            <h1 className={`${chopsic.className} text-[40px] text-center`}>
                                contests
                            </h1>
                            <div className="mx-auto flex flex-col gap-4">
                                <RulesAndGuidelinesPDF />
                                <ContestsOptionPicker />
                            </div>
                        </div>
                        <div className="flex flex-col gap-[64px] w-full z-[200]">
                            <div className="uppercase w-full flex flex-col justify-between">
                                <h1 className={`${chopsic.className} text-[24px]`}>sugilanon: professional development</h1>
                                <p className="uppercase">top prize: 0 points</p>
                            </div>

                            <div className="w-full rounded-2xl px-[64px] h-fit py-[32px] gap-[32px] backdrop-blur-md flex flex-col bg-black/50 ">
                                {/* timeline */}
                                <h1 className={`${chopsic.className} text-[24px]`}>objectives</h1>
                                <div className="flex flex-col w-full gap-1">
                                    {objectives.map((objective, index) => (
                                        <div className="flex gap-1">
                                            <p className={`${poppins.className} text-[14px]`}>{index + 1}.</p>
                                            <p className={`${poppins.className} text-[14px]`}>{objective}</p>
                                        </div>

                                    ))}
                                </div>
                            </div>
                            <div className="w-full rounded-2xl px-[64px] h-fit py-[32px] gap-[32px] backdrop-blur-md flex flex-col bg-black/50 ">
                                {/* timeline */}
                                <h1 className={`${chopsic.className} text-[24px]`}>Rules and Regulations</h1>
                                <div className="flex flex-col w-full gap-1">
                                    {rulesAndRegulations.map((rules, index) => (
                                        <div className="flex gap-1">
                                            <p className={`${poppins.className} text-[14px]`}>{index + 1}.</p>
                                            <p className={`${poppins.className} text-[14px]`}>{rules}</p>
                                        </div>

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

