import Image from "next/image";
import ContestsOptionPicker from "./ContestOptions";
import ContestItem from "./ContestItem";
import Footer from "../Footer";
import bg from "../../../../public/assets/images/background.png";
import { chopsic } from "@/app/layout";
import { poppins } from "@/app/layout";

import RulesAndGuidelinesPDF from "./ContestPDF";
import { contestList } from "@/data/contests";
import { navigations } from "@/data/navigations";

export default function ContestWrapper({ children }) {
  return (
    <div>
      {/* Content */}
      <div className="h-screen w-screen overflow-hidden">
        {/* Background */}
        <Image
          src={bg}
          alt="Background"
          layout="fill"
          objectFit="cover"
          quality={100}
        />

        {/* overscroll-y-scroll to cater scrolling on y axis */}
        <div className=" w-full h-full flex flex-col overflow-y-scroll relative gap-4">
          <div className="items-center justify-center flex flex-col w-[90%] mx-auto pt-[128px] gap-[32px]">
            <div className=" flex flex-col max-w-full w-full gap-[32px] ">
              <h1 className={`${chopsic.className} text-[40px] text-center`}>
                contests
              </h1>

              <div className="mx-auto flex flex-col gap-4 max-w-full w-full">
                {/* Banner for Rules and Guidelines PDF */}

                <RulesAndGuidelinesPDF />
                <ContestsOptionPicker>
                  <ContestItem
                    contest={contestList[0]}
                    href={`${navigations[2].href}/${contestList[0]}`}
                  />
                  <ContestItem
                    contest={contestList[1]}
                    href={`${navigations[2].href}/${contestList[1]}`}
                  />
                  <ContestItem
                    contest={contestList[2]}
                    href={`${navigations[2].href}/${contestList[2]}`}
                  />
                  <ContestItem
                    contest={contestList[3]}
                    href={`${navigations[2].href}/${contestList[3]}`}
                  />
                  <ContestItem
                    contest={contestList[4]}
                    href={`${navigations[2].href}/${contestList[4]}`}
                  />
                  <ContestItem
                    contest={contestList[5]}
                    href={`${navigations[2].href}/${contestList[5]}`}
                  />
                  <ContestItem
                    contest={contestList[6]}
                    href={`${navigations[2].href}/${contestList[6]}`}
                  />
                </ContestsOptionPicker>
              </div>
            </div>
            {/* Cards for rag content */}
            <div className="flex flex-col gap-0 md:gap-[64px] w-screen md:w-full z-[200] backdrop-blur-md bg-black/50">
              {/* <div dangerouslySetInnerHTML={{ __html: contentHtml }}></div> */}
              {/* <Sugilanon /> */}
              {/* <AvatarBanner /> */}
              {children}
            </div>
          </div>
          {/* Added footer */}
          <Footer />
        </div>
      </div>
    </div>
  );
}