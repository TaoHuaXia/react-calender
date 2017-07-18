import * as T from '../actions/actionTypes'

const INITIAL_STATE = {
  show: false,
  loading: false,
  data: [],
  error: null,
  currentMonth: new Date().getMonth(),
  currentYear: new Date().getFullYear()
}
export const calenderReducers = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case T.TOGGLE_CALENDER_SHOW:
      return {
        ...state,
        show: !state.show
      }
    case T.CATCH_CALENDER_DATA:
      return {
        ...state,
        loading: true
      }
    case T.CATCH_CALENDER_DATA_SUCCESS:
      return {
        ...state,
        data: action.payload.data,
        currentMonth: action.payload.month,
        currentYear: action.payload.year,
        loading: false
      }
    default:
      return {
        ...state
      }
  }
}
