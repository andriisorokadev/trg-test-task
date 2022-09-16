import { createReducer, on } from '@ngrx/store';
import { updateLocation, addLocation, setLocations } from './app.actions';

export const initialState: any[] = [];

export const appReducer = createReducer(
  initialState,
  on(updateLocation,  (state, { location, locationNameToUpdate }) => {
    const newState = [...state];
    let itemIndex = state.findIndex((item: any) => item.name === locationNameToUpdate);
    newState[itemIndex] = location;
    return newState
  }),
  on(addLocation, (state, { location }) => {
    return [
      ...state,
      location
    ]
  }),
  on(setLocations, (state, { locations}) => {
    return locations;
  })
);