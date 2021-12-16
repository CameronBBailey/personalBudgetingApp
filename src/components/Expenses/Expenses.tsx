import React from 'react';
import { ExpenseTable } from '../../components'
import { ExpensesForm } from '../InputForms/expensesform';

export const Expenses = () => {
    return (
        <div>
            <ExpensesForm />
            <ExpenseTable />
        </div>
    )
}