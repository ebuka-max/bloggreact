import React from 'react'
import { useParams } from 'react-router-dom'
import useFetch from './useFetch'

const ChattDetails = () => {
  const { id } = useParams()
  const {
    data: chatt,
    error,
    isLoading,
  } = useFetch('http://localhost:5000/chatts/' + id)
  return (
    <div className='chatt-details'>
      {isLoading && <div>wait it is loading ....</div>}
      {error && <div>{error}</div>}
      {chatt && (
        <article>
          <h2>{chatt.heading}</h2>
          <p>produced by{chatt.author}</p>
          <div>{chatt.content}</div>
        </article>
      )}
    </div>
  )
}

export default ChattDetails
