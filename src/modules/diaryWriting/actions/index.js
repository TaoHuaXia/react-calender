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
