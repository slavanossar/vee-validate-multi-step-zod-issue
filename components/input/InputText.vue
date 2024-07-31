<template>
  <div class="flex flex-col items-start">
    <InputLabel v-if="props.label" :for="id">
      {{ props.label }}
    </InputLabel>
    <BaseInput
      :id="id"
      v-model="value"
      class="w-full border border-black rounded-sm"
      :disabled="props.disabled"
      :name="props.name"
      :mask="props.mask"
      :placeholder="props.placeholder"
      :required="props.required"
      :type="props.type"
    />
    <InputError :error="errorMessage" />
  </div>
</template>

<script setup lang="ts">
import type { InputProps } from './types'
import type { BaseInputProps } from '@/components/base/input/types'

interface InputTextProps extends BaseInputProps, InputProps {
  type?: 'email' | 'text'
}

const props = withDefaults(defineProps<InputTextProps>(), { type: 'text' })
const { id, value, errorMessage } = useInput<string>(props.name)
</script>
