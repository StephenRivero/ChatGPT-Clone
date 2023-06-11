'use client';

import SideBar from "@/components/sidebar";
import "../app/globals.css";
import { SessionProvider } from "next-auth/react";
import { authOptions } from "@/pages/api/auth/[...nextauth]";
import { getServerSession } from "next-auth";
import Login from "@/components/Login";

export const metadata = {
  title: 'ChatGPT Clone',
  description: 'A ChatGPT Clone generated using Next.js',
}

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {

  const session = await getServerSession(authOptions)

  return (
    <html lang="en">
      <head />
      <body>
        <SessionProvider session={session}>
          {!session ? (
            <Login />
          ): (
            <div className="flex">
              <div className="bg-[#202123] max-w-xs h-screen overflow-y-auto md:min-w-[20rem]">
                <SideBar />
              </div>

              {/* ClientProvider - Notification */}
              


              <div className="bg-[#343541] flex-1">{children}</div>
            </div>
          )}
        </SessionProvider>
      </body>
    </html>
  )
}
