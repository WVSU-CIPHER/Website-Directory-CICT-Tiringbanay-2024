
import Header from "../../components/Header"
import { chopsic } from "../../layout"
import groupData from "/src/data/groups"
import { FaChevronLeft } from "react-icons/fa";
import Image from "next/image"
import bg from '../../public/assets/images/background.png'
import Link from 'next/link'

export default function GroupDetails({ params }) {

    const group = groupData.find(group => group.name === params.groupID);
    // console.log(group)

    return (
        <>
            <Header font={chopsic.variable} />

            <div className="flex flex-col items-center bg-red-300 relative
            h-auto md:h-screen overflow-hidden
            ">
                <Image
                    src={bg}
                    alt="Background"
                    layout="fill"
                    objectFit="cover"
                    quality={100}
                />


                <Link href={"/groupings"}>
                    <FaChevronLeft
                        className="cursor-pointer mt-32 absolute z-20 left-6 top-5 md:left-5 md:top-0"
                        size={35}

                    />
                </Link>


                {/* ABOUT THE TEAM */}
                <div className="mt-32  bg-[rgb(1,0,4)]/60 max-w-[90vw] h-fit relative z-10
                flex flex-col items-center md:flex-row
                px-8 md:px-10 pb-8 pt-2 md:pb-0 md:pt-0 rounded-lg
                
                ">


                    <Image
                        src={group.image}
                        width="auto"
                        height={250}
                        alt={group.name}
                        href="/"
                    />



                    <div className=" flex flex-col justify-center text-center md:text-left md:pl-10">
                        {/* Group Details {group.name} */}
                        {/* Key {group.key}  */}
                        <h1 className="text-2xl md:text-3xl text-white font-bold font-chopsic">{group.title}</h1>
                        <p className="mt-8 font-poppins text-base">{group.description}</p>

                    </div>






                </div >
                {/* GRUNTERS LIST */}
                <div className="
                relative z-10 flex flex-col mt-10 mb-10 px-10 py-8 rounded-lg
                 bg-[rgb(1,0,4)]/60 w-[90vw] h-fit
                 
                ">

                    <h2 className="font-chopsic text-xl font-bold mb-4">
                        Grunters
                    </h2>

                    <div className="overflow-y-auto  h-auto max-h-[250px] ">
                        <p>
                            test
                        </p>
                        <p>
                            test
                        </p>
                        <p>
                            test
                        </p>
                        <p>
                            test
                        </p>
                        <p>
                            test
                        </p>
                        <p>
                            test
                        </p>
                        <p>
                            test
                        </p>
                        <p>
                            test
                        </p>
                        <p>
                            test
                        </p>
                        <p>
                            test
                        </p>
                        <p>
                            test
                        </p>
                        <p>
                            test
                        </p>
                        <p>
                            test
                        </p>
                        <p>
                            test
                        </p>
                        <p>
                            test
                        </p>
                        <p>
                            test
                        </p>
                    </div>

                </div>
            </div>
        </>
    )
}