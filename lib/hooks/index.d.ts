declare type Callback = (e?: any) => void
declare function useCopy(
  val: string,
  onSuccess?: Callback,
  onError?: Callback
): {
  copy: () => Promise<void>
}

declare type UseNamespace = {
  b: () => string
  e: (el: string) => string
  m: (mo: string) => string
  em: (el: string, mo: string) => string
}
declare function useNamespace(block: string): UseNamespace

export { UseNamespace, useCopy, useNamespace }
