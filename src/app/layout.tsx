import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/footer";
import { Providers } from "@/components/Provider";
const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Dine Market",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Providers>
        {/* Header */}
        <Header />
        {/* Hero Section  */}
        <main className="px-24 ">
          

          {children}
         
        </main>
        {/* Footer */}

        <Footer />
        </Providers>
      </body>
    </html>
  );
}
