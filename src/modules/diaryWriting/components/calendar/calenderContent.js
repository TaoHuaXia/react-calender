import React from 'react'
import CalenderItem from './calenderItem'

export default class CalenderContent extends React.Component {
  static propTypes = {
    currentMonth: React.PropTypes.number.isRequired,
    currentYear: React.PropTypes.number.isRequired,
    renderData: React.PropTypes.array.isRequired,
    onGetMonth: React.PropTypes.func.isRequired,
    catchData: React.PropTypes.func.isRequired
  }
  componentWillMount() {
    this.props.catchData(new Date().getMonth(), new Date().getFullYear())
  }

  render() {
    const { currentMonth, currentYear, renderData, onGetMonth } = this.props
    return (
      <div className='calender-container'>
        <header>日志月报</header>
        <div className='calender-tool'>
          <h5>{currentYear}年&emsp;&emsp;{currentMonth + 1}月</h5>
          <button className='left-arrow' onClick={_ => onGetMonth(-1)}>上一月</button>
          <button
            className={`${new Date().getMonth() === currentMonth && new Date().getFullYear() === currentYear ? 'right-arrow disable' : 'right-arrow'}`}
            onClick={_ => onGetMonth(+1)}>下一月
          </button>
        </div>
        <div className='calender-body'>
          <div className='week clearfix'>
            <ul>
              <li>周日</li>
              <li>周一</li>
              <li>周二</li>
              <li>周三</li>
              <li>周四</li>
              <li>周五</li>
              <li>周六</li>
            </ul>
          </div>
          <div className='calender-box clearfix'>
            <ul>
              {
                renderData.map((item, index) => {
                  return (
                    <CalenderItem
                      item={item}
                      key={index}
                      itemClick={_ => console.log('sddssd')}
                    />)
                })
              }
            </ul>
          </div>
        </div>
        <div className='calender-symbol clearfix'>
          <span><i className='symbol normal' /><em>正常</em></span>
          <span><i className='symbol insufficient' /><em>时数不足</em></span>
          <span><i className='symbol notComplete' /><em>日志未填</em></span>
          <span><i className='symbol fillIn' /><em>日志补填</em></span>
        </div>
      </div>
    )
  }
}
