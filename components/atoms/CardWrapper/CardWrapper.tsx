import styled from 'styled-components'

const CardWrapper = styled.div`
  padding: 1.5rem;
  display: flex;
  gap: 3rem;
  border-radius: 1rem;
  box-shadow:
    rgba(50, 50, 93, 0.25) 0px 6px 12px -2px,
    rgba(0, 0, 0, 0.3) 0px 3px 7px -3px;

  @media screen and (max-width: 530px) {
    flex-direction: column;
  }
`

export default CardWrapper
