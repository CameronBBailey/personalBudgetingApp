import React from 'react';
import { makeStyles } from '@material-ui/core';
import Button from '@material-ui/core/Button';
import { HomeBudgetTable } from '../HomeBudgetForm/HomeBudgetForm';
import { HomeIncomeTable } from '../HomeBudgetForm/HomeIncomeForm';
import { Suspense } from 'react';
import { useAuth } from 'reactfire' 
import { useUser } from 'reactfire' 
import { useToken } from '../../custom-hooks'

const useStyles = makeStyles({
    root:{
        padding: '0',
        margin: '0'
    },
    
    
    main: {
        backgroundColor: 'green',
        width: '100%',
        height: '100%',
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center',
        position: 'absolute',
    },
    
    main_text:{
        textAlign: 'center',
        position: 'relative',
        top: '30%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        color: 'white',
        fontSize: '48px'
    }
    
})

interface Props{
    title:string
}

export const Home = ( props:Props) => {
    
    
    
    // New classes variable code
    const token = useToken();
    console.log(token)
    const classes = useStyles();
    const auth = useAuth();
    console.log(auth)
        return (
        
            <div className={classes.root}>
                
                <main className={classes.main}>
                    <div className={classes.main_text}>
                        <h1>{ props.title }</h1>
                        <HomeBudgetTable />
                        <HomeIncomeTable />
                    </div>
                </main>
            </div>
        )
    }   
