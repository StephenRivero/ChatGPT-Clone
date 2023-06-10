import SideBar from "@/components/sidebar";
import "../app/globals.css";

export const metadata = {
  title: 'ChatGPT Clone',
  description: 'A ChatGPT Clone generated using Next.js',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head />
      <body>
        <div className="flex">
          <div className="bg-[#202123] max-w-xs h-screen overflow-y-auto md:min-w-[20rem]">
            <SideBar />
          </div>

          {/* ClientProvider - Notification */}
          


          <div className="bg-[#343541] flex-1">{children}</div>
        </div>
      </body>
    </html>
  )
}
