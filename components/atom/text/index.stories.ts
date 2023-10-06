import index from './index.vue'
import type { Meta, StoryObj } from '@storybook/vue3'
type Story = StoryObj<typeof index>

const meta: Meta<typeof index> = {
  title: 'Atom/Text/Index',
  component: index,
  render: (args) => ({
    components: { index },
    setup: () => ({ args }),
    template: `<index v-bind="args" ></index>`
  }),
  tags: ['autodocs']
}
export const Default: Story = {
  args: {
    text: 'sample',
    fontSize: 'text-subtitle-1',
    fontWeight: 'font-weight-bold',
    color: 'text-black',
    lineHeight: 'line-height-sm'
  }
}
export default meta
