import React from 'react'
import {Router, Route, IndexRoute} from 'react-router'
import Frame from 'modules/shared/layouts/frame'
import Intl from 'i18n/intl'

// const ExampleList = (location, callback) => {
//   require.ensure([], require => {
//     callback(null, require('modules/example/list'))
//   }, 'ExampleList')
// }
// const ExampleDetail = (location, callback) => {
//   require.ensure([], require => {
//     callback(null, require('modules/example/detail'))
//   }, 'ExampleDetail')
// }
// const ExampleArticleAdd = (location, callback) => {
//   require.ensure([], require => {
//     callback(null, require('modules/example/add'))
//   }, 'ExampleArticleAdd')
// }

const app = (location, callback) => {
  require.ensure([], require => {
    callback(null, require('modules/diaryWriting/components/app'))
  }, 'app')
}

const routes = history => (
  <Router history={history}>
    <Route component={Intl}>
      <Route path='/' component={Frame}>
        <IndexRoute getComponent={app} />
      </Route>
    </Route>
  </Router>
)

export default routes
