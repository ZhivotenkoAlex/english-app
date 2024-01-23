'use client'
import TranslateWordPopover from '@/components/molecules/TranslateWordPopover'
import { colors } from '@/utils/colors'
import React, { SyntheticEvent, useState } from 'react'
import styled from 'styled-components'
import Button from '../molecules/Button/Button'
import Link from 'next/link'
import ROUTES from '@/helpers/routes'
import Image from 'next/image'
import { IArticle } from '@/types'

type PropTypes = {
  content?: IArticle
}

export default function SingleArticlePage({ content }: PropTypes) {
  const [anchorEl, setAnchorEl] = React.useState<HTMLButtonElement | null>(null)
  const [activeWord, setActiveWord] = useState<string>('')
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false)

  const handleWordClick = (e: SyntheticEvent) => {
    const { textContent } = e.target as HTMLButtonElement
    setAnchorEl(e.currentTarget as HTMLButtonElement)
    const regSigns = textContent?.match(/[.,!?();:—"]/g)
    if (!textContent || !e.currentTarget || regSigns) {
      return
    }
    setActiveWord(textContent)
    setIsModalOpen(true)
  }

  const handleClose = () => {
    setAnchorEl(null)
    setIsModalOpen(false)
  }

  return (
    <Root>
      <ImageContainer>
        <StyledImage
          src={`/images/${content?.image}.jpg`}
          alt="word cloud"
          width={400}
          height={280}
        />
      </ImageContainer>
      <TitleContainer>
        {content?.data.parsedTitle[0].items.map((el: { w: string; id: string }) => {
          return (
            <Word key={el.id} onClick={handleWordClick}>
              {el.w}
            </Word>
          )
        })}
      </TitleContainer>
      {content?.data.parsedSentences.map((el, index) => {
        if (el.t) {
          return <EmptyString key={index}></EmptyString>
        }
        return el?.items?.map(word => {
          return (
            <Word key={word.id} onClick={handleWordClick}>
              {word.w}
            </Word>
          )
        })
      })}
      <TranslateWordPopover
        isOpen={isModalOpen}
        word={activeWord}
        anchorEl={anchorEl}
        handleClose={handleClose}
      />
      <ButtonContainer href={`${ROUTES.VOCABULARY}/articles`}>
        <Button fontColor={colors.lightWhite} label={'Back to articles'} />
      </ButtonContainer>
    </Root>
  )
}

const Root = styled.div`
  max-width: 70%;
  margin: 40px auto;
  line-height: 2;
`
const TitleContainer = styled.h2`
  margin-bottom: 30px;
  text-align: center;
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

const ButtonContainer = styled(Link)`
  display: flex;
  justify-content: center;
  margin-top: 20px;
`

const ImageContainer = styled.div`
  display: flex;
  justify-content: center;
  margin-bottom: 20px;
`

const StyledImage = styled(Image)`
  object-fit: contain;
`
