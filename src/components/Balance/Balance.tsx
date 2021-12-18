import React from 'react';
import { BalanceForm } from '../InputForms/balanceform';
import { BalanceTable } from '../Tables/BalanceTable';
import { makeStyles } from '@material-ui/core';
const useStyles = makeStyles({
    main:
    {padding: '4rem',
     
} 
})

export const Balance = () => {
    const classes = useStyles();
    return (
        <div className={classes.main}>
            <h1>Savings</h1>
        <BalanceForm ></BalanceForm>
        <BalanceTable ></BalanceTable>
        </div>
    )
}