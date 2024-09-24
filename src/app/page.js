import HeroPage from "./components/HeroPage";
import { Analytics } from '@vercel/analytics/react';

export default function Home() {
  return (
    <main>
      <HeroPage />
      <Analytics />
    </main>
    
  )
}
