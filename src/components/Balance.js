/* eslint-disable array-callback-return */
import React from 'react'

const Balance = ({url}) => {
let total = 0
  return (
    <div>
        {url.map(data=>{
            total += data.amount
        })}
      <h3 id="balance">Your Balance</h3>
      <h2 id="balancee">${total}</h2>
    </div>
  )
}

export default Balance
        