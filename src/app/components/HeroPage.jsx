"use client";

import { Poppins } from "@next/font/google";
const poppins = Poppins({
  weight: ["400", "900"],
  variable: "--font-poppins",
  subsets: ["latin"],
});

export default function HeroPage() {
  return (
    <div>
      <div class="min-h-screen flex justify-center items-center bg-sea2 bg-fixed bg-no-repeat bg-cover bg-center">
        <div className="flex flex-col gap-3 text-center">
          <h1 class={`${poppins.className} text-[18px] uppercase`}>
            a shift in reality
          </h1>
          <div className="flex flex-col gap-4 text-center">
            <h1 className="text-[72px] font-chopsic">tiringbanay</h1>
            <h2 className="text-[24px] font-chopsic">2024</h2>
          </div>
          <div className="flex items-center gap-8 justify-center">
            <button className="rounded bg-slate-800">
              <span className="uppercase">find your group</span>
            </button>
            <button className="rounded bg-slate-800">
              <span className="uppercase">find your group</span>
            </button>
          </div>
        </div>
      </div>

      <div class="min-h-screen flex justify-center items-center bg-sea2 bg-fixed bg-no-repeat bg-cover bg-center">
        <div class="p-10 h-screen bg-transparent bg-opacity-50 backdrop-blur-lg">
          <h2 class="font-bold text-4xl">Sample Section</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab numquam
            eveniet molestias veniam, inventore sint voluptates nam provident
            impedit laborum ipsa vel quos amet laboriosam dolorum suscipit!
            Nihil eos repellendus blanditiis repellat laboriosam veniam quod
            maxime ab! Ea eveniet doloremque, excepturi totam, et molestias
            dicta accusamus quibusdam quas sunt inventore!
          </p>
        </div>
      </div>
    </div>
  );
}
