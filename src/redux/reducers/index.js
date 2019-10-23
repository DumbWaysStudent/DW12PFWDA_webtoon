//combine all reducer
import { combineReducers } from 'redux';
import { createNavigationReducer } from 'react-navigation-redux-helpers';

import RootNavigator from '../../navigators/RootNavigator'
import reducerWebtoons from '../reducers/reducerWebtoons';
import reducerRecent from '../reducers/reducerRecent';
import reducerPopulars from './reducerPopulars';
import reducerLogin from './reducerLogin';
import reducerRegister from './reducerRegister';
import reducerEpisodes from './reducerEpisodes';
import reducerDetailEpisodes from './reducerDetailEpisodes';
import reducerFavorites from './reducerFavorites';
import reducerUpdateUser from './reducerUpdateUser';


const reducerRouter = createNavigationReducer(RootNavigator);

const appReducer = combineReducers({
  login: reducerLogin,
  register: reducerRegister,
  router: reducerRouter,
  webtoons: reducerWebtoons,
  episodes: reducerEpisodes,
  detailEpisodes: reducerDetailEpisodes,
  recent: reducerRecent,
  populars: reducerPopulars,
  favorites: reducerFavorites,
  updateUser: reducerUpdateUser,

})

export default appReducer