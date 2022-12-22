import React from 'react'
import LoginForm from '../components/LoginForm'
import Explanation from '../components/Explaination'

function Homepage() {
  return (
    <div className='homepage'>
        <h1 className='project title'>Goal Guru</h1>
        <LoginForm/>
        <p>Don't have an account yet? signup here! own page</p>
        <Explanation/>

      
    </div>
  )
}

export default Homepage
