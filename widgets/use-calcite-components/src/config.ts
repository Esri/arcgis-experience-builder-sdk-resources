import type { ImmutableObject } from 'seamless-immutable'

export interface Config {
  text?: string
}

export type IMConfig = ImmutableObject<Config>
