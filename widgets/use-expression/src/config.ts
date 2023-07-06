import { type Expression, type ImmutableObject } from 'jimu-core'

export type IMConfig = ImmutableObject<Config>

export interface Config {
  expression?: Expression
}
