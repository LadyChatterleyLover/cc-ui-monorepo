import { defineBuildConfig } from 'unbuild'

export default defineBuildConfig({
  entries: ['./index'],
  declaration: true,
  rollup: {
    emitCJS: true,
  },
})
