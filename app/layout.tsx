import { Roboto } from 'next/font/google'
import './globals.css'
import Providers from './providers'
import GlobalStyles from '@/styles/GlobalStyles'
import TopNavbar from '@/components/features/TopNavbar'
// import BreadCrumbs from '@/components/__features__/Breadcrumbs'
import { Metadata } from 'next'

const roboto = Roboto({
  subsets: ['cyrillic', 'latin'],
  weight: ['400', '700'],
})

export const metadata: Metadata = {
  title: {
    template: '%s | EasyWay',
    default: 'EasyWay',
  },
  description: 'Easy way to learn English',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={roboto.className} suppressHydrationWarning>
        <Providers>
          <GlobalStyles />
          <TopNavbar />
          <main>
            {/* <BreadCrumbs /> */}
            {children}
          </main>
        </Providers>
      </body>
    </html>
  )
}
