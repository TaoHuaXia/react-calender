import React from 'react'

class Frame extends React.Component {
  static propTypes = {
    children: React.PropTypes.element
  }
  render() {
    return (
      <div style={{ height: '100%' }}>
        {this.props.children}
      </div>
    )
  }
}

export default Frame
