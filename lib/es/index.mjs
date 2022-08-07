import { withInstall as H } from '@cc-ui/utils'
import {
  defineComponent as V,
  provide as J,
  renderSlot as W,
  inject as Z,
  computed as k,
  onBeforeMount as Xe,
  h as He,
  openBlock as m,
  createBlock as S,
  unref as c,
  withCtx as z,
  resolveComponent as Ae,
  createElementBlock as _,
  normalizeClass as A,
  withModifiers as de,
  resolveDynamicComponent as pe,
  createCommentVNode as T,
  normalizeStyle as D,
  createElementVNode as F,
  ref as O,
  watch as K,
  withDirectives as he,
  vModelText as Ye,
  vModelDynamic as Ge,
  createVNode as N,
  toDisplayString as te,
  nextTick as ce,
  Transition as et,
  vShow as ze,
  createApp as tt,
  getCurrentInstance as nt,
  Fragment as rt,
  renderList as it,
  useSlots as at,
  onMounted as st,
} from 'vue'
import { useNamespace as lt } from '@cc-ui/hooks'
function ot(n) {
  let e = 0
  for (let t = 0; t < n.length; ++t) n[t] === '&' && ++e
  return e
}
const Ne = /\s*,(?![^(]*\))\s*/g,
  ut = /\s+/g
function ct(n, e) {
  const t = []
  return (
    e.split(Ne).forEach((r) => {
      let i = ot(r)
      if (i) {
        if (i === 1) {
          n.forEach((a) => {
            t.push(r.replace('&', a))
          })
          return
        }
      } else {
        n.forEach((a) => {
          t.push((a && a + ' ') + r)
        })
        return
      }
      let s = [r]
      for (; i--; ) {
        const a = []
        s.forEach((l) => {
          n.forEach((o) => {
            a.push(l.replace('&', o))
          })
        }),
          (s = a)
      }
      s.forEach((a) => t.push(a))
    }),
    t
  )
}
function ft(n, e) {
  const t = []
  return (
    e.split(Ne).forEach((r) => {
      n.forEach((i) => {
        t.push((i && i + ' ') + r)
      })
    }),
    t
  )
}
function dt(n) {
  let e = ['']
  return (
    n.forEach((t) => {
      ;(t = t && t.trim()),
        t && (t.includes('&') ? (e = ct(e, t)) : (e = ft(e, t)))
    }),
    e.join(', ').replace(ut, ' ')
  )
}
const pt = /[A-Z]/g
function Re(n) {
  return n.replace(pt, (e) => '-' + e.toLowerCase())
}
function ht(n, e = '  ') {
  return typeof n == 'object' && n !== null
    ? ` {
` +
        Object.entries(n).map((t) => e + `  ${Re(t[0])}: ${t[1]};`).join(`
`) +
        `
` +
        e +
        '}'
    : `: ${n};`
}
function gt(n, e, t) {
  return typeof n == 'function'
    ? n({
        context: e.context,
        props: t,
      })
    : n
}
function Oe(n, e, t, r) {
  if (!e) return ''
  const i = gt(e, t, r)
  if (!i) return ''
  if (typeof i == 'string')
    return `${n} {
${i}
}`
  const s = Object.keys(i)
  if (s.length === 0)
    return t.config.keepEmptyBlock
      ? n +
          ` {
}`
      : ''
  const a = n ? [n + ' {'] : []
  return (
    s.forEach((l) => {
      const o = i[l]
      if (l === 'raw') {
        a.push(
          `
` +
            o +
            `
`
        )
        return
      }
      ;(l = Re(l)), o != null && a.push(`  ${l}${ht(o)}`)
    }),
    n && a.push('}'),
    a.join(`
`)
  )
}
function we(n, e, t) {
  !n ||
    n.forEach((r) => {
      if (Array.isArray(r)) we(r, e, t)
      else if (typeof r == 'function') {
        const i = r(e)
        Array.isArray(i) ? we(i, e, t) : i && t(i)
      } else r && t(r)
    })
}
function Me(n, e, t, r, i, s) {
  const a = n.$
  !a || typeof a == 'string'
    ? e.push(a)
    : typeof a == 'function'
    ? e.push(
        a({
          context: r.context,
          props: i,
        })
      )
    : (a.before && a.before(r.context),
      !a.$ || typeof a.$ == 'string'
        ? e.push(a.$)
        : a.$ &&
          e.push(
            a.$({
              context: r.context,
              props: i,
            })
          ))
  const l = dt(e),
    o = Oe(l, n.props, r, i)
  s && o && s.insertRule(o),
    !s && o.length && t.push(o),
    n.children &&
      we(
        n.children,
        {
          context: r.context,
          props: i,
        },
        (d) => {
          if (typeof d == 'string') {
            const v = Oe(l, { raw: d }, r, i)
            s ? s.insertRule(v) : t.push(v)
          } else Me(d, e, t, r, i, s)
        }
      ),
    e.pop(),
    a && a.after && a.after(r.context)
}
function Le(n, e, t, r = !1) {
  const i = []
  return (
    Me(n, [], i, e, t, r ? n.instance.__styleSheet : void 0),
    r
      ? ''
      : i.join(`

`)
  )
}
function mt(n) {
  for (var e = 0, t, r = 0, i = n.length; i >= 4; ++r, i -= 4)
    (t =
      (n.charCodeAt(r) & 255) |
      ((n.charCodeAt(++r) & 255) << 8) |
      ((n.charCodeAt(++r) & 255) << 16) |
      ((n.charCodeAt(++r) & 255) << 24)),
      (t = (t & 65535) * 1540483477 + (((t >>> 16) * 59797) << 16)),
      (t ^= t >>> 24),
      (e =
        ((t & 65535) * 1540483477 + (((t >>> 16) * 59797) << 16)) ^
        ((e & 65535) * 1540483477 + (((e >>> 16) * 59797) << 16)))
  switch (i) {
    case 3:
      e ^= (n.charCodeAt(r + 2) & 255) << 16
    case 2:
      e ^= (n.charCodeAt(r + 1) & 255) << 8
    case 1:
      ;(e ^= n.charCodeAt(r) & 255),
        (e = (e & 65535) * 1540483477 + (((e >>> 16) * 59797) << 16))
  }
  return (
    (e ^= e >>> 13),
    (e = (e & 65535) * 1540483477 + (((e >>> 16) * 59797) << 16)),
    ((e ^ (e >>> 15)) >>> 0).toString(36)
  )
}
function me(n) {
  if (!n) return
  const e = n.parentElement
  e && e.removeChild(n)
}
function Ee(n) {
  return document.querySelector(`style[cssr-id="${n}"]`)
}
function vt(n) {
  const e = document.createElement('style')
  return e.setAttribute('cssr-id', n), e
}
window && (window.__cssrContext = {})
function Ie(n) {
  const e = n.getAttribute('mount-count')
  return e === null ? null : Number(e)
}
function be(n, e) {
  n.setAttribute('mount-count', String(e))
}
function ke(n, e, t, r) {
  const { els: i } = e
  if (t === void 0) i.forEach(me), (e.els = [])
  else {
    const s = Ee(t)
    if (s && i.includes(s)) {
      const a = Ie(s)
      r
        ? a === null
          ? console.error(
              `[css-render/unmount]: The style with target='${t}' is mounted in count mode.`
            )
          : a <= 1
          ? (me(s), (e.els = i.filter((l) => l !== s)))
          : be(s, a - 1)
        : a !== null
        ? console.error(
            `[css-render/unmount]: The style with target='${t}' is mounted in no-count mode.`
          )
        : (me(s), (e.els = i.filter((l) => l !== s)))
    }
  }
}
function yt(n, e) {
  n.push(e)
}
function wt(n, e, t, r, i, s, a, l, o) {
  if (a && !o) {
    if (t === void 0) {
      console.error('[css-render/mount]: `id` is required in `boost` mode.')
      return
    }
    const b = window.__cssrContext
    b[t] || ((b[t] = !0), Le(e, n, r, a))
    return
  }
  let d
  const { els: v } = e
  let f
  if ((t === void 0 && ((f = e.render(r)), (t = mt(f))), o)) {
    o(t, f != null ? f : e.render(r))
    return
  }
  const h = Ee(t)
  if (l || h === null) {
    if (
      ((d = h === null ? vt(t) : h),
      f === void 0 && (f = e.render(r)),
      (d.textContent = f),
      h !== null)
    )
      return
    if (i) {
      const b = document.head.getElementsByTagName('style')[0] || null
      document.head.insertBefore(d, b)
    } else document.head.appendChild(d)
    s && be(d, 1), yt(v, d)
  } else {
    const b = Ie(h)
    s
      ? b === null
        ? console.error(
            `[css-render/mount]: The style with id='${t}' has been mounted in no-count mode.`
          )
        : be(h, b + 1)
      : b !== null &&
        console.error(
          `[css-render/mount]: The style with id='${t}' has been mounted in count mode.`
        )
  }
  return h != null ? h : d
}
function bt(n) {
  return Le(this, this.instance, n)
}
function xt(n = {}) {
  const {
    target: e,
    id: t,
    ssr: r,
    props: i,
    count: s = !1,
    head: a = !1,
    boost: l = !1,
    force: o = !1,
  } = n
  return wt(this.instance, this, t != null ? t : e, i, a, s, l, o, r)
}
function $t(n = {}) {
  const { id: e, target: t, delay: r = 0, count: i = !1 } = n
  r === 0
    ? ke(this.instance, this, e != null ? e : t, i)
    : setTimeout(() => ke(this.instance, this, e != null ? e : t, i), r)
}
const le = function (n, e, t, r) {
    return {
      instance: n,
      $: e,
      props: t,
      children: r,
      els: [],
      render: bt,
      mount: xt,
      unmount: $t,
    }
  },
  Ct = function (n, e, t, r) {
    return Array.isArray(e)
      ? le(n, { $: null }, null, e)
      : Array.isArray(t)
      ? le(n, e, null, t)
      : Array.isArray(r)
      ? le(n, e, t, r)
      : le(n, e, t, null)
  }
