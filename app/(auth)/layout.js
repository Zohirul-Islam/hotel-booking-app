import { Inter } from "next/font/google";
import "../globals.css";
import Navbar from "@/components/Navbar";
import {connectDb} from "@/config/db.js"
const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "StaySwift",
  description: "One place stop for hospitability",
};

export default async function RootLayout({ children }) {
  await connectDb()
  return (
    <html lang="en">
      <body className={inter.className}>
        <Navbar sideMenu ={false} />
        <main>
          {children}
        </main>
      </body>
    </html>
  );
}