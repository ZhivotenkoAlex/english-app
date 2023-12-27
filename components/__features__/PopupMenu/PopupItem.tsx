import styled from 'styled-components'
import { IPopupMenuItem } from '../../../types'
import { colors } from '../../../utils/colors'
import { useRouter } from 'next/router'

interface IPopupItem {
  item: IPopupMenuItem
}

function PopupItem({ item }: IPopupItem) {
  const router = useRouter()
  const handleClickPopupItem = () => {
    router.push(item.path)
  }
  return (
    <Item onClick={handleClickPopupItem}>
      {item.icon}
      {item.label}
    </Item>
  )
}

const Item = styled('li')`
  display: flex;
  cursor: pointer;
  border-radius: 6px;
  font-size: 16px;
  align-items: center;
  gap: 1rem;
  padding: 0.5rem;

  &:hover {
    color: ${colors.blue};
    background: ${colors.lightBlue};
    path {
      fill: ${colors.blue};
    }
  }
`
export default PopupItem
