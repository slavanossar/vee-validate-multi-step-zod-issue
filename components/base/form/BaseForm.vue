<template>
  <form @submit.prevent="onSubmit">
    <slot v-bind="{ formData: values }" />
    <div class="mt-4 space-x-2">
      <button v-if="!isFirstStep" @click="formStepIndex--">Back</button>
      <button type="submit">
        <template v-if="isLastStep">Submit</template>
        <template v-else> Next </template>
      </button>
    </div>
  </form>
</template>

<script setup lang="ts" generic="T">
import { FormStepIndexKey, StepCounterKey } from './symbols'

interface BaseFormProps {
  validationSchemas: T[]
}

const props = defineProps<BaseFormProps>()

const emit = defineEmits<{
  submit: [formData: any]
  next: [stepIndex: number, formData: any]
}>()

const formStepIndex = ref(0)
provide(FormStepIndexKey, formStepIndex)

const stepCounter = ref(0)
provide(StepCounterKey, stepCounter)

const isFirstStep = computed(() => formStepIndex.value === 0)
const isLastStep = computed(() => formStepIndex.value === stepCounter.value - 1)

const currentSchema = computed(
  () => props.validationSchemas[formStepIndex.value],
)

const { handleSubmit, values } = useForm({
  validationSchema: currentSchema.value,
  keepValuesOnUnmount: true,
})

const onSubmit = handleSubmit(() => {
  if (isLastStep.value) {
    emit('submit', values)
  } else {
    formStepIndex.value++
    emit('next', formStepIndex.value, values)
  }
})
</script>

<style scoped lang="postcss">
button {
  @apply bg-black rounded-sm px-2 text-white;
}
</style>
