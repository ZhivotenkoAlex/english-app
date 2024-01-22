import { useState } from 'react'
import 'animate.css/animate.min.css'
import styled from 'styled-components'
import CloseFillIcon from 'remixicon-react/CloseFillIcon'
import MenuFillIcon from 'remixicon-react/MenuFillIcon'
import Logo from '@/components/molecules/Logo/Logo'

export const SideBar = ({ children }) => {
  const [isOpen, setIsOpen] = useState(false)

  const handleOnClose = e => {
    setIsOpen(!isOpen)
  }

  return (
    <Root>
      <div>
        <MenuFillIcon size="30px" onClick={handleOnClose} />
      </div>
      <SideMenuWrapper $isOpen={isOpen} onClick={handleOnClose}>
        <SideMenu
          $isOpen={isOpen}
          onClick={e => e.stopPropagation()}
          className={`animate__animated ${isOpen ? 'animate__fadeIn' : 'animate__fadeOut'} `}
        >
          <CloseIconCover>
            <CloseIcon size="35px" onClick={handleOnClose} />
          </CloseIconCover>

          <ItemContainer onClick={handleOnClose}>
            <LogoWrapper>
              <Logo />
            </LogoWrapper>
            {children}
          </ItemContainer>
        </SideMenu>
      </SideMenuWrapper>
    </Root>
  )
}

const Root = styled.div`
  margin-left: auto;
  margin-right: 1rem;
  &div: first-child {
    cursor: pointer;
  }
`

const SideMenuWrapper = styled.div<{ $isOpen: boolean }>`
  display: ${props => (props.$isOpen ? 'block' : 'none')};
  width: 100%;
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  background: rgba(0, 0, 0, 0.2);
`

const SideMenu = styled.div<{ $isOpen: boolean }>`
  display: ${props => (props.$isOpen === true ? 'flex' : 'none')};
  flex-direction: column;
  align-items: center;
  position: fixed;
  z-index: 5;
  width: 40%;
  height: 100%;
  top: 0;
  left: 0;
  background: #28c38a;
  box-shadow:
    0 1px 3px 0 rgba(0, 0, 0, 0.1),
    0 1px 2px 0 rgba(0, 0, 0, 0.06);
  div:not(:last-child) {
    margin-bottom: 10px;
  }

  @media (min-width: 767px) {
    height: 100%;
    top: 0;
    left: 0;
    box-shadow:
      0 1px 3px 0 rgba(0, 0, 0, 0.1),
      0 1px 2px 0 rgba(0, 0, 0, 0.06);
  }

  @media only screen and (max-width: 530px) {
    width: 100%;
  }
`

const CloseIconCover = styled.div`
  display: flex;
  width: 100%;
  justify-content: right;
  margin: 5px 5px 0 0;
`

const CloseIcon = styled(CloseFillIcon)`
  cursor: pointer;
`

const ItemContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 70%;
  justify-content: center;
`

const LogoWrapper = styled.div`
  &&& {
    margin-bottom: 30px;
  }
`
