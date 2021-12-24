import React from 'react';
import { ExpenseTable } from '../../components'
import { ExpensesForm } from '../InputForms/expensesform';
import { useAuth, useUser } from 'reactfire'
import { makeStyles } from '@material-ui/core';
const useStyles = makeStyles({
    main:
    {padding: '4rem',
     
} 
})
export const Expenses = () => {
    const {status, data:user} = useUser()
    const auth = useAuth()
    console.log(auth)
    const classes = useStyles();
    if (status !== "loading" && user != null) {
    return (
        
        <div className={classes.main}>
            <h1>Expenses</h1>
            <ExpensesForm />
            <ExpenseTable />
        </div>
    )
}
else if (status != "loading" && user === null) {
    return <h1>Please log in</h1>
}

else {
    
    return <h1>loading</h1>

}}