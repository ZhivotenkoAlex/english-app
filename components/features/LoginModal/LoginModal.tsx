'use client'
import { ChangeEvent, useCallback, useState } from 'react'
import Heading from '../../atoms/Heading/Heading'
import ModalWrapper from '../../atoms/ModalWrapper/ModalWrapper'
import Input from '../../molecules/Input/Input'
import Form from '../../atoms/Form/Form'
import Button from '../../molecules/Button/Button'
import Link from '../../atoms/Link/Link'
import { useRouter } from 'next/router'
import ROUTES from '@/helpers/routes'
import dynamic from 'next/dynamic'
import BackButton from '@/components/molecules/BackButton/BackButton'

// const BackButton = dynamic(() => import('@/components/molecules/BackButton/BackButton'), {
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
      <Heading color={'DARK'} title="Войти" size={16} />
      <Form>
        <Input type="email" value={email} placeholder="Email" onChange={handleChangeEmail} />
        <Input
          type="password"
          value={password}
          placeholder="Password"
          onChange={handleChangePassword}
        />
        <Button
          onClick={() => {}}
          disabled={false}
          variant="text"
          label="Восстановить пароль"
          color={'GREY'}
          size="large"
        />
        <Button onClick={() => {}} disabled label="Войти" color={'GREEN'} size="large" />
        <Link onClick={() => {}} size={14} title={'Создать аккаунт'} color="blue" />
      </Form>
    </ModalWrapper>
  )
}

export default LoginModal
