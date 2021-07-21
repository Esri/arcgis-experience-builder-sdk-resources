import { ImmutableObject } from "seamless-immutable";

export interface Config {
  showScale: boolean;
  showZoom: boolean;
}

export type IMConfig = ImmutableObject<Config>;
