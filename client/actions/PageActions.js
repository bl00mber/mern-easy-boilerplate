import {
  PAGE_CONSTANT
} from '../constants/Page'

import api from '../api'

const PageActions = {
  pageMethod() {
    return (dispatch) => {
      api.requestMethod()
        .then(() => {
            dispatch({
              type: PAGE_CONSTANT
            })
          }
        )
    }
  }
}

export default PageActions
