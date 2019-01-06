export const sourcesReducer = (state = [], action) => {
  switch(action.type) {
    case 'ADD_SOURCES_TO_STORE':
      return [...state, ...action.sources]
    default:
      return state
  }
}

