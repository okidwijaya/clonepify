import { Inter } from "next/font/google";
import "./globals.css";
import TopNavigation from '@/components/TopNavigation';
import Footer from "@/components/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Clonepify",
  description: "Clonepify",
  icons: {
    icon: "/favicon-logo.svg",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}  suppressHydrationWarning={true}>
          <TopNavigation />
          {children}
          <Footer />
      </body>
    </html>
  );
}
