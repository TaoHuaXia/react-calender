import React from 'react'
import Header from './header/header'
import DiaryCont from '../containers/diaryCont'

export default class App extends React.Component {
  render() {
    return (
      <div className='layout-mod mod-diary'>
        <div className='layout-body'>
          <div className='layout-wrapper'>
            <div className='layout-header'>
              <Header />
            </div>
            <div className='layout-side' />
            <div className='layout-main'>
              <DiaryCont />
            </div>
          </div>
        </div>
      </div>
    )
  }
}
