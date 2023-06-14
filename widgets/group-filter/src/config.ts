/**
  Licensing

  Copyright 2022 Esri

  Licensed under the Apache License, Version 2.0 (the "License"); You
  may not use this file except in compliance with the License. You may
  obtain a copy of the License at
  http://www.apache.org/licenses/LICENSE-2.0

  Unless required by applicable law or agreed to in writing, software
  distributed under the License is distributed on an "AS IS" BASIS,
  WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or
  implied. See the License for the specific language governing
  permissions and limitations under the License.

  A copy of the license is available in the repository's
  LICENSE file.
*/

import { ImmutableObject } from "seamless-immutable";

export interface Config {
  fields: [ConfigObject];
  zoomEnabled: boolean;
  widgetTitle: string;
  fieldsConfig: ImmutableObject<{ [dataSourceId: string]: string[] }>;
}

export interface ObjectType {
  label: string;
  value: string;
}

export interface ConfigObject {
  jimuName: string;
  name: string;
  type: string;
  esriType: string;
  alias: string;
  format: any;
}

export type IMConfig = ImmutableObject<Config>;
