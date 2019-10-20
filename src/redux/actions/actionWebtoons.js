import * as types from './../types'
import axios from 'axios'


export const handleGetWebtoons = () => ({
  type: types.GET_WEBTOONS,
  payload: axios.get('https://wthub.herokuapp.com/api/v1/webtoons')
});

export const handleGetRecent = () => ({
  type: types.GET_RECENT,
  payload: axios.get('https://wthub.herokuapp.com/api/v1/recent')
});

export const handleGetFavorites = () => ({
  type: types.GET_FAVORITES,
  payload: axios.get('https://wthub.herokuapp.com/api/v1/favorites')
});

export const handleDeleteTodos = (params) => ({
  type: types.DELETE_WEBTOON,
  payload: params
});