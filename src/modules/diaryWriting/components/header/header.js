import React from 'react'
// import PropTypes from 'prop-types'
import Calender from '../calendar/calendar'
const Header = () => {
  const data = [
    '10', '2', '1', '2', '14', '2',
    '1', '20', '16', '2', '1', '25',
    '19', '20', '15', '2', '15', '2',
    '12', '2', '15', '20', '1', '24',
    '1', '2', '1', '2', '1', '2'
  ]
  const onItemClick = (item) => {
    console.log(item)
  }
  return (
    <Calender
      data={data}
      onItemClick={onItemClick}
    />
  )
}
export default Header
