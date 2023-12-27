import React, { ChangeEvent, useCallback, useState } from 'react'
import ModalWrapper from '../../__atoms__/ModalWrapper/ModalWrapper'
import Heading from '../../__atoms__/Heading/Heading'
import Form from '../../__atoms__/Form/Form'
import Button from '../../__molecules__/Button/Button'
import Input from '../../__molecules__/Input/Input'
import Link from '../../__atoms__/Link/Link'
import { useRouter } from 'next/router'
import FullScreenWrapper from '../../__atoms__/FullScreenWrapper/FullScreenWrapper'

function RestorePasswordModal() {
  const router = useRouter()

  const [email, setEmail] = useState('')

  const handleChangeEmail = (e: ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value)
  }

  const navigateToLoginModal = useCallback(() => {
    router.push('/login')
  }, [router])
  return (
    <FullScreenWrapper>
      <ModalWrapper>
        <Heading
          color={'dark'}
          title="На указанный e-mail будет отправлено письмо со ссылкой для сброса пароля"
          size={14}
        />
        <Form>
          <Input type="email" value={email} placeholder="Email" onChange={handleChangeEmail} />

          <Button
            onClick={() => {}}
            disabled
            label="Создать аккаунт"
            color={'green'}
            size="large"
          />
          <Link onClick={navigateToLoginModal} size={14} title={'Назад'} color="blue" />
        </Form>
      </ModalWrapper>
    </FullScreenWrapper>
  )
}

export default RestorePasswordModal