function _t(n = {}) {
  let e = null
  const t = {
    c: (...r) => Ct(t, ...r),
    use: (r, ...i) => r.install(t, ...i),
    find: Ee,
    context: {},
    config: n,
    get __styleSheet() {
      if (!e) {
        const r = document.createElement('style')
        return (
          document.head.appendChild(r),
          (e = document.styleSheets[document.styleSheets.length - 1]),
          e
        )
      }
      return e
    },
  }
  return t
}
const { c: ve } = _t(),
  Ft = ve(
    '.xicon',
    {
      width: '1em',
      height: '1em',
      display: 'inline-flex',
    },
    [
      ve('svg', {
        width: '1em',
        height: '1em',
      }),
      ve('svg:not([fill])', {
        fill: 'currentColor',
      }),
    ]
  ),
  qt = () => {
    Ft.mount({ id: 'xicons-icon' })
  },
  De = {
    size: [String, Number],
    color: String,
    tag: String,
  },
  We = Symbol('IconConfigInjection')
V({
  name: 'IconConfigProvider',
  props: De,
  setup(n, { slots: e }) {
    return J(We, n), () => W(e, 'default')
  },
})
const At = 'span',
  Et = V({
    name: 'Icon',
    props: De,
    setup(n, { slots: e }) {
      const t = Z(We, null),
        r = k(() => {
          var a
          const l =
            (a = n.size) !== null && a !== void 0
              ? a
              : t == null
              ? void 0
              : t.size
          if (l !== void 0)
            return typeof l == 'number' || /^\d+$/.test(l) ? `${l}px` : l
        }),
        i = k(() => {
          const { color: a } = n
          return a === void 0 ? (t ? t.color : void 0) : a
        }),
        s = k(() => {
          var a
          const { tag: l } = n
          return l === void 0
            ? (a = t == null ? void 0 : t.tag) !== null && a !== void 0
              ? a
              : At
            : l
        })
      return (
        Xe(() => {
          qt()
        }),
        () =>
          He(
            s.value,
            {
              class: 'xicon',
              style: {
                color: i.value,
                fontSize: r.value,
              },
            },
            [W(e, 'default')]
          )
      )
    },
  }),
  Ot = /* @__PURE__ */ V({
    __name: 'icon',
    props: {
      color: { default: 'inherit' },
      size: { default: 16 },
      tag: { default: 'span' },
    },
    setup(n) {
      return (e, t) => (
        m(),
        S(
          c(Et),
          {
            size: n.size,
            color: n.color,
            tag: n.tag,
          },
          {
            default: z(() => [W(e.$slots, 'default')]),
            _: 3,
          },
          8,
          ['size', 'color', 'tag']
        )
      )
    },
  }),
  ee = H(Ot, 'cc-icon'),
  kt = (n, e) => {
    if (e.value === '') return ''
    if (e.value === 'small') return n.m('small')
    if (e.value === 'large') return n.m('large')
  },
  Tt = (n, e) => {
    if (e.value === '') return n.m('default')
    if (e.value === 'primary') return n.m('primary')
    if (e.value === 'success') return n.m('success')
    if (e.value === 'warning') return n.m('warning')
    if (e.value === 'danger') return n.m('danger')
    if (e.value === 'info') return n.m('info')
  },
  Pt = ['nativeType', 'onClick'],
  Vt = /* @__PURE__ */ V({
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
    setup(n, { emit: e }) {
      const t = n,
        r = lt('button'),
        i = (f) => {
          t.disabled || e('click', f)
        },
        s = kt(
          r,
          k(() => t.size)
        ),
        a = Tt(
          r,
          k(() => t.type)
        ),
        l = k(() => (t.plain ? 'is-plain' : '')),
        o = k(() => (t.round ? 'is-round' : '')),
        d = k(() => (t.disabled ? 'is-disabled' : '')),
        v = k(() => (t.circle ? 'is-circle' : ''))
      return (f, h) => {
        const b = Ae('cc-icon')
        return (
          m(),
          _(
            'button',
            {
              nativeType: n.nativeType,
              class: A([c(r).b(), c(s), c(a), c(l), c(o), c(d), c(v)]),
              onClick: de(i, ['prevent', 'stop']),
            },
            [
              n.icon
                ? (m(),
                  S(
                    b,
                    { key: 0 },
                    {
                      default: z(() => [
                        (m(),
                        S(
                          pe(n.icon),
                          {
                            color: n.type ? '#fff' : '#000',
                          },
                          null,
                          8,
                          ['color']
                        )),
                      ]),
                      _: 1,
                    }
                  ))
                : T('', !0),
              f.$slots.default
                ? (m(),
                  _(
                    'span',
                    {
                      key: 1,
                      style: D({ marginLeft: n.icon ? '8px' : '0' }),
                    },
                    [W(f.$slots, 'default')],
                    4
                  ))
                : T('', !0),
            ],
            10,
            Pt
          )
        )
      }
    },
  }),
  Bt = H(Vt, 'cc-button'),
  jt = {
    xmlns: 'http://www.w3.org/2000/svg',
    'xmlns:xlink': 'http://www.w3.org/1999/xlink',
    viewBox: '0 0 1024 1024',
  },
  St = /* @__PURE__ */ F(
    'path',
    {
      d: 'M699 353h-46.9c-10.2 0-19.9 4.9-25.9 13.3L469 584.3l-71.2-98.8c-6-8.3-15.6-13.3-25.9-13.3H325c-6.5 0-10.3 7.4-6.5 12.7l124.6 172.8a31.8 31.8 0 0 0 51.7 0l210.6-292c3.9-5.3.1-12.7-6.4-12.7z',
      fill: 'currentColor',
    },
    null,
    -1
  ),
  zt = /* @__PURE__ */ F(
    'path',
    {
      d: 'M512 64C264.6 64 64 264.6 64 512s200.6 448 448 448s448-200.6 448-448S759.4 64 512 64zm0 820c-205.4 0-372-166.6-372-372s166.6-372 372-372s372 166.6 372 372s-166.6 372-372 372z',
      fill: 'currentColor',
    },
    null,
    -1
  ),
  Nt = [St, zt],
  Rt = V({
    name: 'CheckCircleOutlined',
    render: function (e, t) {
      return m(), _('svg', jt, Nt)
    },
  }),
  Mt = {
    xmlns: 'http://www.w3.org/2000/svg',
    'xmlns:xlink': 'http://www.w3.org/1999/xlink',
    viewBox: '0 0 1024 1024',
  },
  Lt = /* @__PURE__ */ F(
    'path',
    {
      d: 'M685.4 354.8c0-4.4-3.6-8-8-8l-66 .3L512 465.6l-99.3-118.4l-66.1-.3c-4.4 0-8 3.5-8 8c0 1.9.7 3.7 1.9 5.2l130.1 155L340.5 670a8.32 8.32 0 0 0-1.9 5.2c0 4.4 3.6 8 8 8l66.1-.3L512 564.4l99.3 118.4l66 .3c4.4 0 8-3.5 8-8c0-1.9-.7-3.7-1.9-5.2L553.5 515l130.1-155c1.2-1.4 1.8-3.3 1.8-5.2z',
      fill: 'currentColor',
    },
    null,
    -1
  ),
  It = /* @__PURE__ */ F(
    'path',
    {
      d: 'M512 65C264.6 65 64 265.6 64 513s200.6 448 448 448s448-200.6 448-448S759.4 65 512 65zm0 820c-205.4 0-372-166.6-372-372s166.6-372 372-372s372 166.6 372 372s-166.6 372-372 372z',
      fill: 'currentColor',
    },
    null,
    -1
  ),
  Dt = [Lt, It],
  Ue = V({
    name: 'CloseCircleOutlined',
    render: function (e, t) {
      return m(), _('svg', Mt, Dt)
    },
  }),
  Wt = {
    xmlns: 'http://www.w3.org/2000/svg',
    'xmlns:xlink': 'http://www.w3.org/1999/xlink',
    viewBox: '0 0 1024 1024',
  },
  Ut = /* @__PURE__ */ F(
    'path',
    {
      d: 'M563.8 512l262.5-312.9c4.4-5.2.7-13.1-6.1-13.1h-79.8c-4.7 0-9.2 2.1-12.3 5.7L511.6 449.8L295.1 191.7c-3-3.6-7.5-5.7-12.3-5.7H203c-6.8 0-10.5 7.9-6.1 13.1L459.4 512L196.9 824.9A7.95 7.95 0 0 0 203 838h79.8c4.7 0 9.2-2.1 12.3-5.7l216.5-258.1l216.5 258.1c3 3.6 7.5 5.7 12.3 5.7h79.8c6.8 0 10.5-7.9 6.1-13.1L563.8 512z',
      fill: 'currentColor',
    },
    null,
    -1
  ),
  Zt = [Ut],
  Ze = V({
    name: 'CloseOutlined',
    render: function (e, t) {
      return m(), _('svg', Wt, Zt)
    },
  }),
  Jt = {
    xmlns: 'http://www.w3.org/2000/svg',
    'xmlns:xlink': 'http://www.w3.org/1999/xlink',
    viewBox: '0 0 1024 1024',
  },
  Kt = /* @__PURE__ */ F(
    'path',
    {
      d: 'M942.2 486.2Q889.47 375.11 816.7 305l-50.88 50.88C807.31 395.53 843.45 447.4 874.7 512C791.5 684.2 673.4 766 512 766q-72.67 0-133.87-22.38L323 798.75Q408 838 512 838q288.3 0 430.2-300.3a60.29 60.29 0 0 0 0-51.5zm-63.57-320.64L836 122.88a8 8 0 0 0-11.32 0L715.31 232.2Q624.86 186 512 186q-288.3 0-430.2 300.3a60.3 60.3 0 0 0 0 51.5q56.69 119.4 136.5 191.41L112.48 835a8 8 0 0 0 0 11.31L155.17 889a8 8 0 0 0 11.31 0l712.15-712.12a8 8 0 0 0 0-11.32zM149.3 512C232.6 339.8 350.7 258 512 258c54.54 0 104.13 9.36 149.12 28.39l-70.3 70.3a176 176 0 0 0-238.13 238.13l-83.42 83.42C223.1 637.49 183.3 582.28 149.3 512zm246.7 0a112.11 112.11 0 0 1 146.2-106.69L401.31 546.2A112 112 0 0 1 396 512z',
      fill: 'currentColor',
    },
    null,
    -1
  ),
  Qt = /* @__PURE__ */ F(
    'path',
    {
      d: 'M508 624c-3.46 0-6.87-.16-10.25-.47l-52.82 52.82a176.09 176.09 0 0 0 227.42-227.42l-52.82 52.82c.31 3.38.47 6.79.47 10.25a111.94 111.94 0 0 1-112 112z',
      fill: 'currentColor',
    },
    null,
    -1
  ),
  Xt = [Kt, Qt],
  Ht = V({
    name: 'EyeInvisibleOutlined',
    render: function (e, t) {
      return m(), _('svg', Jt, Xt)
    },
  }),
  Yt = {
    xmlns: 'http://www.w3.org/2000/svg',
    'xmlns:xlink': 'http://www.w3.org/1999/xlink',
    viewBox: '0 0 1024 1024',
  },
  Gt = /* @__PURE__ */ F(
    'path',
    {
      d: 'M942.2 486.2C847.4 286.5 704.1 186 512 186c-192.2 0-335.4 100.5-430.2 300.3a60.3 60.3 0 0 0 0 51.5C176.6 737.5 319.9 838 512 838c192.2 0 335.4-100.5 430.2-300.3c7.7-16.2 7.7-35 0-51.5zM512 766c-161.3 0-279.4-81.8-362.7-254C232.6 339.8 350.7 258 512 258c161.3 0 279.4 81.8 362.7 254C791.5 684.2 673.4 766 512 766zm-4-430c-97.2 0-176 78.8-176 176s78.8 176 176 176s176-78.8 176-176s-78.8-176-176-176zm0 288c-61.9 0-112-50.1-112-112s50.1-112 112-112s112 50.1 112 112s-50.1 112-112 112z',
      fill: 'currentColor',
    },
    null,
    -1
  ),
  en = [Gt],
  tn = V({
    name: 'EyeOutlined',
    render: function (e, t) {
      return m(), _('svg', Yt, en)
    },
  }),
  nn = {
    xmlns: 'http://www.w3.org/2000/svg',
    'xmlns:xlink': 'http://www.w3.org/1999/xlink',
    viewBox: '0 0 1024 1024',
  },
  rn = /* @__PURE__ */ F(
    'path',
    {
      d: 'M512 64C264.6 64 64 264.6 64 512s200.6 448 448 448s448-200.6 448-448S759.4 64 512 64zm0 820c-205.4 0-372-166.6-372-372s166.6-372 372-372s372 166.6 372 372s-166.6 372-372 372z',
      fill: 'currentColor',
    },
    null,
    -1
  ),
  an = /* @__PURE__ */ F(
    'path',
    {
      d: 'M464 336a48 48 0 1 0 96 0a48 48 0 1 0-96 0zm72 112h-48c-4.4 0-8 3.6-8 8v272c0 4.4 3.6 8 8 8h48c4.4 0 8-3.6 8-8V456c0-4.4-3.6-8-8-8z',
      fill: 'currentColor',
    },
    null,
    -1
  ),
  sn = [rn, an],
  ln = V({
    name: 'InfoCircleOutlined',
    render: function (e, t) {
      return m(), _('svg', nn, sn)
    },
  }),
  on = {
    xmlns: 'http://www.w3.org/2000/svg',
    'xmlns:xlink': 'http://www.w3.org/1999/xlink',
    viewBox: '0 0 1024 1024',
  },
  un = /* @__PURE__ */ F(
    'path',
    {
      d: 'M724 218.3V141c0-6.7-7.7-10.4-12.9-6.3L260.3 486.8a31.86 31.86 0 0 0 0 50.3l450.8 352.1c5.3 4.1 12.9.4 12.9-6.3v-77.3c0-4.9-2.3-9.6-6.1-12.6l-360-281l360-281.1c3.8-3 6.1-7.7 6.1-12.6z',
      fill: 'currentColor',
    },
    null,
    -1
  ),
  cn = [un],
  fn = V({
    name: 'LeftOutlined',
    render: function (e, t) {
      return m(), _('svg', on, cn)
    },
  }),
  dn = {
    xmlns: 'http://www.w3.org/2000/svg',
    'xmlns:xlink': 'http://www.w3.org/1999/xlink',
    viewBox: '0 0 1024 1024',
  },
  pn = /* @__PURE__ */ F(
    'path',
    {
      d: 'M765.7 486.8L314.9 134.7A7.97 7.97 0 0 0 302 141v77.3c0 4.9 2.3 9.6 6.1 12.6l360 281.1l-360 281.1c-3.9 3-6.1 7.7-6.1 12.6V883c0 6.7 7.7 10.4 12.9 6.3l450.8-352.1a31.96 31.96 0 0 0 0-50.4z',
      fill: 'currentColor',
    },
    null,
    -1
  ),
  hn = [pn],
  gn = V({
    name: 'RightOutlined',
    render: function (e, t) {
      return m(), _('svg', dn, hn)
    },
  })
