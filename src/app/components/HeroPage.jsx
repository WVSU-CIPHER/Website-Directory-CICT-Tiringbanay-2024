"use client";
import Image from "next/image";
import bg from "../public/assets/images/background.jpg";

export default function HeroPage() {
  return (
    <div className="">
      <Image
        src={bg}
        className="w-full h-screen inset-1"
        alt="High Tech Background"
      />
    </div>
  );
}
