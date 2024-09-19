import Header from "../components/Header"
import { chopsic } from "../layout"
import groups from "/src/data/groups"
import Image from 'next/image'
import Link from 'next/link'
import bg from '../public/assets/images/background.png'

export default function GroupingsPage() {

    {/*
                'sm': '640px',
                'md': '768px 
                'lg': '1024px'
                */}

    return (
        <div className="relative h-screen overflow-hidden">
            <Image
                src={bg}
                alt="Background"
                layout="fill"
                objectFit="cover"
                quality={100}
            />

            <Header font={chopsic.variable} />
            <main className="h-screen flex flex-col w-screen relative z-10  overflow-y-scroll">
                {/* Groupings */}
                <h1 className="mt-32 mb-8 md:mt-32 md:mb-8  text-[40px] md:text-[60px] font-chopsic font-bold text-center">Groupings</h1>

                <section className="

                flex flex-wrap  justify-center w-[90vw] mx-auto py-10 mb-10
               bg-[rgb(1,0,4)]/60 rounded-xl
                ">
                    {groups.map((group) => {
                        return (
                            <div key={group.key}
                                className="
                                cursor-pointer flex flex-col w-50 h-70 max-h-[300px] justify-center items-center
                                m-5 rounded-xl
                                md:hover:scale-110 md:hover:drop-shadow-glow duration-100
                
                                ">
                                <Link href={`/groupings/${group.name}`}>
                                    <Image
                                        src={group.image}
                                        width={200}
                                        height={200}
                                        alt={group.name}
                                        href="/"
                                    />
                                </Link>



                            </div>
                        )
                    })}



                </section>
            </main>
        </div>
    )
}

