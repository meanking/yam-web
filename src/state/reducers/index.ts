import { combineReducers } from 'redux'
import globalReducer from './global'

const reducers = combineReducers({
  global: globalReducer,
})

export default reducers

export type RootState = ReturnType<typeof reducers>
