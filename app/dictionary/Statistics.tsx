import CardWrapper from '@/components/__atoms__/CardWrapper/CardWrapper'
import React from 'react'
import styled from 'styled-components'
import FileWord2LineIcon from 'remixicon-react/FileWord2LineIcon'
import TitleSubtitleComponent from '@/components/__molecules__/TitleSubtitleComponent/TitleSubtitleComponent'
import TimeLineIcon from 'remixicon-react/TimeLineIcon'
import CheckboxBlankCircleLineIcon from 'remixicon-react/CheckboxBlankCircleLineIcon'
import CheckboxCircleLineIcon from 'remixicon-react/CheckboxCircleLineIcon'

function Statistics() {
  return (
    <StatisticsRow>
      <CardWrapper>
        <CardContent>
          <FileWord2LineIcon />
          <TitleSubtitleComponent title={'1500 words'} subtitle="My dictionary" />
        </CardContent>
      </CardWrapper>
      <CardWrapper>
        <CardContent>
          <CheckboxBlankCircleLineIcon />
          <TitleSubtitleComponent title={'12 words'} subtitle="New words" />
        </CardContent>
        <CardContent>
          <TimeLineIcon />
          <TitleSubtitleComponent title={'3600 words'} subtitle="Learning" />
        </CardContent>
        <CardContent>
          <CheckboxCircleLineIcon />
          <TitleSubtitleComponent title={'3600 words'} subtitle="Learning" />
        </CardContent>
      </CardWrapper>
    </StatisticsRow>
  )
}

const StatisticsRow = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 2rem;
  @media screen and (max-width: 530px) {
    flex-direction: column;
  }
`

const CardContent = styled.div`
  display: flex;
  gap: 1rem;
  align-items: center;
`
export default Statistics
