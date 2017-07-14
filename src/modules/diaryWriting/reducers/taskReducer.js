import {handleActions} from 'redux-actions'
import * as T from '../actions/actionTypes'

const initialState = {
  loading: true,
  error: false,
  items: [],
  isTaskListOpen: false
}

export const task = handleActions({
  [`${T.getTasks}_PENDING`](state, action) {
    return {
      ...state,
      loading: true,
      error: false
    }
  },
  [T.getTasks]: {
    next(state, action) {
      // handle success
      return {
        ...state,
        loading: false,
        error: false,
        items: action.payload.data.Data
      }
    },
    throw(state, action) {
      // handle error
      return {
        ...state,
        loading: false,
        error: true
      }
    }
  },
  [T.toggleTasksList](state, action) {
    return {
      ...state,
      isTaskListOpen: !state.isTaskListOpen
    }
  },
  [T.addTaskToDiary](state, action) {
    const newItems = state.items.map((item) => {
      if (item.code === action.payload.code) {
        return Object.assign({}, item, {
          isAdded: true
        })
      }
      return item
    })
    return {
      ...state,
      items: newItems
    }
  }
}, initialState)
