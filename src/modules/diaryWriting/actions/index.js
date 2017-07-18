import {createAction} from 'redux-actions'
import * as T from './actionTypes'
import axios from 'axios'

export const queryDiary = (condition) => ({
  type: 'QUERY_DIARY',
  condition
})

export const getTasks = createAction(T.getTasks,
  (date) => axios.get(`/TaskLogApi/TaskInfoMany?date=${date}`)
)

export const toggleTsksList = createAction(T.toggleTasksList)
export const addTaskToDiary = createAction(T.addTaskToDiary)

export const addTQDDiary = () => ({
  type: T.AddTQDDiary
})
export const addNotTQDDiary = () => ({
  type: T.AddNotTQDDiary
})
export const editDiary = (itemIndex, content) => ({
  type: T.AddTQDDiary,
  itemIndex,
  content
})
export const changeEditableState = (isEditable) => ({
  type: T.ChEditableState,
  isEditable
})

export const toggleCalenderShow = () => ({
  type: T.TOGGLE_CALENDER_SHOW
})

const catchCalenderDataSuccess = (data, month, year) => {
  return {
    type: T.CATCH_CALENDER_DATA_SUCCESS,
    payload: {data, month, year}
  }
}

const catchCalenderDataPending = () => {
  return {
    type: T.CATCH_CALENDER_DATA
  }
}

export const catchCalenderData = (month, year) => {
  return function (dispatch) {
    dispatch(catchCalenderDataPending())
    // http request
    let flag = true
    let data = []
    let days = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31]
    // 判断是否为闰年
    if (month === 1 && ((year % 4 === 0 && year % 100 !== 0) || year % 400 === 0)) {
      days = [31, 29, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31]
    }
    // *渲染上半月的考勤日期
    // 当翻页到一月份时，上半月为去年的12月份
    if (month === 0) {
      for (let i = 21; i <= 31; i++) {
        data.push({text: i, state: 1})
      }
    } else if (month === -1) {
      // 当在一份月向左翻页时，此时month = month-1 => -1，将month设置为11， 年份减一
      month = 11
      year -= 1
      for (let i = 21; i <= days[month - 1]; i++) {
        data.push({text: i, state: 1})
      }
    } else if (month === 12) {
      // 当在十二份月向左翻页时，此时month = month-1 => 12，将month设置为0， 年份加一
      month = 0
      year += 1
      for (let i = 21; i <= 31; i++) {
        data.push({text: i, state: 1})
      }
    } else {
      for (let i = 21; i <= days[month - 1]; i++) {
        data.push({text: i, state: 2})
      }
    }
    // *渲染下半月的考勤日期
    for (let i = 1; i <= 20; i++) {
      data.push({text: i, state: 3})
    }
    if (flag) {
      dispatch(catchCalenderDataSuccess(data, month, year))
    } else {
      console.log('失败了')
    }
  }
}
