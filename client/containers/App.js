import React, { Component } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import UserActions from '../actions/UserActions'
import PageActions from '../actions/PageActions'

import '../styles/App.styl'

class App extends Component {
  render() {
    return (
      <div>
        <p>Hello!</p>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    user: state.user,
    page: state.page
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    userActions: bindActionCreators(UserActions, dispatch),
    pageActions: bindActionCreators(PageActions, dispatch)
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App)
