const reducer = (state, action) => {
  if (action.type === 'TOOGLE_DARKMODE') {
    localStorage.setItem('darkMode', JSON.stringify(!state.darkMode))
    return { ...state, darkMode: !state.darkMode }
  }
  if (action.type === 'CHANGE_FONTFAMILY') {
    localStorage.setItem('font', JSON.stringify(action.payload))
    return { ...state, fontFamily: action.payload }
  }

  if (action.type === 'UPDATE_WORD') {
    return { ...state, word: action.payload }
  }

  if (action.type === 'SET_DATA') {
    return { ...state, data: action.payload, loading: false, error: false }
  }

  if (action.type === 'START_FETCHING') {
    return { ...state, loading: true }
  }

  if (action.type === 'FETCH_ERROR') {
    return { ...state, error: true, errorMsg: action.payload }
  }
  return state
}

export default reducer
