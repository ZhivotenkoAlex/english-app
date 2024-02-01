import * as React from 'react'
import Stack from '@mui/material/Stack'
import Stepper from '@mui/material/Stepper'
import Step from '@mui/material/Step'
import StepLabel from '@mui/material/StepLabel'
import StepConnector, { stepConnectorClasses } from '@mui/material/StepConnector'
import { StepIconProps } from '@mui/material/StepIcon'
import FileList3LineIcon from 'remixicon-react/FileList3LineIcon'
import BookOpenFillIcon from 'remixicon-react/BookOpenLineIcon'
import PencilLineIcon from 'remixicon-react/PencilRulerLineIcon'
import Lightbulb from 'remixicon-react/LightbulbFlashLineIcon'
import styled from 'styled-components'

function ColorlibStepIcon(props: StepIconProps) {
  const { active, completed, className } = props

  const icons: { [index: string]: React.ReactElement } = {
    1: <FileList3LineIcon />,
    2: <BookOpenFillIcon />,
    3: <PencilLineIcon />,
    4: <Lightbulb />,
  }

  return (
    <StepperIcon $ownerState={{ completed, active }} className={className}>
      {icons[String(props.icon)]}
    </StepperIcon>
  )
}

const steps = [
  { label: 'Вивчаємо нові слова', step: 0 },
  { label: 'Повторюємо слова', step: 1 },
  { label: 'Практика', step: 2 },
  { label: 'Вітання', step: 3 },
]

type PropTypes = {
  currentStep: number
  clickHandler: (step: number) => void
}

export default function CustomizedStepper({ currentStep = 2, clickHandler }: PropTypes) {
  return (
    <Stack sx={{ width: '100%', margin: '0 auto' }} spacing={4}>
      <Stepper alternativeLabel activeStep={currentStep} connector={<Connector />}>
        {steps.map(step => {
          return (
            <Step key={step.label} onClick={() => clickHandler(step.step)}>
              <Label sx={{ fontWeight: 600 }} StepIconComponent={ColorlibStepIcon}>
                {step.label}
              </Label>
            </Step>
          )
        })}
      </Stepper>
    </Stack>
  )
}

const Connector = styled(StepConnector)(({ theme }) => ({
  [`&.${stepConnectorClasses.alternativeLabel}`]: {
    top: 22,
    left: `calc(-50% + 15px)`,
  },
  [`&.${stepConnectorClasses.active}`]: {
    [`& .${stepConnectorClasses.line}`]: {
      backgroundImage: `linear-gradient( 136deg, rgb(33 242 216) 0%, rgb(64 233 112) 50%, rgb(35 138 98) 100%)`,
    },
  },
  [`&.${stepConnectorClasses.completed}`]: {
    [`& .${stepConnectorClasses.line}`]: {
      backgroundImage: `linear-gradient( 136deg, rgb(33 242 216) 0%, rgb(64 233 112) 50%, rgb(35 138 98) 100%)`,
    },
  },
  [`& .${stepConnectorClasses.line}`]: {
    height: 3,
    border: 0,
    backgroundColor: theme.palette.mode === 'dark' ? theme.palette.grey[800] : '#eaeaf0',
    borderRadius: 1,
  },
}))

const StepperIcon = styled.div<{
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
    color: 'hsl(157, 60%, 34%)',
    border: `1px hsl(157, 60%, 34%) solid`,
  },
}))

const Label = styled(StepLabel)`
  && {
    .MuiStepLabel-label {
      font-weight: 600;
    }
  }
`
