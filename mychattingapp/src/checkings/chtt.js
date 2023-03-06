import React from 'react'

const ChattList = (props) => {
  const chatts = props.chatts
  const heading = props.heading
  const handleDelete = props.handleDelete
  const clickAgain = props.clickAgain
  return (
    <div className='chatt-list'>
      <h1>{heading}</h1>
      {chatts.map((chatt) => (
        <div className='chatt-preview' key={chatt.id}>
          <h2>{chatt.heading}</h2>
          <p>produced by {chatt.author}</p>
          <button onClick={() => handleDelete(chatt.id)}>
            delete comments
          </button>
          <button onClick={clickAgain}>just check</button>
        </div>
      ))}
    </div>
  )
}

export default ChattList
