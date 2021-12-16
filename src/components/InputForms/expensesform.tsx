import React from 'react';

import { useForm, SubmitHandler } from 'react-hook-form';
import { Input } from '../sharedComponents/Input';
import { Button } from '@material-ui/core';

import { expenses_server_calls } from '../../api';



interface ExpensesState {
    id: number,
	name: string,
	amount: number,
	category: string
}



export const ExpensesForm = () => {

   
    const { register, handleSubmit } = useForm<ExpensesState>();

    const onSubmit: SubmitHandler<ExpensesState> = (data) => {
        expenses_server_calls.create(data)
    }
    
    const onSubmitDelete = (deldata: any) => {
        
        expenses_server_calls.delete(deldata)
    }

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
                    <label htmlFor="category"> Purchase Price</label>
                    <Input {...register('category')} name="category" placeholder='Category' />
                </div>
                
                <Button type='submit'>Submit</Button>
            </form>
            
            

        
        </div>
    )
}