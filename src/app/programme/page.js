
import Header from "../components/Header"
import { chopsic } from "../layout"
export default function ProgrammePage() {
    return (
        <div>
            <Header font={chopsic.variable} />
            <main className="h-screen flex flex-col w-screen">
                Programme
            </main>
        </div>
    )
}

