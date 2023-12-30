'use client'

import StyledComponentsRegistry from '@/lib/registry'
import theme from '@/lib/theme'
import React, { useState } from 'react'
import { QueryClientProvider, QueryClient } from 'react-query'
import { ThemeProvider } from 'styled-components'

function Providers({ children }: React.PropsWithChildren) {
  const [client] = useState(new QueryClient())

  return (
    <QueryClientProvider client={client}>
      <StyledComponentsRegistry>
        <ThemeProvider theme={theme}>{children}</ThemeProvider>
      </StyledComponentsRegistry>
    </QueryClientProvider>
  )
}

export default Providers
