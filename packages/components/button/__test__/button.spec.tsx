import { mount } from '@vue/test-utils'
import { describe, expect, it } from 'vitest'
import Button from '../src/button.vue'

describe('Button.vue', () => {
  it('button render', async () => {
    const wrapper = mount(Button)
    expect(wrapper.classes()).toContain('cc-button')
  })

  it('button type render', async () => {
    const wrapper = mount(Button, {
      props: {
        type: 'primary',
      },
    })
    expect(wrapper.classes()).toContain('cc-button--primary')
  })

  it('button plain render', async () => {
    const wrapper = mount(Button, {
      props: {
        plain: true,
      },
    })
    expect(wrapper.classes()).toContain('is-plain')
  })

  it('button round render', async () => {
    const wrapper = mount(Button, {
      props: {
        round: true,
      },
    })
    expect(wrapper.classes()).toContain('is-round')
  })

  it('button disabled render', async () => {
    const wrapper = mount(Button, {
      props: {
        disabled: true,
      },
    })
    expect(wrapper.classes()).toContain('is-disabled')
  })

  it('button size render', async () => {
    const wrapper1 = mount(Button, {
      props: {
        size: 'small',
      },
    })
    const wrapper2 = mount(Button, {
      props: {
        size: 'large',
      },
    })
    expect(wrapper1.classes()).toContain('cc-button--small')
    expect(wrapper2.classes()).toContain('cc-button--large')
  })

  it('button render', async () => {
    const wrapper = mount(Button)
    await wrapper.trigger('click')
    expect(wrapper.emitted()).toBeDefined()
  })
})
