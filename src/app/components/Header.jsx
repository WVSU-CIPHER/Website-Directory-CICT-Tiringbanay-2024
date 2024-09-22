"use client";

import Link from "next/link";
import { Poppins } from "next/font/google";
import { HamburgerMenuIcon } from "./icons/Hamburger";
import { XIcon } from "./icons/Close";
import React from "react";
import { Transition } from "@headlessui/react";
import { useRouter } from "next/navigation";

// Fonts
const poppins = Poppins({
  weight: ["400", "900"],
  variable: "--font-poppins",
  subsets: ["latin"],
});

// Navigations
import { navigations } from "@/data/navigations";

export default function Header() {
  // for mobile menu dropdown
  const [showMenu, setShowMenu] = React.useState(false);

  return (
    <div className="w-full z-[100] fixed top-0 right-0 flex flex-col px-[64px] py-[32px]">
      <nav className="max-w-[1440px] mx-auto w-full flex items-center justify-between">
        <Link href="/">
          <span className="font-chopsic">tiringbanay</span>
        </Link>

        {/* hide on md screens, show on lg screens */}
        <div className="hidden lg:flex   links text-[14px]  items-center gap-[48px]">
          {navigations.map((navigation, index) => (
            <Link key={index} href={navigation.href}>
              <span className={`${poppins.className} text-slate-100 font-sans`}>
                {navigation.name.slice(0, 1).toUpperCase() +
                  navigation.name.slice(1)}
              </span>
            </Link>
          ))}
        </div>

        {/* Show hamburger menu for mobile */}
        <div className="lg:hidden flex items-center">
          <button
            onClick={() => setShowMenu(!showMenu)}
            type="button"
            className="inline-flex items-center justify-center p-2 rounded-md text-gray-500 hover:text-opacity-80 relative z-20"
            aria-controls="mobile-menu"
            aria-expanded="false"
          >
            {/* Update the icon on mobile menu opening  */}
            {/* Set index to 100 so its visible when the mobile menu is open */}
            {showMenu ? (
              <XIcon className="x-[100] cursor-pointer hover:text-[#7AD7CA] duration-200" />
            ) : (
              <HamburgerMenuIcon className="z-[100] cursor-pointer hover:text-[#7AD7CA] duration-200" />
            )}
          </button>
        </div>
      </nav>
      <Transition
        show={showMenu}
        enter="transition ease-out duration-200 transform"
        enterFrom="-translate-y-96"
        enterhref="translate-y-0"
        leave="transition ease-in duration-100 transform"
        leaveFrom="translate-y-0"
        leavehref="-translate-y-96"
      >
        {(ref) => (
          <div
            className="lg:hidden absolute w-screen top-0 left-0 px-10 border-b border-b-[#7AD7CA] backdrop-blur-lg"
            id="mobile-menu"
          >
            <div className="px-2 py-8 space-y-5 sm:px-3 w-full flex-col flex">
              <Link onClick={() => setIsOpen(false)} href="/">
                <span className="text-md duraration-200 hover:text-[#7AD7CA] ">
                  Home
                </span>
              </Link>
              <Link onClick={() => setIsOpen(false)} href="/guidelines">
                <span className="text-md duraration-200 hover:text-[#7AD7CA] ">
                  Guidelines
                </span>
              </Link>
              <Link onClick={() => setIsOpen(false)} href="/programme">
                <span className="text-md duraration-200 hover:text-[#7AD7CA] ">
                  Programme
                </span>
              </Link>
              <Link onClick={() => setIsOpen(false)} href="/contests">
                <span className="text-md duraration-200 hover:text-[#7AD7CA] ">
                  Contest
                </span>
              </Link>
              <Link onClick={() => setShowMenu(false)} href="/student-search">
                <span className="text-md duraration-200 hover:text-[#7AD7CA] ">
                  Student Search
                </span>
              </Link>
            </div>
          </div>
        )}
      </Transition>
    </div>
  );
}
