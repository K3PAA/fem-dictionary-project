import moonIcon from '../../assets/images/icon-moon.svg'
import { useGlobalContext } from '../../context/context'

const ThemeSwitcher = () => {
  const { toogleDarkMode, darkMode } = useGlobalContext()

  return (
    <div className='theme-switcher' onClick={toogleDarkMode}>
      <div
        className={`theme-switcher__indicator ${darkMode ? 'active' : ''}`}
      ></div>
      <img src={moonIcon} alt='moon icon' className='theme-switcher__icon' />
    </div>
  )
}

export default ThemeSwitcher
