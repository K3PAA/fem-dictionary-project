import PropTypes from 'prop-types'
import React, { useContext, useReducer, useEffect } from 'react'
import reducer from './reducer.js'

const AppContext = React.createContext()

let initialValues = {
  darkMode: JSON.parse(localStorage.getItem('darkMode')) || false,
  fontFamily: JSON.parse(localStorage.getItem('font')) || 'sans-serif',
  word: '',
  data: [],
  loading: false,
  error: false,
}

const AppProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialValues)

  const toogleDarkMode = () => {
    document.querySelector('body').classList.toggle('darkmode')
    dispatch({ type: 'TOOGLE_DARKMODE' })
  }

  const changeFontFamily = (value) => {
    dispatch({ type: 'CHANGE_FONTFAMILY', payload: value })
  }

  useEffect(() => {
    const body = document.querySelector('body')
    body.className = ''
    body.classList.add(state.fontFamily)
    state.darkMode && body.classList.add('darkmode')
  }, [state.fontFamily])

  return (
    <AppContext.Provider value={{ ...state, toogleDarkMode, changeFontFamily }}>
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
