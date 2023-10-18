/* eslint-disable array-callback-return */
import React from 'react'

const Balance = ({url}) => {
let total = 0
  return (
    <div style={{textAlign:"right"}}>
        {url.map(data=>{
            total += data.amount
        })}
      <h3 id="balance">در مجموع</h3>
      <h2 id="balancee">{total} تومان</h2>
    </div>
  )
}

export default Balance
        