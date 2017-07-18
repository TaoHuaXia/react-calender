// import React from 'react'
import { connect } from 'react-redux'

import {
  addTQDDiary,
  addNotTQDDiary,
  editDiary,
  changeEditableState,
  toggleCalenderShow,
  catchCalenderData
} from '../actions'
import Diary from '../components/diary/diary'

const mapStateToProps = (state) => ({
  isEditable: state.isEditable,
  diaryList: state.diaryList,
  calender: state.calender
})

const mapDispatchToProps = (dispatch) => ({
  addTQDDiary: () => { dispatch(addTQDDiary) },
  addNotTQDDiary: () => { dispatch(addNotTQDDiary) },
  editDiary: () => { dispatch(editDiary) },
  changeEditableState: () => { dispatch(changeEditableState) },
  toggleCalenderShow: () => { dispatch(toggleCalenderShow()) },
  catchCalenderData: (month, year) => { dispatch(catchCalenderData(month, year)) }
})

const DiaryCont = connect(
  mapStateToProps,
  mapDispatchToProps
)(Diary)

export default DiaryCont
