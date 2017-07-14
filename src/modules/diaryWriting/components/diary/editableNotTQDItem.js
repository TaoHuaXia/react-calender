import React from 'react'

export default class EditableNotTQDItem extends React.Component {
  static propTypes = {
    item: React.PropTypes.object.isRequired
  }
  render() {
    return (<li className='mydiary-cell'>
      <span className='notTQD'>非TQD</span>
      <a href='javascript:;' className='btn-delete' />
      <div className='mydiary-row'>
        <b className='mydiary-lab'>项目归属：</b>
        <a href='javascript:;' className='btn-obj-select'>总办孵化平台-预研项目</a>
      </div>
      <div className='mydiary-row'>
        <b className='mydiary-lab'>工作内容：</b>
        <div className='article-cell-item'>
          <div className='article-cell-left'>
            <a href='javascript:;' className='btn-article'>方法</a>
            <span className='article-cell-time'>
              <input type='text' className='mydiary-ipt' />
                                H
                            </span>
          </div>
          <div className='article-cell-right'>
            <input placeholder='补充说明' type='text' />
          </div>
        </div>
        <div className='article-cell-item active'>
          <div className='article-cell-left'>
            <a href='javascript:;' className='btn-article'>方法</a>
            <span className='article-cell-time'>
              <input type='text' className='mydiary-ipt' />
                                H
                            </span>
          </div>
          <div className='article-cell-right'>
            <input placeholder='补充说明' type='text' />
          </div>
        </div>
        <div className='article-cell-item'>
          <div className='article-cell-left'>
            <a href='javascript:;' className='btn-article'>方法</a>
            <span className='article-cell-time'>
              <input type='text' className='mydiary-ipt' />
                                H
                            </span>
          </div>
          <div className='article-cell-right'>
            <input placeholder='补充说明' type='text' />
          </div>
        </div>
        <div className='article-cell-item'>
          <div className='article-cell-left'>
            <a href='javascript:;' className='btn-article'>方法</a>
            <span className='article-cell-time'>
              <input type='text' className='mydiary-ipt' />
                                H
                            </span>
          </div>
          <div className='article-cell-right'>
            <input placeholder='补充说明' type='text' />
          </div>
        </div>
      </div>
    </li>
    )
  }
}
