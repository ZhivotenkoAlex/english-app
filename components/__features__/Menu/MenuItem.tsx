import styled from 'styled-components'
import { colors } from '../../../utils/colors'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

interface IMenuItem {
  item: any
}
function MenuItem({ item }: IMenuItem) {
  const pathname = usePathname()
  const pageName = pathname.split('/').find(item => item !== '')
  const isItemActive = pageName?.toLowerCase() === item.label?.toLowerCase()
  return (
    <Wrapper>
      <Item href={item.path} color={colors.dark} $isActive={isItemActive}>
        <Label>{item.label}</Label>
      </Item>
    </Wrapper>
  )
}

const Item = styled(Link)<{ $isActive: boolean }>`
  display: flex;
  padding: 0 12px;
  border-radius: 16px;
  align-items: center;
  justify-content: center;
  background: transparent;
  color: ${props => (props.$isActive === true ? colors.dark : colors.lightWhite)};
  text-transform: uppercase;
  cursor: ${props => (props.$isActive === true ? 'default' : 'pointer')};
  &:hover {
    background: ${props => (props.$isActive === true ? 'transparent' : colors.lightGrey)};
    color: ${colors.dark};
  }
`

const Label = styled.p`
  font-size: 20px;
  font-weight: 600;
  line-height: 28px;
`

const Wrapper = styled.div``
export default MenuItem
