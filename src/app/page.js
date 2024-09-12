import HeroPage from "./components/HeroPage";
import { chopsic } from "./layout";
import Header from "./components/Header";


export default function Home() {
  return (
    <main>
      <Header font={chopsic.variable} />
      <HeroPage />
    </main>
  )
}
