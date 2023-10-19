<script setup lang="ts">
useHead({ title: 'index' })
</script>
<template>
  <div class="wrapper">
    <div class="d-flex align-center pl-16" style="height: 100dvh">
      <div class="flex-grow-1">
        <h1 class="text-h2 font-weight-bold mb-5" style="line-height: 1.3">Nuxt 3 Template</h1>
        <p class="text-h6 text-grey-darken-2">This repository has the following setup.</p>
        <ul class="text-subtitle-1 text-grey-darken-2 mb-5 pl-2" style="list-style: inside">
          <li>Nuxt3</li>
          <li>Docker</li>
          <li>Vitest</li>
          <li>Storybook</li>
        </ul>
        <atom-text
          text="Composable: useCounter example"
          font-weight="font-weight-regular"
          class="text-grey-darken-2"
        />
        <module-counter class="mt-2 mb-8" />
        <nuxt-link to="about"><p>To about page</p></nuxt-link>
        <nuxt-link to="prohibited"><p>To prohibited page</p></nuxt-link>
      </div>
      <div class="flex-grow-1 d-flex align-center pl-5">
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
