import React, { useEffect, useState } from 'react'
import Header from './Header'
import Todo from './Todo'

const Home = () => {
    const [inputs, setInputs] = useState("")
  return (
    <div>
        <Header />
        <Todo />
    </div>
  )
}

export default Home