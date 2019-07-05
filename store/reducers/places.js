const initialState = {
  places: [],
  selectedPlace = null
}

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case 'ADD_PLACE':
      return {
        ...state,
        places: [
          ...state.places,
          { key: Math.random().toString(), 
            title: action.placeName,
            image: PlaceholderImage
          }
        ]
      }

    default:
      return state;
  }
}

export default reducer;