import React from 'react'
import ShowTQDItem from './showTQDItem'
import ShowNotTQDItem from './showNotTQDItem'
import EditableTQDItem from './editableTQDItem'
import EditableNotTQDItem from './editableNotTQDItem'
import EditableTaskTQDItem from './editableTaskTQDItem'
import EditableTaskNotTQDItem from './editableTaskNotTQDItem'

export default class Diary extends React.Component {
  static propTypes = {
    isEditable: React.PropTypes.bool.isRequired,
    diaryList: React.PropTypes.array.isRequired
  }
  render() {
    let data = this.props.diaryList
    let isEditable = this.props.isEditable
    return (
      <div className='mydiary-group'>
        <div className='mydiary-hd'>
          <h3 className='mydiary-title'>我的日志</h3>
          <a href='javascript:;' className='ui-btn'>修改</a>
          <div className='fr'>累计时长：<span className='highlight'>24H</span></div>
        </div>
        <div className='mydiary-bd'>
          {(data && data.length > 0) ? (<ul className='mydiary-list'>{
data.map(item => {
  let ele
  if (isEditable) {
    if (item.isTask) {
      if (item.STQDCode) {
        ele = <EditableTaskTQDItem item={item} />
      } else {
        ele = <EditableTaskNotTQDItem item={item} />
      }
    } else {
      if (item.STQDCode) {
        ele = <EditableTQDItem item={item} />
      } else {
        ele = <EditableNotTQDItem item={item} />
      }
    }
  } else {
    if (item.STQDCode) {
      ele = <ShowTQDItem item={item} />
    } else {
      ele = <ShowNotTQDItem item={item} />
    }
  }
  return ele
})}
          </ul>) : (<div className='mydiary-nothing'>
            <p className='desc1'>当前没有工作项~</p>
            <p className='desc2'>您可以添加工作项或选择单据中的任务添加到日志</p>
          </div>)}
          <div className='mydiary-btn-item'>
            <a href='javascript:;' className='ui-btn btn-add'>新增TQD工作</a>
            <a href='javascript:;' className='ui-btn btn-add' data-bg='bg-green'>新增非TQD工作</a>
          </div>
        </div>
        <div className='mydiary-ft'>
          <a href='javascript:;' className='ui-btn' data-size='size-l' data-bg='bg-orange'>OK,完成日志</a>
        </div>
      </div>
    )
  }
}
