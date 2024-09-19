import Image from 'next/image';
import cictLogo from '../public/assets/heropage/logo-cict.png';
import { Poppins } from '@next/font/google';
import Link from 'next/link'

const poppins = Poppins({
  weight: ['400', '500', '600', '700', '800', '900'],
  variable: '--font-poppins',
  subsets: ['latin'],
});


export default function HeroPage() {
  return (
    <>
      <div className="bg-tiringbanay w-full h-screen fixed top-0 left-0"></div>

      <div className="relative">
        <div className="mt-52 ml-16 flex flex-col gap-4">

          <Image className="mx-auto sm:mx-0"
            src={cictLogo}
            alt="Cict Logo"
            width={72}
            height={72}
          />
          <div className={`uppercase text-[14px] mx-auto sm:mx-0 font-medium tracking-[4.48px] leading-[21px] text-white ${poppins.className}`}>
            A shift in reality
          </div>
          <div className="font-chopsic uppercase text-center sm:text-left leading-[52px] tracking-[2.5px] text-white text-[40px]">
            ict tiringbanay 2024
          </div>
        </div>

        <div className={`${poppins.className} mt-[50px] ml-16 flex flex-row gap-8 justify-center sm:justify-start`}>
          <Link href ="/groupings">
            <button className="flex uppercase h-[30px] bg-[#59958480] px-4 py-1 items-center sm:place-items-start sm:pb-4 gap-[8px] rounded-lg border-[1px] border-[rgb(129,236,222)] text-[14px] font-semibold">
              Find your Group
            </button>
          </Link>
          <div className="uppercase text-[14px] py-1 font-semibold tracking-wider">learn more</div>
        </div>
      </div>

      <div className="flex flex-col w-full sm:w-[1440px] mt-[240px] py-8 px-4 sm:px-16 mx-auto rounded-none sm:rounded-2xl backdrop-blur-md  bg-[#010004d8] sm:bg-[#01000499] z-1 relative">
        <div className="text-white flex flex-col px-4 sm:px-8">
          <div className="font-chopsic flex justify-center text-[24px] uppercase items-center pb-9 tracking-widest">rationale</div>
          <div className={`${poppins.className} justify-center`}>
            The College of Information and Communications Technology (CICT) has consistently been a beacon of innovation, creativity, and collaboration within the university. The college’s achievements are a testament to the collective efforts and dedication of its students, faculty, and staff. Tiringbanay 2024, organized by the CICT Student Council, is an engagement day designed to celebrate the spirit of unity and foster deeper connections within the CICT community.
            <br />
            <br />
            Tiringbanay CICT aims to inspire collaboration, enhance professional growth, and cultivate a strong sense of community among all CICT members. By bringing together students and faculty in an environment of learning and engagement, Tiringbanay CICT creates opportunities for personal and collective development.
          </div>
        </div>
      </div>


      <div className="flex flex-col w-full sm:w-[1440px] mt-0 sm:mt-16 py-8 px-0 sm:px-16 mx-0 sm:mx-auto rounded-none sm:rounded-2xl backdrop-blur-md bg-[#010004d8] sm:bg-[#01000499] z-1 relative">
        <div className="text-white flex flex-col px-8">
          <div className="font-chopsic flex justify-center text-[24px] uppercase items-center pb-9 tracking-widest">Objectives</div>
          <div className={`${poppins.className} `}>Tiringbanay CICT aims to achieve the following objectives:</div>
          <br />
          <div className={`${poppins.className} list-inside ml-3 gap-3`}>
            <li>To promote unity and strengthen bonds among students, across different  programs and year levels, and faculty within the CICT community through  interactive and collaborative activities. </li>
            <li>To create an inclusive environment that encourages active participation and  collaboration among CICTzens from different year levels.  </li>
            <li>To provide students with valuable knowledge and skills to prepare for their  future careers in the field of Information and Communications Technology.</li>
          </div>
        </div>
      </div>

      <div className="flex flex-col w-full sm:w-[1440px] mt-16 py-8 px-16 sm:mt-16 mx-auto rounded-none sm:rounded-2xl backdrop-blur-md bg-[#010004d8] sm:bg-[#01000499] z-1 relative">

        <div className="text-white flex flex-col px-8">
          <div className="font-chopsic text-center text-[24px] uppercase pb-9 tracking-widest">Guest Speakers</div>
        </div>

        <div className="grid grid-flow-row sm:grid-flow-col gap-8 px-4 sm:px-48 justify-items-center">
          <div className="flex flex-col items-center">
            <div className="circle"></div>
            <div className="uppercase font-chopsic pt-4 text-[18px] tracking-[0.72px] text-center">firstname lastname</div>
            <div className={`${poppins.className} pt-2 uppercase text-[14px] font-medium text-center`}>title</div>
            <div className="text-[14px] font-medium text-center pt-4">Lorem ipsum dolor sit amet,
              <br />educslierwjogn fmwoimdqocwi
            </div>
          </div>

          <div className="flex flex-col items-center">
            <div className="circle"></div>
            <div className="uppercase font-chopsic pt-4 text-[18px] tracking-[0.72px] text-center">firstname lastname</div>
            <div className={`${poppins.className} pt-2 uppercase text-[14px] font-medium text-center`}>title</div>
            <div className="text-[14px] font-medium text-center pt-4">Lorem ipsum dolor sit amet,
              <br />educslierwjogn fmwoimdqocwi
            </div>
          </div>

          <div className="flex flex-col items-center">
            <div className="circle"></div>
            <div className="uppercase font-chopsic pt-4 text-[18px] tracking-[0.72px] text-center">firstname lastname</div>
            <div className={`${poppins.className} pt-2 uppercase text-[14px] font-medium text-center`}>title</div>
            <div className="text-[14px] font-medium text-center pt-4">Lorem ipsum dolor sit amet,
              <br />educslierwjogn fmwoimdqocwi
            </div>
          </div>
        </div>

        <div className="flex justify-center mt-12">
          <div className="flex flex-col items-center">
            <div className="circle"></div>
            <div className="uppercase font-chopsic pt-4 text-[18px] tracking-[0.72px] text-center">firstname lastname</div>
            <div className={`${poppins.className} pt-2 uppercase text-[14px] font-medium text-center`}>title</div>
            <div className="text-[14px] font-medium text-center pt-4">Lorem ipsum dolor sit amet,
              <br />educslierwjogn fmwoimdqocwi
            </div>
          </div>
        </div>

      </div>

    </>
  );
}
