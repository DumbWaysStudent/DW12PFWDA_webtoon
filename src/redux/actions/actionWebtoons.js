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

export const handleGetEpisodes = () => ({
  type: types.GET_EPISODES,
  payload: axios.get('https://wthub.herokuapp.com/api/v1/episodes')
});

export const handleGetDetailEpisodes = (params) => ({
  type: types.GET_DETAIL_EPISODES,
  payload: axios.get(`https://wthub.herokuapp.com/api/v1/webtoon/${params.id_webtoon}/episode/${params.episode}`)
});
