import * as types from '../types'

const initialState = {
  login: [],
  isLogin:false
};

export default function reducerLogin(state = initialState, action) {
  switch (action.type) {
    case `${types.LOGIN}_PENDING`:
        return {
          ...state,
        };
  
      case `${types.LOGIN}_FULFILLED`:
        
        console.log(action.payload)
        return {
          ...state,
          login: action.payload.data
        }
  
      case `${types.LOGIN}_REJECTED`:

        return {
          ...state,
        }
    default:
      return state;
  }
}