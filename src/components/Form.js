import React from 'react'
import styles from './Form.module.css'
import useSelectCategory from '../hooks/useSelectCategory'
import useSelectCountry from '../hooks/useSelectCountry'

const Form = ({ setCategory, setCountry }) => {
  const CATEGORY = [
    { value: 'general', label: 'General' },
    { value: 'business', label: 'Business' },
    { value: 'entertainment', label: 'Entertainment' },
    { value: 'health', label: 'Health' },
    { value: 'science', label: 'Science' },
    { value: 'sports', label: 'Sports' },
    { value: 'technology', label: 'Technology' }
  ]

  const COUNTRY = [
    { value: 'us', label: 'United States' },
    { value: 'mx', label: 'Mexico' },
    { value: 'jp', label: 'Japan' },
    { value: 'kr', label: 'Korea' },
    { value: 'ar', label: 'Argentina' },
    { value: 'ru', label: 'Russia' },
    { value: 'ca', label: 'Canada' }
  ]

  const [category, SelectNews] = useSelectCategory('general', CATEGORY)
  const [country, SelectCountry] = useSelectCountry('us', COUNTRY)

  const searchNews = e => {
    e.preventDefault()

    setCategory(category)
    setCountry(country)
  }

  return (
    <div className={`row ${styles.searcher}`}>
      <div className='col s12 m8 offset-m2'>
        <form onSubmit={searchNews}>
          <h2 className={styles.heading}>Find news by category</h2>
          <SelectNews />
          <SelectCountry />
          <div className='input-field col s12'>
            <input type='submit' className={`btn-large amber darken-2 ${styles['btn-block']}`} value='Search' />
          </div>
        </form>
      </div>
    </div>
  )
}

export default Form
