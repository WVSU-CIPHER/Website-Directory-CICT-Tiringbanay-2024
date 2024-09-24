import Image from "next/image"
import Link from 'next/link'
import { FaChevronLeft } from "react-icons/fa"
import bg from '/public/assets/images/background.webp'
import groupData from "/src/data/groups"
import StudentList from '@/app/components/StudentList'
import Footer from "../../components/Footer"

export default function GroupDetails({ params }) {
    const group = groupData.find(group => group.name === params.groupID)

    return (
        <div className="relative min-h-screen overflow-hidden">
            <div className="fixed inset-0 z-0">
                <Image
                    src={bg}
                    alt="Background"
                    layout="fill"
                    objectFit="cover"
                    quality={100}
                />
            </div>

            <div className="relative z-10 min-h-screen flex flex-col">
                <main className="flex-grow pt-16 overflow-y-auto">
                    <div className="container mx-auto px-4 pt-8 pb-10">
                        <Link href="/groupings" className="mt-32 md:mt-0 absolute z-20 left-6 top-5 md:static md:inline-block md:mb-4 text-white ">
                            <FaChevronLeft className="cursor-pointer" size={35} />
                        </Link>

                        {/* ABOUT THE TEAM */}
                        <div className="bg-[rgb(1,0,4)]/60 backdrop-blur-md rounded-lg p-6 md:p-10 mb-10">
                            <div className="flex flex-col md:flex-row items-center ">
                                <Image
                                    src={group.image}
                                    width={150}
                                    height={150}
                                    alt={group.name}
                                    className=" md:mr-10"
                                />
                                <div className="text-center md:text-left">
                                    <h1 className="text-2xl md:text-3xl font-bold font-chopsic text-transparent bg-clip-text bg-gradient-to-br from-[#81ECDE] to-[#59958480] drop-shadow">
                                        {group.title}
                                    </h1>
                                    <p className="mt-4 font-poppins text-white text-base">{group.description}</p>
                                </div>
                            </div>
                        </div>

                        {/* GRUNTERS LIST */}
                        <div className="bg-[rgb(1,0,4)]/60 backdrop-blur-md rounded-lg p-6 md:p-10">
                            <h2 className="font-chopsic text-xl font-bold mb-4 text-transparent bg-clip-text bg-gradient-to-br from-[#81ECDE] to-[#59958480] drop-shadow">
                                Grunters
                            </h2>
                            <StudentList groupKey={group.key} />
                        </div>
                    </div>
                </main>
                <Footer />
            </div>
        </div>
    )
}