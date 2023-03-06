import { useEffect, useState } from 'react'

const useFetch = (url) => {
  const [data, setData] = useState(null)
  const [isLoading, setIsLoading] = useState(true)
  const [error, setError] = useState('')

  useEffect(() => {
    setTimeout(() => {
      fetch(url)
        .then((res) => {
          if (!res.ok) {
            throw Error(
              'that kind of end point does not exist please try very well '
            )
          }
          return res.json()
        })
        .then((data) => {
          console.log(data)
          setData(data)
          setIsLoading(false)
          setError(null)
        })
        .catch((err) => {
          //   console.log(err)
          setIsLoading(false)
          setError(err.message)
        })
    }, 3000)
  }, [url])

  return { data, isLoading, error }
}

export default useFetch
