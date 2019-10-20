//combine all reducer
import { combineReducers } from 'redux';
import { createNavigationReducer } from 'react-navigation-redux-helpers';

import RootNavigator from '../../navigators/RootNavigator'
import reducerWebtoons from '../reducers/reducerWebtoons';
import reducerRecent from '../reducers/reducerRecent';
import reducerFavorites from './reducerFavorites';



const reducerRouter = createNavigationReducer(RootNavigator);

const appReducer = combineReducers({
  router: reducerRouter,
  webtoons: reducerWebtoons,
  recent: reducerRecent,
  favorites: reducerFavorites,
//   users: reducerUsers
})

export default appReducer