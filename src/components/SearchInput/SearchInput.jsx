import searchIcon from '../../assets/images/icon-search.svg'
import { useGlobalContext } from '../../context/context'

const SearchInput = () => {
  const { word, setWord, fetchData } = useGlobalContext()

  const handleSubmit = (e) => {
    e.preventDefault()
    fetchData(word)
    setWord('')
  }

  return (
    <form className='search-input' onSubmit={handleSubmit}>
      <input
        type='text'
        className='search-input__input'
        placeholder='Search for any word...'
        value={word}
        onChange={(e) => setWord(e.target.value)}
      />
      <button type='submit' className='search-input__button'>
        <img
          src={searchIcon}
          alt='search Icon'
          className='search-input__icon'
        />
      </button>
    </form>
  )
}

export default SearchInput
