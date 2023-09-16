import logoIcon from '../../assets/images/logo.svg'
import ThemeSwitcher from '../ThemeSwitcher/ThemeSwitcher'
const Header = () => {
  return (
    <header className='primary-header | container flex flex--between'>
      <img src={logoIcon} alt='logo' className='primary-header__logo | logo' />
      <div className='primary-header__content | flex'>
        <select name='font' id='font' className='primary-header__dropdown'>
          <option value='sans-serif'>Sans Serif</option>
          <option value='serif'>Serif</option>
          <option value='Mono'>Mono</option>
        </select>

        <div className='vertical-line'></div>

        <ThemeSwitcher />
      </div>
    </header>
  )
}

export default Header
