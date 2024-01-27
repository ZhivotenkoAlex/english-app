'use client'
import { FieldInputProps } from 'react-final-form'

export type PropTypes = {
  activeItem: []
  input?: FieldInputProps<string, HTMLElement>
  isChecked?: boolean
  isValidated?: boolean | null
}
