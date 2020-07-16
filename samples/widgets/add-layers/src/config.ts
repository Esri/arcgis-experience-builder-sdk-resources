import { ImmutableObject } from "seamless-immutable";

export interface Config {
  zoomToLayer: boolean;
}

export type IMConfig = ImmutableObject<Config>;
