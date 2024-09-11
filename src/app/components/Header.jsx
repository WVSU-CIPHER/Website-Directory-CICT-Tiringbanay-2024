"use client";
import Link from "next/link";

export default function Header() {
  const navigations = [
    { name: "guidelines", href: "/guidelines" },
    { name: "programme", href: "/programme" },
    { name: "contest", href: "/contests" },
    { name: "groupings", href: "/groupings" },
  ];

  return (
    <div className="w-full fixed top-0 right-0 flex flex-col px-[64px] py-[32px] bg-transparent backdrop-blur-sm">
      <nav className="max-w-[1400px] mx-auto w-full flex items-center justify-between">
        <h1>Logo</h1>
        <div className="flex text-[14px] font-poppins items-center gap-4">
          {navigations.map((navigation, index) => (
            <Link key={index} href={navigation.href}>
              <span className="text-slate-100">
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
