import { ImmutableObject } from 'seamless-immutable'

export interface Config {
  filterField: string
}

export type IMConfig = ImmutableObject<Config>
