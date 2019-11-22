
import * as types from '../types'
import axios from 'axios'
import {url} from '../url'
export const handleLogin = (email,password) => ({
    type: types.LOGIN,
    payload: axios({
        method:'POST',
        url:`${url}/login`,
        data:{
            email,
            password
        }
    })
  });

export const handleRegister = (email,password) => ({
    type: types.REGISTER,
    payload: axios({
        method:'POST',
        url:`${url}/register`,
        data:{
            email,
            password
        }
    })
});

export const handleUpdateUser = (params) => ({
    type: types.UPDATE_USER,
    payload: axios({
        method:'PUT',
        url:`${url}/user/${params.id}`,
        data:{
            name : params.newProfileName,
            image : params.newProfilePic
        },
        headers:{
            Authorization:params.token
        }
    })
});

export const handleAddFavorite = (params) => ({
    type: types.ADD_FAVORITE,
    payload: axios({
        method:'POST',
        url:`${url}/user/${params.userId}/favorites`,
        data:{
            id_webtoon:params.webtoonId,
            id_user:params.userId
        },
        headers:{
            Authorization:params.token
        }
    })
});
  
export const handleDeleteFavorite = (params) => ({
    type: types.DELETE_FAVORITE,
    payload: axios({
        method:'DELETE',
        url:`${url}/user/${params.userId}/favorite?id_webtoon=${params.webtoonId}`,
        headers:{
            Authorization:params.token
        }
    })
});

export const handleStoreData = (data) => ({
    type: types.STORE_DATA,
    payload: data
  })