import ExpenseItem from "./ExpenseItem";
import './Expenses.css'
import Card from "../UI/Card";
import ExpensesFilter from "./ExpensesFilter";
import {useState} from "react";
const Expenses = (props) => {
    const [filteredYear, setFilteredYear] = useState('2020')
    const changeFilterYear = selectedYear=>{
        setFilteredYear(selectedYear)
    }

    return(
            <Card className='expenses'>
                <ExpensesFilter OnChangeFilteredYear={changeFilterYear} selected={filteredYear}/>
                {props.expenses.map(expense =>(
                    <ExpenseItem
                        title={expense.title}
                        amount={expense.amount}
                        date={expense.date}
                    />
                ))}
                </Card>
    )
}
export default Expenses