function oe(n, e, t) {
  let r = n
  return e && (r += `__${e}`), t && (r += `--${t}`), r
}
function ge(n) {
  const e = `cc-${n}`
  return {
    b: () => oe(e),
    e: (a) => (a ? oe(e, a) : ''),
    m: (a) => (a ? oe(e, '', a) : ''),
    em: (a, l) => (a && l ? oe(e, a, l) : ''),
  }
}
const mn = ['maxlength'],
  vn = ['type', 'placeholder', 'readonly', 'disabled', 'maxlength'],
  yn = /* @__PURE__ */ V({
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
    setup(n, { expose: e, emit: t }) {
      const r = n,
        i = ge('input'),
        s = Z('setValidateChangeFlag', void 0),
        a = Z('setValidateBlurFlag', void 0),
        l = O(0),
        o = O(0),
        d = O(),
        v = O(!1),
        f = O(r.modelValue),
        h = async () => {
          var u
          await ce(), (u = d.value) == null || u.focus()
        },
        b = () => {
          var u
          return (u = d.value) == null ? void 0 : u.blur()
        },
        E = (u) => {
          r.disabled ||
            (t('update:modelValue', u.target.value),
            t('input', u.target.value),
            l.value++,
            s == null || s(l.value))
        },
        g = (u) => {
          r.disabled || (t('blur', u), o.value++, a == null || a(o.value))
        },
        q = (u) => {
          r.disabled || (s == null || s(0), a == null || a(0), t('focus', u))
        },
        p = (u) => {
          t('change', u.target.value)
        },
        j = (u) => {
          t('update:modelValue', ''), t('clear', u), h()
        },
        y = () => {
          ;(v.value = !v.value), h()
        }
      return (
        K(
          () => r.modelValue,
          (u) => {
            f.value = u
          }
        ),
        e({
          foucs: h,
          blur: b,
        }),
        (u, $) => {
          const x = Ae('cc-icon')
          return (
            m(),
            _(
              'div',
              {
                class: A([c(i).b(), { 'is-disabled': n.disabled }]),
              },
              [
                F(
                  'div',
                  {
                    class: A([
                      c(i).e('wrapper'),
                      `${n.disabled ? c(i).e('wrapper-disabled') : ''}`,
                    ]),
                    style: D({
                      padding: n.type === 'textarea' ? '0' : '0px 12px',
                    }),
                  },
                  [
                    u.$slots.prefix || n.prefixIcon
                      ? (m(),
                        _(
                          'span',
                          {
                            key: 0,
                            style: { color: '#a8abb2' },
                            class: A([c(i).e('wrapper-content')]),
                          },
                          [
                            F('span', null, [
                              n.prefixIcon
                                ? (m(),
                                  S(
                                    x,
                                    { key: 0 },
                                    {
                                      default: z(() => [
                                        (m(), S(pe(n.prefixIcon))),
                                      ]),
                                      _: 1,
                                    }
                                  ))
                                : W(u.$slots, 'prefix', { key: 1 }),
                            ]),
                          ],
                          2
                        ))
                      : T('', !0),
                    n.type === 'textarea'
                      ? he(
                          (m(),
                          _(
                            'textarea',
                            {
                              key: 1,
                              'onUpdate:modelValue':
                                $[0] || ($[0] = (w) => (f.value = w)),
                              class: A([c(i).e('textarea')]),
                              style: D([
                                { height: 40 * Number(n.rows) + 'px' },
                                { width: '100%' },
                              ]),
                              maxlength: n.maxlength,
                              onInput: E,
                              onBlur: g,
                              onFocus: q,
                              onChange: p,
                            },
                            null,
                            46,
                            mn
                          )),
                          [[Ye, f.value]]
                        )
                      : T('', !0),
                    n.type === 'text'
                      ? he(
                          (m(),
                          _(
                            'input',
                            {
                              key: 2,
                              ref_key: 'inputRef',
                              ref: d,
                              'onUpdate:modelValue':
                                $[1] || ($[1] = (w) => (f.value = w)),
                              type: `${v.value ? 'password' : n.type}`,
                              placeholder: n.placeholder,
                              readonly: n.readonly,
                              disabled: n.disabled,
                              maxlength: Number(n.maxlength),
                              class: A([
                                c(i).e('input'),
                                `${n.disabled ? c(i).e('input-disabled') : ''}`,
                              ]),
                              onInput: E,
                              onBlur: g,
                              onFocus: q,
                              onChange: p,
                            },
                            null,
                            42,
                            vn
                          )),
                          [[Ge, f.value]]
                        )
                      : T('', !0),
                    u.$slots.suffix || n.suffixIcon
                      ? (m(),
                        _(
                          'span',
                          {
                            key: 3,
                            style: { color: '#a8abb2' },
                            class: A([c(i).e('input-wrapper')]),
                          },
                          [
                            F('span', null, [
                              n.suffixIcon
                                ? (m(),
                                  S(
                                    x,
                                    { key: 0 },
                                    {
                                      default: z(() => [
                                        (m(), S(pe(n.suffixIcon))),
                                      ]),
                                      _: 1,
                                    }
                                  ))
                                : W(u.$slots, 'suffix', { key: 1 }),
                            ]),
                          ],
                          2
                        ))
                      : T('', !0),
                    n.clearable && n.modelValue.length
                      ? (m(),
                        _(
                          'span',
                          {
                            key: 4,
                            style: { color: '#a8abb2' },
                            class: A([c(i).e('clear')]),
                            onClick: j,
                          },
                          [
                            F('span', null, [
                              N(x, null, {
                                default: z(() => [N(c(Ue))]),
                                _: 1,
                              }),
                            ]),
                          ],
                          2
                        ))
                      : T('', !0),
                    n.showPassword && f.value.length
                      ? (m(),
                        _(
                          'span',
                          {
                            key: 5,
                            style: { color: '#a8abb2' },
                            class: A([c(i).e('password')]),
                            onClick: y,
                          },
                          [
                            F('span', null, [
                              N(x, null, {
                                default: z(() => [
                                  v.value
                                    ? (m(), S(c(tn), { key: 0 }))
                                    : (m(), S(c(Ht), { key: 1 })),
                                ]),
                                _: 1,
                              }),
                            ]),
                          ],
                          2
                        ))
                      : T('', !0),
                    n.maxlength && n.showWordLimit
                      ? (m(),
                        _(
                          'div',
                          {
                            key: 6,
                            class: A([c(i).e('limit')]),
                          },
                          te(f.value.length) + ' / ' + te(n.maxlength),
                          3
                        ))
                      : T('', !0),
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
  wn = H(yn, 'cc-input'),
  bn = {
    xmlns: 'http://www.w3.org/2000/svg',
    'xmlns:xlink': 'http://www.w3.org/1999/xlink',
    viewBox: '0 0 32 32',
  },
  xn = /* @__PURE__ */ F(
    'path',
    {
      d: 'M16 2a14 14 0 1 0 14 14A14 14 0 0 0 16 2zm0 26a12 12 0 1 1 12-12a12 12 0 0 1-12 12z',
      fill: 'currentColor',
    },
    null,
    -1
  ),
  $n = /* @__PURE__ */ F(
    'path',
    {
      d: 'M15 8h2v11h-2z',
      fill: 'currentColor',
    },
    null,
    -1
  ),
  Cn = /* @__PURE__ */ F(
    'path',
    {
      d: 'M16 22a1.5 1.5 0 1 0 1.5 1.5A1.5 1.5 0 0 0 16 22z',
      fill: 'currentColor',
    },
    null,
    -1
  ),
  _n = [xn, $n, Cn],
  Fn = V({
    name: 'Warning',
    render: function (e, t) {
      return m(), _('svg', bn, _n)
    },
  }),
  qn = ['onClick'],
  An = /* @__PURE__ */ V({
    __name: 'message',
    props: {
      message: { default: '' },
      type: { default: 'info' },
      center: { type: Boolean, default: !1 },
      showClose: { type: Boolean, default: !1 },
      offset: { default: 20 },
    },
    setup(n, { expose: e }) {
      const t = n,
        r = ge('message'),
        i = O(!1),
        s = O(!1),
        a = O(t.offset),
        l = (h, b = 300) =>
          new Promise((E) => {
            ;(i.value = h),
              setTimeout(() => {
                E('')
              }, b)
          }),
        o = (h) => {
          a.value = h
        },
        d = (h) => {
          s.value = h
        },
        v = () => {
          d(!0), l(!1, 0)
        }
      e({
        setVisible: l,
        setTop: o,
        setCloseFlag: d,
        closeFlag: s,
      })
      const f = k(() =>
        t.type === 'success'
          ? 'bg-success'
          : t.type === 'info'
          ? 'bg-info'
          : t.type === 'danger'
          ? 'bg-danger'
          : t.type === 'warning'
          ? 'bg-warning'
          : ''
      )
      return (h, b) => (
        m(),
        S(
          et,
          { name: 'cc-message' },
          {
            default: z(() => [
              he(
                F(
                  'div',
                  {
                    style: D({ top: a.value + 'px' }),
                    class: A([
                      c(r).b(),
                      c(f),
                      n.center ? c(r).m('center') : '',
                    ]),
                  },
                  [
                    F(
                      'div',
                      {
                        class: A([c(r).e('icon')]),
                      },
                      [
                        n.type === 'success'
                          ? (m(),
                            S(
                              c(ee),
                              {
                                key: 0,
                                color: 'var(--cc-color-success)',
                              },
                              {
                                default: z(() => [N(c(Rt))]),
                                _: 1,
                              }
                            ))
                          : T('', !0),
                        n.type === 'warning'
                          ? (m(),
                            S(
                              c(ee),
                              {
                                key: 1,
                                color: 'var(--cc-color-warning)',
                              },
                              {
                                default: z(() => [N(c(Fn))]),
                                _: 1,
                              }
                            ))
                          : T('', !0),
                        n.type === 'info'
                          ? (m(),
                            S(
                              c(ee),
                              {
                                key: 2,
                                color: 'var(--cc-color-info)',
                              },
                              {
                                default: z(() => [N(c(ln))]),
                                _: 1,
                              }
                            ))
                          : T('', !0),
                        n.type === 'danger'
                          ? (m(),
                            S(
                              c(ee),
                              {
                                key: 3,
                                color: 'var(--cc-color-danger)',
                              },
                              {
                                default: z(() => [N(c(Ue))]),
                                _: 1,
                              }
                            ))
                          : T('', !0),
                      ],
                      2
                    ),
                    F('div', null, te(n.message), 1),
                    n.showClose
                      ? (m(),
                        _(
                          'div',
                          {
                            key: 0,
                            class: A([c(r).e('close-btn')]),
                            onClick: de(v, ['stop']),
                          },
                          [
                            N(
                              c(ee),
                              {
                                color: 'var(--cc-message-close-icon-color)',
                                size: 'var(--cc-message-close-icon-size)',
                              },
                              {
                                default: z(() => [N(c(Ze))]),
                                _: 1,
                              }
                            ),
                          ],
                          10,
                          qn
                        ))
                      : T('', !0),
                  ],
                  6
                ),
                [[ze, i.value]]
              ),
            ]),
            _: 1,
          }
        )
      )
    },
  }),
  En = 60,
  On = 28,
  Q = O([]),
  L = (n) => {
    typeof n == 'string' &&
      (n = {
        message: n,
        duration: 3e3,
      })
    const e = tt(An, n)
    kn(e, n.duration)
  },
  kn = (n, e = 3e3) => {
    const t = document.createDocumentFragment(),
      r = n.mount(t)
    Q.value.push(r),
      Te(r),
      r.setVisible(!0),
      K(
        () => Q.value,
        () => Te(r)
      ),
      document.body.appendChild(t),
      Tn(n, r, e)
  },
  Tn = (n, e, t = 3e3) => {
    K(
      () => e.closeFlag,
      (r) => {
        r &&
          (e.closeTimer = setTimeout(() => {
            n.unmount(),
              (Q.value = Q.value.filter((i) => i !== e)),
              clearTimeout(e.closeTimer),
              (e.closeTimer = null),
              (e.closeFlag = !1)
          }, 300))
      }
    ),
      (e.timer = setTimeout(async () => {
        await e.setVisible(!1),
          n.unmount(),
          (Q.value = Q.value.filter((r) => r !== e)),
          clearTimeout(e.timer),
          (e.timer = null)
      }, t))
  },
  Te = (n) => {
    const e = Q.value.indexOf(n)
    n.setTop(En * e + On)
  }
L.success = (n) => {
  L(
    typeof n == 'string'
      ? {
          type: 'success',
          message: n,
        }
      : {
          type: 'success',
          message: n.message,
          ...n,
        }
  )
}
L.info = (n) => {
  L(
    typeof n == 'string'
      ? {
          type: 'info',
          message: n,
        }
      : {
          type: 'info',
          message: n.message,
          ...n,
        }
  )
}
L.warning = (n) => {
  L(
    typeof n == 'string'
      ? {
          type: 'warning',
          message: n,
        }
      : {
          type: 'warning',
          message: n.message,
          ...n,
        }
  )
}
L.error = (n) => {
  L(
    typeof n == 'string'
      ? {
          type: 'danger',
          message: n,
        }
      : {
          type: 'danger',
          message: n.message,
          ...n,
        }
  )
}
const Pn = (n, e) => (
    (n.install = (t) => {
      ;(n._context = t._context), (t.config.globalProperties[e] = n)
    }),
    n
  ),
  Vn = Pn(L, '$message'),
  xe = Symbol('TabsProvide'),
  Bn = { style: { overflow: 'hidden' } },
  jn = ['id', 'onClick'],
  Sn = { key: 1 },
  zn = ['onClick'],
  Nn = ['onClick'],
  Rn = /* @__PURE__ */ V({
    __name: 'tabs',
    props: {
      modelValue: null,
      type: { default: '' },
      closable: { type: Boolean, default: !1 },
      addable: { type: Boolean, default: !1 },
      editable: { type: Boolean, default: !1 },
    },
    emits: ['update:modelValue', 'tab-click', 'tab-remove', 'tab-change'],
    setup(n, { emit: e }) {
      var y
      const t = n,
        r = ge('tabs'),
        i = (y = nt()) == null ? void 0 : y.uid,
        s = O([]),
        a = O(t.modelValue),
        l = O(''),
        o = O(''),
        d = O(),
        v = O(),
        f = O(!1),
        h = O(0),
        b = (u) => {
          u.disabled || s.value.push(u)
        },
        E = (u, $) => {
          s.value.length === 1
            ? ((a.value = ''), (s.value = []))
            : ($ === s.value.length - 1 &&
                $ >= 0 &&
                (a.value = s.value[$ - 1].name),
              (s.value = s.value.filter((x) => x.name !== u)),
              e('tab-remove', u))
        },
        g = (u, $) => {
          u.disabled ||
            ((a.value = u.name), q(a.value, !0), e('tab-click', u, $))
        },
        q = (u, $ = !1) => {
          if (u) {
            const x = document.querySelector(`#tab-${u}-${i}`),
              w = window.getComputedStyle(x, null),
              B = Number(w.paddingLeft.replace('px', '')),
              I = Number(w.paddingRight.replace('px', '')),
              Y = Number(w.width.replace('px', ''))
            ;(l.value = `${Y - B - I}px`),
              $ && (o.value = `${x.offsetLeft + B}px`)
          }
        },
        p = () => {
          h.value = 0
        },
        j = () => {
          ce(() => {
            const u = Number(
              window.getComputedStyle(d.value, null).width.replace('px', '')
            )
            let $ = 0
            for (let x = 0; x < s.value.length; x++)
              $ += Number(
                window
                  .getComputedStyle(
                    document.querySelector(`#tab-${s.value[x].name}-${i}`)
                  )
                  .width.replace('px', '')
              )
            h.value = -($ - u + 20 * 2)
          })
        }
      return (
        K(
          () => t.modelValue,
          (u) => {
            ;(a.value = u), e('tab-change', u)
          }
        ),
        K(
          () => a.value,
          (u) => {
            ce(() => {
              q(u)
            })
          },
          { immediate: !0 }
        ),
        K(
          () => s.value,
          (u) => {
            let $ = 0
            ce(() => {
              const x = Number(
                window.getComputedStyle(d.value, null).width.replace('px', '')
              )
              u.forEach((w) => {
                $ += Number(
                  window
                    .getComputedStyle(
                      document.querySelector(`#tab-${w.name}-${i}`)
                    )
                    .width.replace('px', '')
                )
              }),
                (f.value = $ > x)
            })
          },
          { deep: !0 }
        ),
        J(xe, {
          addTabPaneContext: b,
          currentName: k(() => a.value),
        }),
        (u, $) => {
          const x = Ae('cc-icon')
          return (
            m(),
            _(
              'div',
              {
                class: A([c(r).b()]),
              },
              [
                F(
                  'div',
                  {
                    ref_key: 'wrap',
                    ref: d,
                    class: A([c(r).e('wrap')]),
                    style: D({ padding: f.value ? '0 20px' : '0' }),
                  },
                  [
                    f.value
                      ? (m(),
                        _(
                          'div',
                          {
                            key: 0,
                            class: A([c(r).e('icon-left')]),
                            onClick: p,
                          },
                          [
                            N(x, null, {
                              default: z(() => [N(c(fn))]),
                              _: 1,
                            }),
                          ],
                          2
                        ))
                      : T('', !0),
                    F('div', Bn, [
                      F(
                        'div',
                        {
                          ref_key: 'label',
                          ref: v,
                          class: A([c(r).e('label')]),
                          style: D({ transform: `translateX(${h.value}px)` }),
                        },
                        [
                          n.type
                            ? T('', !0)
                            : (m(),
                              _(
                                'div',
                                {
                                  key: 0,
                                  class: A([c(r).e('active-bar')]),
                                  style: D({
                                    width: l.value,
                                    transform: `translateX(${o.value})`,
                                  }),
                                },
                                null,
                                6
                              )),
                          (m(!0),
                          _(
                            rt,
                            null,
                            it(
                              s.value,
                              (w, B) => (
                                m(),
                                _(
                                  'div',
                                  {
                                    id: `tab-${w.name}-${c(i)}`,
                                    key: w.name,
                                    class: A([
                                      c(r).e('label-item'),
                                      c(r).m(`${n.type}`),
                                      ,
                                      { 'is-disabled': w.disabled },
                                    ]),
                                    style: D({
                                      color:
                                        w.name === a.value
                                          ? 'var(--cc-color-primary)'
                                          : 'inherit',
                                      paddingLeft:
                                        B === 0 && !n.type ? 0 : '12px',
                                    }),
                                    onClick: (I) => g(w, I),
                                  },
                                  [
                                    w.slot
                                      ? (m(), S(pe(w.slot), { key: 0 }))
                                      : (m(), _('span', Sn, te(w.label), 1)),
                                    n.closable || w.closable
                                      ? (m(),
                                        _(
                                          'div',
                                          {
                                            key: 2,
                                            class: A([c(r).e('close-btn')]),
                                            onClick: de(
                                              (I) => E(w.name, B),
                                              ['stop']
                                            ),
                                          },
                                          [
                                            N(x, null, {
                                              default: z(() => [N(c(Ze))]),
                                              _: 1,
                                            }),
                                          ],
                                          10,
                                          zn
                                        ))
                                      : T('', !0),
                                  ],
                                  14,
                                  jn
                                )
                              )
                            ),
                            128
                          )),
                        ],
                        6
                      ),
                    ]),
                    f.value
                      ? (m(),
                        _(
                          'div',
                          {
                            key: 1,
                            class: A([c(r).e('icon-right')]),
                            onClick: de(j, ['stop']),
                          },
                          [
                            N(x, null, {
                              default: z(() => [N(c(gn))]),
                              _: 1,
                            }),
                          ],
                          10,
                          Nn
                        ))
                      : T('', !0),
                  ],
                  6
                ),
                F(
                  'div',
                  {
                    class: A([c(r).e('content')]),
                  },
                  [W(u.$slots, 'default')],
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
  Mn = { style: { display: 'none' } },
  Ln = /* @__PURE__ */ V({
    __name: 'tab-pane',
    props: {
      label: { default: '' },
      name: null,
      disabled: { type: Boolean, default: !1 },
      closable: { type: Boolean, default: !1 },
    },
    setup(n) {
      var i, s
      const e = n,
        t = (i = Z(xe)) == null ? void 0 : i.addTabPaneContext,
        r = (s = Z(xe)) == null ? void 0 : s.currentName
      return (
        t({
          label: k(() => e.label).value,
          name: k(() => e.name).value,
          disabled: k(() => e.disabled).value,
          closable: k(() => e.closable).value,
          slot: at().label,
        }),
        (a, l) =>
          he(
            (m(),
            _(
              'div',
              null,
              [
                W(a.$slots, 'default'),
                F('div', Mn, [
                  a.$slots.label ? W(a.$slots, 'label', { key: 0 }) : T('', !0),
                ]),
              ],
              512
            )),
            [[ze, c(r) === n.name]]
          )
      )
    },
  }),
  In = H(Rn, 'cc-tabs'),
  Dn = H(Ln, 'cc-tab-pane'),
  Wn = {
    Tabs: In,
    TabPane: Dn,
  },
  Un = /* @__PURE__ */ V({
    __name: 'form',
    props: {
      model: null,
      rules: null,
      labelWidth: { default: '' },
      inline: { type: Boolean, default: !1 },
    },
    setup(n, { expose: e }) {
      const t = n,
        r = O([]),
        i = (d) => {
          r.value.push(d)
        }
      return (
        e({
          validate: (d) => {
            if (r.value && r.value.length) {
              const v = r.value.map((f) => f.validate())
              Promise.all(v)
                .then((f) => {
                  const h = f.every((b) => b === !0)
                  d(h)
                })
                .catch(() => d(!1))
            }
          },
          resetFields: () => {
            r.value &&
              r.value.length &&
              r.value.forEach((d) => {
                d.resetField()
              })
          },
          validateField: (d, v) => {
            var f
            if (r.value && r.value.length) {
              const h =
                (f = r.value.find((b) => b.name === d)) == null
                  ? void 0
                  : f.validate()
              Promise.all([h])
                .then((b) => {
                  const E = b.every((g) => g === !0)
                  v(E)
                })
                .catch(() => v(!1))
            }
          },
          clearValidate: (d) => {
            r.value &&
              r.value.length &&
              r.value.find((f) => f.name === d).clearValidate()
          },
        }),
        J(
          'labelWidth',
          k(() => t.labelWidth)
        ),
        J(
          'model',
          k(() => t.model)
        ),
        J(
          'rules',
          k(() => t.rules)
        ),
        J(
          'inline',
          k(() => t.inline)
        ),
        J('addFiled', i),
        (d, v) => (
          m(),
          _(
            'div',
            {
              class: A(['w-full', [`${n.inline ? 'inline-flex' : ''}`]]),
            },
            [W(d.$slots, 'default')],
            2
          )
        )
      )
    },
  })
function X() {
  return (
    (X = Object.assign
      ? Object.assign.bind()
      : function (n) {
          for (var e = 1; e < arguments.length; e++) {
            var t = arguments[e]
            for (var r in t)
              Object.prototype.hasOwnProperty.call(t, r) && (n[r] = t[r])
          }
          return n
        }),
    X.apply(this, arguments)
  )
}
function Zn(n, e) {
  ;(n.prototype = Object.create(e.prototype)),
    (n.prototype.constructor = n),
    ae(n, e)
}
function $e(n) {
  return (
    ($e = Object.setPrototypeOf
      ? Object.getPrototypeOf.bind()
      : function (t) {
          return t.__proto__ || Object.getPrototypeOf(t)
        }),
    $e(n)
  )
}
function ae(n, e) {
  return (
    (ae = Object.setPrototypeOf
      ? Object.setPrototypeOf.bind()
      : function (r, i) {
          return (r.__proto__ = i), r
        }),
    ae(n, e)
  )
}
function Jn() {
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
function fe(n, e, t) {
  return (
    Jn()
      ? (fe = Reflect.construct.bind())
      : (fe = function (i, s, a) {
          var l = [null]
          l.push.apply(l, s)
          var o = Function.bind.apply(i, l),
            d = new o()
          return a && ae(d, a.prototype), d
        }),
    fe.apply(null, arguments)
  )
}
function Kn(n) {
  return Function.toString.call(n).indexOf('[native code]') !== -1
}
function Ce(n) {
  var e = typeof Map == 'function' ? /* @__PURE__ */ new Map() : void 0
  return (
    (Ce = function (r) {
      if (r === null || !Kn(r)) return r
      if (typeof r != 'function')
        throw new TypeError(
          'Super expression must either be null or a function'
        )
      if (typeof e < 'u') {
        if (e.has(r)) return e.get(r)
        e.set(r, i)
      }
      function i() {
        return fe(r, arguments, $e(this).constructor)
      }
      return (
        (i.prototype = Object.create(r.prototype, {
          constructor: {
            value: i,
            enumerable: !1,
            writable: !0,
            configurable: !0,
          },
        })),
        ae(i, r)
      )
    }),
    Ce(n)
  )
}
var Qn = /%[sdj%]/g,
  Je = function () {}
typeof process < 'u' &&
  process.env &&
  process.env.NODE_ENV !== 'production' &&
  typeof window < 'u' &&
  typeof document < 'u' &&
  (Je = function (e, t) {
    typeof console < 'u' &&
      console.warn &&
      typeof ASYNC_VALIDATOR_NO_WARNING > 'u' &&
      t.every(function (r) {
        return typeof r == 'string'
      }) &&
      console.warn(e, t)
  })
function _e(n) {
  if (!n || !n.length) return null
  var e = {}
  return (
    n.forEach(function (t) {
      var r = t.field
      ;(e[r] = e[r] || []), e[r].push(t)
    }),
    e
  )
}
function M(n) {
  for (
    var e = arguments.length, t = new Array(e > 1 ? e - 1 : 0), r = 1;
    r < e;
    r++
  )
    t[r - 1] = arguments[r]
  var i = 0,
    s = t.length
  if (typeof n == 'function') return n.apply(null, t)
  if (typeof n == 'string') {
    var a = n.replace(Qn, function (l) {
      if (l === '%%') return '%'
      if (i >= s) return l
      switch (l) {
        case '%s':
          return String(t[i++])
        case '%d':
          return Number(t[i++])
        case '%j':
          try {
            return JSON.stringify(t[i++])
          } catch {
            return '[Circular]'
          }
          break
        default:
          return l
      }
    })
    return a
  }
  return n
}
function Xn(n) {
  return (
    n === 'string' ||
    n === 'url' ||
    n === 'hex' ||
    n === 'email' ||
    n === 'date' ||
    n === 'pattern'
  )
}
function P(n, e) {
  return !!(
    n == null ||
    (e === 'array' && Array.isArray(n) && !n.length) ||
    (Xn(e) && typeof n == 'string' && !n)
  )
}
function Hn(n, e, t) {
  var r = [],
    i = 0,
    s = n.length
  function a(l) {
    r.push.apply(r, l || []), i++, i === s && t(r)
  }
  n.forEach(function (l) {
    e(l, a)
  })
}
function Pe(n, e, t) {
  var r = 0,
    i = n.length
  function s(a) {
    if (a && a.length) {
      t(a)
      return
    }
    var l = r
    ;(r = r + 1), l < i ? e(n[l], s) : t([])
  }
  s([])
}
function Yn(n) {
  var e = []
  return (
    Object.keys(n).forEach(function (t) {
      e.push.apply(e, n[t] || [])
    }),
    e
  )
}
var Ve = /* @__PURE__ */ (function (n) {
  Zn(e, n)
  function e(t, r) {
    var i
    return (
      (i = n.call(this, 'Async Validation Error') || this),
      (i.errors = t),
      (i.fields = r),
      i
    )
  }
  return e
})(/* @__PURE__ */ Ce(Error))
function Gn(n, e, t, r, i) {
  if (e.first) {
    var s = new Promise(function (h, b) {
      var E = function (p) {
          return r(p), p.length ? b(new Ve(p, _e(p))) : h(i)
        },
        g = Yn(n)
      Pe(g, t, E)
    })
    return (
      s.catch(function (h) {
        return h
      }),
      s
    )
  }
  var a = e.firstFields === !0 ? Object.keys(n) : e.firstFields || [],
    l = Object.keys(n),
    o = l.length,
    d = 0,
    v = [],
    f = new Promise(function (h, b) {
      var E = function (q) {
        if ((v.push.apply(v, q), d++, d === o))
          return r(v), v.length ? b(new Ve(v, _e(v))) : h(i)
      }
      l.length || (r(v), h(i)),
        l.forEach(function (g) {
          var q = n[g]
          a.indexOf(g) !== -1 ? Pe(q, t, E) : Hn(q, t, E)
        })
    })
  return (
    f.catch(function (h) {
      return h
    }),
    f
  )
}
function er(n) {
  return !!(n && n.message !== void 0)
}
function tr(n, e) {
  for (var t = n, r = 0; r < e.length; r++) {
    if (t == null) return t
    t = t[e[r]]
  }
  return t
}
function Be(n, e) {
  return function (t) {
    var r
    return (
      n.fullFields
        ? (r = tr(e, n.fullFields))
        : (r = e[t.field || n.fullField]),
      er(t)
        ? ((t.field = t.field || n.fullField), (t.fieldValue = r), t)
        : {
            message: typeof t == 'function' ? t() : t,
            fieldValue: r,
            field: t.field || n.fullField,
          }
    )
  }
}
function je(n, e) {
  if (e) {
    for (var t in e)
      if (e.hasOwnProperty(t)) {
        var r = e[t]
        typeof r == 'object' && typeof n[t] == 'object'
          ? (n[t] = X({}, n[t], r))
          : (n[t] = r)
      }
  }
  return n
}
var Ke = function (e, t, r, i, s, a) {
    e.required &&
      (!r.hasOwnProperty(e.field) || P(t, a || e.type)) &&
      i.push(M(s.messages.required, e.fullField))
  },
  nr = function (e, t, r, i, s) {
    ;(/^\s+$/.test(t) || t === '') &&
      i.push(M(s.messages.whitespace, e.fullField))
  },
  ue,
  rr = function () {
    if (ue) return ue
    var n = '[a-fA-F\\d:]',
      e = function (u) {
        return u && u.includeBoundaries
          ? '(?:(?<=\\s|^)(?=' + n + ')|(?<=' + n + ')(?=\\s|$))'
          : ''
      },
      t =
        '(?:25[0-5]|2[0-4]\\d|1\\d\\d|[1-9]\\d|\\d)(?:\\.(?:25[0-5]|2[0-4]\\d|1\\d\\d|[1-9]\\d|\\d)){3}',
      r = '[a-fA-F\\d]{1,4}',
      i = (
        `
(?:
(?:` +
        r +
        ':){7}(?:' +
        r +
        `|:)|                                    // 1:2:3:4:5:6:7::  1:2:3:4:5:6:7:8
(?:` +
        r +
        ':){6}(?:' +
        t +
        '|:' +
        r +
        `|:)|                             // 1:2:3:4:5:6::    1:2:3:4:5:6::8   1:2:3:4:5:6::8  1:2:3:4:5:6::1.2.3.4
(?:` +
        r +
        ':){5}(?::' +
        t +
        '|(?::' +
        r +
        `){1,2}|:)|                   // 1:2:3:4:5::      1:2:3:4:5::7:8   1:2:3:4:5::8    1:2:3:4:5::7:1.2.3.4
(?:` +
        r +
        ':){4}(?:(?::' +
        r +
        '){0,1}:' +
        t +
        '|(?::' +
        r +
        `){1,3}|:)| // 1:2:3:4::        1:2:3:4::6:7:8   1:2:3:4::8      1:2:3:4::6:7:1.2.3.4
(?:` +
        r +
        ':){3}(?:(?::' +
        r +
        '){0,2}:' +
        t +
        '|(?::' +
        r +
        `){1,4}|:)| // 1:2:3::          1:2:3::5:6:7:8   1:2:3::8        1:2:3::5:6:7:1.2.3.4
(?:` +
        r +
        ':){2}(?:(?::' +
        r +
        '){0,3}:' +
        t +
        '|(?::' +
        r +
        `){1,5}|:)| // 1:2::            1:2::4:5:6:7:8   1:2::8          1:2::4:5:6:7:1.2.3.4
(?:` +
        r +
        ':){1}(?:(?::' +
        r +
        '){0,4}:' +
        t +
        '|(?::' +
        r +
        `){1,6}|:)| // 1::              1::3:4:5:6:7:8   1::8            1::3:4:5:6:7:1.2.3.4
(?::(?:(?::` +
        r +
        '){0,5}:' +
        t +
        '|(?::' +
        r +
        `){1,7}|:))             // ::2:3:4:5:6:7:8  ::2:3:4:5:6:7:8  ::8             ::1.2.3.4
)(?:%[0-9a-zA-Z]{1,})?                                             // %eth0            %1
`
      )
        .replace(/\s*\/\/.*$/gm, '')
        .replace(/\n/g, '')
        .trim(),
      s = new RegExp('(?:^' + t + '$)|(?:^' + i + '$)'),
      a = new RegExp('^' + t + '$'),
      l = new RegExp('^' + i + '$'),
      o = function (u) {
        return u && u.exact
          ? s
          : new RegExp(
              '(?:' + e(u) + t + e(u) + ')|(?:' + e(u) + i + e(u) + ')',
              'g'
            )
      }
    ;(o.v4 = function (y) {
      return y && y.exact ? a : new RegExp('' + e(y) + t + e(y), 'g')
    }),
      (o.v6 = function (y) {
        return y && y.exact ? l : new RegExp('' + e(y) + i + e(y), 'g')
      })
    var d = '(?:(?:[a-z]+:)?//)',
      v = '(?:\\S+(?::\\S*)?@)?',
      f = o.v4().source,
      h = o.v6().source,
      b = '(?:(?:[a-z\\u00a1-\\uffff0-9][-_]*)*[a-z\\u00a1-\\uffff0-9]+)',
      E = '(?:\\.(?:[a-z\\u00a1-\\uffff0-9]-*)*[a-z\\u00a1-\\uffff0-9]+)*',
      g = '(?:\\.(?:[a-z\\u00a1-\\uffff]{2,}))',
      q = '(?::\\d{2,5})?',
      p = '(?:[/?#][^\\s"]*)?',
      j =
        '(?:' +
        d +
        '|www\\.)' +
        v +
        '(?:localhost|' +
        f +
        '|' +
        h +
        '|' +
        b +
        E +
        g +
        ')' +
        q +
        p
    return (ue = new RegExp('(?:^' + j + '$)', 'i')), ue
  },
  Se = {
    email:
      /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]+\.)+[a-zA-Z\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]{2,}))$/,
    hex: /^#?([a-f0-9]{6}|[a-f0-9]{3})$/i,
  },
  re = {
    integer: function (e) {
      return re.number(e) && parseInt(e, 10) === e
    },
    float: function (e) {
      return re.number(e) && !re.integer(e)
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
      return typeof e == 'object' && !re.array(e)
    },
    method: function (e) {
      return typeof e == 'function'
    },
    email: function (e) {
      return typeof e == 'string' && e.length <= 320 && !!e.match(Se.email)
    },
    url: function (e) {
      return typeof e == 'string' && e.length <= 2048 && !!e.match(rr())
    },
    hex: function (e) {
      return typeof e == 'string' && !!e.match(Se.hex)
    },
  },
  ir = function (e, t, r, i, s) {
    if (e.required && t === void 0) {
      Ke(e, t, r, i, s)
      return
    }
    var a = [
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
      l = e.type
    a.indexOf(l) > -1
      ? re[l](t) || i.push(M(s.messages.types[l], e.fullField, e.type))
      : l &&
        typeof t !== e.type &&
        i.push(M(s.messages.types[l], e.fullField, e.type))
  },
  ar = function (e, t, r, i, s) {
    var a = typeof e.len == 'number',
      l = typeof e.min == 'number',
      o = typeof e.max == 'number',
      d = /[\uD800-\uDBFF][\uDC00-\uDFFF]/g,
      v = t,
      f = null,
      h = typeof t == 'number',
      b = typeof t == 'string',
      E = Array.isArray(t)
    if ((h ? (f = 'number') : b ? (f = 'string') : E && (f = 'array'), !f))
      return !1
    E && (v = t.length),
      b && (v = t.replace(d, '_').length),
      a
        ? v !== e.len && i.push(M(s.messages[f].len, e.fullField, e.len))
        : l && !o && v < e.min
        ? i.push(M(s.messages[f].min, e.fullField, e.min))
        : o && !l && v > e.max
        ? i.push(M(s.messages[f].max, e.fullField, e.max))
        : l &&
          o &&
          (v < e.min || v > e.max) &&
          i.push(M(s.messages[f].range, e.fullField, e.min, e.max))
  },
  G = 'enum',
  sr = function (e, t, r, i, s) {
    ;(e[G] = Array.isArray(e[G]) ? e[G] : []),
      e[G].indexOf(t) === -1 &&
        i.push(M(s.messages[G], e.fullField, e[G].join(', ')))
  },
  lr = function (e, t, r, i, s) {
    if (e.pattern) {
      if (e.pattern instanceof RegExp)
        (e.pattern.lastIndex = 0),
          e.pattern.test(t) ||
            i.push(M(s.messages.pattern.mismatch, e.fullField, t, e.pattern))
      else if (typeof e.pattern == 'string') {
        var a = new RegExp(e.pattern)
        a.test(t) ||
          i.push(M(s.messages.pattern.mismatch, e.fullField, t, e.pattern))
      }
    }
  },
  C = {
    required: Ke,
    whitespace: nr,
    type: ir,
    range: ar,
    enum: sr,
    pattern: lr,
  },
  or = function (e, t, r, i, s) {
    var a = [],
      l = e.required || (!e.required && i.hasOwnProperty(e.field))
    if (l) {
      if (P(t, 'string') && !e.required) return r()
      C.required(e, t, i, a, s, 'string'),
        P(t, 'string') ||
          (C.type(e, t, i, a, s),
          C.range(e, t, i, a, s),
          C.pattern(e, t, i, a, s),
          e.whitespace === !0 && C.whitespace(e, t, i, a, s))
    }
    r(a)
  },
  ur = function (e, t, r, i, s) {
    var a = [],
      l = e.required || (!e.required && i.hasOwnProperty(e.field))
    if (l) {
      if (P(t) && !e.required) return r()
      C.required(e, t, i, a, s), t !== void 0 && C.type(e, t, i, a, s)
    }
    r(a)
  },
  cr = function (e, t, r, i, s) {
    var a = [],
      l = e.required || (!e.required && i.hasOwnProperty(e.field))
    if (l) {
      if ((t === '' && (t = void 0), P(t) && !e.required)) return r()
      C.required(e, t, i, a, s),
        t !== void 0 && (C.type(e, t, i, a, s), C.range(e, t, i, a, s))
    }
    r(a)
  },
  fr = function (e, t, r, i, s) {
    var a = [],
      l = e.required || (!e.required && i.hasOwnProperty(e.field))
    if (l) {
      if (P(t) && !e.required) return r()
      C.required(e, t, i, a, s), t !== void 0 && C.type(e, t, i, a, s)
    }
    r(a)
  },
  dr = function (e, t, r, i, s) {
    var a = [],
      l = e.required || (!e.required && i.hasOwnProperty(e.field))
    if (l) {
      if (P(t) && !e.required) return r()
      C.required(e, t, i, a, s), P(t) || C.type(e, t, i, a, s)
    }
    r(a)
  },
  pr = function (e, t, r, i, s) {
    var a = [],
      l = e.required || (!e.required && i.hasOwnProperty(e.field))
    if (l) {
      if (P(t) && !e.required) return r()
      C.required(e, t, i, a, s),
        t !== void 0 && (C.type(e, t, i, a, s), C.range(e, t, i, a, s))
    }
    r(a)
  },
  hr = function (e, t, r, i, s) {
    var a = [],
      l = e.required || (!e.required && i.hasOwnProperty(e.field))
    if (l) {
      if (P(t) && !e.required) return r()
      C.required(e, t, i, a, s),
        t !== void 0 && (C.type(e, t, i, a, s), C.range(e, t, i, a, s))
    }
    r(a)
  },
  gr = function (e, t, r, i, s) {
    var a = [],
      l = e.required || (!e.required && i.hasOwnProperty(e.field))
    if (l) {
      if (t == null && !e.required) return r()
      C.required(e, t, i, a, s, 'array'),
        t != null && (C.type(e, t, i, a, s), C.range(e, t, i, a, s))
    }
    r(a)
  },
  mr = function (e, t, r, i, s) {
    var a = [],
      l = e.required || (!e.required && i.hasOwnProperty(e.field))
    if (l) {
      if (P(t) && !e.required) return r()
      C.required(e, t, i, a, s), t !== void 0 && C.type(e, t, i, a, s)
    }
    r(a)
  },
  vr = 'enum',
  yr = function (e, t, r, i, s) {
    var a = [],
      l = e.required || (!e.required && i.hasOwnProperty(e.field))
    if (l) {
      if (P(t) && !e.required) return r()
      C.required(e, t, i, a, s), t !== void 0 && C[vr](e, t, i, a, s)
    }
    r(a)
  },
  wr = function (e, t, r, i, s) {
    var a = [],
      l = e.required || (!e.required && i.hasOwnProperty(e.field))
    if (l) {
      if (P(t, 'string') && !e.required) return r()
      C.required(e, t, i, a, s), P(t, 'string') || C.pattern(e, t, i, a, s)
    }
    r(a)
  },
  br = function (e, t, r, i, s) {
    var a = [],
      l = e.required || (!e.required && i.hasOwnProperty(e.field))
    if (l) {
      if (P(t, 'date') && !e.required) return r()
      if ((C.required(e, t, i, a, s), !P(t, 'date'))) {
        var o
        t instanceof Date ? (o = t) : (o = new Date(t)),
          C.type(e, o, i, a, s),
          o && C.range(e, o.getTime(), i, a, s)
      }
    }
    r(a)
  },
  xr = function (e, t, r, i, s) {
    var a = [],
      l = Array.isArray(t) ? 'array' : typeof t
    C.required(e, t, i, a, s, l), r(a)
  },
  ye = function (e, t, r, i, s) {
    var a = e.type,
      l = [],
      o = e.required || (!e.required && i.hasOwnProperty(e.field))
    if (o) {
      if (P(t, a) && !e.required) return r()
      C.required(e, t, i, l, s, a), P(t, a) || C.type(e, t, i, l, s)
    }
    r(l)
  },
  $r = function (e, t, r, i, s) {
    var a = [],
      l = e.required || (!e.required && i.hasOwnProperty(e.field))
    if (l) {
      if (P(t) && !e.required) return r()
      C.required(e, t, i, a, s)
    }
    r(a)
  },
  ie = {
    string: or,
    method: ur,
    number: cr,
    boolean: fr,
    regexp: dr,
    integer: pr,
    float: hr,
    array: gr,
    object: mr,
    enum: yr,
    pattern: wr,
    date: br,
    url: ye,
    hex: ye,
    email: ye,
    required: xr,
    any: $r,
  }
function Fe() {
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
    pattern: {
      mismatch: '%s value %s does not match pattern %s',
    },
    clone: function () {
      var e = JSON.parse(JSON.stringify(this))
      return (e.clone = this.clone), e
    },
  }
}
var qe = Fe(),
  se = /* @__PURE__ */ (function () {
    function n(t) {
      ;(this.rules = null), (this._messages = qe), this.define(t)
    }
    var e = n.prototype
    return (
      (e.define = function (r) {
        var i = this
        if (!r) throw new Error('Cannot configure a schema with no rules')
        if (typeof r != 'object' || Array.isArray(r))
          throw new Error('Rules must be an object')
        ;(this.rules = {}),
          Object.keys(r).forEach(function (s) {
            var a = r[s]
            i.rules[s] = Array.isArray(a) ? a : [a]
          })
      }),
      (e.messages = function (r) {
        return r && (this._messages = je(Fe(), r)), this._messages
      }),
      (e.validate = function (r, i, s) {
        var a = this
        i === void 0 && (i = {}), s === void 0 && (s = function () {})
        var l = r,
          o = i,
          d = s
        if (
          (typeof o == 'function' && ((d = o), (o = {})),
          !this.rules || Object.keys(this.rules).length === 0)
        )
          return d && d(null, l), Promise.resolve(l)
        function v(g) {
          var q = [],
            p = {}
          function j(u) {
            if (Array.isArray(u)) {
              var $
              q = ($ = q).concat.apply($, u)
            } else q.push(u)
          }
          for (var y = 0; y < g.length; y++) j(g[y])
          q.length ? ((p = _e(q)), d(q, p)) : d(null, l)
        }
        if (o.messages) {
          var f = this.messages()
          f === qe && (f = Fe()), je(f, o.messages), (o.messages = f)
        } else o.messages = this.messages()
        var h = {},
          b = o.keys || Object.keys(this.rules)
        b.forEach(function (g) {
          var q = a.rules[g],
            p = l[g]
          q.forEach(function (j) {
            var y = j
            typeof y.transform == 'function' &&
              (l === r && (l = X({}, l)), (p = l[g] = y.transform(p))),
              typeof y == 'function'
                ? (y = {
                    validator: y,
                  })
                : (y = X({}, y)),
              (y.validator = a.getValidationMethod(y)),
              y.validator &&
                ((y.field = g),
                (y.fullField = y.fullField || g),
                (y.type = a.getType(y)),
                (h[g] = h[g] || []),
                h[g].push({
                  rule: y,
                  value: p,
                  source: l,
                  field: g,
                }))
          })
        })
        var E = {}
        return Gn(
          h,
          o,
          function (g, q) {
            var p = g.rule,
              j =
                (p.type === 'object' || p.type === 'array') &&
                (typeof p.fields == 'object' ||
                  typeof p.defaultField == 'object')
            ;(j = j && (p.required || (!p.required && g.value))),
              (p.field = g.field)
            function y(x, w) {
              return X({}, w, {
                fullField: p.fullField + '.' + x,
                fullFields: p.fullFields ? [].concat(p.fullFields, [x]) : [x],
              })
            }
            function u(x) {
              x === void 0 && (x = [])
              var w = Array.isArray(x) ? x : [x]
              !o.suppressWarning &&
                w.length &&
                n.warning('async-validator:', w),
                w.length && p.message !== void 0 && (w = [].concat(p.message))
              var B = w.map(Be(p, l))
              if (o.first && B.length) return (E[p.field] = 1), q(B)
              if (!j) q(B)
              else {
                if (p.required && !g.value)
                  return (
                    p.message !== void 0
                      ? (B = [].concat(p.message).map(Be(p, l)))
                      : o.error &&
                        (B = [o.error(p, M(o.messages.required, p.field))]),
                    q(B)
                  )
                var I = {}
                p.defaultField &&
                  Object.keys(g.value).map(function (R) {
                    I[R] = p.defaultField
                  }),
                  (I = X({}, I, g.rule.fields))
                var Y = {}
                Object.keys(I).forEach(function (R) {
                  var U = I[R],
                    Qe = Array.isArray(U) ? U : [U]
                  Y[R] = Qe.map(y.bind(null, R))
                })
                var ne = new n(Y)
                ne.messages(o.messages),
                  g.rule.options &&
                    ((g.rule.options.messages = o.messages),
                    (g.rule.options.error = o.error)),
                  ne.validate(g.value, g.rule.options || o, function (R) {
                    var U = []
                    B && B.length && U.push.apply(U, B),
                      R && R.length && U.push.apply(U, R),
                      q(U.length ? U : null)
                  })
              }
            }
            var $
            if (p.asyncValidator)
              $ = p.asyncValidator(p, g.value, u, g.source, o)
            else if (p.validator) {
              try {
                $ = p.validator(p, g.value, u, g.source, o)
              } catch (x) {
                console.error == null || console.error(x),
                  o.suppressValidatorError ||
                    setTimeout(function () {
                      throw x
                    }, 0),
                  u(x.message)
              }
              $ === !0
                ? u()
                : $ === !1
                ? u(
                    typeof p.message == 'function'
                      ? p.message(p.fullField || p.field)
                      : p.message || (p.fullField || p.field) + ' fails'
                  )
                : $ instanceof Array
                ? u($)
                : $ instanceof Error && u($.message)
            }
            $ &&
              $.then &&
              $.then(
                function () {
                  return u()
                },
                function (x) {
                  return u(x)
                }
              )
          },
          function (g) {
            v(g)
          },
          l
        )
      }),
      (e.getType = function (r) {
        if (
          (r.type === void 0 &&
            r.pattern instanceof RegExp &&
            (r.type = 'pattern'),
          typeof r.validator != 'function' &&
            r.type &&
            !ie.hasOwnProperty(r.type))
        )
          throw new Error(M('Unknown rule type %s', r.type))
        return r.type || 'string'
      }),
      (e.getValidationMethod = function (r) {
        if (typeof r.validator == 'function') return r.validator
        var i = Object.keys(r),
          s = i.indexOf('message')
        return (
          s !== -1 && i.splice(s, 1),
          i.length === 1 && i[0] === 'required'
            ? ie.required
            : ie[this.getType(r)] || void 0
        )
      }),
      n
    )
  })()
se.register = function (e, t) {
  if (typeof t != 'function')
    throw new Error(
      'Cannot register a validator by type, validator is not a function'
    )
  ie[e] = t
}
se.warning = Je
se.messages = qe
se.validators = ie
const Cr = /* @__PURE__ */ V({
    __name: 'form-item',
    props: {
      label: { default: '' },
      prop: { default: '' },
      labelWidth: { default: '' },
      required: { type: Boolean, default: !1 },
      labelAlign: { default: 'left' },
      contentAlign: { default: 'left' },
    },
    setup(n) {
      const e = n,
        t = ge('form-item'),
        r = O(''),
        i = O(0),
        s = O(0),
        a = O(),
        l = O(),
        o = Z('labelWidth'),
        d = Z('inline'),
        v = k(() =>
          o != null && o.value
            ? `${o == null ? void 0 : o.value}px`
            : `${e.labelWidth}px`
        ),
        f = (w) => {
          s.value = w
        },
        h = (w) => {
          i.value = w
        },
        b = Z('model'),
        E = Z('rules')
      J('setValidateBlurFlag', f), J('setValidateChangeFlag', h)
      const g = Z('addFiled'),
        q = k(() =>
          a.value && a.value.length ? a.value.find((w) => w.required) : !1
        ),
        p = k(() =>
          e.labelAlign === 'left'
            ? 'flex-start'
            : e.labelAlign === 'center'
            ? 'center'
            : 'flex-end'
        ),
        j = k(() =>
          e.contentAlign === 'left'
            ? 'flex-start'
            : e.contentAlign === 'center'
            ? 'center'
            : 'flex-end'
        ),
        y = () => {
          const w = b.value[e.prop],
            B = E.value[e.prop],
            I = {
              [e.prop]: B,
            },
            Y = new se(I)
          if (e.prop)
            return new Promise((ne) => {
              Y.validate({ [e.prop]: w }, { firstFields: !0 }, (R) => {
                R && R.length
                  ? ((r.value = R[0].message), ne(!1))
                  : ((r.value = ''), ne(!0))
              })
            })
        },
        u = () => {
          ;((b == null ? void 0 : b.value)[e.prop] = l.value), (r.value = '')
        },
        $ = () => {
          r.value = ''
        },
        x = () => {
          ;(a.value = (E == null ? void 0 : E.value)[e.prop]),
            a.value &&
              a.value.length &&
              a.value.forEach((w) => {
                Array.isArray(w.trigger)
                  ? (w.trigger.includes('change') && i.value > 0 && y(),
                    w.trigger.includes('blur') && s.value > 0 && y())
                  : (w.trigger === 'blur' && s.value > 0 && y(),
                    w.trigger === 'change' && i.value > 0 && y())
              })
        }
      return (
        K(
          () => s.value,
          () => {
            x()
          }
        ),
        K(
          () => i.value,
          () => {
            x()
          }
        ),
        st(() => {
          x(),
            e.prop &&
              g({
                validate: y,
                resetField: u,
                clearValidate: $,
                name: e.prop,
              }),
            e.prop && (l.value = b == null ? void 0 : b.value[e.prop])
        }),
        (w, B) => (
          m(),
          _(
            'div',
            {
              class: A([c(t).b()]),
              style: D({
                display: c(d) ? 'inline-flex' : 'flex',
                marginRight: c(d) ? '32px' : '0',
              }),
            },
            [
              n.label
                ? (m(),
                  _(
                    'div',
                    {
                      key: 0,
                      style: D({ width: c(v), justifyContent: c(p) }),
                      class: A([c(t).e('label')]),
                    },
                    [
                      F(
                        'div',
                        {
                          class: A({
                            'cc-form-item-label-required': n.required || c(q),
                          }),
                        },
                        te(n.label),
                        3
                      ),
                    ],
                    6
                  ))
                : T('', !0),
              F(
                'div',
                {
                  class: A([c(t).e('content')]),
                  style: D({
                    marginLeft: n.label ? 0 : c(v),
                    justifyContent: c(j),
                  }),
                },
                [
                  W(w.$slots, 'default'),
                  F(
                    'div',
                    {
                      class: A([c(t).e('error')]),
                    },
                    te(r.value),
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
  _r = H(Un, 'cc-form'),
  Fr = H(Cr, 'cc-form-item'),
  qr = {
    Form: _r,
    FormItem: Fr,
  },
  { Tabs: Ar, TabPane: Er } = Wn,
  { Form: Or, FormItem: kr } = qr,
  Tr = [ee, Bt, wn, Vn, Ar, Er, Or, kr],
  jr = {
    install(n) {
      Tr.forEach((e) => {
        n.use(e)
      })
    },
  }
export {
  Bt as Button,
  Or as Form,
  kr as FormItem,
  ee as Icon,
  L as Message,
  Er as TabPane,
  Ar as Tabs,
  jr as default,
}
