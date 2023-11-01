<script setup>
defineProps({
  error: Object
})
const handleError = () => clearError({ redirect: '/' })
</script>
<template>
  <div>
    <h1>{{ error?.statusCode }}：{{ error?.message }}</h1>
    <v-btn @click="handleError">Clear errors</v-btn>
  </div>
</template>
