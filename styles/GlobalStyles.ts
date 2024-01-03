'use client'
import { createGlobalStyle } from 'styled-components'

const GlobalStyles = createGlobalStyle`
  * {
  box-sizing: border-box;
  padding: 0;
  margin: 0;
}

html,
body {
  max-width: 100vw;
  overflow-x: hidden;
}

a {
  color: inherit;
  text-decoration: none;
}

`

export default GlobalStyles
