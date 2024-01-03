'use client'
import { DashboardItems } from '@/helpers/constants'
import React from 'react'
import styled from 'styled-components'
import DashboardItem from '../__features__/DashboardItem'

export default function Dashboard() {
  return (
    <Root>
      <Heading>
        <PageTitle>Обери заняття на сьогодні</PageTitle>
      </Heading>
      <ContentContainer>
        {DashboardItems.map(item => (
          <DashboardItem key={item.id} data={item} />
        ))}
      </ContentContainer>
    </Root>
  )
}

const Root = styled.div`
  width: 100%;
  margin-top: 40px;
`

const Heading = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  text-align: center;
  margin-bottom: 40px;
`

const PageTitle = styled.h1`
  padding: 6px 16px;
  letter-spacing: 0.2px;
  margin: 0 auto;
  width: 75%;
  @media screen and (max-width: 767px) {
    width: auto;
  }
`

const SubTitle = styled.span`
  display: block;
  text-transform: capitalize;
`

const ContentContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  max-width: 75%;
  margin: 0 auto 20px auto;
  gap: 20px;
  @media screen and (max-width: 767px) {
    grid-template-columns: 1fr;
  }
`
