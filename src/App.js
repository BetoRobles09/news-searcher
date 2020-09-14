import React, { useEffect, useState } from 'react'
import Header from './components/Header'
import Form from './components/Form'
import ListNews from './components/ListNews'

/*
  global fetch
*/

function App () {
  const [category, setCategory] = useState('')
  const [country, setCountry] = useState('')
  const [news, getNews] = useState([])

  useEffect(() => {
    const consultAPI = async () => {
      const url = `https://newsapi.org/v2/top-headlines?country=${country}&category=${category}&apiKey=2fb64901ce13426abda485888cbe506c`
      const response = await fetch(url)
      const result = await response.json()
      getNews(result.articles)
    }
    consultAPI()
  }, [category, country])

  return (
    <>
      <Header title='News Searcher' />
      <div className='container white'>
        <Form setCategory={setCategory} setCountry={setCountry} />
        {!news ? null : <ListNews news={news} />}
      </div>
    </>
  )
}

export default App
