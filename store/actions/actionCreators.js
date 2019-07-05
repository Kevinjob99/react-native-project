export const addPlace = (placeName) => ({
  type: 'ADD_PLACE',
  placeName
})

export const deletePlace = () => ({
  type: 'DELETE_PLACE'
})

export const selectPlace = (key) => ({
  type: 'SELECT_PLACE',
  key
})

export const deselectPlace = () => ({
  type: 'DESELECT_PLACE'
})

