import React from 'react'

export default class ShowTQDItem extends React.Component {
  static propTypes = {
    item: React.PropTypes.object.isRequired
  }
  render() {
    return (<li className='mydiary-cell'>
      <span className='isTQD'>TQD</span>
      <div className='mydiary-row'>
        <b className='mydiary-lab'>案子编号：</b>
        <span className='TQD-num'>TQD78987</span>
        <div className='obj-name'><b>项目归属：</b>总办孵化平台-预研项目</div>
        <div className='total-time'>
          <b>本案累计投入时长：<span className='highlight'>15H</span></b>
          <a href='javascript:;' className='mydiary-link'>查看明细</a>
        </div>
      </div>
      <div className='mydiary-row'>
        <b className='mydiary-lab'>案子名称：</b>
                    德州扑克界面案-玩家详细界面-客户端
                </div>
      <div className='mydiary-row'>
        <b className='mydiary-lab'>工作内容：</b>
        <div className='article-card TQD'>
          <div className='article-name'>
                            设计方法论-情景分析
                            <span className='highlight'>（5H）</span>
          </div>
          <span className='article-desc'>本环节累计投入 12H</span>
        </div>
        <div className='article-card TQD'>
          <div className='article-name'>
                            原型
                            <span className='highlight'>（2H）</span>
          </div>
          <span className='article-desc'>本环节累计投入 12H</span>
        </div>
      </div>
    </li>
    )
  }
}
