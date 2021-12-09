import React, { useState } from 'react'
import './Expenses.css'
import ExpenseItem from './ExpenseItem'
import Card from '../UI/Card'
import ExpensesFilter from './ExpensesFilter'

function Expenses(props) {
  const [filteredYear, setfilteredYear] = useState('2020')

  const filterChangeHandler = selectedYear => {
    setfilteredYear(selectedYear)
  }

  const filteredExpenses = props.expenses.filter(expense => {})

  return (
    <div>
      <Card className="expenses">
        <ExpensesFilter
          selected={filteredYear}
          onChangeFilter={filterChangeHandler}
        />
        {props.expenses.map((expense, i) => (
          <ExpenseItem
            key={expense.id}
            title={expense.title}
            amount={expense.amount}
            date={expense.date}
          />
        ))}
      </Card>
    </div>
  )
}

export default Expenses
