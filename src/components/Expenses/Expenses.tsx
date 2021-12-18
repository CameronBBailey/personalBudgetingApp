import React from 'react';
import { ExpenseTable } from '../../components'
import { ExpensesForm } from '../InputForms/expensesform';
import { useAuth } from 'reactfire'
import { makeStyles } from '@material-ui/core';
const useStyles = makeStyles({
    main:
    {padding: '4rem',
     
} 
})
export const Expenses = () => {
    const auth = useAuth()
    console.log(auth)
    const classes = useStyles();
    return (
        
        <div className={classes.main}>
            <h1>Expenses</h1>
            <ExpensesForm />
            <ExpenseTable />
        </div>
    )
}