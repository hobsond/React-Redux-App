import axios from 'axios'
export const GET_ALL_BREEDS = 'GET_ALL_BREEDS'
export const GET_ALL_BREEDS_SUCCESS = 'GET_ALL_BREEDS_SUCCESS'
export const GET_ALL_BREEDS_FAIL = 'GET_ALL_BREEDS_FAIL'



export const getBreeds =()=> dispatch =>{
    console.log('hello')
    dispatch({type:GET_ALL_BREEDS})
    axios.get('https://dog.ceo/api/breeds/list/all')
    .then(res=>{
        dispatch({type:GET_ALL_BREEDS_SUCCESS, payload:res.data})
    })
    .catch((err)=>{
        dispatch({type:GET_ALL_BREEDS_FAIL,payload:err})
    })
}