import type { Expression, ImmutableObject } from 'jimu-core'

export type IMConfig = ImmutableObject<Config>

export interface Config {
  expression?: Expression
}
