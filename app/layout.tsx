// 'use client';
import "../app/globals.css";
import { SessionProvider } from "next-auth/react";
import { getServerSession, } from "next-auth/next";
import Login from "@/components/Login";
import { authOptions } from "@/pages/api/auth/[...nextauth]";
import { Session } from "next-auth";
import SideBar from "@/components/Sidebar";
import { NextAuthProvider } from "@/components/NextAuthProvider";
import ClientProvider from "@/components/ClientProvider";

export const metadata = {
  title: 'ChatGPT Clone',
  description: 'A ChatGPT Clone generated using Next.js',
}

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
  session: Session | null;
}) {

  const session = await getServerSession(authOptions)

  return (
    <html lang="en">
      <head />
      <body>
        <NextAuthProvider session={session}>
          {!session ? (
            <Login />
          ): (
            <div className="flex">
              <div className="bg-[#202123] max-w-xs h-screen overflow-y-auto md:min-w-[20rem]">
                <SideBar />
              </div>

              {/* ClientProvider - Notification */}
              <ClientProvider />


              <div className="bg-[#343541] flex-1">{children}</div>
            </div>
          )}
        </NextAuthProvider>
        
      </body>
    </html>
  )
}
