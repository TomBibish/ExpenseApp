import ExpenseItem from "./ExpenseItem";
import './Expenses.css'
import Card from "../UI/Card";
import ExpensesFilter from "./ExpensesFilter";
import {useState} from "react";
import ExpensesList from "./ExpensesList";
import ExpensesChart from "./ExpensesChart";
const Expenses = (props) => {
    const [filteredYear, setFilteredYear] = useState('2020')
    const changeFilterYear = selectedYear=>{
        setFilteredYear(selectedYear)
    }
    const filteredExpenses = props.expenses.filter(expense =>{
        return expense.date.getFullYear().toString() === filteredYear
    })
    let expensesContent = <p>No expenses found</p>
    if (filteredExpenses.length > 0){
        expensesContent = filteredExpenses.map((expense) => (
                    <ExpenseItem
                        key={expense.id}
                        title={expense.title}
                        amount={expense.amount}
                        date={expense.date}
                    />
        ))
    }

    return(
            <Card className='expenses'>
                <ExpensesFilter OnChangeFilteredYear={changeFilterYear} selected={filteredYear}/>
                <ExpensesChart expenses={filteredExpenses}/>
                <ExpensesList expenses={filteredExpenses}/>
                </Card>
    )
}
export default Expenses