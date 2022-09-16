import { createAction, props } from '@ngrx/store';

export const updateLocation = createAction(
    '[Locations] Update Location',
    props<{ location: any, locationNameToUpdate: string }>()
  );

export const addLocation = createAction(
    '[Locations] Add Location',
    props<{ location: any }>()
  );

export const setLocations = createAction(
    '[Locations] Set Locations',
    props<{ locations: any[] }>()
  )