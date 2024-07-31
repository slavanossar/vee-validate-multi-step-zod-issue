<template>
  <div v-if="shouldShow">
    <slot />
  </div>
</template>

<script setup lang="ts">
import { FormStepIndexKey, StepCounterKey } from './symbols'

const stepCounter = inject(StepCounterKey)
let stepIndex = Infinity

if (stepCounter) {
  stepIndex = stepCounter.value++
}

const formStepIndex = inject(FormStepIndexKey)

const shouldShow = computed(() => {
  return formStepIndex && formStepIndex.value === stepIndex
})
</script>
