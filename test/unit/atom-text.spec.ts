import { mount } from '@vue/test-utils'
import AtomText from '@/components/atom/text/index.vue'
const props = {
  text: 'sample',
  fontSize: 'text-subtitle-1',
  fontWeight: 'font-weight-bold',
  color: 'text-black',
  lineHeight: 'line-height-sm'
}
describe('AtomText', () => {
  const wrapper = mount(AtomText, { props })
  test('data display', () => {
    expect(wrapper.find('p').text()).toBe(props.text)
  })
})
