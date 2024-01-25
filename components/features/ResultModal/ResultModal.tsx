import CardWrapper from '@/components/atoms/CardWrapper/CardWrapper'
import Button from '@/components/molecules/Button/Button'
import TitleSubtitleComponent from '@/components/molecules/TitleSubtitleComponent/TitleSubtitleComponent'
import { RESULT_STATUSES } from '@/helpers/resultStatuses'
import Link from 'next/link'
import React from 'react'
import styled from 'styled-components'

interface IResultModal {
  handleRepeat: () => void
}
function ResultModal({ handleRepeat }: IResultModal) {
  return (
    <Wrapper>
      <CardWrapper>
        <Content>
          <TitleSubtitleComponent
            reverse
            title={RESULT_STATUSES[0].title}
            subtitle="2 вивчено, 5 потрібно вивчити"
          />
          <Button label="Повторити" color="BLUE" onClick={handleRepeat} />
          <LinkWrapper>
            <Link href={'/vocabulary'}>
              <Button label="Закрити" color="GREY" onClick={() => {}} fullWidth />
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
