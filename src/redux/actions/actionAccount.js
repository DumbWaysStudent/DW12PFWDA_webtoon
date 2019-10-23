
import * as types from '../types'
import axios from 'axios'
export const handleLogin = (email,password) => ({
    type: types.LOGIN,
    payload: axios({
        method:'POST',
        url:'https://wthub.herokuapp.com/api/v1/login',
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
        url:'https://wthub.herokuapp.com/api/v1/register',
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
        url:`https://wthub.herokuapp.com/api/v1/user/${params.id}`,
        data:{
            name : params.newProfileName,
            image : params.newProfilePic
        },
        headers:{
            Authorization:params.token
        }
    })
});


  