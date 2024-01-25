'use client'
import { ChangeEvent, useCallback, useState } from 'react'
import Heading from '../../atoms/Heading/Heading'
import ModalWrapper from '../../atoms/ModalWrapper/ModalWrapper'
import Input from '../../molecules/Input/Input'
import Form from '../../atoms/Form/Form'
import Button from '../../molecules/Button/Button'
import Link from '../../atoms/Link/Link'
import BackButton from '../../molecules/BackButton/BackButton'
import ROUTES from '@/helpers/routes'

function RegistrationModal() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const handleChangeEmail = (e: ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value)
  }

  const handleChangePassword = (e: ChangeEvent<HTMLInputElement>) => {
    setPassword(e.target.value)
  }

  const navigateToLoginModal = useCallback(() => {}, [])

  return (
    <ModalWrapper>
      <BackButton />
      <Heading color={'dark'} title="Бесплатная регистрация" size={16} />
      <Form>
        <Input type="email" value={email} placeholder="Email" onChange={handleChangeEmail} />
        <Input
          type="password"
          value={password}
          placeholder="Password"
          onChange={handleChangePassword}
        />
        <Button onClick={() => {}} disabled label="Создать аккаунт" color={'GREEN'} size="large" />
        <Link
          onClick={navigateToLoginModal}
          size={14}
          title={'У меня уже есть аккаунт'}
          color="blue"
        />
      </Form>
    </ModalWrapper>
  )
}

export default RegistrationModal
