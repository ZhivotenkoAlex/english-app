import styled from 'styled-components'
import Logo from '../../__molecules__/Logo/Logo'
import Menu from '../Menu/Menu'
import Avatar from '../Avatar/Avatar'
import { colors } from '@/utils/colors'

function TopNavbar() {
  return (
    <Wrapper>
      <Logo />
      <Menu />
      <Avatar />
    </Wrapper>
  )
}

export default TopNavbar

const Wrapper = styled.div`
  box-shadow: 0 0 10px 0 rgba(0, 0, 0, 0.2);
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 20px 2rem;
  background: ${colors.green};
`
