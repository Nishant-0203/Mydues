import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import { ConvexClientProvider } from "@/components/convex-client-provider";
import { ClerkProvider } from "@clerk/nextjs";

const inter = Inter({ subsets: ["latin"] });


export const metadata = {
  title: "Mydues",
  description: "The smartest way to split expenses with friends",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/logos/logo-s.png" sizes="any"/>
      </head>
      <body
        className={`${inter.className}`}
      >
        <ClerkProvider>
        <ConvexClientProvider>

        
        <Header />
        <main className="flex min-h-screen flex-col items-center justify-between p-24">
        {children}
        </main>
        </ConvexClientProvider>
        </ClerkProvider>
      </body>
    </html>
  );
}
