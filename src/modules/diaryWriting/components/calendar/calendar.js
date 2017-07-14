import React from 'react'
import CalenderItem from './calenderItem'
import './calender.less'
// import PropTypes from 'prop-types'

const Calendar = ({ onItemClick, data }) => {
  const onGetLastMoth = () => {
    console.log('上一周')
  }
  return (
    <div className='calender-container'>
      <header>日志月报</header>
      <div className='calender-tool'>
        <h5>2017年&emsp;&emsp;9月</h5>
        <button className='left-arrow' onClick={onGetLastMoth}>上一月</button>
        <button className='right-arrow' onClick={onGetLastMoth}>下一月</button>
      </div>
      <div className='calender-body'>
        <div className='week'>
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
        {
          data.map((item, index) => {
            return (
              <CalenderItem
                item={item}
                key={index}
                itemClick={onItemClick}
              />)
          })
        }
      </div>
    </div>
  )
}

Calendar.propTypes = {
  onItemClick: React.PropTypes.func,
  data: React.PropTypes.array
}

export default Calendar
