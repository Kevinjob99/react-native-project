import PlaceholderImage from '../../assets/placeholder-image.jpg';

const initialState = {
  places: [],
  selectedPlace: null
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
    
    case 'DELETE_PLACE':
      return {
        ...state,
        places: state.places.filter(place => {
          return place.key !== state.selectedPlace.key;
        }),
        selectedPlace: null
      }
      
    case 'SELECT_PLACE':
      return {
        ...state,
        selectedPlace: state.places.find(place => {
          return place.key === action.key;
        })
      }

    case 'DESELECT_PLACE':
      return {
        ...state,
        selectedPlace: null 
      }

    default:
      return state;

  }
}

export default reducer;