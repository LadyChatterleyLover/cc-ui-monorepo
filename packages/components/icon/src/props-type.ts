import type { ExtractPropTypes, PropType } from 'vue'

export const iconProps = {
  color: String,
  size: [String, Number] as PropType<string | number>
}

export type IconProps = ExtractPropTypes<typeof iconProps>
