"use client";

import Image from "next/image";
import Logo from "../../../public/assets/images/logo-cict.webp";
import { chopsic } from "../layout";
import { Poppins } from "@next/font/google";
import Link from "next/link";
const poppins = Poppins({
  weight: ["400", "900"],
  variable: "--font-poppins",
  subsets: ["latin"],
});

export default function Footer() {
  return (
    <footer className="w-full h-full md:px-24 px-5 py-12 text-white rounded-md bg-black/50 backdrop-blur-md flex flex-col">
      <div className=" w-full h-full gap-6 md:gap-8 grid grid-cols-1 md:grid-cols-2 ">
        {/* Logo image */}
        <div className="flex gap-4 items-center">
          <Image src={Logo} width={80} heigth={80} alt="CICT Logo" className="max-w-[50px] md:max-w-[80px]" />
          {/* Titles and subheaders */}
          <div className="flex flex-col gap-0">
            <h1 className={`${chopsic.className} text-base md:text-lg tracking-[4px] md:tracking-[5px]`}>
              tiringbanay 2024
            </h1>
            <p className="text-sm md:text-base">
              &copy;{" "}
              <span className={`${poppins.className} text-wrap`}>
                WVSU CIPHER 2024. All Rights Reserved.
              </span>
            </p>
          </div>
        </div>
        {/* Developers */}

        <div className="flex w-full">
          <div className="flex gap-3 px-2  border-l-4 border-l-[#7AD7CA]">
            {/* UI/UX Designers */}
            <div className="flex flex-col">
              <h1 className={`${chopsic.className} uppercase text-sm md:text-base tracking-[3px]`}>ui/ux</h1>
              {/* Names */}
              <div className="flex flex-col gap-1 text-sm md:text-base">
                <Link href="https://github.com/Reiebenezer">
                  <span
                    className={`${poppins.className} font-md text-[14px] hover:text-[#7AD7CA] duration-100`}
                  >
                    Rei Ebenzer Gervacio Duhina
                  </span>
                </Link>
                <Link href="https://github.com/aliyahsnts">
                  <span
                    className={`${poppins.className} font-md text-[14px] hover:text-[#7AD7CA] duration-100`}
                  >
                    Aliyah Santos
                  </span>
                </Link>
              </div>
            </div>
            {/* Front end Developers */}
            <div className="flex flex-col">
              <h1 className={`${chopsic.className} uppercase text-sm md:text-base  tracking-[3px]`}>
                frontend Devs
              </h1>
              {/* Names */}
              <div className="flex flex-col gap-1 text-sm md:text-base">
                <Link href="https://github.com/Christopher-Glenn">
                  <span
                    className={`${poppins.className} font-md text-[14px] hover:text-[#7AD7CA] duration-100`}
                  >
                    Christopher Glenn Bedis
                  </span>
                </Link>
                <Link href="https://github.com/allyn8444">
                  <span
                    className={`${poppins.className} font-md text-[14px] hover:text-[#7AD7CA] duration-100`}
                  >
                    Allyn Ralf Ledesma
                  </span>
                </Link>
                <Link href="/https://github.com/dayummson">
                  <span
                    className={`${poppins.className} font-md text-[14px] hover:text-[#7AD7CA] duration-100`}
                  >
                    Quincy Rodge Macalalag
                  </span>
                </Link>
              </div>
            </div>

            {/* Backend Developers */}
            <div className="flex flex-col">
              <h1 className={`${chopsic.className} uppercase text-sm  md:text-base tracking-[3px]`}>Backend Devs</h1>
              {/* Names */}
              <div className="flex flex-col gap-1 text-sm md:text-base">
                <Link href="https://github.com/tqcss">
                  <span
                    className={`${poppins.className} font-md text-[14px] hover:text-[#7AD7CA] duration-100`}
                  >
                    Ken Meiro Villareal
                  </span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
