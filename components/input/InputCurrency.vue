<template>
  <div class="flex flex-col items-start">
    <InputLabel v-if="props.label" :for="id">
      {{ props.label }}
    </InputLabel>
    <div class="relative w-full">
      <div class="absolute inset-y-0 left-0 flex w-6 items-center justify-end">
        $
      </div>
      <BaseInput
        :id="id"
        v-model="value"
        class="pl-6 border border-black rounded-sm"
        :disabled="props.disabled"
        :min="props.min"
        :max="props.max"
        :placeholder="props.placeholder"
        :required="props.required"
        type="number"
      />
    </div>
    <InputError :error="errorMessage" />
  </div>
</template>

<script setup lang="ts">
import type { InputProps } from './types'
import type { BaseInputProps } from '@/components/base/input/types'

interface InputCurrencyProps extends BaseInputProps, InputProps {
  min?: number | string
  max?: number | string
}

const props = defineProps<InputCurrencyProps>()
const { id, value, errorMessage } = useInput<number>(props.name)
</script>
