import { ImmutableObject } from "seamless-immutable";

export interface Config {
  layerUrls: Array<string>;
}

export type IMConfig = ImmutableObject<Config>;
