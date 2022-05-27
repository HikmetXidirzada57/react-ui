import axios from "axios"
import { BASE_URL } from "../../api/ApiConfig"
import { USER_LOGIN_FAIL, USER_LOGIN_REQUEST, USER_LOGIN_SUCCES, USER_REGISTER_FAIL, USER_REGISTER_REQUSET, USER_REGISTER_SUCCES } from "../Constants/UserConstants"

 export const loginAction=(email,password)=>async(dispatch,getState)=>{

   try{
       dispatch({type:USER_LOGIN_REQUEST})
       const config={
           headers:{
               "Content-Type":"application/json"
           },
       };
    const {data}=await axios.post(`${BASE_URL}/api/Account/login`
    ,{email,password},config)

    dispatch({
        type:USER_LOGIN_SUCCES,
        payload:data})

    localStorage.setItem("userInfo",JSON.stringify(data))

   }catch(error){
      dispatch({type:USER_LOGIN_FAIL,payload:error})
   }
}

 export const registerAction=(email,firstName,lastName,password,confirmPassword)=>async(dispatch,getState)=>{
    try{
        dispatch({type:USER_REGISTER_REQUSET})
        const config={
            headers:{
                "Content-Type":"application/json"
            },
        };
     const {data}= await axios.post(`${BASE_URL}/api/Account/register`
     ,{email,password,confirmPassword,firstName,lastName},config)
     dispatch({
        type:USER_REGISTER_SUCCES,
        payload:data})
 
     localStorage.setItem("userInfo",JSON.stringify(data))
    
 
    }catch(error){
     dispatch({
        type:USER_REGISTER_FAIL,
        payload:error}) 
    }
 }

 const logoutAction=(email,password)=>(dispatch,getState)=>{


 }