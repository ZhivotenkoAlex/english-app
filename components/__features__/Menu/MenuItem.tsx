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
  return (
    <Wrapper>
      <Item href={item.path} color={colors.dark}>
        <Label>{item.label}</Label>
      </Item>
    </Wrapper>
  )
}

const Item = styled(Link)`
  display: flex;
  padding: 0 12px;
  border-radius: 16px;
  align-items: center;
  justify-content: center;
  background: transparent;
  color: ${colors.lightWhite};
  text-transform: uppercase;
  cursor: pointer;
  &:hover {
    background: ${colors.lightGrey};
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
