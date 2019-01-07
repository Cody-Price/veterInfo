export const filterReducer = (state = null, action) => {
  switch(action.type) {
    case 'ADD_FILTER_TO_STORE':
      return action.filter
    case 'CLEAR_FILTER_FROM_STORE':
      return null
    default:
      return state
  }
}