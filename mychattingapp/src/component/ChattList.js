import React from 'react'
import { Link } from 'react-router-dom'

const ChattList = (props) => {
  const chatts = props.chatts
  const heading = props.heading

  return (
    <div className='chatt-list'>
      <h1>{heading}</h1>
      {chatts.map((chatt) => (
        <div className='chatt-preview' key={chatt.id}>
          <Link to={'/chatts/' + chatt.id}>
            <h2>{chatt.heading}</h2>
            <p>produced by {chatt.author}</p>
          </Link>
        </div>
      ))}
    </div>
  )
}

export default ChattList
