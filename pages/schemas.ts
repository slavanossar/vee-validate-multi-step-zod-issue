import { boolean, coerce, object, string } from 'zod'

export const MIN_CUSTOM_DONATION = 10

/**
 * Custom Validators
 */
const validateDate = (date: string) => {
  const matches = date.match(/^(\d{2}) \/ (\d{2}) \/ (\d{4})/)

  if (!matches) return false

  const day = parseInt(matches[1], 10)
  const month = parseInt(matches[2], 10) - 1
  const year = parseInt(matches[3], 10)

  const dateObj = new Date(year, month, day)

  return (
    dateObj.getFullYear() === year &&
    dateObj.getMonth() === month &&
    dateObj.getDate() === day
  )
}

/**
 * Schemas
 */
export const stepOneSchema = object({
  fullName: string().min(1, 'Required'),
  donateToggle: boolean().optional(),
  donationAmount: coerce
    .number()
    .min(MIN_CUSTOM_DONATION, {
      message: `Minimum amount is $${MIN_CUSTOM_DONATION}`,
    })
    .optional(),
}).refine(
  ({ donationAmount, donateToggle }) => !donateToggle || !!donationAmount,
  {
    path: ['fieldA'],
    message: 'Required',
  },
)

export const stepTwoSchema = object({
  dateOfBirth: string().min(1, 'Required').refine(validateDate, {
    message: 'Invalid date',
  }),
  cardCode: string().min(3, 'Invalid code'),
})
