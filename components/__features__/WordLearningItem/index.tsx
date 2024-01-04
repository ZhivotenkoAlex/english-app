'use client'
import { colors } from '@/utils/colors'
import React, { useCallback, useState } from 'react'
import styled from 'styled-components'
import VolumeUpFillIcon from 'remixicon-react/VolumeUpFillIcon'
import { getVoice } from '@/helpers/getVoice'
import Button from '@/components/__molecules__/Button/Button'
import { Collapse } from '@mui/material'
import Link from 'next/link'
import ROUTES from '@/helpers/routes'

export default function WordLearningItem({ vocabulary, slug }: any) {
  const [activeIndex, setActiveIndex] = useState(0)

  const [activeItem, setActiveItem] = useState(vocabulary[activeIndex])

  const [isTranslated, setIsTranslated] = useState(false)
  const [isDone, setIsDone] = useState(false)

  const handleTranslateClick = useCallback(() => {
    setIsTranslated(true)
    setActiveIndex(activeIndex + 1)
    if (activeIndex + 1 === vocabulary.length) {
      setIsDone(true)
    }
    if (isTranslated) {
      setActiveItem(vocabulary[activeIndex])
      setIsTranslated(false)
    }
  }, [activeIndex, isTranslated, vocabulary])

  return (
    <Root>
      <WordContainer>
        <Word>{activeItem.en}</Word>
        <VolumeAction onClick={() => getVoice(activeItem.en)} />
      </WordContainer>
      <Transcription>{activeItem?.transcription}</Transcription>
      <Container>
        <Title>Definition:</Title>
        <Description>{activeItem?.definition}</Description>
      </Container>
      <Container>
        <Title>Example:</Title>
        <Description>{activeItem?.example}</Description>
      </Container>

      <Collapse orientation={'vertical'} in={isTranslated} timeout={500}>
        <>
          {isTranslated && (
            <Container>
              <Title>Synonyms:</Title>
              <SynonymsContainer>
                {activeItem?.synonyms.map(item => (
                  <SynonymCover key={item}>
                    <Word>{item}</Word>
                    <VolumeAction onClick={() => getVoice(item)} />
                  </SynonymCover>
                ))}
              </SynonymsContainer>
            </Container>
          )}
          <TranslationContainer>
            <Word>{isTranslated ? activeItem.ua : ' '}</Word>
          </TranslationContainer>
        </>
      </Collapse>

      <ButtonContainer>
        {!isDone ? (
          <StyledButton
            label={isTranslated ? 'NEXT' : 'TRANSLATE'}
            color="green"
            onClick={handleTranslateClick}
            size="medium"
            disabled={false}
          ></StyledButton>
        ) : (
          <Link href={`${ROUTES.LESSONS}/${slug}/words`}>
            <StyledButton
              label={'NEXT EXERCICE'}
              color="green"
              size="medium"
              disabled={false}
            ></StyledButton>
          </Link>
        )}
      </ButtonContainer>
    </Root>
  )
}

const Root = styled.div`
  display: grid;
  gap: 15px;
  width: 500px;
  margin: 0 auto;
  padding: 16px;
  border: ${colors.lightGrey2} 1px solid;
  border-radius: 15px;
  text-align: center;
  background: #f6ffff;
`

const WordContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 10px;
`

const SynonymCover = styled.div`
  display: flex;
  /* justify-content: center; */
  align-items: center;
  gap: 10px;
`

const TranslationContainer = styled.div`
  margin: 20px auto;
  padding: 16px;
  background: ${colors.lightBlue};
  width: fit-content;
  border-radius: 16px;
`

const Word = styled.h4`
  text-transform: uppercase;
`

const Transcription = styled.span`
  display: inline-block;
  color: ${colors.grey};
`

const Container = styled.div`
  display: grid;
  text-align: left;
  gap: 5px;
`

const Title = styled.span`
  letter-spacing: 0.5px;
  text-transform: uppercase;
  font-size: 14px;
  color: ${colors.grey};
`

const Description = styled.p`
  text-align: left;
  &::first-letter {
    text-transform: capitalize;
  }
`

const VolumeAction = styled(VolumeUpFillIcon)`
  fill: ${colors.successGreen};
  cursor: pointer;
  &:hover {
    fill: ${colors.blue};
  }
`

const SynonymsContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
`

const ButtonContainer = styled.div`
  display: grid;
  justify-content: center;
  gap: 20px;
`

const StyledButton = styled(Button)`
  margin: 0 auto;
  width: fit-content;
`

const AdditionContainer = styled.div``
