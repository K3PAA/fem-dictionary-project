import { useEffect, useState } from 'react'
import { useGlobalContext } from '../../context/context'
import playIcon from '../../assets/images/icon-play.svg'

const Word = () => {
  const [word, setWord] = useState([])
  const { data, loading, error, fetchData } = useGlobalContext()

  useEffect(() => {
    if (!data[0]) return
    setWord(data[0])
    console.log(data[0])
  }, [data])

  if (error || data.title === 'No Definitions Found') {
    return (
      <div className='notFound | container flex'>
        <h2 className='notFound__icon'>&#128533;</h2>
        <h3 className='notFound__title'>No Definitions Found</h3>
        <p className='notFound__desc'>
          Sorry pal, we couldn&apos;t find definitions for the word you were
          looking for. You can try the search again at later time or head to the
          web instead.
        </p>
      </div>
    )
  }

  if (loading) {
    return (
      <div className='loading | container'>
        <h2 className='loading__title'>Loading ...</h2>
      </div>
    )
  }

  const findAudio = (data) => {
    for (const item of data) {
      if (item.audio) return item.audio
    }
  }

  const findText = (data) => {
    for (const item of data) {
      if (item.text) return item.text
    }
  }

  const playAudio = () => {
    const audio = new Audio(findAudio(word.phonetics))
    audio.volume = 0.5
    audio.currentTime = 0
    audio.play()
  }

  return (
    <main className='word | container'>
      {word.word ? (
        <>
          <section className='word__top'>
            <h1 className='word__title'>{word.word}</h1>
            <p className='word__pronunciation'>{findText(word.phonetics)}</p>
            <button onClick={playAudio} className='word__play'>
              <img src={playIcon} alt='play icon' className='word__play-icon' />
            </button>
          </section>

          {word.meanings.map((meaning, i) => {
            return (
              <>
                <h2 key={i} className='word__partOfSpeech'>
                  {meaning.partOfSpeech}
                </h2>
                <ul className='word__partOfSpeechList'>
                  {meaning.definitions.map((text, j) => {
                    return (
                      <li key={j} className='word__partOfSpeechListItem'>
                        <p>{text.definition}</p>
                        {text.example && <p>{text.example}</p>}
                      </li>
                    )
                  })}
                </ul>
                {meaning.synonyms.length ? (
                  <h3 className='word__addictional'>
                    Synonyms:{' '}
                    {meaning.synonyms.map((syn, i) => {
                      return (
                        <button
                          onClick={() => fetchData(syn)}
                          key={i}
                          className='word__addictional-link'
                        >
                          {syn}
                        </button>
                      )
                    })}
                  </h3>
                ) : (
                  ''
                )}

                {meaning.synonyms.length ? (
                  <h3 className='word__addictional'>
                    Antonyms:{' '}
                    {meaning.antonyms.map((ant, i) => {
                      return (
                        <button
                          onClick={() => fetchData(ant)}
                          key={i}
                          className='word__addictional-link'
                        >
                          {ant}
                        </button>
                      )
                    })}
                  </h3>
                ) : (
                  ''
                )}
              </>
            )
          })}
        </>
      ) : (
        ''
      )}
    </main>
  )
}

export default Word
