import Link from "next/link";

function ContestItem({ contest, href, currentPath }) {
  const active = "bg-[#5A8070] border-[#7AD7C9] border border-transparent";
  return (
    <div className="">
      <Link href={href}>
        <div
          className={
            "text-white uppercase font-semibold inline-flex items-center w-full p-2 h-full rounded-md   duration-200 cursor-pointer  text-nowrap " +
            active
          }
        >
          <div className="block text-white">{contest}</div>
        </div>
      </Link>
    </div>
  );
}

export default ContestItem;
