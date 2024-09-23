import Image from 'next/image'
import Link from 'next/link'
import bg from '/public/assets/images/background.webp'
import Footer from "../components/Footer"
import groups from "/src/data/groups"

export default function GroupingsPage() {
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
                    <h1 className="mt-10 md:mt-16  text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-chopsic font-bold text-center
                    text-transparent bg-clip-text bg-gradient-to-br from-[#81ECDE] to-[#59958480] drop-shadow  tracking-[1.6px]
                    pb-8 md:pb-14
                    ">
                        Groupings
                    </h1>

                    <section className="flex flex-wrap justify-center w-[90vw] max-w-[1440px] mx-auto py-10 mb-10 bg-[rgb(1,0,4)]/60 backdrop-blur-md rounded-xl">
                        {groups.map((group) => (
                            <div key={group.key} className="cursor-pointer flex flex-col w-50 h-70 max-h-[300px] justify-center items-center m-5 rounded-xl md:hover:scale-110 md:hover:drop-shadow-glow duration-100">
                                <Link href={`/groupings/${group.name}`}>
                                    <Image
                                        src={group.image}
                                        width={200}
                                        height={200}
                                        alt={group.name}
                                    />
                                </Link>
                            </div>
                        ))}
                    </section>
                </main>

                <Footer />
            </div>
        </div>
    )
}