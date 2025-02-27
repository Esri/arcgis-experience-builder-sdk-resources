import type { ImmutableObject } from 'jimu-core'

export interface Config {
  defaultRepo: string
  defaultOwner: string
}

export type IMConfig = ImmutableObject<Config>
