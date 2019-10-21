
import * as types from '../types'
import axios from 'axios'
export const handleLogin = (email,password) => ({
    type: types.LOGIN,
    payload: axios({
        method:'POST',
        url:'https://wthub.herokuapp.com/api/v1/login',
        data:{
            email:email,
            password:password
        }
    })
  });
export const handleRegister = (email,password) => ({
    type: types.REGISTER,
    payload: axios({
        method:'POST',
        url:'https://wthub.herokuapp.com/api/v1/register',
        data:{
            email:email,
            password:password
        }
    })
});
  