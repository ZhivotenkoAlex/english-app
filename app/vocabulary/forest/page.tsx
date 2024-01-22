'use client'
import { content } from '@/helpers/forestData'
import { colors } from '@/utils/colors'
import React, { ChangeEvent, SyntheticEvent, useRef, useState } from 'react'
import styled from 'styled-components'

export default function Forest() {
  const [activeWord, setActiveWord] = useState<string>('')
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false)

  const handleWordClick = (e: SyntheticEvent) => {
    const { textContent } = e.target as HTMLButtonElement

    if (!textContent) {
      return
    }
    setActiveWord(textContent)
    setIsModalOpen(true)
  }
  return (
    <Root>
      <Title>{content.data.title}</Title>
      {content.data.parsedSentences.map((el, index) => {
        if (el.t) {
          return <EmptyString key={index}></EmptyString>
        }
        return el?.items?.map(word => {
          return (
            <Word key={word.p} onClick={handleWordClick}>
              {word.w}
            </Word>
          )
        })
      })}
    </Root>
  )
}

const Root = styled.div`
  max-width: 70%;
  margin: 20px auto;
  line-height: 2;
`

const Title = styled.h3`
  margin-bottom: 30px;
`

const EmptyString = styled.div`
  margin: 20px 0;
`

const Word = styled.span`
  cursor: pointer;
  &:hover {
    background: ${colors.lightBlue};
  }
`
