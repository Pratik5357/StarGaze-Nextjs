import { Barlow_Condensed } from "next/font/google";
import "./globals.css";
import { ApodProvider } from "@/context/ApodContext";

const condensed = Barlow_Condensed({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-condensed",
});

export const metadata = {
  title: "Stargaze",
  description: "NASA's daily astronomy picture on the cutting bench.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <ApodProvider>
        <body className={`${condensed.className} ${condensed.variable} antialiased bg-black text-white`}>
          {children}
        </body>
      </ApodProvider>
    </html>
  );
}
