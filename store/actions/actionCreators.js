// import { ADD_PLACE, DELETE_PLACE, SELECT_PLACE, DESELECT_PLACE } from './actionsTypes';
import { ADD_PLACE, DELETE_PLACE, UPDATE_MODE } from './actionsTypes';

export const addPlace = name => {
  return {
    type: ADD_PLACE,
    name: name
  }
}

export const deletePlace = key => {
  return {
    type: DELETE_PLACE,
    key
  }
}

export const updateMode = () => {
  return {
    type: UPDATE_MODE
  }
}

// export const selectPlace = key => {
//   return {
//     type: SELECT_PLACE,
//     key: key
//   }
// }

// export const deselectPlace = () => {
//   return {
//     type: DESELECT_PLACE
//   }
// }

