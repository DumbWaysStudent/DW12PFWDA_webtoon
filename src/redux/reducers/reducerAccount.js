import * as types from '../types'

const initialState = {
  login: []
};

export default function reducerLogin(state = initialState, action) {
  switch (action.type) {
    case `${types.LOGIN}_PENDING`:
        return {
          ...state,
        };
  
      case `${types.LOGIN}_FULFILLED`:
        
        return {
          ...state,
          login: action.payload.data
        }
  
      case `${types.LOGIN}_REJECTED`:
        return {
          ...state,
        }

        case `${types.REGISTER}_PENDING`:
        return {
          ...state,
        };
  
      case `${types.REGISTER}_FULFILLED`:
        return {
          ...state,
          login: action.payload.data
        }

      case `${types.REGISTER}_REJECTED`:
        return {
          ...state,
        }
    case `${types.STORE_DATA}`:
        return {
            ...state,
            login: action.payload
        };
    default:
      return state;
  }
}