import React from 'react';
import { BalanceForm } from '../InputForms/balanceform';
import { BalanceTable } from '../Tables/BalanceTable';
import { makeStyles } from '@material-ui/core';
import { useAuth, useUser } from 'reactfire'
const useStyles = makeStyles({
    main:
    {padding: '4rem',
     
} 
})

export const Balance = () => {
    const {status, data:user} = useUser()
    const auth = useAuth()
    const classes = useStyles();
    if (status !== "loading" && user != null) {
    return (
        <div className={classes.main}>
            <h1>Savings</h1>
        <BalanceForm ></BalanceForm>
        <BalanceTable ></BalanceTable>
        </div>
    )
}
else if (status !== "loading" && user === null) {
    return <h1>Please log in</h1>
}

else {
    
    return <h1>loading</h1>

}}