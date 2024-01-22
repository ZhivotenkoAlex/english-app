import Image from 'next/image'
import styled from 'styled-components'

function Avatar() {
  return (
    <Wrapper>
      <Image src="/images/unknown_avatar.png" alt="avatar" width={40} height={40} />
    </Wrapper>
  )
}

const Wrapper = styled.div`
  text-align: end;
  img {
    cursor: pointer;
  }
`
export default Avatar
