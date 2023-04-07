import { type ImmutableObject } from 'seamless-immutable'

export interface Config {
  layerUrls: string[]
}

export type IMConfig = ImmutableObject<Config>
