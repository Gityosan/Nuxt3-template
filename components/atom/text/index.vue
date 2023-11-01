<script setup>
// withDefaults(
//   defineProps<{
//     comp?: string
//     text?: string | null
//     fontSize?: string
//     fontWeight?: string
//     color?: string
//     lineHeight?: string
//     style?: object
//     klass?: string
//   }>(),
//   {
//     comp: 'p',
//     fontSize: 'text-subtitle-1',
//     fontWeight: 'font-weight-bold',
//     color: 'text-black',
//     lineHeight: 'line-height-xs'
//   }
// )
defineProps({
  comp: { type: String, default: 'p' },
  text: { type: String, default: '' },
  fontSize: { type: String, default: 'text-subtitle-1' },
  fontWeight: { type: String, default: 'font-weight-bold' },
  color: { type: String, default: 'text-black' },
  lineHeight: { type: String, default: 'line-height-xs' },
  style: { type: Object },
  klass: { type: String, default: '' }
})
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
