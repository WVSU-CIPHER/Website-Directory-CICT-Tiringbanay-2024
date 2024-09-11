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
    <div className="w-full flex flex-col p-4 bg-red-500">
      <nav className="max-w-[1400px] mx-auto w-full flex items-center justify-between">
        <h1>Logo</h1>
        <div className="flex items-center gap-4">
          {navigations.map((navigation, index) => (
            <Link key={index} href={navigation.href}>
              <span className="text-slate-100">{navigation.name}</span>
            </Link>
          ))}
        </div>
      </nav>
    </div>
  );
}
