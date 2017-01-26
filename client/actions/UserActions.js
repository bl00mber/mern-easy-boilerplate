import {
  USER_CONSTANT
} from '../constants/User'

import api from '../api'

const UserActions = {
  userMethod() {
    return (dispatch) => {
      api.requestMethod()
        .then(() => {
            dispatch({
              type: USER_CONSTANT
            })
          }
        )
    }
  }
}

export default UserActions
