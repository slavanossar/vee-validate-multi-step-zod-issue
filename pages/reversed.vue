<template>
  <div class="flex justify-center p-10">
    <div class="w-56 space-y-4">
      <div class="flex justify-between items-baseline">
        <h1 class="font-bold">Form 2</h1>
        <NuxtLink to="/" class="text-sm underline">Reverse Steps</NuxtLink>
      </div>
      <BaseForm
        v-slot="{ formData }"
        :validation-schemas="validationSchemas"
        @submit="onSubmit"
      >
        <BaseFormStep>
          <div class="flex flex-col space-y-4">
            <InputText
              name="dateOfBirth"
              label="Date Of Birth"
              mask="## / ## / ####"
              placeholder="DD / MM / YYYY"
              required
            />
            <InputText label="Card Code" name="cardCode" mask="####" />
          </div>
        </BaseFormStep>
        <BaseFormStep>
          <div class="flex flex-col space-y-4">
            <InputText label="Full Name" name="fullName" />
            <InputCheckbox label="Donate?" name="donateToggle" />
            <InputCurrency
              v-if="formData?.donateToggle"
              label="Donation Amount"
              name="donationAmount"
            />
          </div>
        </BaseFormStep>
      </BaseForm>
      <p v-if="hasSubmitted">Submitted!</p>
    </div>
  </div>
</template>

<script setup lang="ts">
import { toTypedSchema } from '@vee-validate/zod'
import { stepOneSchema, stepTwoSchema } from './schemas'

const validationSchemas = [
  toTypedSchema(stepTwoSchema),
  toTypedSchema(stepOneSchema),
]

const hasSubmitted = ref(false)

const onSubmit = (formData: any) => {
  console.log(formData)
  hasSubmitted.value = true
}
</script>
