import { useState } from 'react'
import 'animate.css/animate.min.css'
import styled from 'styled-components'
import CloseFillIcon from 'remixicon-react/CloseFillIcon'
import MenuFillIcon from 'remixicon-react/MenuFillIcon'
import Logo from '@/components/__molecules__/Logo/Logo'

export const SideBar = ({ children }) => {
  const [isOpen, setIsOpen] = useState(false)

  const handleOnClose = () => {
    setIsOpen(!isOpen)
  }

  return (
    <Root>
      <div>
        <MenuFillIcon size="30px" onClick={handleOnClose} />
      </div>
      <SideMenu
        $isOpen={isOpen}
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
    </Root>
  )
}

const Root = styled.div`
  z-index: 1;
`

const SideMenu = styled.div<{ $isOpen: boolean }>`
  display: ${props => (props.$isOpen === true ? 'block' : 'none')};
  position: fixed;
  width: 75%;
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

  @media only screen and (min-width: 600px) {
    .ham {
      position: fixed;
      width: 20%;
      height: 100%;
      top: 0;
      left: 0;
      box-shadow:
        0 1px 3px 0 rgba(0, 0, 0, 0.1),
        0 1px 2px 0 rgba(0, 0, 0, 0.06);
    }
  }
`

const CloseIconCover = styled.div`
  display: flex;
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
`

const LogoWrapper = styled.div`
  &&& {
    margin-bottom: 30px;
  }
`
