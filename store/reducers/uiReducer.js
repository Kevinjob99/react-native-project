import { START_LOADING, STOP_LOADING } from './actionsTypes';

const initialState = {
  isLoading: false
}

const uiReducer = (state = initialState, action) => {
  switch (action.type) {
    case START_LOADING:
      return {
        ...state,
        isLoading: true
      }

    case STOP_LOADING:
      return {
        ...state,
        isLoading: false
      }
  
    default:
      return state;
  }
}

export default uiReducer;