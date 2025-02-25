import type { ImmutableObject, IMSqlExpression } from 'jimu-core'

export interface Config {
  sqlExpression?: IMSqlExpression
}

export type IMConfig = ImmutableObject<Config>
