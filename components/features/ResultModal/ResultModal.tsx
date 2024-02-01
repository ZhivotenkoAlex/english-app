import CardWrapper from '@/components/atoms/CardWrapper/CardWrapper'
import Button from '@/components/molecules/Button/Button'
import TitleSubtitleComponent from '@/components/molecules/TitleSubtitleComponent/TitleSubtitleComponent'
import { getExerciseResultStatus } from '@/helpers/resultStatuses'
import { IForestItem, IWord } from '@/types'
import Link from 'next/link'
import React, { useMemo } from 'react'
import styled from 'styled-components'
import ResultWordsList from '../ResultWordsList/ResultWordsList'
import { COLORS_ENUM } from '@/utils/colors'
import ROUTES from '@/helpers/routes'

interface IResultModal {
  learnedWords: IWord[] | IForestItem[]
  wrongWords: IWord[] | IForestItem[]
  onCloseTarget?: ROUTES
  handleRepeat: () => void
}
function ResultModal({
  onCloseTarget = ROUTES.VOCABULARY,
  learnedWords,
  wrongWords,
  handleRepeat,
}: IResultModal) {
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
          <ButtonContainer>
            <LinkWrapper>
              <Link href={onCloseTarget}>
                <Button label="Закрити" color={COLORS_ENUM.GREY} fullWidth />
              </Link>
            </LinkWrapper>
            <Button label="Повторити" color={COLORS_ENUM.BLUE} onClick={handleRepeat} />
          </ButtonContainer>
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
  margin: 30px 0;
`

const Content = styled.div`
  padding: 2rem;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  gap: 1rem;
`

const ButtonContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 10px;
`
export default ResultModal
