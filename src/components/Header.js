import React from 'react'
import { RealTimeUpdate } from '../hooks/RealTimeUpdate';

const Header = () => {
  let title = 0
  const { collectionn } = RealTimeUpdate("task");
  collectionn.map((data)=>{
    title += data.amount
  })

  return (
    <div>
      <h1 id='title'>Expense Tracker</h1>
      <br />
      <h5 style={{fontWeight:"550"}}>Your Balance</h5>
      <h4 style={{fontWeight:"550"}}>${title}</h4>
    </div>
  )
}

export default Header
