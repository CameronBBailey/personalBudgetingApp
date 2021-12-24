import React from 'react'
import { useGetDataExpenses, useGetDataBalance, useToken } from '../../custom-hooks'
import { makeStyles } from '@material-ui/core';


const useStyles = makeStyles({
    text:
    {fontSize: '36px',
    margin: '48px'} 

})


export const HomeBudgetTable = () => {
    let token = useToken()
    let { expenseData, getData } = useGetDataExpenses(token);
    let sum = 0
    expenseData.forEach((element: any) => sum += Number(element.amount));
    
    console.log(expenseData);
    console.log(sum);
    const classes = useStyles();
    return ( 
        <div className={classes.text}>Monthly Budget
            ${sum}/$1500</div>
    )}