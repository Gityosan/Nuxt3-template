<template>
  <div>
    <h1>{{ props.error.statusMessage }}</h1>
    <button @click="handleError">Clear errors</button>
  </div>
</template>

<script setup>
const props = defineProps({
  error: Object
})
console.log(props.error)
const handleError = () => clearError({ redirect: '/' })
</script>
<style lang="scss" scoped>
h1 {
  color: aqua;
}
</style>
