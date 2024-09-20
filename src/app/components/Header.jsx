import Link from "next/link";
import { Poppins } from "next/font/google";

// Fonts
const poppins = Poppins({
  weight: ["400", "900"],
  variable: "--font-poppins",
  subsets: ["latin"],
});

// Navigations
import { navigations } from "@/data/navigations";

export default function Header() {

  return (
    <div className="w-full z-[100] fixed top-0 right-0 flex flex-col px-[64px] py-[32px]">
      <nav className="max-w-[1440px] mx-auto w-full flex items-center justify-between">
        <Link href="/">
          <span className="font-chopsic">tiringbanay</span>
        </Link>
        <div className="flex links text-[14px]  items-center gap-[48px]">
          {navigations.map((navigation, index) => (
            <Link key={index} href={navigation.href}>
              <span className={`${poppins.className} text-slate-100 font-sans`}>
                {navigation.name.slice(0, 1).toUpperCase() +
                  navigation.name.slice(1)}
              </span>
            </Link>
          ))}
        </div>
      </nav>
    </div>
  );
}
