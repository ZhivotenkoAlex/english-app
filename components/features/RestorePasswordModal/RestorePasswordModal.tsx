import React, { ChangeEvent, useCallback, useState } from 'react'
import ModalWrapper from '../../atoms/ModalWrapper/ModalWrapper'
import Heading from '../../atoms/Heading/Heading'
import Form from '../../atoms/Form/Form'
import Button from '../../molecules/Button/Button'
import Input from '../../molecules/Input/Input'
import Link from '../../atoms/Link/Link'
import { useRouter } from 'next/router'
import FullScreenWrapper from '../../atoms/FullScreenWrapper/FullScreenWrapper'
import ROUTES from '@/helpers/routes'
import { COLORS_ENUM } from '@/utils/colors'

function RestorePasswordModal() {
  const router = useRouter()

  const [email, setEmail] = useState('')

  const handleChangeEmail = (e: ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value)
  }

  const navigateToLoginModal = useCallback(() => {
    router.push(ROUTES.SIGN_UP)
  }, [router])
  return (
    <FullScreenWrapper>
      <ModalWrapper>
        <Heading
          color={COLORS_ENUM.DARK}
          title="На вказаний e-mail буде надіслано лист з посиланням для скидання паролю"
          size={14}
        />
        <Form>
          <Input type="email" value={email} placeholder="Email" onChange={handleChangeEmail} />

          <Button
            onClick={() => {}}
            disabled
            label="Створити акаунт"
            color={COLORS_ENUM.GREEN}
            size="large"
          />
          <Link onClick={navigateToLoginModal} size={14} title={'Назад'} color="blue" />
        </Form>
      </ModalWrapper>
    </FullScreenWrapper>
  )
}

export default RestorePasswordModal
