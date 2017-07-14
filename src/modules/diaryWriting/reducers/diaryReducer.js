import * as T from '../actions/actionTypes'
const diaryReducer = (state = { isEditable: true, diaryList: [] }, action) => {
  switch (action.type) {
    case T.AddTQDDiary:
      return {
        isEditable: state.isEditable,
        diaryList: [...state.diaryList, {
          'AutoCode': 0,
          'STQDCode': 'string',
          'STitle': 'string',
          'SXMFCode': 'string',
          'SXMCode': 'string',
          'SInDepCode': 'string',
          'LPercent': 0.00,
          'LTimeNum': 0.00,
          'STaskExplain': 'string',
          'Items':
          [
            {
              'SItemCode': 'string',
              'SItemsCode': 'string',
              'SMemo': 'string',
              'LTimeNum': 0.00
            }
          ]
        }]
      }
    case T.AddNotTQDDiary:
      return {
        isEditable: state.isEditable,
        diaryList: [...state.diaryList, {
          'AutoCode': 0,
          'STQDCode': '',
          'STitle': 'string',
          'SXMFCode': 'string',
          'SXMCode': 'string',
          'SInDepCode': 'string',
          'LPercent': 0.00,
          'LTimeNum': 0.00,
          'STaskExplain': 'string',
          'Items':
          [
            {
              'SItemCode': 'string',
              'SItemsCode': 'string',
              'SMemo': 'string',
              'LTimeNum': 0.00
            }
          ]
        }]
      }
    case T.EditDiary:
      let newDiaryList = [...state.diaryList]
      newDiaryList.splice(1, action.itemIndex, action.content)
      return {
        isEditable: state.isEditable,
        diaryList: newDiaryList
      }
    case T.ChEditableState:
      return {
        isEditable: action.isEditable,
        diaryList: [...state.diaryList]
      }
  }
}
export default diaryReducer
