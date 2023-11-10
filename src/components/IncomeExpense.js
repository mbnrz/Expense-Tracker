import React from 'react'
import { RealTimeUpdate } from '../hooks/RealTimeUpdate';

const IncomeExpense = () => {
  const { collectionn } = RealTimeUpdate("task");
  let income = 0
  let expense = 0;
  collectionn.map((data)=>{
    if(data.amount>0){
      income += data.amount
    }else if(data.amount<0){
      expense += data.amount
    }
  })

  return (
    <div>
      <div id='table'>
        <div>
          <h4>Income</h4>
          <h4 style={{color:"#00653d"}}>${income}</h4>
        </div>
        <div id='underline'/>
        <div>
          <h4>Expense</h4>
          <h4 style={{color:"red"}}>${expense}</h4>
        </div>
      </div>
    </div>
  )
}

export default IncomeExpense
