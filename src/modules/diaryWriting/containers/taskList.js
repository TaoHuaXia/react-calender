import React, { Component } from 'react'
import { connect } from 'react-redux'
import { getTasks, toggleTsksList, addTaskToDiary } from '../actions/index'
import List from '../components/task/list'

@connect(state => {
  return {
    taskList: state.task.items
  }
}, {
  getTasks,
  addTaskToDiary,
  toggleTsksList
})
export default class TaskList extends Component {
  render() {
    return <List {...this.props} />
  }
}
