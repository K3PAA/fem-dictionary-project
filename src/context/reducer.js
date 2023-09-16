const reducer = (state, action) => {
  if (action.type === 'TOOGLE_DARKMODE') {
    return { ...state, darkMode: !state.darkMode }
  }
  return state
}

export default reducer
