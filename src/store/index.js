import { combineReducers, createStore } from 'redux'
import calcReducer from './calcReducer'

const rootReducer = combineReducers({
  homePage: calcReducer,
})

const store = createStore(rootReducer)

export default store