import PropTypes from 'prop-types'
import React, { useContext, useReducer } from 'react'
import reducer from './reducer.js'

const AppContext = React.createContext()

let initialValues = {
  darkMode: true,
  fontFamily: 'Sans Serif',
  word: '',
  data: [],
  loading: false,
  error: false,
}

const AppProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialValues)

  const toogleDarkMode = () => {
    dispatch({ type: 'TOOGLE_DARKMODE' })
  }

  return (
    <AppContext.Provider value={{ ...state, toogleDarkMode }}>
      {children}
    </AppContext.Provider>
  )
}

AppProvider.propTypes = {
  children: PropTypes.element.isRequired,
}

export const useGlobalContext = () => {
  return useContext(AppContext)
}

export { AppContext, AppProvider }
