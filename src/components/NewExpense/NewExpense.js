import React from 'react'
import './NewExpense.css'
import ExpenseForm from "./ExpenseForm";
const newExpense = (props) => {
    const saveExpenseDataHandler =(enteredExpenseData)=>{
        const expenseDate = {
            ...enteredExpenseData,
            id: Math.random().toString()
        }
    props.OnAddExpense(expenseDate)
    }
    return(
        <div className='new-expense'>
            <ExpenseForm onSaveExpense={saveExpenseDataHandler}/>
        </div>
    )
}
export default newExpense