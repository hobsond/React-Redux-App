import {createStore, applyMiddleware} from 'redux'
import thunk from 'redux-thunk'
import logger from 'redux-logger'
import {GET_ALL_BREEDS,GET_ALL_BREEDS_SUCCESS,GET_ALL_BREEDS_FAIL}from '../actions/getAllBreeds'

export const initial = {

    breeds:[],
    fetching:false
}

export function reducer(state = initial,action){
    switch (action.type) {
        case GET_ALL_BREEDS:
            return {...state,fetching:true}
        
        case GET_ALL_BREEDS_SUCCESS:
            return {...state,
                breeds:[...state.breeds,action.payload],
                fetching:false
            }
            
    
        default:
            return state
    }
}
export const store = createStore(reducer,applyMiddleware(thunk))