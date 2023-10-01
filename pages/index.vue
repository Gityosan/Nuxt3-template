<script setup lang="ts">
useHead({ title: 'index' })
const { count, increment, decrement } = useCounter()
</script>
<template>
  <div class="pa-10 wrapper">
    <div class="d-flex align-center" style="height: 600px; gap: 20px">
      <div class="flex-grow-1">
        <h1 class="text-h2 font-weight-bold mb-5" style="line-height: 1.3">Nuxt 3 Template</h1>
        <p class="text-h6 text-grey-darken-2">This repository has the following setup</p>
        <ul class="text-subtitle-1 text-grey-darken-2 mb-5" style="list-style: inside">
          <li>Nuxt3</li>
          <li>Vitest</li>
          <li>Docker</li>
        </ul>
        <div class="d-flex align-center" style="gap: 0 10px">
          <v-hover v-slot="{ isHovering, props }">
            <v-btn
              flat
              :icon="isHovering ? 'mdi-thumb-up' : 'mdi-thumb-up-outline'"
              class="text-red"
              style="cursor: pointer; transition: all 0.3s ease-out 0s"
              @click="increment()"
              v-bind="props"
            />
          </v-hover>

          <span>{{ count }}</span>
        </div>
      </div>
      <div class="flex-grow-0 d-flex align-center">
        <img src="/nuxt_logo.svg" style="width: 140px; height: 140px" />
        <v-icon icon="mdi-window-close" size="50" class="text-grey" />
        <img src="/vitest_logo.png" style="width: 140px; height: 140px" />
      </div>
    </div>
  </div>
</template>
<style lang="scss" scoped>
.wrapper {
  min-height: 100dvh;
  background-color: rgba(255, 255, 255, 0.5);
  color: black;
  line-height: 1.5;
}
</style>
