// import { ADD_PLACE, DELETE_PLACE, SELECT_PLACE, DESELECT_PLACE } from './actionsTypes';
import { SET_PLACES, DELETE_PLACE, UPDATE_MODE, TRY_AUTH } from "./actionsTypes";
import { startLoading, stopLoading } from './uiActions';

export const addPlace = (name, location, image) => {
  return dispatch => {
    dispatch(startLoading());
    fetch(
      "https://us-central1-awesome-places-7495b.cloudfunctions.net/storeImage",
      {
        method: "POST",
        body: JSON.stringify({
          image: image.base64
        })
      }
    )
      .catch(err => {
        console.log(err)
        alert('Something went wrong. Please try again :(');
        dispatch(stopLoading());
      })
      .then(res => res.json())
      .then(parsedRes => {
        const placeData = {
          name: name,
          location: location,
          image: parsedRes.imageUrl
        };

        return fetch(
          "https://awesome-places-7495b.firebaseio.com/places.json",
          {
            method: "POST",
            body: JSON.stringify(placeData)
          }
        )
        .catch(err => {
          console.log(err)
          alert('Something went wrong. Please try again :(');
          dispatch(stopLoading());
        })
        .then(res => res.json())
        .then(parsedRes => {
          console.log(parsedRes);
          dispatch(stopLoading());
        })
      })

  };
  // return {
  //   type: ADD_PLACE,
  //   name: name,
  //   location: location,
  //   image: image
  // };
};

export const getPlaces = () => {
  return dispatch => {
    fetch('https://awesome-places-7495b.firebaseio.com/places.json')
    .catch(err => console.log(err))
    .then(res => res.json())
    .then(parsedRes => {
      const places = [];
      for (let key in parsedRes) {
        places.push({
          ...parsedRes[key],
          image: {
            uri: parsedRes[key].image
          },
          key: key
        })
        }
      dispatch(setPlaces(places));
    })
  }
}

export const setPlaces = places => {
  return {
    type: SET_PLACES,
    places: places
  }
}

export const deletePlace = key => {
  return {
    type: DELETE_PLACE,
    key
  };
};

export const updateMode = () => {
  return {
    type: UPDATE_MODE
  };
};

export const tryAuth = authData => {
  return {
    type: TRY_AUTH,
    authData: authData
  };
};

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
