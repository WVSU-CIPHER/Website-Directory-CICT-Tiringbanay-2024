
"use client";
import Link from "next/link";
import { Poppins } from "next/font/google";
import React from "react"
import { Transition } from "@headlessui/react";
import { useRouter } from "next/router";
const poppins = Poppins({
  weight: ["400", "900"],
  variable: "--font-poppins",
  subsets: ["latin"],
});

export default function Header() {
  const [isOpen, setIsOpen]= React.useState(false);
  const navigations = [
    { name: "guidelines", href: "/guidelines" },
    { name: "programme", href: "/programme" },
    { name: "contest", href: "/contests" },
    { name: "groupings", href: "/groupings" },
  ];

  return (
    <div className="w-full z-[999] fixed border border-white top-0 right-0 flex flex-col px-[64px] py-[32px] backdrop-blur-md">
      <nav className="max-w-[1400px] mx-auto w-full flex items-center justify-between">
        <Link href="/">
          <span className="font-chopsic">tiringbanay</span>
        </Link>

        <div className="hidden lg:flex links text-[14px]  items-center gap-[48px]">
          {navigations.map((navigation, index) => (
            <Link key={index} href={navigation.href}>
              <span className={`${poppins.className} text-slate-100 font-sans`}>
                {navigation.name.slice(0, 1).toUpperCase() +
                  navigation.name.slice(1)}
              </span>
            </Link>
          ))}
        </div>
          
        <div className="-mr-2 flex lg:hidden">
                <button
                  onClick={() => setIsOpen(!isOpen)}
                  type="button"
                  className="inline-flex items-center  justify-center p-2 rounded-md  hover:text-opacity-80 relative z-[999] text-white"
                  aria-controls="mobile-menu"
                  aria-expanded="false"
                >
                  <span className="sr-only">Open main menu</span>
                  {!isOpen ? (
                    <svg
                      className="block h-6 w-6"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      aria-hidden="true"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M4 6h16M4 12h16M4 18h16"
                      />
                    </svg>
                  ) : (
                    <svg
                      className="block h-6 w-6"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      aria-hidden="true"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M6 18L18 6M6 6l12 12"
                      />
                    </svg>
                  )}
                </button>
              </div>
              </nav>
              <Transition
            show={isOpen}
            enter="transition ease-out duration-200 transform"
            enterFrom="-translate-y-96"
            enterhref="translate-y-0"
            leave="transition ease-in duration-100 transform"
            leaveFrom="translate-y-0"
            leavehref="-translate-y-96"
          >
            {(ref) => (
              <div
                className="absolute w-screen top-0 left-0 h-fit  px-10 border-b bg-black-100/40 border-gray-200 backdrop-blur-md border-none"
                id="mobile-menu"
              >
                <div className="px-1 py-8 space-y-2 w-full flex flex-col">
                  <Link onClick={() => setIsOpen(false)} href="/">
                    <span className={`${poppins.className}`}>Home</span>
                  </Link>
                  <Link onClick={() => setIsOpen(false)} href="/guidelines">
                    <span className={`${poppins.className}`}>Guidelines</span>
                  </Link>
                  <Link onClick={() => setIsOpen(false)} href="/programme">
                    <span className={`${poppins.className}`}>Programme</span>
                  </Link>
                  <Link onClick={() => setIsOpen(false)} href="/contests">
                    <span className={`${poppins.className}`}>Contest</span>
                  </Link>
                  <Link onClick={() => setIsOpen(false)} href="/groupings">
                    <span className={`${poppins.className}`}>Groupings</span>
                  </Link>
                  
                </div>
              </div>
            )}
            
          </Transition>
    </div>
  );
}

