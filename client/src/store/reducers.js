import {combineReducers} from 'redux'
import {
  RECEIVE_USER
} from './action-types'

const initUser = {
  username: '',
  type: '',
}
function user(state = initUser, action) {
  switch (action.type) {
    case RECEIVE_USER:
      return action.data
    default:
      return state
  }
}

export default combineReducers({
  user,
})