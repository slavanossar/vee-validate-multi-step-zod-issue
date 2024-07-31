<template>
  <input
    :id="props.id"
    ref="inputRef"
    v-model="modelValue"
    v-maska:[maskaOptions]
    :disabled="props.disabled"
    :placeholder="props.placeholder"
    :required="props.required"
    :type="props.type"
  />
</template>

<script setup lang="ts">
import type { BaseInputProps } from './types'

const props = withDefaults(defineProps<BaseInputProps>(), {
  mask: null,
  type: 'text',
})
const [modelValue] = defineModel<number | string>()
const maskaOptions = { mask: props.mask }

const inputRef = ref<HTMLInputElement | null>(null)
defineExpose({ inputRef })
</script>
