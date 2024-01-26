import Button from '@/components/molecules/Button/Button'
import WordDeleteButton from '@/components/molecules/WordDeleteButton/WordDeleteButton'
import { COLORS_ENUM } from '@/utils/colors'
import React from 'react'
import styled from 'styled-components'

interface IExerciseControlsButtons {
  exerciseInProgress: boolean
  handleSkipWord: () => void
  handleNextWord: () => void
}

function ExerciseControlsButtons({
  exerciseInProgress,
  handleSkipWord,
  handleNextWord,
}: IExerciseControlsButtons) {
  const handleDeleteWord = () => {}

  return (
    <Wrapper>
      <WordDeleteButton handleDeleteWord={handleDeleteWord} />
      {exerciseInProgress ? (
        <Button
          label="Skip"
          color={COLORS_ENUM.GREY}
          variant="contained"
          size="large"
          onClick={handleSkipWord}
        />
      ) : (
        <Button
          label="Next"
          color={COLORS_ENUM.GREEN}
          variant="contained"
          size="large"
          onClick={handleNextWord}
        />
      )}
    </Wrapper>
  )
}

const Wrapper = styled('div')`
  display: flex;
  padding: 10px 0;
  width: 100%;
  justify-content: space-between;
  align-items: center;

  svg {
    cursor: pointer;
  }
`

export default ExerciseControlsButtons
