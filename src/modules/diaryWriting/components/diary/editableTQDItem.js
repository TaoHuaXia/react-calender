import React from 'react'

export default class EditableTQDItem extends React.Component {
  static propTypes = {
    item: React.PropTypes.object.isRequired
  }
  render() {
    return (<li className='mydiary-cell'>
      <span className='isTQD'>TQD</span>
      <a href='javascript:;' className='btn-delete' />
      <div className='mydiary-row'>
        <b className='mydiary-lab'>案子编号：</b>
        <span className='TQD-num'>TQD <input className='mydiary-ipt' type='text' /></span>
        <div className='obj-name'>
          <b>项目归属：</b>
          <a href='javascript:;' className='btn-obj-select'>总办孵化平台-预研项目</a>
        </div>
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
        <a href='javascript:;' className='btn-article current'>设计方法论<span className='time'>115H</span></a>
        <div className='article-item'>
          <span className='article-cell'>原始需求分析<input value='0' type='text' className='mydiary-ipt' />H</span>
          <span className='article-cell on'>目标用户分析<input value='3' type='text' className='mydiary-ipt' />H</span>
          <span className='article-cell on'>干系人分析<input value='5' type='text' className='mydiary-ipt' />H</span>
          <span className='article-cell'>竞品分析<input type='text' className='mydiary-ipt' />H</span>
          <span className='article-cell'>情景分析<input type='text' className='mydiary-ipt' />H</span>
          <span className='article-cell'>功能列表<input type='text' className='mydiary-ipt' />H</span>
        </div>
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
