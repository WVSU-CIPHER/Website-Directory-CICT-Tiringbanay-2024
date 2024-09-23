import StudentSearch from "../components/StudentSearch"
import bg from "/public/assets/images/background.webp"
import Image from "next/image"
import Footer from "../components/Footer"

export default function StudentsSearchPage() {



    return (

        <div className="h-auto">
            <Image
                src={bg}
                alt="Background"
                layout="fill"
                objectFit="cover"
                quality={100}
            />


            {/*  */}
            <section className="mt-28 ">

                <StudentSearch />
                <Footer />
            </section>
        </div>
    )

}