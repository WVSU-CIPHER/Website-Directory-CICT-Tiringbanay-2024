

import Footer from "../components/Footer";
import { Poppins } from '@next/font/google';

const poppins = Poppins({
    weight: ['400', '500', '600', '700', '800', '900'],
    variable: '--font-poppins',
    subsets: ['latin'],
});

export default function GuidelinesPage() {
    return (
        <main>

            <div className="bg-tiringbanay "></div>

            <div className="relative text-left pt-16">
                <h1 className="mt-10 md:mt-16 uppercase font-chopsic text-center px-14 text-xl sm:text-3xl md:text-4xl lg:text-5xl tracking-[1.6px]
                text-transparent bg-clip-text bg-gradient-to-br from-[#81ECDE] to-[#59958480] drop-shadow
                text-2xl sm:text-3xl md:text-4xl lg:text-5xl
                pb-8 md:pb-14
                ">general rules and guidelines</h1>

                <div className="flex flex-col w-full max-w-[95%]  py-8 px-4 sm:px-16 mx-auto
                rounded-lg md:rounded-xl
                bg-[rgb(1,0,4)]/80 backdrop-blur-md z-1">
                    <div className="text-white flex flex-col mx-auto sm:mx-0">
                        <div className="font-chopsic flex  text-center justify-center sm:justify-start uppercase items-center tracking-widest
                        text-transparent bg-clip-text bg-gradient-to-b from-[#81ECDE] to-[#59958480] drop-shadow
                        text-lg md:text-2xl
                        ">rules and regulations</div>
                        <div className={`${poppins.className} leading-6 pt-4 md:pt-8 list-decimal justify-center text-sm md:text-base`}>
                            <li>All participants must be current students and/or faculty of West Visayas State University&#39;s College of Information and Communications  Technology.  </li>
                            <li>All CICTzens are encouraged to attend the event; hence, sanctions  will be imposed on students who will not attend (except for those with  valid excuses). </li>
                            <li>In the morning session, all CICT students should wear color-coded outfit based on their team. </li>
                            <li>In the afternoon session, all students can wear their Ready Player One-themed outfits. </li>
                            <li>All CICT students are divided into thirteen (13) teams. Each group is  named after characters from Ready Player One. We’ve also provided Group Chat links for the different groups. </li>
                            <li>Each team will choose a Commander to lead their respective teams  and members. </li>
                            <li>The Commander can assign two (2) assistant commanders to help  them.  </li>
                            <li>The participants must abide by all rules and regulations set forth by the  CICT Student Council.</li>
                        </div>
                    </div>
                </div>

                <div className=" flex flex-col w-full max-w-[95%]  my-10 py-8 px-4 sm:px-16 mx-auto 
                rounded-lg md:rounded-xl 
                backdrop-blur-md bg-[rgb(1,0,4)]/80 backdrop-blur-md z-1">
                    <div className="text-white flex flex-col mx-auto sm:mx-0">
                        <div className="font-chopsic flex text-center justify-center sm:justify-start uppercase items-center tracking-widest
                        text-transparent bg-clip-text bg-gradient-to-b from-[#81ECDE] to-[#59958480] drop-shadow
                        text-lg md:text-2xl
                        ">scoring and awarding system</div>
                        <div className={`${poppins.className} mt-8 mb-6 leading-6 list-decimal text-sm md:text-base`}>
                            <li>A Ranking System will be utilized to determine the winners of each contest. The team with the highest number of points will be the winner. Should there be a tie, the official tabulators have the power to use the Point System. In case, the condition of deadlock occurs, the Chief Judge shall have the authority to break and conclude the results.</li>
                            <li>For overall ranking, below is the Point System that will be used for each contest/game. The team with the highest accumulated score from each contest will be held as the overall Tiringbanay 2024 winner. </li>
                            <li>Announcement of the winners will follow at the end of Panakayon - Engagement Games.</li>
                            <li> If there are protests regarding the results, a formal letter of complaint should be sent to the CICT Student Council email (cict_sc@wvsu.edu.ph) within twenty-four (24) hours after the event.</li>
                        </div>
                    </div>
                </div>



            </div>
            <Footer />
        </main>

    )
}