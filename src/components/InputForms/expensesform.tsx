import React, { useEffect, useState } from 'react';

import { useForm, SubmitHandler } from 'react-hook-form';
import { Input } from '../sharedComponents/Input';
import { Button } from '@material-ui/core';

import { expenses_server_calls } from '../../api';
import { useAuth, useUser } from 'reactfire';
import './expensesForm.css';
import { stderr } from 'process';


interface ExpensesState {
    id: number,
	name: string,
	amount: number,
	category: string,
    token: string,
    month: number,
    year: number
}



export const ExpensesForm =  () => {

    const { register, handleSubmit } = useForm<ExpensesState>();
    const auth = useAuth()
    const [currentUser, setCurrentUser] = useState<any>()
    const {status, data:user} = useUser()
    auth.onAuthStateChanged(() =>{setCurrentUser(auth.currentUser)})
    let currentdate = new Date();
    let currentmonth = currentdate.getMonth().toString()
    let currentyear = currentdate.getFullYear().toString()

    const date = `${currentmonth}-${currentyear}`
    
    
    
    
    
    

    const onSubmit: SubmitHandler<ExpensesState> = (data) => {
        console.log(data)
        expenses_server_calls.create(data)
    }
    
    const onSubmitDelete = (deldata: any) => {
        
        expenses_server_calls.delete(deldata)
    }

    if (status !== "loading" && user != null) {
        const token = user.uid
    return (
        
        <div>
            <form onSubmit = {handleSubmit(onSubmit)}>
                
                
                <div>
                    <label htmlFor="name">Expense Name</label>
                    <Input {...register('name')} name="name" placeholder='Name' />
                </div>
                <div>
                    <label htmlFor="amount"> Cost</label>
                    <Input {...register('amount')} name="amount" placeholder='Amount' />
                </div>
                <div>
                    <label htmlFor="category"> Category</label>
                    <Input {...register('category')} name="category" placeholder='Category' />
                </div>
                <div className='tokenform'>
                    <label htmlFor="token"> Category</label>
                    <Input {...register('token')} name="token" value={token} />
                </div>
                <div className='tokenform'>
                    <label htmlFor="month"> Category</label>
                    <Input {...register('month')} name="month" value={currentmonth} />
                </div>
                <div className='tokenform'>
                    <label htmlFor="year"> Category</label>
                    <Input {...register('year')} name="year" value={currentyear} />
                </div>
                <Button variant='contained' type='submit' color='primary'>Submit</Button>
            </form>
            
            

        
        </div>
    )
}
else if (status != "loading" && user === null) {
    return <h1>Please log in</h1>
}

else {
    
    return <h1>loading</h1>

}}