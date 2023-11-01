import Index from './index.vue'
import type { Meta, StoryObj } from '@storybook/vue3'
type Story = StoryObj<typeof Index>

const meta: Meta<typeof Index> = {
  title: 'Atom/Text/Index',
  component: Index,
  // render: (args) => ({
  //   components: { Index },
  //   setup: () => ({ args }),
  //   template: `<Index v-bind="args" ></Index>`
  // }),
  tags: ['autodocs']
}
export const Base: Story = {
  args: {
    text: 'sample',
    fontSize: 'text-subtitle-1',
    fontWeight: 'font-weight-bold',
    color: 'text-black',
    lineHeight: 'line-height-sm'
  }
}
export default meta
