import * as types from './../types'
import axios from 'axios'
import {url} from '../url'

export const handleGetWebtoons = () => ({
  type: types.GET_WEBTOONS,
  payload: axios.get(`${url}/webtoons`) 
});

export const handleGetRecent = () => ({
  type: types.GET_RECENT,
  payload: axios.get(`${url}/recent`)
});

export const handleGetPopulars = () => ({
  type: types.GET_POPULARS,
  payload: axios.get(`${url}/populars`)
});

export const handleGetEpisodes = () => ({
  type: types.GET_EPISODES,
  payload: axios.get(`${url}/episodes`)
});

export const handleGetDetailEpisodes = (params) => ({
  type: types.GET_DETAIL_EPISODES,
  payload: axios.get(`${url}/${params.id_webtoon}/episode/${params.episode}`)
});

export const handleGetFavorites = (params) => ({
  type: types.GET_FAVORITES,
  payload: axios.get(`${url}/webtoons?id_user=${params.id}`)
});
