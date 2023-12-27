import { COLOR } from '../../../utils/colors'

type HeadingColor = 'green' | 'red' | 'grey' | 'dark' | 'orange' | 'blue'

interface IHeading {
  size?: number
  color: HeadingColor
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
