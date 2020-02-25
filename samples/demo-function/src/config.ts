import {ImmutableObject} from 'jimu-core';

export interface Config{
  p1: string;
  p2: string;
}

export type IMConfig = ImmutableObject<Config>;