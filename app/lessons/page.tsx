'use client'
// import { useCallback, useEffect, useState } from "react"
// import { useRouter } from "next/router"
// import Button from "../../components/__molecules__/Button/Button"
import Button from '@mui/material/Button'
import styled from 'styled-components'
import { Typography } from '@mui/material'
// import ROUTES from '@/helpers/routes'

function Lessons() {
  // const [location, setLocation] = useState("")

  // useEffect(() => {
  //   setLocation(window?.location?.origin)
  // }, [])
  // const ogData = {
  //   image: `${location}/public/images/logo.png`,
  //   title: "Lessons | EasyWay",
  //   description: "Easy way to learn English",
  //   type: "website",
  //   url: location,
  // }
  // const router = useRouter()

  // const navigateToLoginModal = useCallback(() => {
  //   router.push(ROUTES.SIGN_UP)
  // }, [router])

  return (
    // <p>Start learning !</p>
    <Wrapper>
      <Typography variant="h1">Lessons</Typography>
      <StyledButton color="success" variant="contained">
        Start learning !
      </StyledButton>
    </Wrapper>
  )
}

const Wrapper = styled('div')`
  padding: 2rem;
`

const StyledButton = styled(Button)`
  && {
    background-color: #28c38a;
  }
`
export default Lessons
