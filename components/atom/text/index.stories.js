import index from './index.vue'
export default {
  title: 'Atom/Text/Index',
  component: index
}
const Template = (args) => ({
  components: { AtomTextIndex: index },
  setup: () => ({ args }),
  template: `<AtomTextIndex v-bind="args" ></AtomTextIndex>`
})
export const Default = Template.bind({})
Default.args = {
  text: 'sample',
  fontSize: 'text-subtitle-1',
  fontWeight: 'font-weight-bold',
  color: 'text-black',
  lineHeight: 'line-height-sm'
}
