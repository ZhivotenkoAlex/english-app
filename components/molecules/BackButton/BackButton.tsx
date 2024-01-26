'use client'
import Button from '../Button/Button'
import styled from 'styled-components'
import ROUTES from '@/helpers/routes'
import Link from 'next/link'
import { COLORS_ENUM } from '@/utils/colors'

function BackButton() {
  return (
    <BackButtonWrapper href={ROUTES.HOME}>
      <Button
        disabled={false}
        label="Back"
        color={COLORS_ENUM.GREEN}
        variant="outlined"
        size="small"
      />
    </BackButtonWrapper>
  )
}

const BackButtonWrapper = styled(Link)`
  button {
    width: auto;
  }
`

export default BackButton
