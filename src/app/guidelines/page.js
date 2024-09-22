

import Header from "../components/Header";
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
            <Header />
            <div className="bg-tiringbanay "></div>

            <div className="relative text-center md:text-left">
                <div className="uppercase font-chopsic text-center pb-10 md:pb-16 mt-32 md:mt-[155px] px-14 text-[24px] sm:text-[40px] tracking-[1.6px] ">general rules and guidelines</div>

                <div className="flex flex-col w-full sm:max-w-[1440px] py-8 px-4 sm:px-16 mx-auto rounded-none sm:rounded-2xl bg-[rgb(1,0,4)]/80 backdrop-blur-md z-1">
                    <div className="text-white flex flex-col mx-auto sm:mx-0">
                        <div className="font-chopsic flex justify-center sm:justify-start text-[24px] uppercase items-center  tracking-widest">rules and regulations</div>
                        <div className={`${poppins.className} leading-6 pt-8 list-decimal justify-center `}>
                            <li>All participants must be current students and/or faculty of West Visayas State University&#39;s College of Information and Communications  Technology.  </li>
                            <li>All CICTzens are encouraged to attend the event; hence, sanctions  will be imposed on students who will not attend (except for those with  valid excuses). </li>
                            <li>In the morning session, second-year to fourth-year students should  wear their TYPE B uniform, while first-year students can wear  ORANGE shirts. </li>
                            <li>In the afternoon session, all students can wear their Ready Player  One-themed outfits, WHILE sticking to the color choice of their team. </li>
                            <li>All CICT students are divided into thirteen (13) teams. Each group is  named after characters from Ready Player One. We’ve also provided Group Chat links for the different groups. </li>
                            <li>Each team will choose a Commander to lead their respective teams  and members. </li>
                            <li>The Commander can assign two (2) assistant commanders to help  them.  </li>
                            <li>The participants must abide by all rules and regulations set forth by the  CICT Student Council.</li>
                        </div>
                    </div>
                </div>

                <div className=" flex flex-col w-full sm:max-w-[1440px] my-10 sm:mt-16 py-8 px-4 sm:px-16 mx-auto rounded-none sm:rounded-2xl backdrop-blur-md bg-[rgb(1,0,4)]/80 backdrop-blur-md z-1">
                    <div className="text-white flex flex-col mx-auto sm:mx-0">
                        <div className="font-chopsic flex justify-center sm:justify-start text-[24px] uppercase items-center tracking-widest">scoring and awarding system</div>
                        <div className={`${poppins.className} mt-8 mb-6 leading-6 list-decimal `}>
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