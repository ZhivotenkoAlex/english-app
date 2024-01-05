import * as React from 'react'
import { styled } from '@mui/material/styles'
import Stack from '@mui/material/Stack'
import Stepper from '@mui/material/Stepper'
import Step from '@mui/material/Step'
import StepLabel from '@mui/material/StepLabel'
import Check from '@mui/icons-material/Check'
import StepConnector, { stepConnectorClasses } from '@mui/material/StepConnector'
import { StepIconProps } from '@mui/material/StepIcon'
import FileList3LineIcon from 'remixicon-react/FileList3LineIcon'
import BookOpenFillIcon from 'remixicon-react/BookOpenLineIcon'
import PencilLineIcon from 'remixicon-react/PencilRulerLineIcon'

// const QontoConnector = styled(StepConnector)(({ theme }) => ({
//   [`&.${stepConnectorClasses.alternativeLabel}`]: {
//     top: 10,
//     left: 'calc(-50% + 16px)',
//     right: 'calc(50% + 16px)',
//   },
//   [`&.${stepConnectorClasses.active}`]: {
//     [`& .${stepConnectorClasses.line}`]: {
//       borderColor: '#784af4',
//     },
//   },
//   [`&.${stepConnectorClasses.completed}`]: {
//     [`& .${stepConnectorClasses.line}`]: {
//       borderColor: '#784af4',
//     },
//   },
//   [`& .${stepConnectorClasses.line}`]: {
//     borderColor: theme.palette.mode === 'dark' ? theme.palette.grey[800] : '#eaeaf0',
//     borderTopWidth: 3,
//     borderRadius: 1,
//   },
// }))

const QontoStepIconRoot = styled('div')<{ ownerState: { active?: boolean } }>(
  ({ theme, ownerState }) => ({
    color: theme.palette.mode === 'dark' ? theme.palette.grey[700] : '#eaeaf0',
    display: 'flex',
    height: 22,
    alignItems: 'center',
    ...(ownerState.active && {
      color: '#784af4',
    }),
    '& .QontoStepIcon-completedIcon': {
      color: '#784af4',
      zIndex: 1,
      fontSize: 18,
    },
    '& .QontoStepIcon-circle': {
      width: 8,
      height: 8,
      borderRadius: '50%',
      backgroundColor: 'currentColor',
    },
  }),
)

const ColorlibConnector = styled(StepConnector)(({ theme }) => ({
  [`&.${stepConnectorClasses.alternativeLabel}`]: {
    top: 22,
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

const ColorlibStepIconRoot = styled('div')<{
  ownerState: { completed?: boolean; active?: boolean }
}>(({ theme, ownerState }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? theme.palette.grey[700] : '#ccc',
  zIndex: 1,
  color: '#fff',
  width: 50,
  height: 50,
  display: 'flex',
  borderRadius: '50%',
  justifyContent: 'center',
  alignItems: 'center',
  ...(ownerState.active && {
    backgroundImage: `linear-gradient( 136deg, rgb(33 242 216) 0%, rgb(64 233 112) 50%, rgb(35 138 98) 100%)`,
  }),
  ...(ownerState.completed && {
    backgroundImage: `linear-gradient( 136deg, rgb(33 242 216) 0%, rgb(64 233 112) 50%, rgb(35 138 98) 100%)`,
  }),
}))

function ColorlibStepIcon(props: StepIconProps) {
  const { active, completed, className } = props

  const icons: { [index: string]: React.ReactElement } = {
    1: <FileList3LineIcon />,
    2: <BookOpenFillIcon />,
    3: <PencilLineIcon />,
  }

  return (
    <ColorlibStepIconRoot ownerState={{ completed, active }} className={className}>
      {icons[String(props.icon)]}
    </ColorlibStepIconRoot>
  )
}

const steps = [
  { label: 'Вивчаємо нові слова', step: 0 },
  { label: 'Повторюємо слова', step: 1 },
  { label: 'Практика', step: 2 },
]

export default function CustomizedStepper({ currentStep = 2, clickHandler }) {
  return (
    <Stack sx={{ width: '100%' }} spacing={4}>
      <Stepper alternativeLabel activeStep={currentStep} connector={<ColorlibConnector />}>
        {steps.map(step => {
          return (
            <Step key={step.label} onClick={() => clickHandler(step.step)}>
              <StepLabel StepIconComponent={ColorlibStepIcon}>{step.label}</StepLabel>
            </Step>
          )
        })}
      </Stepper>
    </Stack>
  )
}
