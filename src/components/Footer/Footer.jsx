import { useGlobalContext } from '../../context/context'
import copyIcon from '../../assets/images/icon-new-window.svg'
const Footer = () => {
  const { data } = useGlobalContext()
  return (
    <footer className='footer | container'>
      {data.length ? (
        <p className='footer__info'>
          Source{' '}
          <a
            href={`https://en.wiktionary.org/wiki/${data[0].word}`}
            className='footer__link'
            rel='noreferrer'
            target='_blank'
          >
            {`https://en.wiktionary.org/wiki/${data[0].word}`}
            <img src={copyIcon} alt='icon' className='footer__icon' />
          </a>
        </p>
      ) : (
        ''
      )}
    </footer>
  )
}

export default Footer
