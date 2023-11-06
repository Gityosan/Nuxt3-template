<script setup lang="ts">
withDefaults(
  defineProps<{
    comp?: string
    text?: string | null
    fontSize?: string
    fontWeight?: string
    color?: string
    lineHeight?: string
    style?: object
    klass?: string
  }>(),
  {
    comp: 'p',
    fontSize: 'text-subtitle-1',
    fontWeight: 'font-weight-bold',
    color: 'text-black',
    lineHeight: 'line-height-xs'
  }
)
</script>
<template>
  <component
    :is="comp"
    :class="[fontSize, fontWeight, color, lineHeight, klass]"
    :style="{ ...style }"
  >
    <slot name="prepend" />
    {{ text }}
    <slot />
  </component>
</template>
