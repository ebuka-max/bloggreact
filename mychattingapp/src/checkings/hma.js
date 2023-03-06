import React, { useEffect, useState } from 'react'
import ChattList from './ChattList'

const Home = () => {
  const [value, setValue] = useState(0)

  const [chatts, setChatts] = useState([
    {
      heading: 'The reason why',
      content: 'I aiways want to understand the power behind ...',
      author: 'Williams',
      id: 1,
    },
    {
      heading: 'Body of evidence',
      content:
        'This has to do with the ability of the Detectives to catch the ...',
      author: 'Mark',
      id: 2,
    },
    {
      heading: 'Blood Money',
      content: 'This is a nigerian movie which tells the story about...',
      author: 'Williams',
      id: 3,
    },
    {
      heading: 'Street Fighter',
      content: 'Ken abd Raul are closed friends like siblings but...',
      author: 'Adams Smith',
      id: 4,
    },
    {
      heading: 'Street Fighter',
      content: 'Ken abd Raul are closed friends like siblings but...',
      author: 'Adams Smith',
      id: 5,
    },
    {
      heading: 'Street Fighter',
      content: 'Ken abd Raul are closed friends like siblings but...',
      author: 'Adams Smith',
      id: 6,
    },
  ])

  const handleDelete = (id) => {
    const newChatt = chatts.filter((chatt) => chatt.id !== id)
    console.log(newChatt)
    setChatts(newChatt)
  }
  const clickAgain = () => {
    console.log(chatts)
  }

  const Increment = () => {
    setValue((preValue) => preValue + 1)
  }
  const Decrement = () => {
    setValue((preValue) => preValue - 1)
  }

  useEffect(() => {
    console.log('the console displays useEffection function')
  }, [chatts])

  return (
    <div className='home'>
      <div className='btn-check'>
        <button onClick={Increment}>increment</button>
        <h1 className='value'>{value}</h1>
        <button onClick={Decrement}>decrement</button>
      </div>

      <ChattList
        chatts={chatts}
        heading='List of Comments'
        handleDelete={handleDelete}
        clickAgain={clickAgain}
      />
    </div>
  )
}

export default Home




// useEffect and Fetch   ---------------------------------------------------------------------------------------------

import React, { useEffect, useState } from 'react'
// import ChattList from './ChattList'

const Home = () => {
  const [chatts, setChatts] = useState([])

  // const handleDelete = (id) => {
  //   const newChatt = chatts.filter((chatt) => chatt.id !== id)
  //   console.log(newChatt)
  //   setChatts(newChatt)
  // }
  // const clickAgain = () => {
  //   console.log(chatts)
  // }

  useEffect(() => {
    fetch('  http://localhost:5000/chatts')
      .then((res) => {
        console.log(res)
        return res.json()
      })
      .then((data) => {
        console.log(data)
        setChatts(data)
      })
      .catch((error) => {
        console.log(error)
        return error.message
      })
  }, [])

  console.log(chatts)

  return (
    <div className='home'>
      {/* <setChatts /> */}
      {/* { <ChattList
      chatts={chatts}
      heading='List of Comments'
      handleDelete={handleDelete}
      clickAgain={clickAgain}
    /> } */}
    </div>
  )
}

export default Home





// ------------------------AFTER RENDERING=--------------------------------//
import React, { useEffect, useState } from 'react'
// import ChattList from './ChattList'

const Home = () => {
  const [chatts, setChatts] = useState([])

  // const handleDelete = (id) => {
  //   const newChatt = chatts.filter((chatt) => chatt.id !== id)
  //   console.log(newChatt)
  //   setChatts(newChatt)
  // }
  // const clickAgain = () => {
  //   console.log(chatts)
  // }

  useEffect(() => {
    fetch('  http://localhost:5000/chatts')
      .then((res) => {
        console.log(res)
        return res.json()
      })
      .then((data) => {
        console.log(data)
        setChatts(data)
      })
      .catch((error) => {
        console.log(error)
        return error.message
      })
  }, [])

  console.log(chatts)

  return (
    <div className='home'>
      {chatts.map((chatt) => (
        <div className='chatt-preview' key={chatt.id}>
          <h2>{chatt.heading}</h2>
          <h3>{chatt.content}</h3>
          <p>produced by {chatt.author}</p>
        </div>
      ))}
      {/* { <ChattList
      chatts={chatts}
      heading='List of Comments'
      handleDelete={handleDelete}
      clickAgain={clickAgain}
    /> } */}
    </div>
  )
}

export default Home
