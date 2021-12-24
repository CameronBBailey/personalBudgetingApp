import React from 'react';
import { InvestmentTable } from '../../components'
import { InvestmentForm } from '../InputForms';
import { makeStyles } from '@material-ui/core';
import { useAuth, useUser } from 'reactfire'

const useStyles = makeStyles({
    main:
    {padding: '4rem',
     
} 
})
export const Investments = () => {
    const {status, data:user} = useUser()
    const auth = useAuth()
    const classes = useStyles();
    if (status !== "loading" && user != null) {
    return (
        <div className={classes.main}>
            <h1>Investments</h1>
            <InvestmentForm />
            <InvestmentTable ></InvestmentTable>
        </div>
    )
}
else if (status !== "loading" && user === null) {
    return <h1>Please log in</h1>
}

else {
    
    return <h1>loading</h1>

}}