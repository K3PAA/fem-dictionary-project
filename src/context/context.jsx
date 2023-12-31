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
  errorMsg: '',
}

const AppProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialValues)

  const toogleDarkMode = () => {
    document.querySelector('body').classList.toggle('darkmode')
    dispatch({ type: 'TOOGLE_DARKMODE' })
  }

  const setWord = (txt) => {
    dispatch({ type: 'UPDATE_WORD', payload: txt })
  }

  const fetchData = async (word) => {
    dispatch({ type: 'START_FETCHING' })
    try {
      const resp = await fetch(
        `https://api.dictionaryapi.dev/api/v2/entries/en/${word}`
      )
      const data = await resp.json()

      dispatch({ type: 'SET_DATA', payload: data })
    } catch (error) {
      dispatch({ type: 'FETCH_ERROR', payload: error })
    }
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
    <AppContext.Provider
      value={{ ...state, toogleDarkMode, changeFontFamily, setWord, fetchData }}
    >
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
