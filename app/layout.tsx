import { Inter } from "@next/font/google";
import "./globals.css";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";

// Import Inter font
const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={inter.variable} suppressHydrationWarning>
      <body className="bg-[#111827] gradient main ">
        {/* <AnimatedBackground /> */}
        <Nav />
        {children}
        <Footer />
      </body>
    </html>
  );
}
