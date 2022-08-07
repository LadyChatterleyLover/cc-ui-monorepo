'use strict'

Object.defineProperty(exports, '__esModule', { value: true })

function useCopy(val, onSuccess, onError) {
  const copy = async () => {
    try {
      await window.navigator.clipboard.writeText(val)
    } catch (e) {
      onError && onError(e)
    }
    onSuccess && onSuccess()
  }
  return {
    copy,
  }
}

function createBem(namespace, element, modifier) {
  let cls = namespace
  if (element) {
    cls += `__${element}`
  }
  if (modifier) {
    cls += `--${modifier}`
  }
  return cls
}
function useNamespace(block) {
  const namespace = `cc-${block}`
  const b = () => createBem(namespace)
  const e = (element) => (element ? createBem(namespace, element) : '')
  const m = (modifier) => (modifier ? createBem(namespace, '', modifier) : '')
  const em = (element, modifier) =>
    element && modifier ? createBem(namespace, element, modifier) : ''
  return {
    b,
    e,
    m,
    em,
  }
}

exports.useCopy = useCopy
exports.useNamespace = useNamespace
