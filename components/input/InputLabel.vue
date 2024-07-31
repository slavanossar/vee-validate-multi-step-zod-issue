<template>
  <label
    class="type-mono-12 mb-2.5"
    :class="props.for ? 'cursor-pointer' : ''"
    :for="props.for"
  >
    <slot />
  </label>
</template>

<script lang="ts" setup>
interface InputLabelProps {
  for?: string
}

const props = defineProps<InputLabelProps>()
</script>
