import Header from "../components/Header"
import { chopsic } from "../layout"
import groups from "/src/data/groups"
import Image from 'next/image'
import Link from 'next/link'

export default function GroupingsPage() {

    // console.log(groups)

    return (
        <>
            <Header font={chopsic.variable} />
            <main className="h-screen flex flex-col w-screen">
                {/* Groupings */}
                {/* 'sm': '640px',

                'md': '768px 
                
                 bg-blue-300 md:bg-red-300
                */}
                <h1 className="mt-28 md:mt-40  text-[40px] font-bold text-center">Groupings</h1>
                <section className="

                flex flex-wrap justify-center w-full mx-auto py-10 pb-20
                ">
                    {groups.map((group) => {
                        return (
                            <div key={group.key}
                                className="
                                cursor-pointer flex flex-col w-60 h-80 justify-center items-center
                                shadow-lg border border-gray-200 m-5 rounded-xl
                                md:hover:scale-110 hover:bg-gray-100 hover:border-blue-500 hover:shadow-xl duration-100
                                ">
                                <Link href={`/groupings/${group.name}`}>
                                    <Image
                                        className="max-h-full bg-contain"
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
        </>
    )
}

