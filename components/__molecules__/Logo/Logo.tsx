import styled from 'styled-components'
import Heading from '../../__atoms__/Heading/Heading'
import Image from 'next/image'
// import { useRouter } from "next/router"
import { useCallback } from 'react'
import { Typography } from '@mui/material'
import { colors } from '@/utils/colors'
import ROUTES from '@/helpers/routes'
import Link from 'next/link'

function Logo() {
  return (
    <Wrapper href={ROUTES.HOME}>
      <Image src="/images/logo.png" alt="logo" width={50} height={50} />
      <PageTitle variant="h6">EasyWay</PageTitle>
    </Wrapper>
  )
}

const Wrapper = styled(Link)`
  display: flex;
  align-items: center;
  gap: 1rem;
`

const PageTitle = styled(Typography)`
  padding: 6px 16px;
  color: ${colors.lightWhite};
  /* background: linear-gradient(90deg, #ff991f 0%, #ff671f 100%); */
  /* background-clip: text;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent; */
  text-transform: capitalize;
`

export default Logo
