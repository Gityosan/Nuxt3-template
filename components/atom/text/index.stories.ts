import AtomText from './index.vue'
import type { Meta, StoryObj } from '@storybook/vue3'
const meta = {
  title: 'Atom/Text/Index',
  component: AtomText,
  tags: ['autodocs']
} satisfies Meta<typeof AtomText>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
    text: 'sample',
    fontSize: 'text-subtitle-1',
    fontWeight: 'font-weight-bold',
    color: 'text-black',
    lineHeight: 'line-height-sm'
  }
}
