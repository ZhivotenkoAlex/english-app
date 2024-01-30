'use client'
import React, { useState } from 'react'
import styled from 'styled-components'
import AudioChallengeContent from '../features/AudioChallengeContent'

export default function AudioChallengePage() {
  return (
    <Root>
      <AudioChallengeContent />)
    </Root>
  )
}

const Root = styled.div`
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  gap: 10px;
  justify-content: center;
  align-items: center;
  min-height: 180px;
  @media screen and (max-width: 1023px) {
    flex-direction: column;
    align-items: center;
  }
  @media screen and (max-width: 767px) {
    max-width: 100%;
  }
`
