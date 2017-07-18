import React from 'react'

const CalenderItem = ({ item, itemClick }) => {
  const renderItem = () => {
    switch (item.state) {
      case 0 :
        return (<span className='disabled'>{item.text}</span>)
      case 1 :
        return (<span className='normal'>{item.text}</span>)
      case 2 :
        return (<span className='insufficient'>{item.text}</span>)
      case 3 :
        return (<span className='notComplete'>{item.text}</span>)
      case 4 :
        return (<span className='fillIn'>{item.text}</span>)
      case 5 :
        return (<span>{item.text}</span>)
    }
  }
  return (
    <li className='calender-item' onClick={itemClick}>
      { renderItem() }
    </li>
  )
}

CalenderItem.propTypes = {
  item: React.PropTypes.object.isRequired,
  itemClick: React.PropTypes.func.isRequired
}

export default CalenderItem
