import ChattList from './ChattList'
import useFetch from './useFetch'

const Home = () => {
  const {
    data: chatts,
    isLoading,
    error,
  } = useFetch('http://localhost:5000/chatts ')
  return (
    <div className='home'>
      {error && <div>{error}</div>}
      {isLoading && <div>wait it is loading ....</div>}
      {chatts && <ChattList chatts={chatts} heading='List of Comments' />}
    </div>
  )
}

export default Home
