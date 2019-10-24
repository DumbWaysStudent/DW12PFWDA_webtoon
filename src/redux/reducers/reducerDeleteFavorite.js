import * as types from './../types'

const initialState = {
  deleteFavorite:[]
};

export default function reducerDeleteFavorite(state = initialState, action) {
  switch (action.type) {
    case `${types.DELETE_FAVORITE}_PENDING`:
        return {
          ...state,
        };
  
      case `${types.DELETE_FAVORITE}_FULFILLED`:
        return {
          ...state,
          deleteFavorite: action.payload.data
        };
  
      case `${types.DELETE_FAVORITE}_REJECTED`:
        return {
          ...state,
        }
    default:
      return state;
  }
}