import {
  PAGE_CONSTANT
} from '../constants/Page'

const initialState = {
  error: ''
}

export default function page(state = initialState, action) {

  switch (action.type) {
    case PAGE_CONSTANT:
      return { ...state, error: '' }

    default:
      return state;
  }

}
