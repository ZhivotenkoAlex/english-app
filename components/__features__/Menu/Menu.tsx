import styled from 'styled-components'
import MenuItem from './MenuItem'
import ROUTES from '@/helpers/routes'

function Menu() {
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
  ]
  return (
    <List>
      {MENU_ITEMS.map(item => (
        <MenuItem key={item.id} item={item} />
      ))}
    </List>
  )
}

const List = styled('ul')`
  display: flex;
  list-style: none;
  gap: 1.5rem;
`

export default Menu
