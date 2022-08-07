function withInstall(c, name) {
  c.install = (app) => {
    app.component(name, c)
  }
  return c
}
const withInstallFunction = (fn, name) => {
  fn.install = (app) => {
    fn._context = app._context
    app.config.globalProperties[name] = fn
  }
  return fn
}

export { withInstall, withInstallFunction }
