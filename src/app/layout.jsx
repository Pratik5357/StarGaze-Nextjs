import { Orbitron } from 'next/font/google';
import "./globals.css";
import Navbar from '@/components/Navbar';
import { Particles } from '@/components/particles';
import Footer from '@/components/Footer';
import { ApodProvider } from '@/context/ApodContext';
import AuthProvider from '@/context/AuthProvider';

const orbitron = Orbitron({ subsets: ['latin'], weight: ['400', '600', '800'] });

export const metadata = {
  title: "StarGaze",
  description: "StarGaze is a social media platform for the stars.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <AuthProvider>
        <ApodProvider>
          <body className={`${orbitron.className} orbitron-font antialiased`}>
            <div className="relative min-h-dvh w-full flex-col overflow-hidden md:shadow-xl">
              <div className='absolute inset-0 z-10'>
                <nav className='navbar'>
                  <Navbar />
                </nav>
                <main >
                  {children}
                </main>
                <footer>
                  <Footer />
                </footer>
              </div>
              <Particles
                className="absolute inset-0 z-0"
                quantity={100}
                ease={80}
                refresh
              />
            </div>
          </body>
        </ApodProvider>
      </AuthProvider>
    </html>
  );
}
