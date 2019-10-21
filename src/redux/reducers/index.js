//combine all reducer
import { combineReducers } from 'redux';
import { createNavigationReducer } from 'react-navigation-redux-helpers';

import RootNavigator from '../../navigators/RootNavigator'
import reducerWebtoons from '../reducers/reducerWebtoons';
import reducerRecent from '../reducers/reducerRecent';
import reducerFavorites from './reducerFavorites';
import reducerLogin from './reducerLogin';
import reducerRegister from './reducerRegister';



const reducerRouter = createNavigationReducer(RootNavigator);

const appReducer = combineReducers({
  login: reducerLogin,
  register: reducerRegister,
  router: reducerRouter,
  webtoons: reducerWebtoons,
  recent: reducerRecent,
  favorites: reducerFavorites,

})

export default appReducer