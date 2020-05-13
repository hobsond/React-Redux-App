import {createStore, applyMiddleware} from 'redux'
import logger from 'redux-logger'

export const initial = {

    breeds:[],
    fetching:true
}

export function reducer(state = initial,action){
    switch (action.type) {
        case 'GET_ALL_BREEDS':
            return console.log('hello')

            
    
        default:
            break;
    }
}
export const store = createStore(reducer,applyMiddleware(logger))