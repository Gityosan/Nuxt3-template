<template>
  <div>
    <h1>{{ error?.statusMessage }}</h1>
    <button @click="handleError">Clear errors</button>
  </div>
</template>

<script setup lang="ts">
interface Props {
  error: Object
}
const { error } = withDefaults(defineProps<Props>(), {
  error: null
})
console.log(error)
const handleError = () => clearError({ redirect: '/' })
</script>
<style lang="scss" scoped>
h1 {
  color: green;
}
</style>
