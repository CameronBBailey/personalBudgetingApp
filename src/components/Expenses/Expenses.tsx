import React from 'react';
import { ExpenseTable } from '../../components'
import { ExpensesForm } from '../InputForms/expensesform';
import { useAuth } from 'reactfire'



export const Expenses = () => {
    const auth = useAuth()
    console.log(auth)
    return (
        <div>
            <ExpensesForm />
            <ExpenseTable />
        </div>
    )
}