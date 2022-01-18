import React, { useState, useEffect } from 'react'
import Loading from './Loading'
import Tours from './Tours'

// ATTENTION!!!!!!!!!!
// I SWITCHED TO PERMANENT DOMAIN
const url = 'https://course-api.com/react-tours-project'
function App() {

  const [data, setData] = useState([])
  const [isLoading, setIsLoading] = useState(false)

  const fetchData = async () => {
    setIsLoading(true)

    try {
      const response = await fetch(url)

      if (response.status >= 200 && response.status <= 299) {
        const data = await response.json()
        setData(data)

        setIsLoading(false)

      } else {
        throw new Error(response.text)
      }

    } catch (error) {
      console.log(error.message)
    }
  }

  const removeItem = (id) => {
    const newData = data.filter(item => item.id !== id)
    setData(newData)
  }

  useEffect(() => {
    fetchData()
  }, [])

  if (isLoading) {
    return (
      <main>
        <Loading />
      </main>
    )
  }

  if (data.length === 0) {
    return (
      <main>
        <div className="title">
          <h2>No Tours</h2>
          <button className='btn' onClick={fetchData}>Refresh</button>
        </div>
      </main>
    )
  }

  return (
    <main className="container">
      <Tours data={data} removeItem={removeItem} />
    </main>
  )
}

export default App
