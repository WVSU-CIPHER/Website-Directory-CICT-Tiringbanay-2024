import Header from "../components/Header"
import { chopsic } from "../layout"
import Search from "../components/Search"


export default function StudentsSearchPage() {



    return (

        <>
            <Header font={chopsic.variable} />

            {/*  */}
            <section className="bg-red-400 md:mt-28">

                <Search />
            </section>
        </>
    )

}