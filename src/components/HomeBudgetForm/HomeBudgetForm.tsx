import React from 'react'
import { useGetDataExpenses, useGetDataBalance, useToken, useGetDataExpensesWithDate } from '../../custom-hooks'
import { makeStyles } from '@material-ui/core';


const useStyles = makeStyles({
    text:
    {fontSize: '36px',
    margin: '48px'} 

})


export const HomeBudgetTable = () => {
    let currentdate = new Date();
    let currentmonth = currentdate.getMonth().toString()
    let currentyear = currentdate.getFullYear().toString()
    console.log(currentmonth)
    const date = `${currentmonth}-${currentyear}`
    console.log(date)
    let token = useToken()
    let { expenseData, getData } = useGetDataExpensesWithDate(token, currentmonth, currentyear);
    console.log(expenseData);
    let sum = 0
    expenseData.forEach((element: any) => sum += Number(element.amount));
    
    console.log(expenseData);
    console.log(sum);
    const classes = useStyles();
    return ( 
        <div className={classes.text}>Monthly Budget
            ${sum}/$1500</div>
    )}