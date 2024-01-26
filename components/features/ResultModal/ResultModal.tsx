import CardWrapper from '@/components/atoms/CardWrapper/CardWrapper'
import Button from '@/components/molecules/Button/Button'
import TitleSubtitleComponent from '@/components/molecules/TitleSubtitleComponent/TitleSubtitleComponent'
import { RESULT_STATUSES, getExerciseResultStatus } from '@/helpers/resultStatuses'
import { IWord } from '@/types'
import Link from 'next/link'
import React, { useMemo } from 'react'
import styled from 'styled-components'
import ResultWordsList from '../ResultWordsList/ResultWordsList'
import { COLORS_ENUM } from '@/utils/colors'

interface IResultModal {
  handleRepeat: () => void
  learnedWords: IWord[]
  wrongWords: IWord[]
}
function ResultModal({ handleRepeat, learnedWords, wrongWords }: IResultModal) {
  const subtitle = useMemo(
    () => `${learnedWords.length} вивчено, ${wrongWords.length} потрібно вивчити`,
    [learnedWords, wrongWords],
  )

  const status = useMemo(() => {
    return getExerciseResultStatus(learnedWords, wrongWords)
  }, [learnedWords, wrongWords])
  return (
    <Wrapper>
      <CardWrapper>
        <Content>
          <TitleSubtitleComponent reverse title={status.title} subtitle={subtitle} />
          <ResultWordsList wrongWords={wrongWords} learnedWords={learnedWords} />
          <Button label="Повторити" color={COLORS_ENUM.BLUE} onClick={handleRepeat} />
          <LinkWrapper>
            <Link href={'/vocabulary'}>
              <Button label="Закрити" color={COLORS_ENUM.GREY} onClick={() => {}} fullWidth />
            </Link>
          </LinkWrapper>
        </Content>
      </CardWrapper>
    </Wrapper>
  )
}

const LinkWrapper = styled('div')`
  width: 100%;

  a {
    width: 100%;
    display: block;
  }
`
const Wrapper = styled('div')`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`

const Content = styled.div`
  padding: 2rem;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  gap: 1rem;
`
export default ResultModal
