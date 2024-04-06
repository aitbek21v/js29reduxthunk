import {createStore,combineReducers,applyMiddleware} from 'redux'
import {thunk} from 'redux-thunk'
import { MainReducer } from './Reducer/MainReducer'
import { BasketReducer } from './Reducer/BasketReducer'
import { composeWithDevTools } from '@redux-devtools/extension'


const rootReducer = combineReducers({
    main:MainReducer,
    basket:BasketReducer
})

export const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(thunk)))