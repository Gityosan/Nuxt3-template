<template>
  <p>This is index page.</p>
  <p>{{ foo }}{{ hoge }}</p>
</template>
<script setup lang="ts">
const foo = useFoo()
const hoge = useHoge()
</script>
