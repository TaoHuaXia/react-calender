import React from 'react'
import './calender.less'
import CalenderContent from './calenderContent'
// import PropTypes from 'prop-types'

class Calendar extends React.Component {
  static propTypes = {
    calender: React.PropTypes.object.isRequired,
    catchData: React.PropTypes.func,
    toggleShow: React.PropTypes.func
  }
  /** @param offset:+1/-1向前翻页+1 向后翻页减一
   *  如果为当前年当年月，则不能向后翻页
   *  调用catchData方法，传入offset之后的月份以及年份
   *  具体特殊情况的处理（如month=0，-1,12）在action中处理，此处只负责传入
   */
  onGetMonth = (offset) => {
    const { calender } = this.props
    if (new Date().getMonth() === calender.currentMonth && new Date().getFullYear() === calender.currentYear && offset > 0) {
      return false
    } else {
      this.props.catchData(calender.currentMonth + offset, calender.currentYear)
    }
  }

  render() {
    const { calender, toggleShow, catchData } = this.props
    let renderData = calender.data.concat()
    // 根据前半月21号是周几来填充空白的日期
    let date = new Date()
    date.setDate(21)
    // 当前月份为1月份时，前部分为前一年的12月份
    if (calender.currentMonth === 0) {
      date.setMonth(11)
      date.setFullYear(calender.currentYear - 1)
    } else {
      // 一般情况为补充上一个月份的21号之前的日期
      date.setMonth(calender.currentMonth - 1)
      date.setFullYear(calender.currentYear)
    }
    let week = date.getDay()
    for (let i = 21 - week; i < 21; i++) {
      renderData.unshift({ text: i, state: 0 })
    }
    // 填充当前月20号之后的日期
    // 当五行不足以展示考勤周时
    let length = renderData.length
    if (length > 35) {
      for (let i = 21; i <= 62 - length; i++) {
        renderData.push({ text: i, state: 0 })
      }
    } else {
      for (let i = 21; i <= 55 - length; i++) {
        renderData.push({ text: i, state: 0 })
      }
    }
    return (
      <div>
        {
          calender.loading ? <p>加载中</p>
            : <div className='calender'>
              <button onClick={_ => toggleShow()}>日志月报</button>
              {
                calender.show
                  ? <CalenderContent
                    {...{
                      currentMonth: calender.currentMonth,
                      currentYear: calender.currentYear,
                      renderData: renderData,
                      onGetMonth: this.onGetMonth,
                      catchData: catchData
                    }}
                /> : null
              }
            </div>
        }
      </div>
    )
  }
}

export default Calendar
