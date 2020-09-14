import React from 'react'
import News from './News'

const ListNews = ({ news }) => {
  return (
    <div className='row'>
      {news.map(noti => (
        <News key={noti.url} noti={noti} />
      ))}
    </div>
  )
}

export default ListNews
