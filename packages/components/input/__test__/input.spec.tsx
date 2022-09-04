import { nextTick, ref } from 'vue'
import { mount } from '@vue/test-utils'
import { describe, expect, it } from 'vitest'
import Input from '../src/input.vue'

describe('Input.vue', () => {
  const value = ref('')
  it('input render', async () => {
    const wrapper = mount(() => <Input modelValue={value.value} />)
    expect(wrapper.classes()).toContain('cc-input')
  })

  it('input disabled render', async () => {
    const wrapper = mount(() => <Input modelValue={value.value} disabled />)
    expect(wrapper.classes()).toContain('is-disabled')
  })

  it('input show-password render', async () => {
    const wrapper = mount(() => <Input modelValue={value.value} showPassword />)
    await nextTick()
    expect(wrapper.find('.cc-input__password')).toBeTruthy()
    value.value = '1'
    expect(wrapper.find('input').element.getAttribute('type')).toBe('password')
  })
})
