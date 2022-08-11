declare type Callback = (e?: any) => void
export declare function useCopy(
  val: string,
  onSuccess?: Callback,
  onError?: Callback
): {
  copy: () => Promise<void>
}
export {}
