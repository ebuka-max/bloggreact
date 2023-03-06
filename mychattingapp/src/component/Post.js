import React, { useState } from 'react'

const Post = () => {
  const [heading, setHeading] = useState('')
  const [content, setContent] = useState('')
  const [author, setAuthor] = useState('')
  const [isLoading, setIsloading] = useState(false)

  const handleSubmit = (e) => {
    e.preventDefault()
    const chatt = { heading, content, author }

    setIsloading(true)
    console.log(chatt)

    fetch('http://localhost:5000/chatts', {
      method: 'POST',
      headers: { 'content-Type': 'application/json' },
      body: JSON.stringify(chatt),
    }).then((res) => {
      res.json()
      console.log('new comment posted')
      setIsloading(false)
    })
  }

  return (
    <div className='post'>
      {isLoading && <div style={{ fontSize: '30px' }}>Wait it is loading</div>}
      <h2>Write a new Post</h2>

      <form onSubmit={handleSubmit}>
        <input
          type='text'
          required
          value={heading}
          onChange={(e) => setHeading(e.target.value)}
        />
        <label>chatt content:</label>
        <textarea
          required
          value={content}
          onChange={(e) => setContent(e.target.value)}
        ></textarea>
        <label>produced by :</label>
        <input
          type='text'
          value={author}
          onChange={(e) => setAuthor(e.target.value)}
        />
        {!isLoading && <button>post your comments</button>}
        {isLoading && <button disabled>posting comments . . .</button>}
      </form>
      <h1>{heading}</h1>
      <h3>{content}</h3>
      <span>{author}</span>
    </div>
  )
}

export default Post
