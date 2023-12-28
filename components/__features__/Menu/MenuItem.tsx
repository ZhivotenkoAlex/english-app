import styled from 'styled-components'
import { colors } from '../../../utils/colors'
import { useRouter } from 'next/router'
import { IMenuItem as IMenuItemType } from '../../../types'
import Link from 'next/link'
import Typography from '@mui/material/Typography'

interface IMenuItem {
  item: IMenuItemType
}
function MenuItem({ item }: IMenuItem) {
  const router = useRouter()

  const handleItemClick = () => {
    router.push(item.path)
  }

  return (
    <Wrapper>
      <Item href={item.path} color={colors.dark}>
        <Typography variant="menu-item">{item.label}</Typography>
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

const Wrapper = styled.div``
export default MenuItem
