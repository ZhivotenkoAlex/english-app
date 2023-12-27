import Layout from '@/components/__features__/Layout'
import StyledComponentsRegistry from '@/lib/registry'
import theme from '@/lib/theme'
import '@/styles/globals.css'
import { ThemeProvider } from '@mui/material'
import type { AppProps } from 'next/app'
import Head from 'next/head'

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider theme={theme}>
      <Layout>
        <Head>
          <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        </Head>

        <StyledComponentsRegistry>
          <Component {...pageProps} />
        </StyledComponentsRegistry>
      </Layout>
    </ThemeProvider>
  )
}
