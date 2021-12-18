import React from 'react'
import {  useGetDataBalance } from '../../custom-hooks'
import { makeStyles } from '@material-ui/core';

const useStyles = makeStyles({
    text:
    {fontSize: '36px',
    margin: '48px'} 

})

export const HomeIncomeTable = () => {
    let { balanceData, getData } = useGetDataBalance();
    let sum = 0
    balanceData.forEach((element: any) => sum += Number(element.amount));
    
    console.log(balanceData);
    console.log(sum);
    
    const classes = useStyles();
    return ( 
        <div className={classes.text}>Monthly Savings
            ${sum}</div>
    )}