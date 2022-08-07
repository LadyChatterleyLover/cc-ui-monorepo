export interface Callback {
  (isValid?: boolean, invalidFields?: any): void
}
export declare type RuleType =
  | 'string'
  | 'number'
  | 'boolean'
  | 'method'
  | 'regexp'
  | 'integer'
  | 'float'
  | 'array'
  | 'object'
  | 'enum'
  | 'date'
  | 'url'
  | 'hex'
  | 'email'
  | 'any'
export interface ValidateOption {
  suppressWarning?: boolean
  first?: boolean
  firstFields?: boolean | string[]
}
export interface ValidateSource {
  [field: string]: any
}
export interface RuleItem {
  type?: RuleType
  required?: boolean
  pattern?: RegExp | string
  min?: number
  max?: number
  len?: number
  enum?: Array<string | number | boolean | null | undefined>
  whitespace?: boolean
  fields?: Rules
  options?: ValidateOption
  trigger?: 'change' | 'blur'
  defaultField?: RuleItem
  transform?: (value: any) => any
  message?: string | (() => string)
  asyncValidator?: (
    rule: Rules,
    value: any,
    callback: (error: string | string[] | void) => void,
    source: ValidateSource,
    options: ValidateOption
  ) => void | Promise<void>
  validator?: (
    rule: Rules,
    value: any,
    callback: (error: string | string[] | void) => void,
    source: ValidateSource,
    options: ValidateOption
  ) => void
}
export interface Rules {
  [field: string]: RuleItem | RuleItem[]
}
export interface ValidateFieldCallback {
  (message?: string, invalidFields?: any): void
}
export interface FormInstance {
  registerLabelWidth(width: number, oldWidth: number): void
  deregisterLabelWidth(width: number): void
  autoLabelWidth: string | undefined
  emit: (evt: string, ...args: any[]) => void
  labelSuffix: string
  inline?: boolean
  model?: Record<string, unknown>
  size?: string
  showMessage?: boolean
  labelPosition?: string
  labelWidth?: string
  rules?: Record<string, unknown>
  statusIcon?: boolean
  hideRequiredAsterisk?: boolean
  disabled?: boolean
  validate: (callback?: Callback) => Promise<boolean>
  resetFields: () => void
  clearValidate: (props?: string | string[]) => void
  validateField: (props: string | string[], cb: ValidateFieldCallback) => void
}
