import axios from 'axios';
import {returnErrors} from './erroractions';



import {
    USER_LOADED,
    USER_LOADING,
    AUTH_ERROR,
    LOGIN_SUCCESS,
    LOGIN_FAIL,
    LOGOUT_SUCCESS,
    REGISTER_SUCCESS,
    REGISTER_FAIL
} from '../actions/types';



    
    



    // Register user
    export const register=({username,email,password,user_type})=>dispatch=>{
        //header
        const config={
            headers:{
                'content-type':'application/json'
            }
        }

        // request body
        const body=JSON.stringify({username,email,password,user_type})

        axios.post('https://kriida-final.herokuapp.com/auth/local/register',body,config)
        .then(res=> dispatch({
            type:REGISTER_SUCCESS,
            payload:res.data
        }))
        .catch(err=>{
            dispatch(returnErrors(err.response.data, err.response.status, 'REGISTER_FAIL'));
            dispatch({
                type:REGISTER_FAIL
            });
        });
    }

    // Logout User 
   export const logout=()=>{
        return{
            type:LOGOUT_SUCCESS
        }
    }

    // Check token & load user 

    export const loadUser=()=>(dispatch,getState)=>{
    //user loading
    dispatch({type:USER_LOADING});

    // get toke from localstorage
    const token = getState().auth.jwt

    // //Header
    // const config = {
    //     headers:{
    //         "Content-type":"application/json"
    //     }
    // }

    //if token, add to headers 
    if(token){
        dispatch({type:USER_LOADED});
    }

    // axios.get('https://kriida-final.herokuapp.com/users/me',config)
    //     .then(res=>dispatch({
    //         type:USER_LOADED,
    //         payload:res.data
    //     }))
    //     .catch(err=>{
    //         dispatch({
    //             type:AUTH_ERROR
    //         })
    //     })
    }
