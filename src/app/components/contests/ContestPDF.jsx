import { WarningIcon } from "../icons/Warning";

function RulesAndGuidelinesPDF() {
  return (
    <div className="text-white flex w-fit items-center gap-6 rounded-md p-4 bg-black/50 backdrop-blur-sm max-w-full mx-auto h-fit">
      <WarningIcon />
      <div className="flex flex-col gap-1 text-white">
        <h1
          className={`font-semibold md:text-[14px] text-[12px] uppercase text-white`}
        >
          rules and guidelines
        </h1>

        <span>
          Download the updated version:{" "}
          <a
            target="_blank"
            href="/TIRINGBANAY-2024-GUIDELINES.pdf"
            className="ml-2 text-sm sm:text-sm md:text-md lg:text-lg underline hover:text-[#7AD7CA] duration-200"
          >
            PROGRAM-FLOW-RULES-and-GUIDELINES.pdf
          </a>
        </span>
      </div>
    </div>
  );
}

export default RulesAndGuidelinesPDF;
