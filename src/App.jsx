import Footer from './components/Footer/Footer'
import Header from './components/Header/Header'
import SearchInput from './components/SearchInput/SearchInput'
import Word from './components/Word/Word'

const App = () => {
  return (
    <>
      <Header />
      <div className='container space-600'>
        <SearchInput />
      </div>
      <Word />
      <Footer />
    </>
  )
}

export default App
