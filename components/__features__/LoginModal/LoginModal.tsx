'use client'
import { ChangeEvent, useCallback, useState } from 'react'
import Heading from '../../__atoms__/Heading/Heading'
import ModalWrapper from '../../__atoms__/ModalWrapper/ModalWrapper'
import Input from '../../__molecules__/Input/Input'
import Form from '../../__atoms__/Form/Form'
import Button from '../../__molecules__/Button/Button'
import Link from '../../__atoms__/Link/Link'
import { useRouter } from 'next/router'
import ROUTES from '@/helpers/routes'
import dynamic from 'next/dynamic'
import BackButton from '@/components/__molecules__/BackButton/BackButton'

// const BackButton = dynamic(() => import('@/components/__molecules__/BackButton/BackButton'), {
//   ssr: false,
// })

function LoginModal() {
  // const router = useRouter()
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const handleChangeEmail = (e: ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value)
  }

  const handleChangePassword = (e: ChangeEvent<HTMLInputElement>) => {
    setPassword(e.target.value)
  }

  // const navigateToRegistrationModal = useCallback(() => {
  //   router.push(ROUTES.HOME)
  // }, [router])

  // const navigateToRestorePasswordModal = useCallback(() => {
  //   router.push(ROUTES.RESTORE_PASSWORD)
  // }, [router])

  return (
    <ModalWrapper>
      <BackButton />
      <Heading color={'dark'} title="Войти" size={16} />
      <Form>
        <Input type="email" value={email} placeholder="Email" onChange={handleChangeEmail} />
        <Input
          type="password"
          value={password}
          placeholder="Password"
          onChange={handleChangePassword}
        />
        <Button
          onClick={() => console.log('Click')}
          disabled={false}
          type="text"
          label="Восстановить пароль"
          color={'grey'}
          size="large"
        />
        <Button onClick={() => {}} disabled label="Войти" color={'green'} size="large" />
        <Link
          onClick={() => console.log('Click')}
          size={14}
          title={'Создать аккаунт'}
          color="blue"
        />
      </Form>
    </ModalWrapper>
  )
}

export default LoginModal
