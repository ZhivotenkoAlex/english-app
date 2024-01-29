import styled from 'styled-components'
import MenuItem from './MenuItem'
import { SideBar } from '../BurgerMenu'
import { useMediaQuery } from '@mui/material'
import { MENU_ITEMS } from '@/helpers/constants'

function Menu() {
  const isBurgerShown = useMediaQuery('(min-width:1439px)')

  return isBurgerShown ? (
    <List>
      {MENU_ITEMS.map(item => (
        <MenuItem key={item.id} item={item} />
      ))}
    </List>
  ) : (
    <SideBar>
      {MENU_ITEMS.map(item => (
        <MenuItem key={item.id} item={item} />
      ))}
    </SideBar>
  )
}

const List = styled('ul')`
  display: flex;
  list-style: none;
  gap: 1.5rem;
  @media (max-width: 1439px) {
    margin-left: 0;
    gap: 1.2rem;
  }
`

export default Menu
