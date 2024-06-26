import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ClerkProvider } from "@clerk/nextjs";
import { cn } from "@/lib/utils";
const inter = Inter({ subsets: ["latin"] });

import { Toaster } from "react-hot-toast";
import Header from "@/components/shared/Header";
import Footer from "@/components/shared/Footer";


export const metadata: Metadata = {
  title: "Xsure | SafeShare",
  description: "We Ensure: Freelancers Get Paid and ,Clients Receive Satisfactory Work",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ClerkProvider>
      <html lang="en" suppressHydrationWarning>
        <body className={cn("bg-gray-900", inter.className)}>
          <Header />
          {children}
          <Footer />
          <Toaster />
          <script src="https://unpkg.com/@dotlottie/player-component@latest/dist/dotlottie-player.mjs" type="module"></script> 
          <script src="https://unpkg.com/@dotlottie/player-component@latest/dist/dotlottie-player.mjs" type="module"></script> 

   
          <script src="https://checkout.razorpay.com/v1/checkout.js"></script>
        </body>
      </html>
    </ClerkProvider>
  );
}
