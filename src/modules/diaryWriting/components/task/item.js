import React from 'react'

export default class Item extends React.Component {
  static propTypes = {
    data: React.PropTypes.object,
    addTaskToDiary: React.PropTypes.func
  }

  handleClick = (e) => {
    this.props.addTaskToDiary(this.props.data)
  }

  render() {
    const data = this.props.data
    const color = this.props.data.isAdded ? '#aaa' : '#30b9e2'
    return (
      <li className='task-cell'>
        <div className='task-hd'>
          <div className='task-avatar'>
            <img src='' alt='' />
          </div>
          <h4 className='task-name'>任务-TQD71239【101教育PPT】101教育PPT-增加换肤功</h4>
        </div>
        <div className='task-row'><b className='task-lab'>项目归属：</b>{data.sXMFName}</div>
        <div className='task-row'><b className='task-lab'>完成度：</b>0%</div>
        <div className='task-row'><b className='task-lab'>完成时间：</b>2017-06-08 20:30:00</div>
        <div className='task-ft'>
          <a href='javascript:;'
            className='ui-btn btn-add'
            style={{ background: color }}
            onClick={this.handleClick}
            >添加到日志</a>
        </div>
      </li>)
  }
}
