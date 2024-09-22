import groupData from "/src/data/groups"
import { FaChevronLeft } from "react-icons/fa";
import Image from "next/image"
import bg from '/public/assets/images/background.png'
import Link from 'next/link'
import StudentList from '@/app/components/StudentList'
import Footer from "../../components/Footer"


export default function GroupDetails({ params }) {

    const group = groupData.find(group => group.name === params.groupID);
    // console.log(group)

    return (
        <>

            <div className="mb-10 flex flex-col items-center relative
            h-auto overflow-hidden
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
                <div className="mt-24  bg-[rgb(1,0,4)]/60 backdrop-blur-md
                max-w-[90vw] h-fit relative z-10
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
                        {/* Key {group.key - 1} */}
                        <h1 className="text-2xl md:text-3xl text-white font-bold font-chopsic">{group.title}</h1>
                        <p className="mt-8 font-poppins text-base">{group.description}</p>

                    </div>






                </div >
                {/* GRUNTERS LIST */}
                <div className="
                relative z-10 flex flex-col mt-10 mb-10 p-6 md:px-10 md:py-8 rounded-lg
                 bg-[rgb(1,0,4)]/60 backdrop-blur-md
                 w-[80%] h-fit
                 
                ">


                    <h2 className="font-chopsic text-xl font-bold mb-4">
                        Grunters
                    </h2>

                    <div className="  h-fit">


                        <StudentList groupKey={group.key} />



                    </div>

                </div>
            </div>
            <Footer />
        </>
    )
}