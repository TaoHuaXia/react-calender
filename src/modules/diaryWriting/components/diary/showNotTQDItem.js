import React from 'react'

export default class ShowNotTQDItem extends React.Component {
  static propTypes = {
    item: React.PropTypes.object.isRequired
  }
  render() {
    return (<li className='mydiary-cell'>
      <span className='notTQD'>非TQD</span>
      <div className='mydiary-row'>
        <b className='mydiary-lab'>项目归属：</b>
                    101教育平台
                </div>
      <div className='mydiary-row'>
        <b className='mydiary-lab'>工作内容：</b>
        <div className='article-card'>
          <span className='article-name'>
                            设计方法论-情景分析
                            <span className='highlight'>（5H）</span>
          </span>
          <span className='article-desc'>：Q1制度的路线图制定</span>
        </div>
        <div className='article-card'>
          <span className='article-name'>
                            原型
                            <span className='highlight'>（2H）</span>
          </span>
          <span className='article-desc'>：补充说明示例</span>
        </div>
        <div className='article-card'>
          <span className='article-name'>
                            项目路线图
                            <span className='highlight'>（2H）</span>
          </span>
          <span className='article-desc'>：补充说明很长，补充说明很长，补充说明很长，补充说明很长，补充说明很长，补充说明很长，补充说明很长，补充说明很长，补充说明很长，补充说明很长，补充说明很长，补充说明很长</span>
        </div>
      </div>
    </li>
    )
  }
}
