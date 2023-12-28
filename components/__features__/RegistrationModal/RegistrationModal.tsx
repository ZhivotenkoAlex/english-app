import { ChangeEvent, useCallback, useState } from 'react'
import Heading from '../../__atoms__/Heading/Heading'
import ModalWrapper from '../../__atoms__/ModalWrapper/ModalWrapper'
import Input from '../../__molecules__/Input/Input'
import Form from '../../__atoms__/Form/Form'
import Button from '../../__molecules__/Button/Button'
import Link from '../../__atoms__/Link/Link'
import { useRouter } from 'next/router'
import BackButton from '../../__molecules__/BackButton/BackButton'
import ROUTES from '@/helpers/routes'

function RegistrationModal() {
  const router = useRouter()

  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const handleChangeEmail = (e: ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value)
  }

  const handleChangePassword = (e: ChangeEvent<HTMLInputElement>) => {
    setPassword(e.target.value)
  }

  const navigateToLoginModal = useCallback(() => {
    router.push(ROUTES.SIGN_UP)
  }, [router])

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
        <Button onClick={() => {}} disabled label="Создать аккаунт" color={'green'} size="large" />
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
