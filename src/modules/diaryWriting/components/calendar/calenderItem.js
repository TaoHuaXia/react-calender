import React from 'react'

const CalenderItem = ({item}) => {
  return (
    <div className='calender-item'>
      <span className='noInfo'>{item}</span>
    </div>
  )
}

CalenderItem.propTypes = {
  item: React.PropTypes.string
}

export default CalenderItem
