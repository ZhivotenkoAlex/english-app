import { articlesTranslate } from '@/helpers/ArticlesData'
import { getVoice } from '@/helpers/getVoice'
import { colors } from '@/utils/colors'
import { Divider, LinearProgress, Popover } from '@mui/material'
import React from 'react'
import VolumeUpFillIcon from 'remixicon-react/VolumeUpFillIcon'
import styled from 'styled-components'

type PropTypes = {
  isOpen: boolean
  word: string
  anchorEl: HTMLButtonElement | null
  handleClose: () => void
}

export default function TranslateWordPopover({ isOpen, word, anchorEl, handleClose }: PropTypes) {
  const id = isOpen ? 'simple-popover' : undefined
  const getTranslation = (word: string) => {
    const camelCase = word.replaceAll(' ', '_')
    return articlesTranslate[camelCase.toLowerCase()]
  }
  const translate = getTranslation(word)
  return (
    <StyledPopover
      id={id}
      disablePortal={false}
      open={isOpen}
      anchorEl={anchorEl}
      onClose={handleClose}
      anchorOrigin={{
        vertical: 'bottom',
        horizontal: 'left',
      }}
      transformOrigin={{
        vertical: 'top',
        horizontal: 'left',
      }}
    >
      <RootContent>
        {translate?.map(translate => (
          <Container key={translate.id}>
            <Progress variant="determinate" value={translate?.rate} />
            <TranslateItem key={translate.id}> {translate.translate_value}</TranslateItem>
          </Container>
        ))}
        <Divider />
        <VolumeAction onClick={() => getVoice(word, 'en', 0.7)} />
      </RootContent>
    </StyledPopover>
  )
}

const StyledPopover = styled(Popover)`
  /* &&.MuiModal-root {
    position: absolute;
  } */
  margin-top: 5px;
`

const RootContent = styled.div`
  display: flex;
  flex-direction: column;
  padding: 8px;
  gap: 5px;
`

const TranslateItem = styled.span``

const VolumeAction = styled(VolumeUpFillIcon)`
  align-self: center;
  fill: ${colors.successGreen};
  cursor: pointer;
  &:hover {
    fill: ${colors.blue};
  }
`

const Container = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
`

const Progress = styled(LinearProgress)`
  width: 30px;
`
