import { createFeatureSelector } from '@ngrx/store';

export const getLocations = createFeatureSelector<ReadonlyArray<any[]>>('locations');