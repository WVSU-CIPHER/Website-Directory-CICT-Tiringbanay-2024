"use client";
import Image from "next/image";
import cictLogo from "../../../public/assets/images/logo-cict.png";
import { Poppins } from "@next/font/google";
import Link from "next/link";
import Footer from "./Footer";

const poppins = Poppins({
  weight: ["400", "500", "600", "700", "800", "900"],
  variable: "--font-poppins",
  subsets: ["latin"],
});

export default function HeroPage() {
  return (
    <>
      {/* bg-cover to cater the whole screen */}
      <div className="bg-tiringbanay bg-cover "></div>

      <div className="relative md:ml-16 h-screen flex flex-col items-center md:items-start justify-center">
        <div className="flex flex-col gap-4">
          <Image
            className="self-center md:self-start"
            src={cictLogo}
            alt="Cict Logo"
            width={72}
            height={72}
          />
          <div
            className={`uppercase text-lg  md:text-xl lg:text-2xl font-medium
              tracking-[4px]  text-center md:text-left
              text-white ${poppins.className}`}
          >
            A shift in reality
          </div>
          <div className="font-chopsic uppercase text-center md:text-left leading-10
          tracking-[2.5px] text-2xl mx-[5%] md:mx-0
          md:text-3xl lg:text-5xl
          text-transparent bg-clip-text bg-gradient-to-b from-[#81ECDE] to-[#59958480] drop-shadow
          ">
            cict tiringbanay 2024
          </div>
        </div>

        {/* Buttons */}
        <div
          className={`${poppins.className} mt-8 flex flex-row gap-8 justify-center md:justify-start`}
        >
          <Link href="/groupings">
            <button className="flex uppercase h-[30px] bg-[#59958480] hover:bg-[#5D6D5C] px-4 py-1 items-center
            sm:place-items-start sm:pb-4 gap-[8px] rounded-lg
            border-[1px] border-[#81ECDE] text-[14px] font-semibold
            ">
              Find your Group
            </button>
          </Link>
          <div
            className="uppercase text-[14px] py-1 font-semibold tracking-wider cursor-pointer hover:underline hover:underline-offset-4 "
            onClick={() =>
              document
                .getElementById("rationale")
                .scrollIntoView({ behavior: "smooth" })
            }
          >
            learn more
          </div>
        </div>
      </div>

      <div
        id="rationale"
        className="flex flex-col py-6 mx-auto max-w-[95%]  backdrop-blur-md  bg-[#010004d8] sm:bg-[#01000499] z-1 relative"
      >
        <div className="text-white flex flex-col px-4 sm:px-8">
          <div className="font-chopsic flex text-xl md:text-2xl uppercase items-center pb-5 tracking-widest
          text-transparent bg-clip-text bg-gradient-to-b from-[#81ECDE] to-[#59958480] drop-shadow
          ">
            rationale
          </div>
          <div className={`${poppins.className} justify-center text-sm md:text-base`}>
            The College of Information and Communications Technology (CICT) has
            consistently been a beacon of innovation, creativity, and
            collaboration within the university. The college’s achievements are
            a testament to the collective efforts and dedication of its
            students, faculty, and staff. Tiringbanay 2024, organized by the
            CICT Student Council, is an engagement day designed to celebrate the
            spirit of unity and foster deeper connections within the CICT
            community.
            <br />
            <br />
            Tiringbanay CICT aims to inspire collaboration, enhance professional
            growth, and cultivate a strong sense of community among all CICT
            members. By bringing together students and faculty in an environment
            of learning and engagement, Tiringbanay CICT creates opportunities
            for personal and collective development.
          </div>
        </div>
      </div>

      {/* OBJECTIVES */}
      <div className="flex flex-col w-full my-10 py-6 mx-auto max-w-[95%] backdrop-blur-md bg-[#010004d8] z-1 relative">
        <div className="text-white flex flex-col px-8">
          <div className="font-chopsic flex text-xl md:text-2xl uppercase items-center pb-5 tracking-widest
          text-transparent bg-clip-text bg-gradient-to-b from-[#81ECDE] to-[#59958480] drop-shadow
          ">
            Objectives
          </div>
          <div className={`${poppins.className} text-sm md:text-base`}>
            Tiringbanay CICT aims to achieve the following objectives:
          </div>
          <br />
          <div className={`${poppins.className} list-inside ml-3 gap-3 text-sm md:text-base`}>
            <li>
              To promote unity and strengthen bonds among students, across
              different programs and year levels, and faculty within the CICT
              community through interactive and collaborative activities.{" "}
            </li>
            <li>
              To create an inclusive environment that encourages active
              participation and collaboration among CICTzens from different year
              levels.{" "}
            </li>
            <li>
              To provide students with valuable knowledge and skills to prepare
              for their future careers in the field of Information and
              Communications Technology.
            </li>
          </div>
        </div>
      </div>

      {/* GUEST SPEAKER */}
      <div className="flex flex-col w-full sm:max-w-[900px] mb-10 mt-0 py-8 px-9 sm:mt-16 mx-auto rounded-none sm:rounded-2xl bg-[#010004d8] sm:bg-[#01000499] z-1 relative">
        <div className="text-white flex flex-col px-8">
          <div className="font-chopsic text-center text-2xl md:text-3xl uppercase tracking-widest
          text-transparent bg-clip-text bg-gradient-to-br md:bg-gradient-to-b from-[#81ECDE] to-[#59958480] drop-shadow
          ">
            Guest Speaker
          </div>
        </div>

        <div className="flex flex-row  justify-center items-center">
          <div className="flex flex-col md:flex-row items-center">
            <div className="flex flex-col w-full md:w-[30%] items-center">
              <Image
                className="bg-cover bg-center bg-no-repeat"
                src="/assets/images/GuestSpeaker.png"
                width={200}
                height={200}
                alt="Guest Speaker"
              />
              <div className={`${poppins.className} font-bold uppercase text-xl md:text-2xl `}>
                Dax Gabriel Celis
              </div>
            </div>
            <div className="flex flex-col w-[70%] md:ml-10">
              <div className={`${poppins.className} uppercase font-bold text-zinc-300 md:text-slate-200 text-center py-3 md:py-0 md:text-left md:text-2xl md:pb-10`}>
                Mobile Applications Lead - Architect
              </div>
              <div className={`${poppins.className} font-light text-sm md:text-base text-center md:text-left`}>
                Software Development Manager and Mobile Applications Architect. SAFe certified scrum practitioner
                with solid industry knowledge and experience. A people leader, career developer, and value creator.
              </div>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
}
