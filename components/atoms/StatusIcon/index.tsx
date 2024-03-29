import { EXERCISE_STATUS } from '@/types'
import { colors } from '@mui/material'

import React from 'react'
import CheckboxCircleFill from 'remixicon-react/CheckboxCircleFillIcon'
import styled from 'styled-components'

const IconColors = {
  done: colors.green[500],
  in_progress: colors.blue[500],
  not_started: colors.grey[500],
}

type PropType = {
  status: EXERCISE_STATUS
}

export default function StatusIcon({ status }: PropType) {
  return <CheckboxIcon size="35px" status={status} />
}

const CheckboxIcon = styled(CheckboxCircleFill)<{ status: EXERCISE_STATUS }>`
  cursor: pointer;
  fill: ${props => IconColors[props.status]};
`
