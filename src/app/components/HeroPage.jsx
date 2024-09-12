"use client";

import { Poppins } from "next/font/google";
const poppins = Poppins({
  weight: ["400", "900"],
  variable: "--font-poppins",
  subsets: ["latin"],
});

export default function HeroPage() {
  return (
    <div>
      <div className="min-h-screen flex justify-center items-center bg-sea2 bg-fixed bg-no-repeat bg-cover bg-center">
        <div className="flex flex-col text-center">
          <h1
            className={
              "${poppins.className} pb-7 tracking-[7px] text-[#EAF7FF] font-medium text-[18px]"
            }
          >
            A SHIFT IN REAL<span className="text-[#81ECDE]">IT</span>Y
          </h1>
          <div className="flex flex-col text-center">
            <h1 className="text-[72px] font-chopsic text-shadow-custom">
              tiringbanay
            </h1>
            <h2 className="text-[24px] font-chopsic text-shadow-custom pb-16">
              2024
            </h2>
          </div>
          <div className="flex items-center gap-[16px] justify-center">
            <button className="{`${poppins.className} leading-[11px] bg-[#2f5057] rounded-[8px] w-[158px] h-[37px] border-[#FFFFFF] border-[1px] tracking-[1px] text-[14px]">
              <span className="uppercase text-[#FFFFFF] font-semibold">
                find your group
              </span>
            </button>
            <button className="{`${poppins.className} leading-[11px] bg-[#2f5057] rounded-[8px] w-[158px] h-[37px] border-[#FFFFFF] border-[1px] tracking-[1px] text-[14px]">
              <span className="uppercase text-[#FFFFFF] font-semibold">
                About the Event
              </span>
            </button>
          </div>
        </div>
      </div>

      <div class="min-h-screen flex justify-center items-center bg-sea2 bg-fixed bg-no-repeat bg-cover bg-center">
        <div class="p-10 backdrop-blur-lg">
          <h2 class="font-bold text-4xl">Sample Section</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab numquam
            eveniet molestias veniam, inventore sint voluptates nam provident
            impedit laborum ipsa vel quos amet laboriosam dolorum suscipit!
            Nihil eos repellendus blanditiis repellat laboriosam veniam quod
            maxime ab! Ea eveniet doloremque, excepturi totam, et molestias
            dicta accussemiboldbusdam quas sunt inventore!
          </p>
        </div>
      </div>
    </div>
  );
}
