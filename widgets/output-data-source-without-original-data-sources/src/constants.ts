import { type DataSourceSchema, EsriFieldType, JimuFieldType } from 'jimu-core'

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
