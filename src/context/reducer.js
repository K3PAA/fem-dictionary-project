const reducer = (state, action) => {
  if (action.type === 'TOOGLE_DARKMODE') {
    localStorage.setItem('darkMode', JSON.stringify(!state.darkMode))
    return { ...state, darkMode: !state.darkMode }
  }
  if (action.type === 'CHANGE_FONTFAMILY') {
    localStorage.setItem('font', JSON.stringify(action.payload))
    return { ...state, fontFamily: action.payload }
  }
  return state
}

export default reducer
