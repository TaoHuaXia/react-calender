import React from 'react'

export default class EditableTaskTQDItem extends React.Component {
  static propTypes = {
    item: React.PropTypes.object.isRequired
  }
  render() {
    return (<li className='mydiary-cell'>
      <span className='isTQD'>TQD</span>
      <a href='javascript:;' className='btn-delete' />
      <div className='mydiary-task-info'>
        <div className='mydiary-row'>
          <b className='mydiary-lab'>案子名称：</b>
          <span className='mydiary-task-text'>日志优化策划版</span>
          <b>本案累计投入时长： </b>
          <b className='highlight'>15H</b>
        </div>
        <div className='mydiary-row'>
          <b className='mydiary-lab'>项目归属：</b>
          <span className='mydiary-task-text'>简体征服-游戏制作</span>
          <label className='ui-checkbox checked'>TQD工作</label>
        </div>
      </div>
      <div className='mydiary-row'>
        <b className='mydiary-lab'>进&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;度：</b>
        <div className='mydiary-progress'>
          <div className='level' style='width: 30%;' />
          <span className='btn-circle' style='left: 30%;' />
        </div>
        <span className='mydiary-progress-num'>
          <input type='text' value='30' className='mydiary-ipt' />%
                    </span>
      </div>
      <div className='mydiary-row'>
        <b className='mydiary-lab'>案子编号：</b>
        <span className='TQD-num'>TQD <input className='mydiary-ipt' type='text' /></span>
        <div className='total-time'>
          <b>本案累计投入时长：<span className='highlight'>15H</span></b>
          <a href='javascript:;' className='mydiary-link'>查看明细</a>
        </div>
      </div>
      <div className='mydiary-row'>
        <b className='mydiary-lab'>案子名称：</b>
        <input type='text' className='mydiary-ipt mydiary-name' />
      </div>
      <div className='mydiary-row'>
        <b className='mydiary-lab'>工作内容：</b>
        <a href='javascript:;' className='btn-article'>设计方法论<span className='time'>5H</span></a>
        <a href='javascript:;' className='btn-article'>设计<span className='time'>5H</span></a>
        <a href='javascript:;' className='btn-article'>设计方法论<span className='time'>115H</span></a>
        <a href='javascript:;' className='btn-article'>方法<span className='time'>5H</span></a>
        <a href='javascript:;' className='btn-article'>方法论<span className='time'>5H</span></a>
        <a href='javascript:;' className='btn-article'>设计方法论<span className='time'>5H</span></a>
        <div className='article-row'>
          <a href='javascript:;' className='btn-article'>自定义</a>
          <span className='addition'>
            <input type='text' placeholder='补充说明' />
          </span>
        </div>
      </div>
    </li>
    )
  }
}
