import Header from './components/Header/Header'
import SearchInput from './components/SearchInput/SearchInput'

const App = () => {
  return (
    <>
      <Header />
      <div className='container space-600'>
        <SearchInput />
      </div>
    </>
  )
}

export default App
