
import * as types from '../types'
import axios from 'axios'

export const handleLogin = (email,password) => ({
    type: types.LOGIN,
    payload: axios.post('https://wthub.herokuapp.com/api/v1/login',{
    data:{
        email:email,
        password:password
    }
    })
  });
  