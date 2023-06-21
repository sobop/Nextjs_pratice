import Link from "next/link";
import "./globals.css";
import LoginButton from "./LoginButton";
import LogoutButton from "./LogoutButton";
import { getServerSession } from "next-auth";
import { authOptions } from "@/pages/api/auth/[...nextauth]";

export default async function RootLayout({ children }) {
  let session = await getServerSession(authOptions);
  return (
    <html lang="en">
      <head />
      <body>
        <div className="navbar">
          <Link href="/" className="logo">
            Appleforum
          </Link>
          <Link href="/list">List</Link>
          <Link href="/write">Write</Link>
          <Link href="/register">Register</Link>
          {session === null ? <LoginButton /> : <LogoutButton />}
        </div>
        {children}
      </body>
    </html>
  );
}
