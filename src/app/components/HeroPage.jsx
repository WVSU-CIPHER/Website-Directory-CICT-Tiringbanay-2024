"use client";
import Image from "next/image";
import cictLogo from "../../../public/assets/images/logo-cict.webp";
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
          tracking-[2.5px] mx-[5%] md:mx-0
          text-2xl md:text-3xl lg:text-5xl
          text-transparent bg-clip-text bg-gradient-to-b from-[#81ECDE] to-[#59958480] drop-shadow
          ">
            cict tiringbanay 2024
          </div>
        </div>

        {/* Buttons */}
        <div
          className={`${poppins.className} mt-8 flex flex-row gap-8 justify-center md:justify-start text-white`}
        >
          <Link href="/groupings">
            <button className="flex uppercase h-[30px] bg-[#59958480] hover:bg-[#5D6D5C] px-4 py-1 items-center
            sm:place-items-start sm:pb-4 gap-[8px] rounded-lg
            border-[1px] border-[#81ECDE] text-[14px]  font-semibold text-white
            ">
              Find your Group
            </button>
          </Link>
          <div
            className="uppercase text-white text-[14px] py-1 font-semibold tracking-wider cursor-pointer hover:underline hover:underline-offset-4 "
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

      {/* RATIONALE */}
      {/* TODO: 
      - put border radius in rationale and objectives
      - guess speaker max-w-[90%] in small screen size
      */}
      <div
        id="rationale"
        className="flex flex-col py-6 mx-auto max-w-[95%]  backdrop-blur-md  bg-[#010004d8] sm:bg-[#01000499] z-1 relative
        rounded-lg md:rounded-xl 
        "
      >
        <div className="text-white flex flex-col px-4 sm:px-8">
          <div className="font-chopsic flex text-lg md:text-2xl uppercase items-center pb-4 tracking-widest
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
      <div className="flex flex-col w-full my-10 py-6 mx-auto max-w-[95%] backdrop-blur-md bg-[#010004d8] z-1 relative
      rounded-lg md:rounded-xl 
      ">
        <div className="text-white flex flex-col px-4 sm:px-8">
          <div className="font-chopsic flex text-lg md:text-2xl uppercase items-center pb-4 tracking-widest
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
      <div className="flex flex-col w-full h-fit max-w-[95%] md:max-w-[900px] mb-10 py-8 px-9  mx-auto rounded-lg md:rounded-xl bg-[#010004d8] z-1 relative">
        <div className="text-white flex flex-col px-8">
          <div className="font-chopsic text-center text-2xl md:text-3xl uppercase tracking-widest
          text-transparent bg-clip-text bg-gradient-to-br md:bg-gradient-to-b from-[#81ECDE] to-[#59958480] drop-shadow
          ">
            Guest Speaker
          </div>
        </div>

        <div className="flex flex-row  justify-center items-center h-fit">
          <div className="flex flex-col md:flex-row items-center h-fit">
            <div className="flex flex-col justify-center w-full md:w-[30%] items-center">
              <Image
                className="bg-cover bg-center bg-no-repeat"
                src="/assets/images/GuestSpeaker.webp"
                width={220}
                height={220}
                alt="Guest Speaker"
              />

            </div>
            <div className="flex flex-col justify-center w-[70%] md:ml-5 ">
              <div className={`${poppins.className} font-bold uppercase text-xl text-center md:text-left md:text-2xl 
                 text-transparent bg-clip-text bg-gradient-to-br md:bg-gradient-to-r from-[#81ECDE] to-[#59958480] drop-shadow
                `}>
                Dax Gabriel Celis
              </div>
              <div className={`${poppins.className} uppercase font-bold text-zinc-300 text-center py-3 md:py-0 md:text-left md:text-lg
                my-2
                `}>
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
