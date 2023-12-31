import styled from 'styled-components'
import Image from 'next/image'
import { colors } from '@/utils/colors'
import ROUTES from '@/helpers/routes'
import Link from 'next/link'

function Logo() {
  return (
    <LinkWrapper href={ROUTES.HOME}>
      <Image src="/images/logo.png" alt="logo" width={50} height={50} />
      <PageTitle>EasyWay</PageTitle>
    </LinkWrapper>
  )
}

const LinkWrapper = styled(Link)`
  display: flex;
  align-items: center;
`

const PageTitle = styled.p`
  padding: 6px 16px;
  color: ${colors.lightWhite};
  text-transform: capitalize;
  font-size: 28px;
  font-weight: 600;
  line-height: 28px;
  letter-spacing: 0.15px;
`

export default Logo
