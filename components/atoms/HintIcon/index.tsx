import { StepIconProps } from '@mui/material'
import React from 'react'
import { RemixiconReactIconComponentType } from 'remixicon-react'
import styled from 'styled-components'

type PropType = {
  Icon: RemixiconReactIconComponentType
  isComplete?: boolean
  props?: StepIconProps
}

export default function HintIcon({ Icon, isComplete = true, props }: PropType) {
  const { active, completed, className } = props ?? {
    completed: isComplete,
    active: isComplete,
    className: '',
  }

  return (
    <Root $ownerState={{ completed: completed, active: active }} className={className}>
      <Icon />
    </Root>
  )
}

const Root = styled.div<{
  $ownerState: { completed?: boolean; active?: boolean }
}>(({ theme, $ownerState }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? theme.palette.grey[700] : '#ccc',
  zIndex: 1,
  borderBlock: 'content-box',
  color: '#fff',
  width: 50,
  height: 50,
  display: 'flex',
  borderRadius: '50%',
  justifyContent: 'center',
  alignItems: 'center',
  border: 'none',
  transition: 'all 1s ease-in-out',
  cursor: 'pointer',
  ...($ownerState.active && {
    backgroundImage: `linear-gradient( 136deg, rgb(33 242 216) 0%, rgb(64 233 112) 50%, rgb(35 138 98) 100%)`,
  }),
  ...($ownerState.completed && {
    backgroundImage: `linear-gradient( 136deg, rgb(33 242 216) 0%, rgb(64 233 112) 50%, rgb(35 138 98) 100%)`,
  }),
  '&:hover': {
    color: $ownerState.active ? 'hsl(157, 60%, 34%)' : 'null',
    border: $ownerState.active ? `1px hsl(157, 60%, 34%) solid` : 'none',
  },
}))
