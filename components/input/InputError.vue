<template>
  <span
    v-if="props.error"
    class="text-xs uppercase font-bold text-red"
    v-text="props.error"
  />
</template>

<script setup lang="ts">
interface InputErrorProps {
  error?: string
}

const props = defineProps<InputErrorProps>()
</script>
