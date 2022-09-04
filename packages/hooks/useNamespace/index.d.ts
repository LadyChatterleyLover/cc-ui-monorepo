export declare type UseNamespace = {
  b: () => string
  e: (el: string) => string
  m: (mo: string) => string
  em: (el: string, mo: string) => string
}
export declare function useNamespace(block: string): UseNamespace
