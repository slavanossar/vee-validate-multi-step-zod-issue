export const useInput = <FieldType>(name: string) => {
  const id = useUUID()

  const { value, errorMessage } = useField<FieldType>(() => name)

  return {
    id,
    value,
    errorMessage,
  }
}
