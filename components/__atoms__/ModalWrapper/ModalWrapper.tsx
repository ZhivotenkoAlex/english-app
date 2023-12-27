import styled from 'styled-components'
import { colors } from '../../../utils/colors'

const ModalWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  justify-content: center;
  background: ${colors.lightWhite};
  padding: 2rem;
  border-radius: 8px;
  min-width: 200px;
`

export default ModalWrapper
