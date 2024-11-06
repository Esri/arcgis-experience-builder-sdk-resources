import { type ImmutableObject } from 'jimu-core'

export enum StatFunctions {
  avg = 'avg',
  sum = 'sum',
  min = 'min',
  max = 'max'
}

export interface Config {
  statFunctions?: StatFunctions[]
  numberField?: string
}

export type IMConfig = ImmutableObject<Config>
