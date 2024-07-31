import { vMaska } from 'maska'

export default defineNuxtPlugin(({ vueApp }) => {
  vueApp.directive('maska', vMaska)
})
