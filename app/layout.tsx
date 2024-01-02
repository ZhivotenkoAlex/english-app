'use client'
import { Roboto } from 'next/font/google'
import './globals.css'
import Providers from './providers'
import GlobalStyles from '@/styles/GlobalStyles'
import TopNavbar from '@/components/__features__/TopNavbar'
import BreadCrumbs from '@/components/__features__/Breadcrumbs'
import { usePathname } from 'next/navigation'

const roboto = Roboto({
  subsets: ['cyrillic', 'latin'],
  weight: ['400', '700'],
})

export default function RootLayout({ children }: { children: React.ReactNode }) {
  const pathname = usePathname()
  const isHomePage = pathname === '/'
  return (
    <html lang="en">
      <body className={roboto.className} suppressHydrationWarning>
        <Providers>
          <GlobalStyles />
          <TopNavbar />
          <main>
            {!isHomePage && <BreadCrumbs />}
            {children}
          </main>
        </Providers>
      </body>
    </html>
  )
}
