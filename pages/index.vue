<template>
  <p>This is index page.</p>
  <p>{{ foo }}{{ hoge }}</p>
  <!-- <v-icon>mdi-delete</v-icon>÷ -->
  <div
    id="g_id_onload"
    data-client_id="208457558693-34so783ibhnr4gftqvobo9df1lmsfv3o.apps.googleusercontent.com"
    data-login_uri="http://localhost:3000"
    data-auto_prompt="true"
  ></div>
  <div
    class="g_id_signin"
    data-type="standard"
    data-size="large"
    data-theme="outline"
    data-text="sign_in_with"
    data-shape="rectangular"
    data-logo_alignment="left"
  ></div>
</template>
<script setup lang="ts">
const foo = useFoo()
const hoge = useHoge()
useHead({
  script: [
    { src: 'https://accounts.google.com/gsi/client', async: true, defer: true }
  ]
})
</script>
