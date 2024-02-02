'use client'
import { rules } from '@/helpers/rules'
import { COLORS_ENUM, colors } from '@/utils/colors'
import {
  Box,
  FormControl,
  MenuItem,
  Modal,
  Select,
  SelectChangeEvent,
  useMediaQuery,
} from '@mui/material'
import { useParams } from 'next/navigation'
import React, { useState } from 'react'
import styled from 'styled-components'
import Icon from 'remixicon-react/GitRepositoryLineIcon'
import QuestionIcon from 'remixicon-react/QuestionLineIcon'
import PositiveIcon from 'remixicon-react/AddCircleLineIcon'
import IndeterminateIcon from 'remixicon-react/IndeterminateCircleLineIcon'
import CloseIcon from 'remixicon-react/CloseCircleLineIcon'
const getRule = (slug: string) => rules.find(rule => rule.slug === slug)

const icons = {
  question: <QuestionIcon color={colors.darkGrey} />,
  positive: <PositiveIcon color={colors.darkGrey} />,
  negation: <IndeterminateIcon color={colors.darkGrey} />,
}

type PropTypes = {
  isOpen: boolean
  handleModal: () => void
}

export default function RulesPage({ isOpen, handleModal }: PropTypes) {
  const { slug } = useParams<{ slug: string }>()
  const rule = getRule(slug)
  const [activeType, setActiveType] = useState<any>(rule?.data[0])
  const isMobileView = useMediaQuery('(max-width:767px)')

  const handleChange = (event: SelectChangeEvent) => {
    setActiveType(rule?.data.find(item => item.title === event.target.value))
  }
  return (
    <Modal
      open={isOpen}
      onClose={() => {}}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
      <Root>
        <Page>
          <SideBar>
            <Title>{rule?.code}</Title>
            {isMobileView ? (
              <FormControl sx={{ m: 1, minWidth: 200 }} fullWidth>
                <Select
                  labelId="demo-simple-select-autowidth-label"
                  id="demo-simple-select-autowidth"
                  value={activeType.title}
                  onChange={handleChange}
                >
                  {rule?.data.map((item, index) => (
                    <MenuItem key={index} value={item.title}>
                      {item.title}
                    </MenuItem>
                  ))}
                </Select>
              </FormControl>
            ) : (
              <>
                {rule?.data.map((item, index) => (
                  <SubtitleCover onClick={() => setActiveType(rule?.data[index])} key={item?.code}>
                    {icons[item?.code]}
                    <Subtitle key={item.id} $isActive={item.title === activeType.title}>
                      {item.title}
                    </Subtitle>
                  </SubtitleCover>
                ))}
              </>
            )}
          </SideBar>
          <Content>
            <IconContainer>
              <CloseIcon size={35} color={colors.darkGrey} onClick={handleModal} />
            </IconContainer>
            <div dangerouslySetInnerHTML={{ __html: activeType?.description as string }}></div>
            <Examples>
              {activeType?.examples.map(example => (
                <ExampleContainer key={example.id}>
                  <Icon color={colors.grey} />
                  <SpellingContainer>
                    <Spelling>{example.spelling}</Spelling>
                    <Translation>{example.translation}</Translation>
                  </SpellingContainer>
                </ExampleContainer>
              ))}
            </Examples>
          </Content>
        </Page>
      </Root>
    </Modal>
  )
}

const Root = styled(Box)`
  height: 100%;
`

const Page = styled.div`
  margin: 0 auto;
  display: grid;
  background: white;
  height: 100%;
  grid-template-columns: 360px auto;
  @media screen and (max-width: 1439px) {
    grid-template-columns: 300px auto;
  }
  @media screen and (max-width: 1023px) {
    grid-template-columns: 260px auto;
  }
  @media screen and (max-width: 767px) {
    grid-template-columns: 1fr;
  }
`

const SideBar = styled.div`
  background: ${colors.green};
  padding: 20px;
  @media screen and (max-width: 767px) {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
`

const Content = styled.div`
  position: relative;
  padding: 40px;
  line-height: 1.63;
  color: ${colors.darkGrey};
  h3 {
    font-size: 20px;
    color: initial;
  }
  b {
    color: initial;
  }
  ul {
    margin-left: 30px;
    margin-bottom: 10px;
  }
  p {
    display: inline-block;
    margin-bottom: 10px;
  }
  @media screen and (max-width: 767px) {
    position: static;
  }
`

const Title = styled.h2`
  font-size: 24px;
  margin-bottom: 30px;
  @media screen and (max-width: 1439px) {
    font-size: 20px;
  }
  @media screen and (max-width: 1023px) {
    font-size: 16px;
  }
  @media screen and (max-width: 767px) {
    font-size: 24px;
    margin-bottom: 15px;
  }
`

const SubtitleCover = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
  margin-bottom: 10px;
  cursor: pointer;
  @media screen and (max-width: 1023px) {
    font-size: 14px;
  }
  @media screen and (max-width: 767px) {
    font-size: 16px;
  }
  &:hover {
    color: ${colors.grey2};
    svg {
      fill: ${colors.grey2};
    }
  }
`

const Subtitle = styled.h4<{ $isActive: boolean }>`
  color: ${({ $isActive }) => ($isActive ? colors.grey2 : colors.darkGrey)};
  &::first-letter {
    text-transform: uppercase;
  }
`

const ExampleContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
  margin-bottom: 10px;
`
const SpellingContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
`

const Spelling = styled.span``

const Translation = styled.span`
  color: ${COLORS_ENUM.GREY};
`

const Examples = styled.div`
  margin: 20px;
`

const IconContainer = styled.div`
  position: absolute;
  top: 10px;
  right: 10px;
  cursor: pointer;
  transition: all 0.5s ease-in-out;
  @media screen and (max-width: 767px) {
  }
  &:hover {
    scale: 1.1;
    svg {
      fill: ${colors.green};
    }
  }
`
