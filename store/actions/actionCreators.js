import { ADD_PLACE, DELETE_PLACE, SELECT_PLACE, DESELECT_PLACE } from './actionsTypes';

export const addPlace = name => {
  return {
    type: ADD_PLACE,
    name: name
  }
}

export const deletePlace = () => {
  return {
    type: DELETE_PLACE
  }
}

export const selectPlace = key => {
  return {
    type: SELECT_PLACE,
    key: key
  }
}

export const deselectPlace = () => {
  return {
    type: DESELECT_PLACE
  }
}

