import React from 'react'
import Item from './item'

export default class List extends React.Component {
  static propTypes = {
    taskList: React.PropTypes.arrayOf(React.PropTypes.object),
    toggleTsksList: React.PropTypes.func,
    getTasks: React.PropTypes.func,
    addTaskToDiary: React.PropTypes.func
  }

  componentDidMount() {
    this.props.getTasks()
  }

  handleClick = (e) => {
    e.preventDefault()
    this.props.toggleTsksList()
  }

  render() {
    const { taskList } = this.props
    return (
      <div style={{ height: '100%' }}>
        <div className='task-group'>
          <h3 className='task-title'>工作任务列表</h3>
          <ul>
            {taskList.map((item, index) => <Item key={index}
              addTaskToDiary={this.props.addTaskToDiary}
              data={item} />)}
          </ul>
        </div>
        <a href='javascript:;' className='btn-close-task' onClick={this.handleClick} />
      </div>
    )
  }
}
