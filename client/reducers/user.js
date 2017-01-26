import {
  USER_CONSTANT
} from '../constants/User'

const initialState = {
  error: ''
}

export default function user(state = initialState, action) {

  switch(action.type) {
    case USER_CONSTANT:
      return {...state, error: '' }

    default:
      return state
  }

}
