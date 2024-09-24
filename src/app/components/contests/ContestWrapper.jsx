import Image from "next/image";
import { chopsic } from "@/app/layout";
import bg from "../../../../public/assets/images/background.webp";
import RulesAndGuidelinesPDF from "./ContestPDF";
import ContestItem from "./ContestItem";
import ContestsOptionPicker from "./ContestOptions";
import Footer from "../Footer";
import { contestList } from "@/data/contests";
import { navigations } from "@/data/navigations";

export default function ContestWrapper({ children }) {
  return (
    <div className="relative min-h-screen overflow-hidden">
      <div className="fixed inset-0 z-0">
        <Image
          src={bg}
          alt="Background"
          layout="fill"
          objectFit="cover"
          quality={100}
        />
      </div>

      <div className="relative z-10 min-h-screen flex flex-col">
        <main className="flex-grow pt-16 overflow-y-auto">
          <div className="container mx-auto px-4 py-8 mt-8">
            <h1
              className={`${chopsic.className} text-2xl sm:text-3xl md:text-4xl lg:text-5xl text-center text-transparent bg-clip-text bg-gradient-to-b from-[#81ECDE] to-[#59958480] drop-shadow mb-8`}
            >
              contests
            </h1>

            <div className="mx-auto flex flex-col gap-4 max-w-full w-full mb-8">
              <RulesAndGuidelinesPDF />
              <ContestsOptionPicker>
                {contestList.map((contest, index) => (
                  <ContestItem
                    key={index}
                    contest={contest}
                    href={`${navigations[2].href}/${contest}`}
                  />
                ))}
              </ContestsOptionPicker>
            </div>

            <div className="text-white backdrop-blur-md bg-black/50 rounded-xl p-6">
              {children}
            </div>
          </div>
        </main>
        <Footer />
      </div>
    </div>
  );
}