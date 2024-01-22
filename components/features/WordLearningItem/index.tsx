'use client'
import { colors } from '@/utils/colors'
import React, { useCallback, useState } from 'react'
import styled from 'styled-components'
import VolumeUpFillIcon from 'remixicon-react/VolumeUpFillIcon'
import { getVoice } from '@/helpers/getVoice'
import Button from '@/components/molecules/Button/Button'
import { Chip, Collapse } from '@mui/material'
import { LessonVocabulary } from '@/types'

type PropTypes = {
  vocabulary: LessonVocabulary[]
  clickHandler: (num: number) => void
}

export default function WordLearningItem({ vocabulary, clickHandler }: PropTypes) {
  const [activeIndex, setActiveIndex] = useState<number>(0)
  const [activeItem, setActiveItem] = useState<LessonVocabulary>(vocabulary[activeIndex])
  const [isTranslated, setIsTranslated] = useState<boolean>(false)
  const [isDone, setIsDone] = useState<boolean>(false)

  const handleTranslateClick = useCallback(() => {
    setIsTranslated(true)

    if (activeIndex + 1 === vocabulary.length) {
      setIsDone(true)
    }
    if (isTranslated) {
      setActiveIndex(activeIndex + 1)
      setActiveItem(vocabulary[activeIndex + 1])
      setIsTranslated(false)
    }
  }, [activeIndex, isTranslated, vocabulary])

  const counterLabel = `${activeIndex + 1} / ${vocabulary.length}`

  const handleNextExercise = () => clickHandler(1)

  return (
    <Root>
      <WordContainer>
        <Word>{activeItem.en}</Word>
        <VolumeAction onClick={() => getVoice(activeItem.en)} />
        <Counter label={counterLabel} $isDone={isDone} />
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
          <StyledButton
            label={'NEXT EXERCISE'}
            color="green"
            size="medium"
            disabled={false}
            onClick={handleNextExercise}
          ></StyledButton>
        )}
      </ButtonContainer>
    </Root>
  )
}

const Root = styled.div`
  display: grid;
  gap: 15px;
  min-width: 500px;
  max-width: 550px;
  margin: 0 auto;
  padding: 16px;
  border: ${colors.lightGrey2} 1px solid;
  border-radius: 15px;
  text-align: center;
  background: #f6ffff;
  min-height: 500px;
  position: relative;
  @media screen and (max-width: 767px) {
    min-height: 550px;
    min-width: 100%;
  }
`

const WordContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 10px;
  position: relative;
`

const Counter = styled(Chip)<{ $isDone: boolean }>`
  position: absolute;
  top: -5px;
  right: 0;
  background: ${props => (props.$isDone ? colors.green : 'auto')};
`

const SynonymCover = styled.div`
  display: flex;
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
  @media screen and (max-width: 767px) {
    grid-template-columns: 1fr;
    gap: 10px;
  }
`

const ButtonContainer = styled.div`
  display: grid;
  justify-content: center;
  gap: 20px;
  position: absolute;
  bottom: 15px;
  left: 0;
  right: 0;
  margin-left: auto;
  margin-right: auto;
`

const StyledButton = styled(Button)`
  margin: 0 auto;
  width: fit-content;
`
