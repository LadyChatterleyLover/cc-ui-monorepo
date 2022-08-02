import { mount } from '@vue/test-utils'
import { describe, expect, it } from 'vitest'
import Icon from '../src/icon.vue'

describe('Icon.vue',() => {
  it('icon render', async () => {
    const wrapper = mount(Icon)
    const icon = wrapper.find('span') 
    expect(icon.classes()).toContain('xicon')
  })

  it('icon size render', async () => {
    const wrapper = mount(Icon, {
      props: {
        size: 20
      }
    })
    const icon = wrapper.find('span')
    expect(icon.element.getAttribute('style')).toContain('font-size: 20px')
  })

  it('icon color render', async () => {
    const wrapper = mount(Icon, {
      props: {
        color: 'red'
      }
    })
    const icon = wrapper.find('span')
    expect(icon.element.getAttribute('style')).toContain('color: red')
  })
})