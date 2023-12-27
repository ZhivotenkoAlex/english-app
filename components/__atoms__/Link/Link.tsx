import { COLOR } from '../../../utils/colors'

type LinkColor = 'green' | 'red' | 'grey' | 'dark' | 'orange' | 'blue'

interface ILink {
  size?: number
  onClick: () => void
  color: LinkColor
  title: string
  fontWeight?: number
}

function Link({ onClick, color, title, size = 24, fontWeight = 600 }: ILink) {
  return (
    <div
      onClick={onClick}
      style={{
        padding: '8px 12px',
        fontSize: size,
        color: COLOR[color],
        fontWeight,
        textAlign: 'center',
        textTransform: 'uppercase',
        cursor: 'pointer',
      }}
    >
      {title}
    </div>
  )
}

export default Link
