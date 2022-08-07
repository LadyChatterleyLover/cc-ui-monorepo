;(function (V, O) {
  typeof exports == 'object' && typeof module < 'u'
    ? O(
        exports,
        require('@cc-ui/utils'),
        require('vue'),
        require('@cc-ui/hooks')
      )
    : typeof define == 'function' && define.amd
    ? define(['exports', '@cc-ui/utils', 'vue', '@cc-ui/hooks'], O)
    : ((V = typeof globalThis < 'u' ? globalThis : V || self),
      O((V.index = {}), V.utils, V.vue, V.hooks))
})(this, function (V, O, t, Ae) {
  'use strict'
  function Oe(r) {
    let e = 0
    for (let n = 0; n < r.length; ++n) r[n] === '&' && ++e
    return e
  }
  const se = /\s*,(?![^(]*\))\s*/g,
    Se = /\s+/g
  function Te(r, e) {
    const n = []
    return (
      e.split(se).forEach((o) => {
        let a = Oe(o)
        if (a) {
          if (a === 1) {
            r.forEach((i) => {
              n.push(o.replace('&', i))
            })
            return
          }
        } else {
          r.forEach((i) => {
            n.push((i && i + ' ') + o)
          })
          return
        }
        let l = [o]
        for (; a--; ) {
          const i = []
          l.forEach((s) => {
            r.forEach((c) => {
              i.push(s.replace('&', c))
            })
          }),
            (l = i)
        }
        l.forEach((i) => n.push(i))
      }),
      n
    )
  }
  function Pe(r, e) {
    const n = []
    return (
      e.split(se).forEach((o) => {
        r.forEach((a) => {
          n.push((a && a + ' ') + o)
        })
      }),
      n
    )
  }
  function je(r) {
    let e = ['']
    return (
      r.forEach((n) => {
        ;(n = n && n.trim()),
          n && (n.includes('&') ? (e = Te(e, n)) : (e = Pe(e, n)))
      }),
      e.join(', ').replace(Se, ' ')
    )
  }
  const Ie = /[A-Z]/g
  function ce(r) {
    return r.replace(Ie, (e) => '-' + e.toLowerCase())
  }
  function Me(r, e = '  ') {
    return typeof r == 'object' && r !== null
      ? ` {
` +
          Object.entries(r).map((n) => e + `  ${ce(n[0])}: ${n[1]};`).join(`
`) +
          `
` +
          e +
          '}'
      : `: ${r};`
  }
  function Re(r, e, n) {
    return typeof r == 'function' ? r({ context: e.context, props: n }) : r
  }
  function fe(r, e, n, o) {
    if (!e) return ''
    const a = Re(e, n, o)
    if (!a) return ''
    if (typeof a == 'string')
      return `${r} {
${a}
}`
    const l = Object.keys(a)
    if (l.length === 0)
      return n.config.keepEmptyBlock
        ? r +
            ` {
}`
        : ''
    const i = r ? [r + ' {'] : []
    return (
      l.forEach((s) => {
        const c = a[s]
        if (s === 'raw') {
          i.push(
            `
` +
              c +
              `
`
          )
          return
        }
        ;(s = ce(s)), c != null && i.push(`  ${s}${Me(c)}`)
      }),
      r && i.push('}'),
      i.join(`
`)
    )
  }
  function H(r, e, n) {
    !r ||
      r.forEach((o) => {
        if (Array.isArray(o)) H(o, e, n)
        else if (typeof o == 'function') {
          const a = o(e)
          Array.isArray(a) ? H(a, e, n) : a && n(a)
        } else o && n(o)
      })
  }
  function de(r, e, n, o, a, l) {
    const i = r.$
    !i || typeof i == 'string'
      ? e.push(i)
      : typeof i == 'function'
      ? e.push(i({ context: o.context, props: a }))
      : (i.before && i.before(o.context),
        !i.$ || typeof i.$ == 'string'
          ? e.push(i.$)
          : i.$ && e.push(i.$({ context: o.context, props: a })))
    const s = je(e),
      c = fe(s, r.props, o, a)
    l && c && l.insertRule(c),
      !l && c.length && n.push(c),
      r.children &&
        H(r.children, { context: o.context, props: a }, (u) => {
          if (typeof u == 'string') {
            const g = fe(s, { raw: u }, o, a)
            l ? l.insertRule(g) : n.push(g)
          } else de(u, e, n, o, a, l)
        }),
      e.pop(),
      i && i.after && i.after(o.context)
  }
  function ue(r, e, n, o = !1) {
    const a = []
    return (
      de(r, [], a, e, n, o ? r.instance.__styleSheet : void 0),
      o
        ? ''
        : a.join(`

`)
    )
  }
  function Le(r) {
    for (var e = 0, n, o = 0, a = r.length; a >= 4; ++o, a -= 4)
      (n =
        (r.charCodeAt(o) & 255) |
        ((r.charCodeAt(++o) & 255) << 8) |
        ((r.charCodeAt(++o) & 255) << 16) |
        ((r.charCodeAt(++o) & 255) << 24)),
        (n = (n & 65535) * 1540483477 + (((n >>> 16) * 59797) << 16)),
        (n ^= n >>> 24),
        (e =
          ((n & 65535) * 1540483477 + (((n >>> 16) * 59797) << 16)) ^
          ((e & 65535) * 1540483477 + (((e >>> 16) * 59797) << 16)))
    switch (a) {
      case 3:
        e ^= (r.charCodeAt(o + 2) & 255) << 16
      case 2:
        e ^= (r.charCodeAt(o + 1) & 255) << 8
      case 1:
        ;(e ^= r.charCodeAt(o) & 255),
          (e = (e & 65535) * 1540483477 + (((e >>> 16) * 59797) << 16))
    }
    return (
      (e ^= e >>> 13),
      (e = (e & 65535) * 1540483477 + (((e >>> 16) * 59797) << 16)),
      ((e ^ (e >>> 15)) >>> 0).toString(36)
    )
  }
  function Y(r) {
    if (!r) return
    const e = r.parentElement
    e && e.removeChild(r)
  }
  function G(r) {
    return document.querySelector(`style[cssr-id="${r}"]`)
  }
  function De(r) {
    const e = document.createElement('style')
    return e.setAttribute('cssr-id', r), e
  }
  window && (window.__cssrContext = {})
  function me(r) {
    const e = r.getAttribute('mount-count')
    return e === null ? null : Number(e)
  }
  function v(r, e) {
    r.setAttribute('mount-count', String(e))
  }
  function pe(r, e, n, o) {
    const { els: a } = e
    if (n === void 0) a.forEach(Y), (e.els = [])
    else {
      const l = G(n)
      if (l && a.includes(l)) {
        const i = me(l)
        o
          ? i === null
            ? console.error(
                `[css-render/unmount]: The style with target='${n}' is mounted in count mode.`
              )
            : i <= 1
            ? (Y(l), (e.els = a.filter((s) => s !== l)))
            : v(l, i - 1)
          : i !== null
          ? console.error(
              `[css-render/unmount]: The style with target='${n}' is mounted in no-count mode.`
            )
          : (Y(l), (e.els = a.filter((s) => s !== l)))
      }
    }
  }
  function We(r, e) {
    r.push(e)
  }
  function Ue(r, e, n, o, a, l, i, s, c) {
    if (i && !c) {
      if (n === void 0) {
        console.error('[css-render/mount]: `id` is required in `boost` mode.')
        return
      }
      const x = window.__cssrContext
      x[n] || ((x[n] = !0), ue(e, r, o, i))
      return
    }
    let u
    const { els: g } = e
    let d
    if ((n === void 0 && ((d = e.render(o)), (n = Le(d))), c)) {
      c(n, d != null ? d : e.render(o))
      return
    }
    const p = G(n)
    if (s || p === null) {
      if (
        ((u = p === null ? De(n) : p),
        d === void 0 && (d = e.render(o)),
        (u.textContent = d),
        p !== null)
      )
        return
      if (a) {
        const x = document.head.getElementsByTagName('style')[0] || null
        document.head.insertBefore(u, x)
      } else document.head.appendChild(u)
      l && v(u, 1), We(g, u)
    } else {
      const x = me(p)
      l
        ? x === null
          ? console.error(
              `[css-render/mount]: The style with id='${n}' has been mounted in no-count mode.`
            )
          : v(p, x + 1)
        : x !== null &&
          console.error(
            `[css-render/mount]: The style with id='${n}' has been mounted in count mode.`
          )
    }
    return p != null ? p : u
  }
  function Ze(r) {
    return ue(this, this.instance, r)
  }
  function Je(r = {}) {
    const {
      target: e,
      id: n,
      ssr: o,
      props: a,
      count: l = !1,
      head: i = !1,
      boost: s = !1,
      force: c = !1,
    } = r
    return Ue(this.instance, this, n != null ? n : e, a, i, l, s, c, o)
  }
  function Ke(r = {}) {
    const { id: e, target: n, delay: o = 0, count: a = !1 } = r
    o === 0
      ? pe(this.instance, this, e != null ? e : n, a)
      : setTimeout(() => pe(this.instance, this, e != null ? e : n, a), o)
  }
  const Z = function (r, e, n, o) {
      return {
        instance: r,
        $: e,
        props: n,
        children: o,
        els: [],
        render: Ze,
        mount: Je,
        unmount: Ke,
      }
    },
    Qe = function (r, e, n, o) {
      return Array.isArray(e)
        ? Z(r, { $: null }, null, e)
        : Array.isArray(n)
        ? Z(r, e, null, n)
        : Array.isArray(o)
        ? Z(r, e, n, o)
        : Z(r, e, n, null)
    }
  function Xe(r = {}) {
    let e = null
    const n = {
      c: (...o) => Qe(n, ...o),
      use: (o, ...a) => o.install(n, ...a),
      find: G,
      context: {},
      config: r,
      get __styleSheet() {
        if (!e) {
          const o = document.createElement('style')
          return (
            document.head.appendChild(o),
            (e = document.styleSheets[document.styleSheets.length - 1]),
            e
          )
        }
        return e
      },
    }
    return n
  }
  const { c: ee } = Xe(),
    He = ee('.xicon', { width: '1em', height: '1em', display: 'inline-flex' }, [
      ee('svg', { width: '1em', height: '1em' }),
      ee('svg:not([fill])', { fill: 'currentColor' }),
    ]),
    Ye = () => {
      He.mount({ id: 'xicons-icon' })
    },
    he = { size: [String, Number], color: String, tag: String },
    ge = Symbol('IconConfigInjection')
  t.defineComponent({
    name: 'IconConfigProvider',
    props: he,
    setup(r, { slots: e }) {
      return t.provide(ge, r), () => t.renderSlot(e, 'default')
    },
  })
  const Ge = 'span',
    ve = t.defineComponent({
      name: 'Icon',
      props: he,
      setup(r, { slots: e }) {
        const n = t.inject(ge, null),
          o = t.computed(() => {
            var i
            const s =
              (i = r.size) !== null && i !== void 0
                ? i
                : n == null
                ? void 0
                : n.size
            if (s !== void 0)
              return typeof s == 'number' || /^\d+$/.test(s) ? `${s}px` : s
          }),
          a = t.computed(() => {
            const { color: i } = r
            return i === void 0 ? (n ? n.color : void 0) : i
          }),
          l = t.computed(() => {
            var i
            const { tag: s } = r
            return s === void 0
              ? (i = n == null ? void 0 : n.tag) !== null && i !== void 0
                ? i
                : Ge
              : s
          })
        return (
          t.onBeforeMount(() => {
            Ye()
          }),
          () =>
            t.h(
              l.value,
              { class: 'xicon', style: { color: a.value, fontSize: o.value } },
              [t.renderSlot(e, 'default')]
            )
        )
      },
    }),
    et = t.defineComponent({
      __name: 'icon',
      props: {
        color: { default: 'inherit' },
        size: { default: 16 },
        tag: { default: 'span' },
      },
      setup(r) {
        return (e, n) => (
          t.openBlock(),
          t.createBlock(
            t.unref(ve),
            { size: r.size, color: r.color, tag: r.tag },
            {
              default: t.withCtx(() => [t.renderSlot(e.$slots, 'default')]),
              _: 3,
            },
            8,
            ['size', 'color', 'tag']
          )
        )
      },
    }),
    T = O.withInstall(et, 'cc-icon'),
    tt = (r, e) => {
      if (e.value === '') return ''
      if (e.value === 'small') return r.m('small')
      if (e.value === 'large') return r.m('large')
    },
    nt = (r, e) => {
      if (e.value === '') return r.m('default')
      if (e.value === 'primary') return r.m('primary')
      if (e.value === 'success') return r.m('success')
      if (e.value === 'warning') return r.m('warning')
      if (e.value === 'danger') return r.m('danger')
      if (e.value === 'info') return r.m('info')
    },
    rt = ['nativeType', 'onClick'],
    ot = t.defineComponent({
      __name: 'button',
      props: {
        size: { default: '' },
        type: { default: '' },
        plain: { type: Boolean, default: !1 },
        round: { type: Boolean, default: !1 },
        circle: { type: Boolean, default: !1 },
        disabled: { type: Boolean, default: !1 },
        nativeType: { default: 'button' },
        icon: null,
      },
      emits: ['click'],
      setup(r, { emit: e }) {
        const n = r,
          o = Ae.useNamespace('button'),
          a = (d) => {
            n.disabled || e('click', d)
          },
          l = tt(
            o,
            t.computed(() => n.size)
          ),
          i = nt(
            o,
            t.computed(() => n.type)
          ),
          s = t.computed(() => (n.plain ? 'is-plain' : '')),
          c = t.computed(() => (n.round ? 'is-round' : '')),
          u = t.computed(() => (n.disabled ? 'is-disabled' : '')),
          g = t.computed(() => (n.circle ? 'is-circle' : ''))
        return (d, p) => {
          const x = t.resolveComponent('cc-icon')
          return (
            t.openBlock(),
            t.createElementBlock(
              'button',
              {
                nativeType: r.nativeType,
                class: t.normalizeClass([
                  t.unref(o).b(),
                  t.unref(l),
                  t.unref(i),
                  t.unref(s),
                  t.unref(c),
                  t.unref(u),
                  t.unref(g),
                ]),
                onClick: t.withModifiers(a, ['prevent', 'stop']),
              },
              [
                r.icon
                  ? (t.openBlock(),
                    t.createBlock(
                      x,
                      { key: 0 },
                      {
                        default: t.withCtx(() => [
                          (t.openBlock(),
                          t.createBlock(
                            t.resolveDynamicComponent(r.icon),
                            { color: r.type ? '#fff' : '#000' },
                            null,
                            8,
                            ['color']
                          )),
                        ]),
                        _: 1,
                      }
                    ))
                  : t.createCommentVNode('', !0),
                d.$slots.default
                  ? (t.openBlock(),
                    t.createElementBlock(
                      'span',
                      {
                        key: 1,
                        style: t.normalizeStyle({
                          marginLeft: r.icon ? '8px' : '0',
                        }),
                      },
                      [t.renderSlot(d.$slots, 'default')],
                      4
                    ))
                  : t.createCommentVNode('', !0),
              ],
              10,
              rt
            )
          )
        }
      },
    }),
    ye = O.withInstall(ot, 'cc-button'),
    at = {
      xmlns: 'http://www.w3.org/2000/svg',
      'xmlns:xlink': 'http://www.w3.org/1999/xlink',
      viewBox: '0 0 1024 1024',
    },
    it = [
      t.createElementVNode(
        'path',
        {
          d: 'M699 353h-46.9c-10.2 0-19.9 4.9-25.9 13.3L469 584.3l-71.2-98.8c-6-8.3-15.6-13.3-25.9-13.3H325c-6.5 0-10.3 7.4-6.5 12.7l124.6 172.8a31.8 31.8 0 0 0 51.7 0l210.6-292c3.9-5.3.1-12.7-6.4-12.7z',
          fill: 'currentColor',
        },
        null,
        -1
      ),
      t.createElementVNode(
        'path',
        {
          d: 'M512 64C264.6 64 64 264.6 64 512s200.6 448 448 448s448-200.6 448-448S759.4 64 512 64zm0 820c-205.4 0-372-166.6-372-372s166.6-372 372-372s372 166.6 372 372s-166.6 372-372 372z',
          fill: 'currentColor',
        },
        null,
        -1
      ),
    ],
    lt = t.defineComponent({
      name: 'CheckCircleOutlined',
      render: function (e, n) {
        return t.openBlock(), t.createElementBlock('svg', at, it)
      },
    }),
    st = {
      xmlns: 'http://www.w3.org/2000/svg',
      'xmlns:xlink': 'http://www.w3.org/1999/xlink',
      viewBox: '0 0 1024 1024',
    },
    ct = [
      t.createElementVNode(
        'path',
        {
          d: 'M685.4 354.8c0-4.4-3.6-8-8-8l-66 .3L512 465.6l-99.3-118.4l-66.1-.3c-4.4 0-8 3.5-8 8c0 1.9.7 3.7 1.9 5.2l130.1 155L340.5 670a8.32 8.32 0 0 0-1.9 5.2c0 4.4 3.6 8 8 8l66.1-.3L512 564.4l99.3 118.4l66 .3c4.4 0 8-3.5 8-8c0-1.9-.7-3.7-1.9-5.2L553.5 515l130.1-155c1.2-1.4 1.8-3.3 1.8-5.2z',
          fill: 'currentColor',
        },
        null,
        -1
      ),
      t.createElementVNode(
        'path',
        {
          d: 'M512 65C264.6 65 64 265.6 64 513s200.6 448 448 448s448-200.6 448-448S759.4 65 512 65zm0 820c-205.4 0-372-166.6-372-372s166.6-372 372-372s372 166.6 372 372s-166.6 372-372 372z',
          fill: 'currentColor',
        },
        null,
        -1
      ),
    ],
    we = t.defineComponent({
      name: 'CloseCircleOutlined',
      render: function (e, n) {
        return t.openBlock(), t.createElementBlock('svg', st, ct)
      },
    }),
    ft = {
      xmlns: 'http://www.w3.org/2000/svg',
      'xmlns:xlink': 'http://www.w3.org/1999/xlink',
      viewBox: '0 0 1024 1024',
    },
    dt = [
      t.createElementVNode(
        'path',
        {
          d: 'M563.8 512l262.5-312.9c4.4-5.2.7-13.1-6.1-13.1h-79.8c-4.7 0-9.2 2.1-12.3 5.7L511.6 449.8L295.1 191.7c-3-3.6-7.5-5.7-12.3-5.7H203c-6.8 0-10.5 7.9-6.1 13.1L459.4 512L196.9 824.9A7.95 7.95 0 0 0 203 838h79.8c4.7 0 9.2-2.1 12.3-5.7l216.5-258.1l216.5 258.1c3 3.6 7.5 5.7 12.3 5.7h79.8c6.8 0 10.5-7.9 6.1-13.1L563.8 512z',
          fill: 'currentColor',
        },
        null,
        -1
      ),
    ],
    xe = t.defineComponent({
      name: 'CloseOutlined',
      render: function (e, n) {
        return t.openBlock(), t.createElementBlock('svg', ft, dt)
      },
    }),
    ut = {
      xmlns: 'http://www.w3.org/2000/svg',
      'xmlns:xlink': 'http://www.w3.org/1999/xlink',
      viewBox: '0 0 1024 1024',
    },
    mt = [
      t.createElementVNode(
        'path',
        {
          d: 'M942.2 486.2Q889.47 375.11 816.7 305l-50.88 50.88C807.31 395.53 843.45 447.4 874.7 512C791.5 684.2 673.4 766 512 766q-72.67 0-133.87-22.38L323 798.75Q408 838 512 838q288.3 0 430.2-300.3a60.29 60.29 0 0 0 0-51.5zm-63.57-320.64L836 122.88a8 8 0 0 0-11.32 0L715.31 232.2Q624.86 186 512 186q-288.3 0-430.2 300.3a60.3 60.3 0 0 0 0 51.5q56.69 119.4 136.5 191.41L112.48 835a8 8 0 0 0 0 11.31L155.17 889a8 8 0 0 0 11.31 0l712.15-712.12a8 8 0 0 0 0-11.32zM149.3 512C232.6 339.8 350.7 258 512 258c54.54 0 104.13 9.36 149.12 28.39l-70.3 70.3a176 176 0 0 0-238.13 238.13l-83.42 83.42C223.1 637.49 183.3 582.28 149.3 512zm246.7 0a112.11 112.11 0 0 1 146.2-106.69L401.31 546.2A112 112 0 0 1 396 512z',
          fill: 'currentColor',
        },
        null,
        -1
      ),
      t.createElementVNode(
        'path',
        {
          d: 'M508 624c-3.46 0-6.87-.16-10.25-.47l-52.82 52.82a176.09 176.09 0 0 0 227.42-227.42l-52.82 52.82c.31 3.38.47 6.79.47 10.25a111.94 111.94 0 0 1-112 112z',
          fill: 'currentColor',
        },
        null,
        -1
      ),
    ],
    pt = t.defineComponent({
      name: 'EyeInvisibleOutlined',
      render: function (e, n) {
        return t.openBlock(), t.createElementBlock('svg', ut, mt)
      },
    }),
    ht = {
      xmlns: 'http://www.w3.org/2000/svg',
      'xmlns:xlink': 'http://www.w3.org/1999/xlink',
      viewBox: '0 0 1024 1024',
    },
    gt = [
      t.createElementVNode(
        'path',
        {
          d: 'M942.2 486.2C847.4 286.5 704.1 186 512 186c-192.2 0-335.4 100.5-430.2 300.3a60.3 60.3 0 0 0 0 51.5C176.6 737.5 319.9 838 512 838c192.2 0 335.4-100.5 430.2-300.3c7.7-16.2 7.7-35 0-51.5zM512 766c-161.3 0-279.4-81.8-362.7-254C232.6 339.8 350.7 258 512 258c161.3 0 279.4 81.8 362.7 254C791.5 684.2 673.4 766 512 766zm-4-430c-97.2 0-176 78.8-176 176s78.8 176 176 176s176-78.8 176-176s-78.8-176-176-176zm0 288c-61.9 0-112-50.1-112-112s50.1-112 112-112s112 50.1 112 112s-50.1 112-112 112z',
          fill: 'currentColor',
        },
        null,
        -1
      ),
    ],
    yt = t.defineComponent({
      name: 'EyeOutlined',
      render: function (e, n) {
        return t.openBlock(), t.createElementBlock('svg', ht, gt)
      },
    }),
    wt = {
      xmlns: 'http://www.w3.org/2000/svg',
      'xmlns:xlink': 'http://www.w3.org/1999/xlink',
      viewBox: '0 0 1024 1024',
    },
    xt = [
      t.createElementVNode(
        'path',
        {
          d: 'M512 64C264.6 64 64 264.6 64 512s200.6 448 448 448s448-200.6 448-448S759.4 64 512 64zm0 820c-205.4 0-372-166.6-372-372s166.6-372 372-372s372 166.6 372 372s-166.6 372-372 372z',
          fill: 'currentColor',
        },
        null,
        -1
      ),
      t.createElementVNode(
        'path',
        {
          d: 'M464 336a48 48 0 1 0 96 0a48 48 0 1 0-96 0zm72 112h-48c-4.4 0-8 3.6-8 8v272c0 4.4 3.6 8 8 8h48c4.4 0 8-3.6 8-8V456c0-4.4-3.6-8-8-8z',
          fill: 'currentColor',
        },
        null,
        -1
      ),
    ],
    bt = t.defineComponent({
      name: 'InfoCircleOutlined',
      render: function (e, n) {
        return t.openBlock(), t.createElementBlock('svg', wt, xt)
      },
    }),
    Ct = {
      xmlns: 'http://www.w3.org/2000/svg',
      'xmlns:xlink': 'http://www.w3.org/1999/xlink',
      viewBox: '0 0 1024 1024',
    },
    kt = [
      t.createElementVNode(
        'path',
        {
          d: 'M724 218.3V141c0-6.7-7.7-10.4-12.9-6.3L260.3 486.8a31.86 31.86 0 0 0 0 50.3l450.8 352.1c5.3 4.1 12.9.4 12.9-6.3v-77.3c0-4.9-2.3-9.6-6.1-12.6l-360-281l360-281.1c3.8-3 6.1-7.7 6.1-12.6z',
          fill: 'currentColor',
        },
        null,
        -1
      ),
    ],
    Et = t.defineComponent({
      name: 'LeftOutlined',
      render: function (e, n) {
        return t.openBlock(), t.createElementBlock('svg', Ct, kt)
      },
    }),
    Bt = {
      xmlns: 'http://www.w3.org/2000/svg',
      'xmlns:xlink': 'http://www.w3.org/1999/xlink',
      viewBox: '0 0 1024 1024',
    },
    _t = [
      t.createElementVNode(
        'path',
        {
          d: 'M765.7 486.8L314.9 134.7A7.97 7.97 0 0 0 302 141v77.3c0 4.9 2.3 9.6 6.1 12.6l360 281.1l-360 281.1c-3.9 3-6.1 7.7-6.1 12.6V883c0 6.7 7.7 10.4 12.9 6.3l450.8-352.1a31.96 31.96 0 0 0 0-50.4z',
          fill: 'currentColor',
        },
        null,
        -1
      ),
    ],
    $t = t.defineComponent({
      name: 'RightOutlined',
      render: function (e, n) {
        return t.openBlock(), t.createElementBlock('svg', Bt, _t)
      },
    })
  function J(r, e, n) {
    let o = r
    return e && (o += `__${e}`), n && (o += `--${n}`), o
  }
  function K(r) {
    const e = `cc-${r}`
    return {
      b: () => J(e),
      e: (i) => (i ? J(e, i) : ''),
      m: (i) => (i ? J(e, '', i) : ''),
      em: (i, s) => (i && s ? J(e, i, s) : ''),
    }
  }
  const Vt = ['maxlength'],
    Nt = ['type', 'placeholder', 'readonly', 'disabled', 'maxlength'],
    Ft = t.defineComponent({
      __name: 'input',
      props: {
        modelValue: null,
        type: { default: 'text' },
        placeholder: { default: '' },
        maxlength: null,
        minlength: null,
        clearable: { type: Boolean, default: !1 },
        disabled: { type: Boolean, default: !1 },
        readonly: { type: Boolean, default: !1 },
        showPassword: { type: Boolean, default: !1 },
        showWordLimit: { type: Boolean, default: !1 },
        prefixIcon: null,
        suffixIcon: null,
        rows: { default: 1 },
      },
      emits: ['update:modelValue', 'input', 'blur', 'focus', 'clear', 'change'],
      setup(r, { expose: e, emit: n }) {
        const o = r,
          a = K('input'),
          l = t.inject('setValidateChangeFlag', void 0),
          i = t.inject('setValidateBlurFlag', void 0),
          s = t.ref(0),
          c = t.ref(0),
          u = t.ref(),
          g = t.ref(o.showPassword),
          d = t.ref(o.modelValue),
          p = async () => {
            var f
            await t.nextTick(), (f = u.value) == null || f.focus()
          },
          x = () => {
            var f
            return (f = u.value) == null ? void 0 : f.blur()
          },
          B = (f) => {
            o.disabled ||
              (n('update:modelValue', f.target.value),
              n('input', f.target.value),
              s.value++,
              l == null || l(s.value))
          },
          h = (f) => {
            o.disabled || (n('blur', f), c.value++, i == null || i(c.value))
          },
          E = (f) => {
            o.disabled || (l == null || l(0), i == null || i(0), n('focus', f))
          },
          m = (f) => {
            n('change', f.target.value)
          },
          N = (f) => {
            n('update:modelValue', ''), n('clear', f), p()
          },
          y = () => {
            ;(g.value = !g.value), p()
          }
        return (
          t.watch(
            () => o.modelValue,
            (f) => {
              d.value = f
            }
          ),
          e({ foucs: p, blur: x }),
          (f, k) => {
            const b = t.resolveComponent('cc-icon')
            return (
              t.openBlock(),
              t.createElementBlock(
                'div',
                {
                  class: t.normalizeClass([
                    t.unref(a).b(),
                    { 'is-disabled': r.disabled },
                  ]),
                },
                [
                  t.createElementVNode(
                    'div',
                    {
                      class: t.normalizeClass([
                        t.unref(a).e('wrapper'),
                        `${r.disabled ? t.unref(a).e('wrapper-disabled') : ''}`,
                      ]),
                      style: t.normalizeStyle({
                        padding: r.type === 'textarea' ? '0' : '0px 12px',
                      }),
                    },
                    [
                      f.$slots.prefix || r.prefixIcon
                        ? (t.openBlock(),
                          t.createElementBlock(
                            'span',
                            {
                              key: 0,
                              style: { color: '#a8abb2' },
                              class: t.normalizeClass([
                                t.unref(a).e('wrapper-content'),
                              ]),
                            },
                            [
                              t.createElementVNode('span', null, [
                                r.prefixIcon
                                  ? (t.openBlock(),
                                    t.createBlock(
                                      b,
                                      { key: 0 },
                                      {
                                        default: t.withCtx(() => [
                                          (t.openBlock(),
                                          t.createBlock(
                                            t.resolveDynamicComponent(
                                              r.prefixIcon
                                            )
                                          )),
                                        ]),
                                        _: 1,
                                      }
                                    ))
                                  : t.renderSlot(f.$slots, 'prefix', {
                                      key: 1,
                                    }),
                              ]),
                            ],
                            2
                          ))
                        : t.createCommentVNode('', !0),
                      r.type === 'textarea'
                        ? t.withDirectives(
                            (t.openBlock(),
                            t.createElementBlock(
                              'textarea',
                              {
                                key: 1,
                                'onUpdate:modelValue':
                                  k[0] || (k[0] = (w) => (d.value = w)),
                                class: t.normalizeClass([
                                  t.unref(a).e('textarea'),
                                ]),
                                style: t.normalizeStyle([
                                  { height: 40 * Number(r.rows) + 'px' },
                                  { width: '100%' },
                                ]),
                                maxlength: r.maxlength,
                                onInput: B,
                                onBlur: h,
                                onFocus: E,
                                onChange: m,
                              },
                              null,
                              46,
                              Vt
                            )),
                            [[t.vModelText, d.value]]
                          )
                        : t.createCommentVNode('', !0),
                      r.type === 'text'
                        ? t.withDirectives(
                            (t.openBlock(),
                            t.createElementBlock(
                              'input',
                              {
                                key: 2,
                                ref_key: 'inputRef',
                                ref: u,
                                'onUpdate:modelValue':
                                  k[1] || (k[1] = (w) => (d.value = w)),
                                type: `${g.value ? 'password' : r.type}`,
                                placeholder: r.placeholder,
                                readonly: r.readonly,
                                disabled: r.disabled,
                                maxlength: Number(r.maxlength),
                                class: t.normalizeClass([
                                  t.unref(a).e('input'),
                                  `${
                                    r.disabled
                                      ? t.unref(a).e('input-disabled')
                                      : ''
                                  }`,
                                ]),
                                onInput: B,
                                onBlur: h,
                                onFocus: E,
                                onChange: m,
                              },
                              null,
                              42,
                              Nt
                            )),
                            [[t.vModelDynamic, d.value]]
                          )
                        : t.createCommentVNode('', !0),
                      f.$slots.suffix || r.suffixIcon
                        ? (t.openBlock(),
                          t.createElementBlock(
                            'span',
                            {
                              key: 3,
                              style: { color: '#a8abb2' },
                              class: t.normalizeClass([
                                t.unref(a).e('input-wrapper'),
                              ]),
                            },
                            [
                              t.createElementVNode('span', null, [
                                r.suffixIcon
                                  ? (t.openBlock(),
                                    t.createBlock(
                                      b,
                                      { key: 0 },
                                      {
                                        default: t.withCtx(() => [
                                          (t.openBlock(),
                                          t.createBlock(
                                            t.resolveDynamicComponent(
                                              r.suffixIcon
                                            )
                                          )),
                                        ]),
                                        _: 1,
                                      }
                                    ))
                                  : t.renderSlot(f.$slots, 'suffix', {
                                      key: 1,
                                    }),
                              ]),
                            ],
                            2
                          ))
                        : t.createCommentVNode('', !0),
                      r.clearable && r.modelValue.length
                        ? (t.openBlock(),
                          t.createElementBlock(
                            'span',
                            {
                              key: 4,
                              style: { color: '#a8abb2' },
                              class: t.normalizeClass([t.unref(a).e('clear')]),
                              onClick: N,
                            },
                            [
                              t.createElementVNode('span', null, [
                                t.createVNode(b, null, {
                                  default: t.withCtx(() => [
                                    t.createVNode(t.unref(we)),
                                  ]),
                                  _: 1,
                                }),
                              ]),
                            ],
                            2
                          ))
                        : t.createCommentVNode('', !0),
                      r.showPassword && d.value.length
                        ? (t.openBlock(),
                          t.createElementBlock(
                            'span',
                            {
                              key: 5,
                              style: { color: '#a8abb2' },
                              class: t.normalizeClass([
                                t.unref(a).e('password'),
                              ]),
                              onClick: y,
                            },
                            [
                              t.createElementVNode('span', null, [
                                t.createVNode(b, null, {
                                  default: t.withCtx(() => [
                                    g.value
                                      ? (t.openBlock(),
                                        t.createBlock(t.unref(yt), { key: 0 }))
                                      : (t.openBlock(),
                                        t.createBlock(t.unref(pt), { key: 1 })),
                                  ]),
                                  _: 1,
                                }),
                              ]),
                            ],
                            2
                          ))
                        : t.createCommentVNode('', !0),
                      r.maxlength && r.showWordLimit
                        ? (t.openBlock(),
                          t.createElementBlock(
                            'div',
                            {
                              key: 6,
                              class: t.normalizeClass([t.unref(a).e('limit')]),
                            },
                            t.toDisplayString(d.value.length) +
                              ' / ' +
                              t.toDisplayString(r.maxlength),
                            3
                          ))
                        : t.createCommentVNode('', !0),
                    ],
                    6
                  ),
                ],
                2
              )
            )
          }
        )
      },
    }),
    qt = O.withInstall(Ft, 'cc-input'),
    zt = {
      xmlns: 'http://www.w3.org/2000/svg',
      'xmlns:xlink': 'http://www.w3.org/1999/xlink',
      viewBox: '0 0 32 32',
    },
    At = [
      t.createElementVNode(
        'path',
        {
          d: 'M16 2a14 14 0 1 0 14 14A14 14 0 0 0 16 2zm0 26a12 12 0 1 1 12-12a12 12 0 0 1-12 12z',
          fill: 'currentColor',
        },
        null,
        -1
      ),
      t.createElementVNode(
        'path',
        { d: 'M15 8h2v11h-2z', fill: 'currentColor' },
        null,
        -1
      ),
      t.createElementVNode(
        'path',
        {
          d: 'M16 22a1.5 1.5 0 1 0 1.5 1.5A1.5 1.5 0 0 0 16 22z',
          fill: 'currentColor',
        },
        null,
        -1
      ),
    ],
    Ot = t.defineComponent({
      name: 'Warning',
      render: function (e, n) {
        return t.openBlock(), t.createElementBlock('svg', zt, At)
      },
    }),
    St = ['onClick'],
    Tt = t.defineComponent({
      __name: 'message',
      props: {
        message: { default: '' },
        type: { default: 'info' },
        center: { type: Boolean, default: !1 },
        showClose: { type: Boolean, default: !1 },
        offset: { default: 20 },
      },
      setup(r, { expose: e }) {
        const n = r,
          o = K('message'),
          a = t.ref(!1),
          l = t.ref(!1),
          i = t.ref(n.offset),
          s = (p, x = 300) =>
            new Promise((B) => {
              ;(a.value = p),
                setTimeout(() => {
                  B('')
                }, x)
            }),
          c = (p) => {
            i.value = p
          },
          u = (p) => {
            l.value = p
          },
          g = () => {
            u(!0), s(!1, 0)
          }
        e({ setVisible: s, setTop: c, setCloseFlag: u, closeFlag: l })
        const d = t.computed(() =>
          n.type === 'success'
            ? 'bg-success'
            : n.type === 'info'
            ? 'bg-info'
            : n.type === 'danger'
            ? 'bg-danger'
            : n.type === 'warning'
            ? 'bg-warning'
            : ''
        )
        return (p, x) => (
          t.openBlock(),
          t.createBlock(
            t.Transition,
            { name: 'cc-message' },
            {
              default: t.withCtx(() => [
                t.withDirectives(
                  t.createElementVNode(
                    'div',
                    {
                      style: t.normalizeStyle({ top: i.value + 'px' }),
                      class: t.normalizeClass([
                        t.unref(o).b(),
                        t.unref(d),
                        r.center ? t.unref(o).m('center') : '',
                      ]),
                    },
                    [
                      t.createElementVNode(
                        'div',
                        { class: t.normalizeClass([t.unref(o).e('icon')]) },
                        [
                          r.type === 'success'
                            ? (t.openBlock(),
                              t.createBlock(
                                t.unref(T),
                                { key: 0, color: 'var(--cc-color-success)' },
                                {
                                  default: t.withCtx(() => [
                                    t.createVNode(t.unref(lt)),
                                  ]),
                                  _: 1,
                                }
                              ))
                            : t.createCommentVNode('', !0),
                          r.type === 'warning'
                            ? (t.openBlock(),
                              t.createBlock(
                                t.unref(T),
                                { key: 1, color: 'var(--cc-color-warning)' },
                                {
                                  default: t.withCtx(() => [
                                    t.createVNode(t.unref(Ot)),
                                  ]),
                                  _: 1,
                                }
                              ))
                            : t.createCommentVNode('', !0),
                          r.type === 'info'
                            ? (t.openBlock(),
                              t.createBlock(
                                t.unref(T),
                                { key: 2, color: 'var(--cc-color-info)' },
                                {
                                  default: t.withCtx(() => [
                                    t.createVNode(t.unref(bt)),
                                  ]),
                                  _: 1,
                                }
                              ))
                            : t.createCommentVNode('', !0),
                          r.type === 'danger'
                            ? (t.openBlock(),
                              t.createBlock(
                                t.unref(T),
                                { key: 3, color: 'var(--cc-color-danger)' },
                                {
                                  default: t.withCtx(() => [
                                    t.createVNode(t.unref(we)),
                                  ]),
                                  _: 1,
                                }
                              ))
                            : t.createCommentVNode('', !0),
                        ],
                        2
                      ),
                      t.createElementVNode(
                        'div',
                        null,
                        t.toDisplayString(r.message),
                        1
                      ),
                      r.showClose
                        ? (t.openBlock(),
                          t.createElementBlock(
                            'div',
                            {
                              key: 0,
                              class: t.normalizeClass([
                                t.unref(o).e('close-btn'),
                              ]),
                              onClick: t.withModifiers(g, ['stop']),
                            },
                            [
                              t.createVNode(
                                t.unref(T),
                                {
                                  color: 'var(--cc-message-close-icon-color)',
                                  size: 'var(--cc-message-close-icon-size)',
                                },
                                {
                                  default: t.withCtx(() => [
                                    t.createVNode(t.unref(xe)),
                                  ]),
                                  _: 1,
                                }
                              ),
                            ],
                            10,
                            St
                          ))
                        : t.createCommentVNode('', !0),
                    ],
                    6
                  ),
                  [[t.vShow, a.value]]
                ),
              ]),
              _: 1,
            }
          )
        )
      },
    }),
    Pt = 60,
    jt = 28,
    P = t.ref([]),
    F = (r) => {
      typeof r == 'string' && (r = { message: r, duration: 3e3 })
      const e = t.createApp(Tt, r)
      It(e, r.duration)
    },
    It = (r, e = 3e3) => {
      const n = document.createDocumentFragment(),
        o = r.mount(n)
      P.value.push(o),
        be(o),
        o.setVisible(!0),
        t.watch(
          () => P.value,
          () => be(o)
        ),
        document.body.appendChild(n),
        Mt(r, o, e)
    },
    Mt = (r, e, n = 3e3) => {
      t.watch(
        () => e.closeFlag,
        (o) => {
          o &&
            (e.closeTimer = setTimeout(() => {
              r.unmount(),
                (P.value = P.value.filter((a) => a !== e)),
                clearTimeout(e.closeTimer),
                (e.closeTimer = null),
                (e.closeFlag = !1)
            }, 300))
        }
      ),
        (e.timer = setTimeout(async () => {
          await e.setVisible(!1),
            r.unmount(),
            (P.value = P.value.filter((o) => o !== e)),
            clearTimeout(e.timer),
            (e.timer = null)
        }, n))
    },
    be = (r) => {
      const e = P.value.indexOf(r)
      r.setTop(Pt * e + jt)
    }
  ;(F.success = (r) => {
    F(
      typeof r == 'string'
        ? { type: 'success', message: r }
        : { type: 'success', message: r.message, ...r }
    )
  }),
    (F.info = (r) => {
      F(
        typeof r == 'string'
          ? { type: 'info', message: r }
          : { type: 'info', message: r.message, ...r }
      )
    }),
    (F.warning = (r) => {
      F(
        typeof r == 'string'
          ? { type: 'warning', message: r }
          : { type: 'warning', message: r.message, ...r }
      )
    }),
    (F.error = (r) => {
      F(
        typeof r == 'string'
          ? { type: 'danger', message: r }
          : { type: 'danger', message: r.message, ...r }
      )
    })
  const Rt = ((r, e) => (
      (r.install = (n) => {
        ;(r._context = n._context), (n.config.globalProperties[e] = r)
      }),
      r
    ))(F, '$message'),
    te = Symbol('TabsProvide'),
    Lt = { style: { overflow: 'hidden' } },
    Dt = ['id', 'onClick'],
    Wt = { key: 1 },
    Ut = ['onClick'],
    Zt = ['onClick'],
    Jt = t.defineComponent({
      __name: 'tabs',
      props: {
        modelValue: null,
        type: { default: '' },
        closable: { type: Boolean, default: !1 },
        addable: { type: Boolean, default: !1 },
        editable: { type: Boolean, default: !1 },
      },
      emits: ['update:modelValue', 'tab-click', 'tab-remove', 'tab-change'],
      setup(r, { emit: e }) {
        var y
        const n = r,
          o = K('tabs'),
          a = (y = t.getCurrentInstance()) == null ? void 0 : y.uid,
          l = t.ref([]),
          i = t.ref(n.modelValue),
          s = t.ref(''),
          c = t.ref(''),
          u = t.ref(),
          g = t.ref(),
          d = t.ref(!1),
          p = t.ref(0),
          x = (f) => {
            f.disabled || l.value.push(f)
          },
          B = (f, k) => {
            l.value.length === 1
              ? ((i.value = ''), (l.value = []))
              : (k === l.value.length - 1 &&
                  k >= 0 &&
                  (i.value = l.value[k - 1].name),
                (l.value = l.value.filter((b) => b.name !== f)),
                e('tab-remove', f))
          },
          h = (f, k) => {
            f.disabled ||
              ((i.value = f.name), E(i.value, !0), e('tab-click', f, k))
          },
          E = (f, k = !1) => {
            if (f) {
              const b = document.querySelector(`#tab-${f}-${a}`),
                w = window.getComputedStyle(b, null),
                $ = Number(w.paddingLeft.replace('px', '')),
                A = Number(w.paddingRight.replace('px', '')),
                M = Number(w.width.replace('px', ''))
              ;(s.value = `${M - $ - A}px`),
                k && (c.value = `${b.offsetLeft + $}px`)
            }
          },
          m = () => {
            p.value = 0
          },
          N = () => {
            t.nextTick(() => {
              const f = Number(
                window.getComputedStyle(u.value, null).width.replace('px', '')
              )
              let k = 0
              for (let b = 0; b < l.value.length; b++)
                k += Number(
                  window
                    .getComputedStyle(
                      document.querySelector(`#tab-${l.value[b].name}-${a}`)
                    )
                    .width.replace('px', '')
                )
              p.value = -(k - f + 20 * 2)
            })
          }
        return (
          t.watch(
            () => n.modelValue,
            (f) => {
              ;(i.value = f), e('tab-change', f)
            }
          ),
          t.watch(
            () => i.value,
            (f) => {
              t.nextTick(() => {
                E(f)
              })
            },
            { immediate: !0 }
          ),
          t.watch(
            () => l.value,
            (f) => {
              let k = 0
              t.nextTick(() => {
                const b = Number(
                  window.getComputedStyle(u.value, null).width.replace('px', '')
                )
                f.forEach((w) => {
                  k += Number(
                    window
                      .getComputedStyle(
                        document.querySelector(`#tab-${w.name}-${a}`)
                      )
                      .width.replace('px', '')
                  )
                }),
                  (d.value = k > b)
              })
            },
            { deep: !0 }
          ),
          t.provide(te, {
            addTabPaneContext: x,
            currentName: t.computed(() => i.value),
          }),
          (f, k) => {
            const b = t.resolveComponent('cc-icon')
            return (
              t.openBlock(),
              t.createElementBlock(
                'div',
                { class: t.normalizeClass([t.unref(o).b()]) },
                [
                  t.createElementVNode(
                    'div',
                    {
                      ref_key: 'wrap',
                      ref: u,
                      class: t.normalizeClass([t.unref(o).e('wrap')]),
                      style: t.normalizeStyle({
                        padding: d.value ? '0 20px' : '0',
                      }),
                    },
                    [
                      d.value
                        ? (t.openBlock(),
                          t.createElementBlock(
                            'div',
                            {
                              key: 0,
                              class: t.normalizeClass([
                                t.unref(o).e('icon-left'),
                              ]),
                              onClick: m,
                            },
                            [
                              t.createVNode(b, null, {
                                default: t.withCtx(() => [
                                  t.createVNode(t.unref(Et)),
                                ]),
                                _: 1,
                              }),
                            ],
                            2
                          ))
                        : t.createCommentVNode('', !0),
                      t.createElementVNode('div', Lt, [
                        t.createElementVNode(
                          'div',
                          {
                            ref_key: 'label',
                            ref: g,
                            class: t.normalizeClass([t.unref(o).e('label')]),
                            style: t.normalizeStyle({
                              transform: `translateX(${p.value}px)`,
                            }),
                          },
                          [
                            r.type
                              ? t.createCommentVNode('', !0)
                              : (t.openBlock(),
                                t.createElementBlock(
                                  'div',
                                  {
                                    key: 0,
                                    class: t.normalizeClass([
                                      t.unref(o).e('active-bar'),
                                    ]),
                                    style: t.normalizeStyle({
                                      width: s.value,
                                      transform: `translateX(${c.value})`,
                                    }),
                                  },
                                  null,
                                  6
                                )),
                            (t.openBlock(!0),
                            t.createElementBlock(
                              t.Fragment,
                              null,
                              t.renderList(
                                l.value,
                                (w, $) => (
                                  t.openBlock(),
                                  t.createElementBlock(
                                    'div',
                                    {
                                      id: `tab-${w.name}-${t.unref(a)}`,
                                      key: w.name,
                                      class: t.normalizeClass([
                                        t.unref(o).e('label-item'),
                                        t.unref(o).m(`${r.type}`),
                                        ,
                                        { 'is-disabled': w.disabled },
                                      ]),
                                      style: t.normalizeStyle({
                                        color:
                                          w.name === i.value
                                            ? 'var(--cc-color-primary)'
                                            : 'inherit',
                                        paddingLeft:
                                          $ === 0 && !r.type ? 0 : '12px',
                                      }),
                                      onClick: (A) => h(w, A),
                                    },
                                    [
                                      w.slot
                                        ? (t.openBlock(),
                                          t.createBlock(
                                            t.resolveDynamicComponent(w.slot),
                                            { key: 0 }
                                          ))
                                        : (t.openBlock(),
                                          t.createElementBlock(
                                            'span',
                                            Wt,
                                            t.toDisplayString(w.label),
                                            1
                                          )),
                                      r.closable || w.closable
                                        ? (t.openBlock(),
                                          t.createElementBlock(
                                            'div',
                                            {
                                              key: 2,
                                              class: t.normalizeClass([
                                                t.unref(o).e('close-btn'),
                                              ]),
                                              onClick: t.withModifiers(
                                                (A) => B(w.name, $),
                                                ['stop']
                                              ),
                                            },
                                            [
                                              t.createVNode(b, null, {
                                                default: t.withCtx(() => [
                                                  t.createVNode(t.unref(xe)),
                                                ]),
                                                _: 1,
                                              }),
                                            ],
                                            10,
                                            Ut
                                          ))
                                        : t.createCommentVNode('', !0),
                                    ],
                                    14,
                                    Dt
                                  )
                                )
                              ),
                              128
                            )),
                          ],
                          6
                        ),
                      ]),
                      d.value
                        ? (t.openBlock(),
                          t.createElementBlock(
                            'div',
                            {
                              key: 1,
                              class: t.normalizeClass([
                                t.unref(o).e('icon-right'),
                              ]),
                              onClick: t.withModifiers(N, ['stop']),
                            },
                            [
                              t.createVNode(b, null, {
                                default: t.withCtx(() => [
                                  t.createVNode(t.unref($t)),
                                ]),
                                _: 1,
                              }),
                            ],
                            10,
                            Zt
                          ))
                        : t.createCommentVNode('', !0),
                    ],
                    6
                  ),
                  t.createElementVNode(
                    'div',
                    { class: t.normalizeClass([t.unref(o).e('content')]) },
                    [t.renderSlot(f.$slots, 'default')],
                    2
                  ),
                ],
                2
              )
            )
          }
        )
      },
    }),
    Kt = { style: { display: 'none' } },
    Qt = t.defineComponent({
      __name: 'tab-pane',
      props: {
        label: { default: '' },
        name: null,
        disabled: { type: Boolean, default: !1 },
        closable: { type: Boolean, default: !1 },
      },
      setup(r) {
        var a, l
        const e = r,
          n = (a = t.inject(te)) == null ? void 0 : a.addTabPaneContext,
          o = (l = t.inject(te)) == null ? void 0 : l.currentName
        return (
          n({
            label: t.computed(() => e.label).value,
            name: t.computed(() => e.name).value,
            disabled: t.computed(() => e.disabled).value,
            closable: t.computed(() => e.closable).value,
            slot: t.useSlots().label,
          }),
          (i, s) =>
            t.withDirectives(
              (t.openBlock(),
              t.createElementBlock(
                'div',
                null,
                [
                  t.renderSlot(i.$slots, 'default'),
                  t.createElementVNode('div', Kt, [
                    i.$slots.label
                      ? t.renderSlot(i.$slots, 'label', { key: 0 })
                      : t.createCommentVNode('', !0),
                  ]),
                ],
                512
              )),
              [[t.vShow, t.unref(o) === r.name]]
            )
        )
      },
    }),
    Xt = O.withInstall(Jt, 'cc-tabs'),
    Ht = O.withInstall(Qt, 'cc-tab-pane'),
    Yt = { Tabs: Xt, TabPane: Ht },
    Gt = t.defineComponent({
      __name: 'form',
      props: {
        model: null,
        rules: null,
        labelWidth: { default: '' },
        inline: { type: Boolean, default: !1 },
      },
      setup(r, { expose: e }) {
        const n = r,
          o = t.ref([]),
          a = (u) => {
            o.value.push(u)
          }
        return (
          e({
            validate: (u) => {
              if (o.value && o.value.length) {
                const g = o.value.map((d) => d.validate())
                Promise.all(g)
                  .then((d) => {
                    const p = d.every((x) => x === !0)
                    u(p)
                  })
                  .catch(() => u(!1))
              }
            },
            resetFields: () => {
              o.value &&
                o.value.length &&
                o.value.forEach((u) => {
                  u.resetField()
                })
            },
            validateField: (u, g) => {
              var d
              if (o.value && o.value.length) {
                const p =
                  (d = o.value.find((x) => x.name === u)) == null
                    ? void 0
                    : d.validate()
                Promise.all([p])
                  .then((x) => {
                    const B = x.every((h) => h === !0)
                    g(B)
                  })
                  .catch(() => g(!1))
              }
            },
            clearValidate: (u) => {
              o.value &&
                o.value.length &&
                o.value.find((d) => d.name === u).clearValidate()
            },
          }),
          t.provide(
            'labelWidth',
            t.computed(() => n.labelWidth)
          ),
          t.provide(
            'model',
            t.computed(() => n.model)
          ),
          t.provide(
            'rules',
            t.computed(() => n.rules)
          ),
          t.provide(
            'inline',
            t.computed(() => n.inline)
          ),
          t.provide('addFiled', a),
          (u, g) => (
            t.openBlock(),
            t.createElementBlock(
              'div',
              {
                class: t.normalizeClass([
                  'w-full',
                  [`${r.inline ? 'inline-flex' : ''}`],
                ]),
              },
              [t.renderSlot(u.$slots, 'default')],
              2
            )
          )
        )
      },
    })
  function j() {
    return (
      (j = Object.assign
        ? Object.assign.bind()
        : function (r) {
            for (var e = 1; e < arguments.length; e++) {
              var n = arguments[e]
              for (var o in n)
                Object.prototype.hasOwnProperty.call(n, o) && (r[o] = n[o])
            }
            return r
          }),
      j.apply(this, arguments)
    )
  }
  function vt(r, e) {
    ;(r.prototype = Object.create(e.prototype)),
      (r.prototype.constructor = r),
      R(r, e)
  }
  function ne(r) {
    return (
      (ne = Object.setPrototypeOf
        ? Object.getPrototypeOf.bind()
        : function (n) {
            return n.__proto__ || Object.getPrototypeOf(n)
          }),
      ne(r)
    )
  }
  function R(r, e) {
    return (
      (R = Object.setPrototypeOf
        ? Object.setPrototypeOf.bind()
        : function (o, a) {
            return (o.__proto__ = a), o
          }),
      R(r, e)
    )
  }
  function en() {
    if (typeof Reflect > 'u' || !Reflect.construct || Reflect.construct.sham)
      return !1
    if (typeof Proxy == 'function') return !0
    try {
      return (
        Boolean.prototype.valueOf.call(
          Reflect.construct(Boolean, [], function () {})
        ),
        !0
      )
    } catch {
      return !1
    }
  }
  function Q(r, e, n) {
    return (
      en()
        ? (Q = Reflect.construct.bind())
        : (Q = function (a, l, i) {
            var s = [null]
            s.push.apply(s, l)
            var c = Function.bind.apply(a, s),
              u = new c()
            return i && R(u, i.prototype), u
          }),
      Q.apply(null, arguments)
    )
  }
  function tn(r) {
    return Function.toString.call(r).indexOf('[native code]') !== -1
  }
  function re(r) {
    var e = typeof Map == 'function' ? new Map() : void 0
    return (
      (re = function (o) {
        if (o === null || !tn(o)) return o
        if (typeof o != 'function')
          throw new TypeError(
            'Super expression must either be null or a function'
          )
        if (typeof e < 'u') {
          if (e.has(o)) return e.get(o)
          e.set(o, a)
        }
        function a() {
          return Q(o, arguments, ne(this).constructor)
        }
        return (
          (a.prototype = Object.create(o.prototype, {
            constructor: {
              value: a,
              enumerable: !1,
              writable: !0,
              configurable: !0,
            },
          })),
          R(a, o)
        )
      }),
      re(r)
    )
  }
  var nn = /%[sdj%]/g,
    Ce = function () {}
  typeof process < 'u' &&
    process.env &&
    process.env.NODE_ENV !== 'production' &&
    typeof window < 'u' &&
    typeof document < 'u' &&
    (Ce = function (e, n) {
      typeof console < 'u' &&
        console.warn &&
        typeof ASYNC_VALIDATOR_NO_WARNING > 'u' &&
        n.every(function (o) {
          return typeof o == 'string'
        }) &&
        console.warn(e, n)
    })
  function oe(r) {
    if (!r || !r.length) return null
    var e = {}
    return (
      r.forEach(function (n) {
        var o = n.field
        ;(e[o] = e[o] || []), e[o].push(n)
      }),
      e
    )
  }
  function q(r) {
    for (
      var e = arguments.length, n = new Array(e > 1 ? e - 1 : 0), o = 1;
      o < e;
      o++
    )
      n[o - 1] = arguments[o]
    var a = 0,
      l = n.length
    if (typeof r == 'function') return r.apply(null, n)
    if (typeof r == 'string') {
      var i = r.replace(nn, function (s) {
        if (s === '%%') return '%'
        if (a >= l) return s
        switch (s) {
          case '%s':
            return String(n[a++])
          case '%d':
            return Number(n[a++])
          case '%j':
            try {
              return JSON.stringify(n[a++])
            } catch {
              return '[Circular]'
            }
            break
          default:
            return s
        }
      })
      return i
    }
    return r
  }
  function rn(r) {
    return (
      r === 'string' ||
      r === 'url' ||
      r === 'hex' ||
      r === 'email' ||
      r === 'date' ||
      r === 'pattern'
    )
  }
  function _(r, e) {
    return !!(
      r == null ||
      (e === 'array' && Array.isArray(r) && !r.length) ||
      (rn(e) && typeof r == 'string' && !r)
    )
  }
  function on(r, e, n) {
    var o = [],
      a = 0,
      l = r.length
    function i(s) {
      o.push.apply(o, s || []), a++, a === l && n(o)
    }
    r.forEach(function (s) {
      e(s, i)
    })
  }
  function ke(r, e, n) {
    var o = 0,
      a = r.length
    function l(i) {
      if (i && i.length) {
        n(i)
        return
      }
      var s = o
      ;(o = o + 1), s < a ? e(r[s], l) : n([])
    }
    l([])
  }
  function an(r) {
    var e = []
    return (
      Object.keys(r).forEach(function (n) {
        e.push.apply(e, r[n] || [])
      }),
      e
    )
  }
  var Ee = (function (r) {
    vt(e, r)
    function e(n, o) {
      var a
      return (
        (a = r.call(this, 'Async Validation Error') || this),
        (a.errors = n),
        (a.fields = o),
        a
      )
    }
    return e
  })(re(Error))
  function ln(r, e, n, o, a) {
    if (e.first) {
      var l = new Promise(function (p, x) {
        var B = function (m) {
            return o(m), m.length ? x(new Ee(m, oe(m))) : p(a)
          },
          h = an(r)
        ke(h, n, B)
      })
      return (
        l.catch(function (p) {
          return p
        }),
        l
      )
    }
    var i = e.firstFields === !0 ? Object.keys(r) : e.firstFields || [],
      s = Object.keys(r),
      c = s.length,
      u = 0,
      g = [],
      d = new Promise(function (p, x) {
        var B = function (E) {
          if ((g.push.apply(g, E), u++, u === c))
            return o(g), g.length ? x(new Ee(g, oe(g))) : p(a)
        }
        s.length || (o(g), p(a)),
          s.forEach(function (h) {
            var E = r[h]
            i.indexOf(h) !== -1 ? ke(E, n, B) : on(E, n, B)
          })
      })
    return (
      d.catch(function (p) {
        return p
      }),
      d
    )
  }
  function sn(r) {
    return !!(r && r.message !== void 0)
  }
  function cn(r, e) {
    for (var n = r, o = 0; o < e.length; o++) {
      if (n == null) return n
      n = n[e[o]]
    }
    return n
  }
  function Be(r, e) {
    return function (n) {
      var o
      return (
        r.fullFields
          ? (o = cn(e, r.fullFields))
          : (o = e[n.field || r.fullField]),
        sn(n)
          ? ((n.field = n.field || r.fullField), (n.fieldValue = o), n)
          : {
              message: typeof n == 'function' ? n() : n,
              fieldValue: o,
              field: n.field || r.fullField,
            }
      )
    }
  }
  function _e(r, e) {
    if (e) {
      for (var n in e)
        if (e.hasOwnProperty(n)) {
          var o = e[n]
          typeof o == 'object' && typeof r[n] == 'object'
            ? (r[n] = j({}, r[n], o))
            : (r[n] = o)
        }
    }
    return r
  }
  var $e = function (e, n, o, a, l, i) {
      e.required &&
        (!o.hasOwnProperty(e.field) || _(n, i || e.type)) &&
        a.push(q(l.messages.required, e.fullField))
    },
    fn = function (e, n, o, a, l) {
      ;(/^\s+$/.test(n) || n === '') &&
        a.push(q(l.messages.whitespace, e.fullField))
    },
    X,
    dn = function () {
      if (X) return X
      var r = '[a-fA-F\\d:]',
        e = function (f) {
          return f && f.includeBoundaries
            ? '(?:(?<=\\s|^)(?=' + r + ')|(?<=' + r + ')(?=\\s|$))'
            : ''
        },
        n =
          '(?:25[0-5]|2[0-4]\\d|1\\d\\d|[1-9]\\d|\\d)(?:\\.(?:25[0-5]|2[0-4]\\d|1\\d\\d|[1-9]\\d|\\d)){3}',
        o = '[a-fA-F\\d]{1,4}',
        a = (
          `
(?:
(?:` +
          o +
          ':){7}(?:' +
          o +
          `|:)|                                    // 1:2:3:4:5:6:7::  1:2:3:4:5:6:7:8
(?:` +
          o +
          ':){6}(?:' +
          n +
          '|:' +
          o +
          `|:)|                             // 1:2:3:4:5:6::    1:2:3:4:5:6::8   1:2:3:4:5:6::8  1:2:3:4:5:6::1.2.3.4
(?:` +
          o +
          ':){5}(?::' +
          n +
          '|(?::' +
          o +
          `){1,2}|:)|                   // 1:2:3:4:5::      1:2:3:4:5::7:8   1:2:3:4:5::8    1:2:3:4:5::7:1.2.3.4
(?:` +
          o +
          ':){4}(?:(?::' +
          o +
          '){0,1}:' +
          n +
          '|(?::' +
          o +
          `){1,3}|:)| // 1:2:3:4::        1:2:3:4::6:7:8   1:2:3:4::8      1:2:3:4::6:7:1.2.3.4
(?:` +
          o +
          ':){3}(?:(?::' +
          o +
          '){0,2}:' +
          n +
          '|(?::' +
          o +
          `){1,4}|:)| // 1:2:3::          1:2:3::5:6:7:8   1:2:3::8        1:2:3::5:6:7:1.2.3.4
(?:` +
          o +
          ':){2}(?:(?::' +
          o +
          '){0,3}:' +
          n +
          '|(?::' +
          o +
          `){1,5}|:)| // 1:2::            1:2::4:5:6:7:8   1:2::8          1:2::4:5:6:7:1.2.3.4
(?:` +
          o +
          ':){1}(?:(?::' +
          o +
          '){0,4}:' +
          n +
          '|(?::' +
          o +
          `){1,6}|:)| // 1::              1::3:4:5:6:7:8   1::8            1::3:4:5:6:7:1.2.3.4
(?::(?:(?::` +
          o +
          '){0,5}:' +
          n +
          '|(?::' +
          o +
          `){1,7}|:))             // ::2:3:4:5:6:7:8  ::2:3:4:5:6:7:8  ::8             ::1.2.3.4
)(?:%[0-9a-zA-Z]{1,})?                                             // %eth0            %1
`
        )
          .replace(/\s*\/\/.*$/gm, '')
          .replace(/\n/g, '')
          .trim(),
        l = new RegExp('(?:^' + n + '$)|(?:^' + a + '$)'),
        i = new RegExp('^' + n + '$'),
        s = new RegExp('^' + a + '$'),
        c = function (f) {
          return f && f.exact
            ? l
            : new RegExp(
                '(?:' + e(f) + n + e(f) + ')|(?:' + e(f) + a + e(f) + ')',
                'g'
              )
        }
      ;(c.v4 = function (y) {
        return y && y.exact ? i : new RegExp('' + e(y) + n + e(y), 'g')
      }),
        (c.v6 = function (y) {
          return y && y.exact ? s : new RegExp('' + e(y) + a + e(y), 'g')
        })
      var u = '(?:(?:[a-z]+:)?//)',
        g = '(?:\\S+(?::\\S*)?@)?',
        d = c.v4().source,
        p = c.v6().source,
        x = '(?:(?:[a-z\\u00a1-\\uffff0-9][-_]*)*[a-z\\u00a1-\\uffff0-9]+)',
        B = '(?:\\.(?:[a-z\\u00a1-\\uffff0-9]-*)*[a-z\\u00a1-\\uffff0-9]+)*',
        h = '(?:\\.(?:[a-z\\u00a1-\\uffff]{2,}))',
        E = '(?::\\d{2,5})?',
        m = '(?:[/?#][^\\s"]*)?',
        N =
          '(?:' +
          u +
          '|www\\.)' +
          g +
          '(?:localhost|' +
          d +
          '|' +
          p +
          '|' +
          x +
          B +
          h +
          ')' +
          E +
          m
      return (X = new RegExp('(?:^' + N + '$)', 'i')), X
    },
    Ve = {
      email:
        /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]+\.)+[a-zA-Z\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]{2,}))$/,
      hex: /^#?([a-f0-9]{6}|[a-f0-9]{3})$/i,
    },
    L = {
      integer: function (e) {
        return L.number(e) && parseInt(e, 10) === e
      },
      float: function (e) {
        return L.number(e) && !L.integer(e)
      },
      array: function (e) {
        return Array.isArray(e)
      },
      regexp: function (e) {
        if (e instanceof RegExp) return !0
        try {
          return !!new RegExp(e)
        } catch {
          return !1
        }
      },
      date: function (e) {
        return (
          typeof e.getTime == 'function' &&
          typeof e.getMonth == 'function' &&
          typeof e.getYear == 'function' &&
          !isNaN(e.getTime())
        )
      },
      number: function (e) {
        return isNaN(e) ? !1 : typeof e == 'number'
      },
      object: function (e) {
        return typeof e == 'object' && !L.array(e)
      },
      method: function (e) {
        return typeof e == 'function'
      },
      email: function (e) {
        return typeof e == 'string' && e.length <= 320 && !!e.match(Ve.email)
      },
      url: function (e) {
        return typeof e == 'string' && e.length <= 2048 && !!e.match(dn())
      },
      hex: function (e) {
        return typeof e == 'string' && !!e.match(Ve.hex)
      },
    },
    un = function (e, n, o, a, l) {
      if (e.required && n === void 0) {
        $e(e, n, o, a, l)
        return
      }
      var i = [
          'integer',
          'float',
          'array',
          'regexp',
          'object',
          'method',
          'email',
          'number',
          'date',
          'url',
          'hex',
        ],
        s = e.type
      i.indexOf(s) > -1
        ? L[s](n) || a.push(q(l.messages.types[s], e.fullField, e.type))
        : s &&
          typeof n !== e.type &&
          a.push(q(l.messages.types[s], e.fullField, e.type))
    },
    mn = function (e, n, o, a, l) {
      var i = typeof e.len == 'number',
        s = typeof e.min == 'number',
        c = typeof e.max == 'number',
        u = /[\uD800-\uDBFF][\uDC00-\uDFFF]/g,
        g = n,
        d = null,
        p = typeof n == 'number',
        x = typeof n == 'string',
        B = Array.isArray(n)
      if ((p ? (d = 'number') : x ? (d = 'string') : B && (d = 'array'), !d))
        return !1
      B && (g = n.length),
        x && (g = n.replace(u, '_').length),
        i
          ? g !== e.len && a.push(q(l.messages[d].len, e.fullField, e.len))
          : s && !c && g < e.min
          ? a.push(q(l.messages[d].min, e.fullField, e.min))
          : c && !s && g > e.max
          ? a.push(q(l.messages[d].max, e.fullField, e.max))
          : s &&
            c &&
            (g < e.min || g > e.max) &&
            a.push(q(l.messages[d].range, e.fullField, e.min, e.max))
    },
    I = 'enum',
    pn = function (e, n, o, a, l) {
      ;(e[I] = Array.isArray(e[I]) ? e[I] : []),
        e[I].indexOf(n) === -1 &&
          a.push(q(l.messages[I], e.fullField, e[I].join(', ')))
    },
    hn = function (e, n, o, a, l) {
      if (e.pattern) {
        if (e.pattern instanceof RegExp)
          (e.pattern.lastIndex = 0),
            e.pattern.test(n) ||
              a.push(q(l.messages.pattern.mismatch, e.fullField, n, e.pattern))
        else if (typeof e.pattern == 'string') {
          var i = new RegExp(e.pattern)
          i.test(n) ||
            a.push(q(l.messages.pattern.mismatch, e.fullField, n, e.pattern))
        }
      }
    },
    C = {
      required: $e,
      whitespace: fn,
      type: un,
      range: mn,
      enum: pn,
      pattern: hn,
    },
    gn = function (e, n, o, a, l) {
      var i = [],
        s = e.required || (!e.required && a.hasOwnProperty(e.field))
      if (s) {
        if (_(n, 'string') && !e.required) return o()
        C.required(e, n, a, i, l, 'string'),
          _(n, 'string') ||
            (C.type(e, n, a, i, l),
            C.range(e, n, a, i, l),
            C.pattern(e, n, a, i, l),
            e.whitespace === !0 && C.whitespace(e, n, a, i, l))
      }
      o(i)
    },
    yn = function (e, n, o, a, l) {
      var i = [],
        s = e.required || (!e.required && a.hasOwnProperty(e.field))
      if (s) {
        if (_(n) && !e.required) return o()
        C.required(e, n, a, i, l), n !== void 0 && C.type(e, n, a, i, l)
      }
      o(i)
    },
    wn = function (e, n, o, a, l) {
      var i = [],
        s = e.required || (!e.required && a.hasOwnProperty(e.field))
      if (s) {
        if ((n === '' && (n = void 0), _(n) && !e.required)) return o()
        C.required(e, n, a, i, l),
          n !== void 0 && (C.type(e, n, a, i, l), C.range(e, n, a, i, l))
      }
      o(i)
    },
    xn = function (e, n, o, a, l) {
      var i = [],
        s = e.required || (!e.required && a.hasOwnProperty(e.field))
      if (s) {
        if (_(n) && !e.required) return o()
        C.required(e, n, a, i, l), n !== void 0 && C.type(e, n, a, i, l)
      }
      o(i)
    },
    bn = function (e, n, o, a, l) {
      var i = [],
        s = e.required || (!e.required && a.hasOwnProperty(e.field))
      if (s) {
        if (_(n) && !e.required) return o()
        C.required(e, n, a, i, l), _(n) || C.type(e, n, a, i, l)
      }
      o(i)
    },
    Cn = function (e, n, o, a, l) {
      var i = [],
        s = e.required || (!e.required && a.hasOwnProperty(e.field))
      if (s) {
        if (_(n) && !e.required) return o()
        C.required(e, n, a, i, l),
          n !== void 0 && (C.type(e, n, a, i, l), C.range(e, n, a, i, l))
      }
      o(i)
    },
    kn = function (e, n, o, a, l) {
      var i = [],
        s = e.required || (!e.required && a.hasOwnProperty(e.field))
      if (s) {
        if (_(n) && !e.required) return o()
        C.required(e, n, a, i, l),
          n !== void 0 && (C.type(e, n, a, i, l), C.range(e, n, a, i, l))
      }
      o(i)
    },
    En = function (e, n, o, a, l) {
      var i = [],
        s = e.required || (!e.required && a.hasOwnProperty(e.field))
      if (s) {
        if (n == null && !e.required) return o()
        C.required(e, n, a, i, l, 'array'),
          n != null && (C.type(e, n, a, i, l), C.range(e, n, a, i, l))
      }
      o(i)
    },
    Bn = function (e, n, o, a, l) {
      var i = [],
        s = e.required || (!e.required && a.hasOwnProperty(e.field))
      if (s) {
        if (_(n) && !e.required) return o()
        C.required(e, n, a, i, l), n !== void 0 && C.type(e, n, a, i, l)
      }
      o(i)
    },
    _n = 'enum',
    $n = function (e, n, o, a, l) {
      var i = [],
        s = e.required || (!e.required && a.hasOwnProperty(e.field))
      if (s) {
        if (_(n) && !e.required) return o()
        C.required(e, n, a, i, l), n !== void 0 && C[_n](e, n, a, i, l)
      }
      o(i)
    },
    Vn = function (e, n, o, a, l) {
      var i = [],
        s = e.required || (!e.required && a.hasOwnProperty(e.field))
      if (s) {
        if (_(n, 'string') && !e.required) return o()
        C.required(e, n, a, i, l), _(n, 'string') || C.pattern(e, n, a, i, l)
      }
      o(i)
    },
    Nn = function (e, n, o, a, l) {
      var i = [],
        s = e.required || (!e.required && a.hasOwnProperty(e.field))
      if (s) {
        if (_(n, 'date') && !e.required) return o()
        if ((C.required(e, n, a, i, l), !_(n, 'date'))) {
          var c
          n instanceof Date ? (c = n) : (c = new Date(n)),
            C.type(e, c, a, i, l),
            c && C.range(e, c.getTime(), a, i, l)
        }
      }
      o(i)
    },
    Fn = function (e, n, o, a, l) {
      var i = [],
        s = Array.isArray(n) ? 'array' : typeof n
      C.required(e, n, a, i, l, s), o(i)
    },
    ae = function (e, n, o, a, l) {
      var i = e.type,
        s = [],
        c = e.required || (!e.required && a.hasOwnProperty(e.field))
      if (c) {
        if (_(n, i) && !e.required) return o()
        C.required(e, n, a, s, l, i), _(n, i) || C.type(e, n, a, s, l)
      }
      o(s)
    },
    qn = function (e, n, o, a, l) {
      var i = [],
        s = e.required || (!e.required && a.hasOwnProperty(e.field))
      if (s) {
        if (_(n) && !e.required) return o()
        C.required(e, n, a, i, l)
      }
      o(i)
    },
    D = {
      string: gn,
      method: yn,
      number: wn,
      boolean: xn,
      regexp: bn,
      integer: Cn,
      float: kn,
      array: En,
      object: Bn,
      enum: $n,
      pattern: Vn,
      date: Nn,
      url: ae,
      hex: ae,
      email: ae,
      required: Fn,
      any: qn,
    }
  function ie() {
    return {
      default: 'Validation error on field %s',
      required: '%s is required',
      enum: '%s must be one of %s',
      whitespace: '%s cannot be empty',
      date: {
        format: '%s date %s is invalid for format %s',
        parse: '%s date could not be parsed, %s is invalid ',
        invalid: '%s date %s is invalid',
      },
      types: {
        string: '%s is not a %s',
        method: '%s is not a %s (function)',
        array: '%s is not an %s',
        object: '%s is not an %s',
        number: '%s is not a %s',
        date: '%s is not a %s',
        boolean: '%s is not a %s',
        integer: '%s is not an %s',
        float: '%s is not a %s',
        regexp: '%s is not a valid %s',
        email: '%s is not a valid %s',
        url: '%s is not a valid %s',
        hex: '%s is not a valid %s',
      },
      string: {
        len: '%s must be exactly %s characters',
        min: '%s must be at least %s characters',
        max: '%s cannot be longer than %s characters',
        range: '%s must be between %s and %s characters',
      },
      number: {
        len: '%s must equal %s',
        min: '%s cannot be less than %s',
        max: '%s cannot be greater than %s',
        range: '%s must be between %s and %s',
      },
      array: {
        len: '%s must be exactly %s in length',
        min: '%s cannot be less than %s in length',
        max: '%s cannot be greater than %s in length',
        range: '%s must be between %s and %s in length',
      },
      pattern: { mismatch: '%s value %s does not match pattern %s' },
      clone: function () {
        var e = JSON.parse(JSON.stringify(this))
        return (e.clone = this.clone), e
      },
    }
  }
  var le = ie(),
    W = (function () {
      function r(n) {
        ;(this.rules = null), (this._messages = le), this.define(n)
      }
      var e = r.prototype
      return (
        (e.define = function (o) {
          var a = this
          if (!o) throw new Error('Cannot configure a schema with no rules')
          if (typeof o != 'object' || Array.isArray(o))
            throw new Error('Rules must be an object')
          ;(this.rules = {}),
            Object.keys(o).forEach(function (l) {
              var i = o[l]
              a.rules[l] = Array.isArray(i) ? i : [i]
            })
        }),
        (e.messages = function (o) {
          return o && (this._messages = _e(ie(), o)), this._messages
        }),
        (e.validate = function (o, a, l) {
          var i = this
          a === void 0 && (a = {}), l === void 0 && (l = function () {})
          var s = o,
            c = a,
            u = l
          if (
            (typeof c == 'function' && ((u = c), (c = {})),
            !this.rules || Object.keys(this.rules).length === 0)
          )
            return u && u(null, s), Promise.resolve(s)
          function g(h) {
            var E = [],
              m = {}
            function N(f) {
              if (Array.isArray(f)) {
                var k
                E = (k = E).concat.apply(k, f)
              } else E.push(f)
            }
            for (var y = 0; y < h.length; y++) N(h[y])
            E.length ? ((m = oe(E)), u(E, m)) : u(null, s)
          }
          if (c.messages) {
            var d = this.messages()
            d === le && (d = ie()), _e(d, c.messages), (c.messages = d)
          } else c.messages = this.messages()
          var p = {},
            x = c.keys || Object.keys(this.rules)
          x.forEach(function (h) {
            var E = i.rules[h],
              m = s[h]
            E.forEach(function (N) {
              var y = N
              typeof y.transform == 'function' &&
                (s === o && (s = j({}, s)), (m = s[h] = y.transform(m))),
                typeof y == 'function'
                  ? (y = { validator: y })
                  : (y = j({}, y)),
                (y.validator = i.getValidationMethod(y)),
                y.validator &&
                  ((y.field = h),
                  (y.fullField = y.fullField || h),
                  (y.type = i.getType(y)),
                  (p[h] = p[h] || []),
                  p[h].push({ rule: y, value: m, source: s, field: h }))
            })
          })
          var B = {}
          return ln(
            p,
            c,
            function (h, E) {
              var m = h.rule,
                N =
                  (m.type === 'object' || m.type === 'array') &&
                  (typeof m.fields == 'object' ||
                    typeof m.defaultField == 'object')
              ;(N = N && (m.required || (!m.required && h.value))),
                (m.field = h.field)
              function y(b, w) {
                return j({}, w, {
                  fullField: m.fullField + '.' + b,
                  fullFields: m.fullFields ? [].concat(m.fullFields, [b]) : [b],
                })
              }
              function f(b) {
                b === void 0 && (b = [])
                var w = Array.isArray(b) ? b : [b]
                !c.suppressWarning &&
                  w.length &&
                  r.warning('async-validator:', w),
                  w.length && m.message !== void 0 && (w = [].concat(m.message))
                var $ = w.map(Be(m, s))
                if (c.first && $.length) return (B[m.field] = 1), E($)
                if (!N) E($)
                else {
                  if (m.required && !h.value)
                    return (
                      m.message !== void 0
                        ? ($ = [].concat(m.message).map(Be(m, s)))
                        : c.error &&
                          ($ = [c.error(m, q(c.messages.required, m.field))]),
                      E($)
                    )
                  var A = {}
                  m.defaultField &&
                    Object.keys(h.value).map(function (z) {
                      A[z] = m.defaultField
                    }),
                    (A = j({}, A, h.rule.fields))
                  var M = {}
                  Object.keys(A).forEach(function (z) {
                    var S = A[z],
                      jn = Array.isArray(S) ? S : [S]
                    M[z] = jn.map(y.bind(null, z))
                  })
                  var U = new r(M)
                  U.messages(c.messages),
                    h.rule.options &&
                      ((h.rule.options.messages = c.messages),
                      (h.rule.options.error = c.error)),
                    U.validate(h.value, h.rule.options || c, function (z) {
                      var S = []
                      $ && $.length && S.push.apply(S, $),
                        z && z.length && S.push.apply(S, z),
                        E(S.length ? S : null)
                    })
                }
              }
              var k
              if (m.asyncValidator)
                k = m.asyncValidator(m, h.value, f, h.source, c)
              else if (m.validator) {
                try {
                  k = m.validator(m, h.value, f, h.source, c)
                } catch (b) {
                  console.error == null || console.error(b),
                    c.suppressValidatorError ||
                      setTimeout(function () {
                        throw b
                      }, 0),
                    f(b.message)
                }
                k === !0
                  ? f()
                  : k === !1
                  ? f(
                      typeof m.message == 'function'
                        ? m.message(m.fullField || m.field)
                        : m.message || (m.fullField || m.field) + ' fails'
                    )
                  : k instanceof Array
                  ? f(k)
                  : k instanceof Error && f(k.message)
              }
              k &&
                k.then &&
                k.then(
                  function () {
                    return f()
                  },
                  function (b) {
                    return f(b)
                  }
                )
            },
            function (h) {
              g(h)
            },
            s
          )
        }),
        (e.getType = function (o) {
          if (
            (o.type === void 0 &&
              o.pattern instanceof RegExp &&
              (o.type = 'pattern'),
            typeof o.validator != 'function' &&
              o.type &&
              !D.hasOwnProperty(o.type))
          )
            throw new Error(q('Unknown rule type %s', o.type))
          return o.type || 'string'
        }),
        (e.getValidationMethod = function (o) {
          if (typeof o.validator == 'function') return o.validator
          var a = Object.keys(o),
            l = a.indexOf('message')
          return (
            l !== -1 && a.splice(l, 1),
            a.length === 1 && a[0] === 'required'
              ? D.required
              : D[this.getType(o)] || void 0
          )
        }),
        r
      )
    })()
  ;(W.register = function (e, n) {
    if (typeof n != 'function')
      throw new Error(
        'Cannot register a validator by type, validator is not a function'
      )
    D[e] = n
  }),
    (W.warning = Ce),
    (W.messages = le),
    (W.validators = D)
  const zn = t.defineComponent({
      __name: 'form-item',
      props: {
        label: { default: '' },
        prop: { default: '' },
        labelWidth: { default: '' },
        required: { type: Boolean, default: !1 },
        labelAlign: { default: 'left' },
        contentAlign: { default: 'left' },
      },
      setup(r) {
        const e = r,
          n = K('form-item'),
          o = t.ref(''),
          a = t.ref(0),
          l = t.ref(0),
          i = t.ref(),
          s = t.ref(),
          c = t.inject('labelWidth'),
          u = t.inject('inline'),
          g = t.computed(() =>
            c != null && c.value
              ? `${c == null ? void 0 : c.value}px`
              : `${e.labelWidth}px`
          ),
          d = (w) => {
            l.value = w
          },
          p = (w) => {
            a.value = w
          },
          x = t.inject('model'),
          B = t.inject('rules')
        t.provide('setValidateBlurFlag', d),
          t.provide('setValidateChangeFlag', p)
        const h = t.inject('addFiled'),
          E = t.computed(() =>
            i.value && i.value.length ? i.value.find((w) => w.required) : !1
          ),
          m = t.computed(() =>
            e.labelAlign === 'left'
              ? 'flex-start'
              : e.labelAlign === 'center'
              ? 'center'
              : 'flex-end'
          ),
          N = t.computed(() =>
            e.contentAlign === 'left'
              ? 'flex-start'
              : e.contentAlign === 'center'
              ? 'center'
              : 'flex-end'
          ),
          y = () => {
            const w = x.value[e.prop],
              $ = B.value[e.prop],
              A = { [e.prop]: $ },
              M = new W(A)
            if (e.prop)
              return new Promise((U) => {
                M.validate({ [e.prop]: w }, { firstFields: !0 }, (z) => {
                  z && z.length
                    ? ((o.value = z[0].message), U(!1))
                    : ((o.value = ''), U(!0))
                })
              })
          },
          f = () => {
            ;((x == null ? void 0 : x.value)[e.prop] = s.value), (o.value = '')
          },
          k = () => {
            o.value = ''
          },
          b = () => {
            ;(i.value = (B == null ? void 0 : B.value)[e.prop]),
              i.value &&
                i.value.length &&
                i.value.forEach((w) => {
                  Array.isArray(w.trigger)
                    ? (w.trigger.includes('change') && a.value > 0 && y(),
                      w.trigger.includes('blur') && l.value > 0 && y())
                    : (w.trigger === 'blur' && l.value > 0 && y(),
                      w.trigger === 'change' && a.value > 0 && y())
                })
          }
        return (
          t.watch(
            () => l.value,
            () => {
              b()
            }
          ),
          t.watch(
            () => a.value,
            () => {
              b()
            }
          ),
          t.onMounted(() => {
            b(),
              e.prop &&
                h({
                  validate: y,
                  resetField: f,
                  clearValidate: k,
                  name: e.prop,
                }),
              e.prop && (s.value = x == null ? void 0 : x.value[e.prop])
          }),
          (w, $) => (
            t.openBlock(),
            t.createElementBlock(
              'div',
              {
                class: t.normalizeClass([t.unref(n).b()]),
                style: t.normalizeStyle({
                  display: t.unref(u) ? 'inline-flex' : 'flex',
                  marginRight: t.unref(u) ? '32px' : '0',
                }),
              },
              [
                r.label
                  ? (t.openBlock(),
                    t.createElementBlock(
                      'div',
                      {
                        key: 0,
                        style: t.normalizeStyle({
                          width: t.unref(g),
                          justifyContent: t.unref(m),
                        }),
                        class: t.normalizeClass([t.unref(n).e('label')]),
                      },
                      [
                        t.createElementVNode(
                          'div',
                          {
                            class: t.normalizeClass({
                              'cc-form-item-label-required':
                                r.required || t.unref(E),
                            }),
                          },
                          t.toDisplayString(r.label),
                          3
                        ),
                      ],
                      6
                    ))
                  : t.createCommentVNode('', !0),
                t.createElementVNode(
                  'div',
                  {
                    class: t.normalizeClass([t.unref(n).e('content')]),
                    style: t.normalizeStyle({
                      marginLeft: r.label ? 0 : t.unref(g),
                      justifyContent: t.unref(N),
                    }),
                  },
                  [
                    t.renderSlot(w.$slots, 'default'),
                    t.createElementVNode(
                      'div',
                      { class: t.normalizeClass([t.unref(n).e('error')]) },
                      t.toDisplayString(o.value),
                      3
                    ),
                  ],
                  6
                ),
              ],
              6
            )
          )
        )
      },
    }),
    An = O.withInstall(Gt, 'cc-form'),
    On = O.withInstall(zn, 'cc-form-item'),
    Sn = { Form: An, FormItem: On },
    { Tabs: Ne, TabPane: Fe } = Yt,
    { Form: qe, FormItem: ze } = Sn,
    Tn = [T, ye, qt, Rt, Ne, Fe, qe, ze],
    Pn = {
      install(r) {
        Tn.forEach((e) => {
          r.use(e)
        })
      },
    }
  ;(V.Button = ye),
    (V.Form = qe),
    (V.FormItem = ze),
    (V.Icon = T),
    (V.Message = F),
    (V.TabPane = Fe),
    (V.Tabs = Ne),
    (V.default = Pn),
    Object.defineProperties(V, {
      __esModule: { value: !0 },
      [Symbol.toStringTag]: { value: 'Module' },
    })
})
