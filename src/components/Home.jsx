import React, { useEffect, useState } from 'react'
import Header from './Header'
import Todo from './Todo'

const Home = () => {
  return (
    <div>
        <Header />
        <Todo />
    </div>
  )
}

export default Home