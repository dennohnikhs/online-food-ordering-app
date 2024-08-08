import { ClerkProvider } from "@clerk/nextjs";
import "./globals.css";
import Provider from "./Provider";


export const metadata = {
  title: "qmsi restaurant shop",
  description: "Next js full stack online food ordering application",
};

export default function RootLayout({ children }) {
  return (
    <ClerkProvider>
      <html>
        <head />
        <body>
          <Provider>{children}</Provider>
        </body>
      </html>
    </ClerkProvider>
  );
}
