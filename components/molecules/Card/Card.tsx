import CardWrapper from '@/components/atoms/CardWrapper/CardWrapper'
import React from 'react'
import TitleSubtitleComponent from '../TitleSubtitleComponent/TitleSubtitleComponent'
import { CardItem } from '@/types'
import { renderElement } from '@/helpers/renderElement'
import styled from 'styled-components'

interface ICard {
  items: CardItem[]
}
function Card({ items }: ICard) {
  return (
    <CardWrapper>
      {items.map(item => (
        <CardContent key={item.title}>
          {renderElement(item.icon)}
          <TitleSubtitleComponent title={item.title} subtitle={item.subtitle} />
        </CardContent>
      ))}
    </CardWrapper>
  )
}

const CardContent = styled.div`
  display: flex;
  gap: 1rem;
  align-items: center;
`

export default Card
