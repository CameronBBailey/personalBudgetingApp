import React from 'react';

import { useForm, SubmitHandler } from 'react-hook-form';
import { Input } from '../sharedComponents/Input';
import { Button } from '@material-ui/core';

import { balance_server_calls } from '../../api';



interface BalanceState {
    id: number,
	name: string,
	amount: number,
	category: string
}



export const BalanceForm = () => {

   
    const { register, handleSubmit } = useForm<BalanceState>();

    const onSubmit: SubmitHandler<BalanceState> = (data) => {
        balance_server_calls.create(data)
    }
    
    const onSubmitDelete = (deldata: any) => {
        
        balance_server_calls.delete(deldata)
    }

    return (
        <div>
            <form onSubmit = {handleSubmit(onSubmit)}>
                
                
                <div>
                    <label htmlFor="name">Balance change name</label>
                    <Input {...register('name')} name="name" placeholder='Name' />
                </div>
                <div>
                    <label htmlFor="amount"> amount</label>
                    <Input {...register('amount')} name="amount" placeholder='Amount' />
                </div>
                <div>
                    <label htmlFor="category"> Category</label>
                    <Input {...register('category')} name="category" placeholder='Category' />
                </div>
                
                <Button type='submit'>Submit</Button>
            </form>
            
            

        
        </div>
    )
}