import { WarningIcon } from "../icons/Warning";

function RulesAndGuidelinesPDF() {
  return (
    <div className="flex w-fit items-center gap-6 rounded-md p-4 bg-black/50 backdrop-blur-sm max-w-full mx-auto h-fit">
      <WarningIcon />
      <div className="flex flex-col gap-1">
        <h1
          className={`font-semibold md:text-[14px] text-[12px] uppercase text-white`}
        >
          rules and guidelines
        </h1>

        <span>
          Download the updated version:{" "}
          <a href="/TIRINGBANAY-2024-GUIDELINES.pdf" className="ml-2 underline">
            PROGRAM-FLOW-RULES-and-GUIDELINES.pdf
          </a>
        </span>
      </div>
    </div>
  );
}

export default RulesAndGuidelinesPDF;
