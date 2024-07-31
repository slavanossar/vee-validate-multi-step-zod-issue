import type { MaskType } from 'maska'

export interface BaseInputProps {
  id?: string
  disabled?: boolean
  mask?: MaskType
  placeholder?: string
  required?: boolean
  type?: HTMLInputElement['type']
}
