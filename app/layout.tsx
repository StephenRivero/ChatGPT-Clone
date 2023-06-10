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
          {/* Sidebar */}

          {/* ClientProvider - Notification */}
          


          <div className="bg-[#343541] flex-1">{children}</div>
        </div>
      </body>
    </html>
  )
}
