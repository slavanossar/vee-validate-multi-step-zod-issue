<template>
  <div class="flex flex-col items-start">
    <div class="flex flex-row items-baseline space-x-2">
      <InputLabel v-if="props.label" :for="id">
        {{ props.label }}
      </InputLabel>
      <input
        :id="id"
        v-model="value"
        class="border border-black rounded-xs"
        :disabled="props.disabled"
        :name="props.name"
        type="checkbox"
      />
    </div>
    <InputError :error="errorMessage" />
  </div>
</template>

<script setup lang="ts">
import type { InputProps } from './types'
import type { BaseInputProps } from '@/components/base/input/types'

interface InputTextProps extends BaseInputProps, InputProps {}

const props = withDefaults(defineProps<InputTextProps>(), { type: 'text' })
const { id, value, errorMessage } = useInput<boolean>(props.name)
</script>
