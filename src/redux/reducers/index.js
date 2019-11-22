//combine all reducer
import { combineReducers } from 'redux';
import { createNavigationReducer } from 'react-navigation-redux-helpers';

import RootNavigator from '../../navigators/RootNavigator'
import reducerWebtoons from '../reducers/reducerWebtoons';
import reducerRecent from '../reducers/reducerRecent';
import reducerPopulars from './reducerPopulars';
import reducerAccount from './reducerAccount';
import reducerRegister from './reducerRegister';
import reducerEpisodes from './reducerEpisodes';
import reducerDetailEpisodes from './reducerDetailEpisodes';
import reducerGetFavorites from './reducerGetFavorites';
import reducerUpdateUser from './reducerUpdateUser';
import reducerAddFavorite from './reducerAddFavorite';
import reducerDeleteFavorite from './reducerDeleteFavorite';


const reducerRouter = createNavigationReducer(RootNavigator);

const appReducer = combineReducers({
  login: reducerAccount,
  register: reducerRegister,
  router: reducerRouter,
  webtoons: reducerWebtoons,
  episodes: reducerEpisodes,
  detailEpisodes: reducerDetailEpisodes,
  recent: reducerRecent,
  populars: reducerPopulars,
  favorites: reducerGetFavorites,
  updateUser: reducerUpdateUser,
  addFavorite: reducerAddFavorite,
  deleteFavorite: reducerDeleteFavorite,

})

export default appReducer