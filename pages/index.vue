<script setup lang="ts">
const foo = useFoo()
const hoge = useHoge()
</script>
<template>
  <v-card class="ma-5 pa-5">
    <v-card-title>This is index page.</v-card-title>
    <v-card-text>{{ foo }}{{ hoge }}</v-card-text>
    <v-btn width="50" height="50" icon>
      <v-icon>mdi-circle</v-icon>
    </v-btn>
    <v-btn width="50" height="50" icon>
      <v-icon>mdi-delete</v-icon>
    </v-btn>
  </v-card>
</template>
