import React from 'react'
import { Route } from 'react-router'
import App from '../containers/App'
import NotFound from '../components/NotFound'

export const routes = (
  <div>
    <Route path='/' component={App}>
      // Child components
    </Route>
    <Route path='*' component={NotFound}/>
  </div>
)
