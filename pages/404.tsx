import Link from 'next/link'
import styled from 'styled-components'

export default function NotFound() {
  return (
    <Root>
      <Content>
        <h2>Not Found</h2>
        <p>Could not find requested resource</p>
        <Link href="/">Return Home</Link>
      </Content>
    </Root>
  )
}

const Root = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`

const Content = styled.div``
