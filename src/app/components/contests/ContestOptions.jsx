function ContestsOptionPicker({ children }) {
  return (
    <div className="relative w-fit mx-auto px-[8px] py-[8px] bg-[#5D6D5C] rounded-md max-w-full overflow-hidden">
      <div className="flex gap-[16px] py-[4px] w-full overflow-x-auto scrollbar scrollbar-thumb-white scrollbar-track-[#5D6D5C]">
        {children}
      </div>
    </div>
  );
}
export default ContestsOptionPicker;
