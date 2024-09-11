"use client";
import Image from "next/image";
import bg from "../public/assets/images/background.jpg";

export default function HeroPage() {
  return (
    <div>
      <Image
        src={bg}
        alt="Tech Background"
        className="w-screen h-screen inset-1"
      />
    </div>
  );
}
