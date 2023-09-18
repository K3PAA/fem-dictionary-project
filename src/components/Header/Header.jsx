import logoIcon from '../../assets/images/logo.svg'
import { useGlobalContext } from '../../context/context'
import { useEffect, useRef } from 'react'
import ThemeSwitcher from '../ThemeSwitcher/ThemeSwitcher'

const Header = () => {
  const { changeFontFamily, fontFamily } = useGlobalContext()
  const select = useRef()
  const changeSelect = (e) => {
    changeFontFamily(e.target.value)
  }

  useEffect(() => {
    const options = select.current.querySelectorAll('option')
    for (const option of options) {
      if (option.value === fontFamily) {
        option.selected = true
        break
      }
    }
  }, [fontFamily])

  return (
    <header className='primary-header | container flex flex--between'>
      <img src={logoIcon} alt='logo' className='primary-header__logo | logo' />
      <div className='primary-header__content | flex'>
        <select
          name='font'
          id='font'
          className='primary-header__dropdown'
          onChange={(e) => changeSelect(e)}
          ref={select}
        >
          <option value='sans-serif'>Sans Serif</option>
          <option value='serif'>Serif</option>
          <option value='mono'>Mono</option>
        </select>

        <div className='vertical-line'></div>

        <ThemeSwitcher />
      </div>
    </header>
  )
}

export default Header
