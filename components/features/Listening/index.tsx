'use client'
import React, { useCallback, useEffect, useState } from 'react'
import { colors } from '@/utils/colors'
import { Chip, PropTypes, TextField } from '@mui/material'
import styled from 'styled-components'
import VolumeUpFillIcon from 'remixicon-react/VolumeUpFillIcon'
import { getVoice } from '@/helpers/getVoice'
import Button from '@/components/molecules/Button/Button'
import { Form, Field } from 'react-final-form'
import QuestionLineIcon from 'remixicon-react/QuestionLineIcon'
import HintIcon from '@/components/atoms/HintIcon'
import { FormApi } from 'final-form'
import { AnswerStatus, LessonVocabulary } from '@/types'

type InitialValue = {
  word: string
}

type PropTypes = {
  vocabulary: LessonVocabulary[]
  handleFinish: () => void
  handleWrongWords: (item: LessonVocabulary) => void
}

export default function WordCheckingItem({
  vocabulary,
  handleFinish,
  handleWrongWords,
}: PropTypes) {
  const [activeIndex, setActiveIndex] = useState<number>(0)
  const [activeItem, setActiveItem] = useState<LessonVocabulary>(vocabulary[activeIndex])
  const [isDone, setIsDone] = useState<boolean>(false)
  const [answer, setAnswer] = useState<string>('')
  const [isCorrect, setIsCorrect] = useState<AnswerStatus>(AnswerStatus.PENDING)
  const hasError = isCorrect === AnswerStatus.FAIL
  const isChecked = isCorrect !== AnswerStatus.PENDING

  useEffect(() => {
    getVoice(activeItem?.translation)
  }, [activeItem?.translation, answer])

  const onSubmit = (data: InitialValue, form: FormApi) => {
    setAnswer(data.word)

    setIsCorrect(data.word === activeItem.translation ? AnswerStatus.SUCCESS : AnswerStatus.FAIL)
    if (activeIndex + 1 === vocabulary.length) {
      setIsDone(true)
    }
    if (hasError && answer) {
      handleWrongWords(activeItem)
    }
    if (isChecked && !isDone && answer) {
      setActiveIndex(activeIndex + 1)
      setActiveItem(vocabulary[activeIndex + 1])
      setIsCorrect(AnswerStatus.PENDING)
      setAnswer('')
      form.change('word', '')
    }
  }

  const counterLabel = `${activeIndex + 1} / ${vocabulary.length}`

  const getHint = useCallback(
    (form: FormApi) => {
      form.change('word', activeItem.translation)
      handleWrongWords(activeItem)
    },
    [activeItem, handleWrongWords],
  )

  return (
    <Root>
      <WordContainer>
        <VolumeAction size={30} onClick={() => getVoice(activeItem?.translation)} />
        <Counter label={counterLabel} $isDone={isDone} />
      </WordContainer>
      <Form
        onSubmit={onSubmit}
        render={({ handleSubmit, form }) => (
          <form onSubmit={handleSubmit}>
            {isDone || (isChecked && answer) ? null : (
              <Field
                name="word"
                render={({ input, meta }) => {
                  return (
                    <InputContainer>
                      <div>
                        <StyledTextField
                          {...input}
                          error={hasError}
                          placeholder="Введіть переклад"
                          autoComplete="off"
                          autoCorrect="false"
                          autoFocus={true}
                          disabled={isDone}
                        />
                        {meta.touched && meta.error && <span>{meta.error}</span>}
                      </div>
                    </InputContainer>
                  )
                }}
              />
            )}

            {isChecked && answer ? (
              <Container>
                <TranslationContainer $error={hasError}>
                  <Word>{activeItem.translation}</Word>
                </TranslationContainer>
                <Transcription>{activeItem.transcription}</Transcription>
                {isCorrect === AnswerStatus.FAIL && <FailedAnswer>{answer}</FailedAnswer>}
                <Word>{activeItem.title}</Word>
                <ExampleContainer></ExampleContainer>
              </Container>
            ) : (
              <IconContainer onClick={() => getHint(form)}>
                <HintIcon Icon={QuestionLineIcon} />
              </IconContainer>
            )}
            {isDone ? (
              <>
                <StyledButton label={'FINISH'} onClick={handleFinish}></StyledButton>
              </>
            ) : (
              <ButtonContainer>
                <StyledButton label={isChecked ? 'NEXT' : 'CHECK'} type="submit"></StyledButton>
              </ButtonContainer>
            )}
          </form>
        )}
      />
    </Root>
  )
}

const Root = styled.div`
  display: grid;
  gap: 15px;
  min-width: 500px;
  margin: 0 auto;
  padding: 16px;
  border: ${colors.lightGrey2} 1px solid;
  border-radius: 15px;
  text-align: center;
  background: #f6ffff;
  max-width: 500px;
  @media screen and (max-width: 767px) {
    min-width: 100%;
  }
`

const Container = styled.div`
  display: grid;
  gap: 10px;
`

const WordContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 10px;
  position: relative;
`

const TranslationContainer = styled.div<{ $error: boolean }>`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 20px;
  margin: 0 auto 20px auto;
  padding: 16px;
  background: ${({ $error }) => ($error ? colors.lightWarning : colors.lightGreen)};
  width: fit-content;
  border-radius: 16px;
  min-height: 62px;
  min-width: 236px;
`

const Word = styled.h4`
  text-transform: uppercase;
`

const Transcription = styled.p`
  color: ${colors.grey};
`

const FailedAnswer = styled.h4`
  text-decoration-line: line-through;
  text-decoration-thickness: 1.5px;
  color: ${colors.red};
  text-transform: uppercase;
`

const VolumeAction = styled(VolumeUpFillIcon)`
  fill: ${colors.successGreen};
  cursor: pointer;
  &:hover {
    fill: ${colors.blue};
  }
`

const ButtonContainer = styled.div`
  display: grid;
  justify-content: center;
  gap: 20px;
  margin-top: 20px;
`

const StyledButton = styled(Button)`
  margin: 0 auto;
`

const Counter = styled(Chip)<{ $isDone: boolean }>`
  position: absolute;
  top: -5px;
  right: 0;
  background: ${({ $isDone }) => ($isDone ? colors.green : 'auto')};
`

const ExampleContainer = styled.div``

const StyledTextField = styled(TextField)`
  input {
    text-align: center;
    font-size: 20px;
  }
`

const InputContainer = styled.div`
  display: grid;
  align-items: center;
  justify-content: center;
  gap: 10px;
`

const IconContainer = styled.div`
  display: flex;
  justify-content: center;
  margin: 20px 0;
`
