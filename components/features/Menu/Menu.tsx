import styled from 'styled-components'
import MenuItem from './MenuItem'
import ROUTES from '@/helpers/routes'
import { SideBar } from '../BurgerMenu'
import { useMediaQuery } from '@mui/material'

function Menu() {
  const isBurgerShown = useMediaQuery('(min-width:1439px)')
  const MENU_ITEMS = [
    {
      id: 0,
      label: 'Dashboard',
      path: ROUTES.DASHBOARD,
    },
    {
      id: 1,
      label: 'Lessons',
      path: ROUTES.LESSONS,
    },
    {
      id: 2,
      label: 'Vocabulary',
      path: ROUTES.VOCABULARY,
    },

    {
      id: 3,
      label: 'Grammar',
      path: ROUTES.GRAMMAR,
    },

    {
      id: 4,
      label: 'Dictionary',
      path: ROUTES.DICTIONARY,
    },
    {
      id: 5,
      label: 'Reading',
      path: ROUTES.READING,
    },
  ]
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
