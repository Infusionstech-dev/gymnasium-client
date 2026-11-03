import { Barlow_Condensed, Poppins } from "next/font/google";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import "./globals.css";

const barlow = Barlow_Condensed({
  variable: "--font-barlow",
  subsets: ["latin"],
  weight: ["500", "600", "700", "800"],
});

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
});

export const metadata = {
  title: "AltaFit | Stronger People, Brighter Lives",
  description:
    "World-class training, expert coaches and a supportive community to help you become your strongest, healthiest self.",
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      className={`${barlow.variable} ${poppins.variable} h-full antialiased`}
    >
      <body className="flex min-h-full flex-col font-sans">
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
