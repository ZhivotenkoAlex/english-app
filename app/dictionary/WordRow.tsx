import Button from '@/components/molecules/Button/Button'
import { getVoice } from '@/helpers/getVoice'
import { colors } from '@/utils/colors'
import { Checkbox } from '@mui/material'
import React from 'react'
import VolumeDownLineIcon from 'remixicon-react/VolumeDownLineIcon'
import styled from 'styled-components'
import TimeLineIcon from 'remixicon-react/TimeLineIcon'
import CheckboxBlankCircleLineIcon from 'remixicon-react/CheckboxBlankCircleLineIcon'
import CheckboxCircleLineIcon from 'remixicon-react/CheckboxCircleLineIcon'
import DeleteBinIcon from 'remixicon-react/DeleteBin7LineIcon'

const STATE_ICON = {
  unlearned: <CheckboxBlankCircleLineIcon />,
  'in progress': <TimeLineIcon />,
  learned: <CheckboxCircleLineIcon />,
}
function WordRow({ word }) {
  const isStandardView = false
  const handlePlayAudio = () => {
    getVoice(word.title, 'en', 0.8)
  }
  return (
    <Wrapper>
      <Checkbox value={true} style={{ flex: 1 }} />
      <VolumeDownLineIcon style={{ flex: 1, cursor: 'pointer' }} onClick={handlePlayAudio} />
      <TextBlock $isStandardView={isStandardView}>
        <WordTitle>{word.title}</WordTitle>
        {!isStandardView && ' - '}
        <p>{word.translation}</p>
      </TextBlock>
      <ImageWrapper>
        <Img src={word.picture} />
      </ImageWrapper>
      {STATE_ICON[word.state]}
      <DeleteBinIcon style={{ flex: 1 }} />
    </Wrapper>
  )
}

const Wrapper = styled.div`
  display: flex;
  gap: 1rem;
  align-items: center;
`

const TextBlock = styled.div<{ $isStandardView: boolean }>`
  flex: 12;
  display: flex;
  flex-direction: ${({ $isStandardView }) => ($isStandardView ? 'column' : 'row')};
  gap: ${({ $isStandardView }) => ($isStandardView ? '0' : '5px')};
`

const ImageWrapper = styled.div`
  width: 20px;
  height: 20px;
`

const Img = styled.img`
  width: 100%;
`

const WordTitle = styled.p`
  color: ${colors.blue};
  font-weight: 600;
`

export default WordRow
