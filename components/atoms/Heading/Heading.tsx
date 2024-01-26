import { COLOR, COLORS_ENUM } from '../../../utils/colors'

interface IHeading {
  size?: number
  color: COLORS_ENUM
  title: string
  fontWeight?: number
}

function Heading({ color, title, size = 24, fontWeight = 600, ...rest }: IHeading) {
  return (
    <div
      style={{
        maxWidth: '300px',
        fontSize: size,
        color: COLOR[color],
        fontWeight,
        textAlign: 'center',
        textTransform: 'uppercase',
      }}
      {...rest}
    >
      {title}
    </div>
  )
}

export default Heading
