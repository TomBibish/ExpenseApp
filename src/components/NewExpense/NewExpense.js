import React, { useState } from 'react'
import './NewExpense.css'
import ExpenseForm from "./ExpenseForm";
const NewExpense = (props) => {
    const [showForm , setShowForm] = useState(false);
    const showFormHandler = () =>{
        setShowForm(!showForm)
    }

    const saveExpenseDataHandler =(enteredExpenseData)=>{
        const expenseDate = {
            ...enteredExpenseData,
            id: Math.random().toString()
        }
    props.OnAddExpense(expenseDate)
    }
    return(
        <div className='new-expense'>
            {showForm === true  && <ExpenseForm onShowForm={showFormHandler} onSaveExpense={saveExpenseDataHandler}/>}
            {showForm === false && <button onClick={showFormHandler}>Add New Expense</button>}
        </div>
    )
}
export default NewExpense