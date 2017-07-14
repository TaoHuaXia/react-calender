// import React from 'react'
import { connect } from 'react-redux'

import {addTQDDiary, addNotTQDDiary, editDiary, changeEditableState} from '../actions'
import Diary from '../components/diary/diary'

const mapStateToProps = (state) => ({
  isEditable: state.isEditable,
  diaryList: state.diaryList
})

const mapDispatchToProps = (dispatch) => ({
  addTQDDiary: () => { dispatch(addTQDDiary) },
  addNotTQDDiary: () => { dispatch(addNotTQDDiary) },
  editDiary: () => { dispatch(editDiary) },
  changeEditableState: () => { dispatch(changeEditableState) }
})

const DiaryCont = connect(
  mapStateToProps,
  mapDispatchToProps
)(Diary)

export default DiaryCont
