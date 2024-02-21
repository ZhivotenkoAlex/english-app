'use client'

import { ApolloWrapper } from '@/lib/apollo-wrapper'
import StyledComponentsRegistry from '@/lib/registry'
import theme from '@/lib/theme'
import React, { useState } from 'react'
import { QueryClientProvider, QueryClient } from 'react-query'
import { ThemeProvider } from 'styled-components'

function Providers({ children }: React.PropsWithChildren) {
  const [client] = useState(new QueryClient())

  return (
    // <QueryClientProvider client={client}>
    <ApolloWrapper>
      <StyledComponentsRegistry>
        <ThemeProvider theme={theme}>{children}</ThemeProvider>
      </StyledComponentsRegistry>
    </ApolloWrapper>
    // </QueryClientProvider>
  )
}

export default Providers
