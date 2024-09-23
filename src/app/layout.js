import localFont from "next/font/local";
import "./globals.css";
import { Poppins } from "@next/font/google";
import Header from "./components/Header";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});


const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export const poppins = Poppins({
  weight: ["400", "900"],
  variable: "--font-poppins",
  subsets: ["latin"],
});


export const chopsic = localFont({
  src: './fonts/chopsic-cdnfonts/Chopsic-K6Dp.ttf',
  weight: "700 900",
  variable: '--font-chopsic'
})

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="h-full">
      <body className={`${geistSans.variable} ${poppins.variable} ${geistMono.variable} ${chopsic.variable} antialiased h-full`}>
        <div className="flex flex-col min-h-screen">
          <Header />
          <main className="flex-grow relative">
            {children}
          </main>
        </div>
      </body>
    </html>
  );
}
