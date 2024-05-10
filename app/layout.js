import { ClerkProvider } from "@clerk/nextjs";
import "./globals.css";
import Provider from "./Provider";

import { Inter as FontSans } from "next/font/google";

import { cn } from "@/lib/utils";

export const metadata = {
  title: "qmsi restaurant shop",
  description: "Next js full stack online food ordering application",
};

const fontSans = FontSans({
  subsets: ["latin"],
  variable: "--font-sans",
});

export default function RootLayout({ children }) {
  return (
    <ClerkProvider>
      <html lang="en" suppressHydrationWarning>
        <head />
        <body
          className={cn(
            "min-h-screen bg-background font-sans antialiased",
            fontSans.variable
          )}
        >
          <Provider>{children}</Provider>
        </body>
      </html>
    </ClerkProvider>
  );
}
