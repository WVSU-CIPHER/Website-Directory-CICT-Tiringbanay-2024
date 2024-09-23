import Link from "next/link";

function ContestItem({ contest, href, currentPath }) {
  const active = "bg-[#5A8070] border-[#7AD7C9]";
  return (
    <div className="">
      <Link href={href}>
        <div
          className={
            "uppercase font-semibold inline-flex items-center w-full p-2 h-full rounded-md border border-transparent  duration-200 cursor-pointer  text-nowrap " +
            currentPath
              ? active
              : ""
          }
        >
          <div className="block">{contest}</div>
        </div>
      </Link>
    </div>
  );
}

export default ContestItem;
