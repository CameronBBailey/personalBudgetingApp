import React from 'react';
import { InvestmentTable } from '../../components'
import { useGetDataInvestments } from '../../custom-hooks'
import { InvestmentForm } from '../InputForms';
import { makeStyles } from '@material-ui/core';

const useStyles = makeStyles({
    main:
    {padding: '4rem',
     
} 
})
export const Investments = () => {
    const { investmentData, getData } = useGetDataInvestments()
    const classes = useStyles();
    return (
        <div className={classes.main}>
            <h1>Investments</h1>
            <InvestmentForm />
            <InvestmentTable ></InvestmentTable>
        </div>
    )
}