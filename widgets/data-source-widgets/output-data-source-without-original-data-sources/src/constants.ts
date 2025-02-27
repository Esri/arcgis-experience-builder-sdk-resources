import { type DataSourceSchema, EsriFieldType, Immutable, JimuFieldType } from 'jimu-core'
import type { IMConfig } from './config'

export const SCHEMA: DataSourceSchema = {
  label: 'number',
  idField: 'number',
  fields: {
    number: {
      jimuName: 'number',
      name: 'number',
      alias: 'number',
      type: JimuFieldType.Number,
      esriType: EsriFieldType.OID
    },
    title: {
      jimuName: 'title',
      name: 'title',
      alias: 'title',
      type: JimuFieldType.String,
      esriType: EsriFieldType.String
    },
    state: {
      jimuName: 'state',
      name: 'state',
      alias: 'state',
      type: JimuFieldType.String,
      esriType: EsriFieldType.String
    }
  }
}

export const DEFAULT_CONFIG: IMConfig = Immutable({
  defaultOwner: 'facebook',
  defaultRepo: 'react'
})
