import { v4 } from 'uuid'

export const useUUID = () => {
  const uuid = ref('')

  onMounted(() => {
    uuid.value = v4()
  })

  return uuid
}
