<script setup lang="ts">
const { count, increment, decrement } = useCounter()
</script>
<template>
  <v-card class="pr-5 pl-2" style="width: fit-content">
    <div class="d-flex align-center">
      <v-hover v-slot="{ isHovering, props }">
        <v-btn
          flat
          :icon="isHovering ? 'mdi-thumb-up' : 'mdi-thumb-up-outline'"
          class="text-red"
          style="cursor: pointer; transition: all 0.3s ease-out 0s"
          @click="increment()"
          v-bind="props"
          :ripple="false"
        />
      </v-hover>
      <v-hover v-slot="{ isHovering, props }">
        <v-btn
          flat
          :icon="isHovering ? 'mdi-thumb-down' : 'mdi-thumb-down-outline'"
          class="text-blue"
          style="cursor: pointer; transition: all 0.3s ease-out 0s"
          @click="decrement()"
          v-bind="props"
          :ripple="false"
        />
      </v-hover>
      <atom-text
        :text="`${count}`"
        color="text-grey-darken-2"
        class="text-right"
        style="min-width: 30px; font-family: 'Roboto Condensed', sans-serif"
      />
    </div>
  </v-card>
</template>
