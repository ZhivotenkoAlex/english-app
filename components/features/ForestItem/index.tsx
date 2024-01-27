'use client'
import React, { SyntheticEvent, useEffect, useState } from 'react'
import ProgressTimer from '../ProgressTimer'
import { forestData } from '@/helpers/forestData'
import { Chip } from '@mui/material'
import styled from 'styled-components'
import { colors } from '@/utils/colors'

export default function ForestItem({ inProgress, handleProgress }: any) {
  const [activeIndex, setActiveIndex] = useState(0)
  const [activeWord, setActiveWord] = useState(forestData[activeIndex])
  const [answer, setAnswer] = useState('')
  const [isWrong, setIsWrong] = useState(false)
  const [errorCount, setErrorCount] = useState(0)

  useEffect(() => {
    setActiveWord(forestData[activeIndex])
  }, [activeIndex])

  const handleChangeWord = () => {
    setActiveIndex(prev => prev + 1)
    setIsWrong(false)
    setAnswer('')
  }
  const handleFinish = () => handleProgress(true)

  const handleChipClick = (e: SyntheticEvent) => {
    const { textContent } = e.target as HTMLButtonElement

    if (answer !== '') {
      return
    }

    textContent && setAnswer(textContent)

    if (textContent !== activeWord.answer) {
      setIsWrong(true)
      setErrorCount(prev => prev + 1)
    } else {
      setIsWrong(false)
    }
  }

  return (
    <>
      <Root>
        <>
          <ProgressTimer
            rounds={forestData.length}
            handleChangeWord={handleChangeWord}
            handleFinish={handleFinish}
          />
          <Container $hasError={isWrong}>
            <Word>{activeWord.questionText}</Word>
            <Word>{errorCount}</Word>
          </Container>
          <ChipContainer>
            {activeWord.variants.map(item => (
              <StyledChip
                $isActive={answer === item.answerText}
                key={item.id}
                label={item.answerText}
                onClick={handleChipClick}
              />
            ))}
          </ChipContainer>
        </>
      </Root>
    </>
  )
}

const Root = styled.div`
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  gap: 10px;
  justify-content: center;
  align-items: center;
  min-height: 180px;
  @media screen and (max-width: 1023px) {
    flex-direction: column;
    align-items: center;
  }
  @media screen and (max-width: 767px) {
    max-width: 100%;
  }
`

const Container = styled.div<{ $hasError: boolean }>`
  display: flex;
  align-items: center;
  gap: 20px;
  margin: 20px 0;
  padding: 25px;
  background: ${props => (props.$hasError === true ? colors.lightWarning : colors.green)};
  width: fit-content;
  border-radius: 16px;
  @media screen and (max-width: 767px) {
    margin-bottom: 10px;
  }
`

const Word = styled.span`
  font-size: 20px;
  text-transform: uppercase;
`

const StyledChip = styled(Chip)<{ $isActive: boolean }>`
  && {
    font-size: 20px;
    background-color: ${props => (props.$isActive === true ? colors.green : colors.lightGreen)};
    padding: 20px;
  }
  &:hover {
    background-color: ${colors.green};
  }
`

const ChipContainer = styled.div`
  display: grid;
  align-items: center;
  justify-content: center;
  gap: 30px;
  margin: 20px auto;
  padding: 25px;
  background: ${colors.lightBlue};
  width: fit-content;
  border-radius: 16px;
  flex-wrap: wrap;
  grid-template-columns: repeat(4, 1fr);
  @media screen and (max-width: 1023px) {
    grid-template-columns: repeat(2, 1fr);
  }
  @media screen and (max-width: 767px) {
    grid-template-columns: repeat(1, 1fr);
    width: 100%;
  }
`
