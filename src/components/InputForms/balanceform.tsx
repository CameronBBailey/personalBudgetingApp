import React from 'react';

import { useForm, SubmitHandler } from 'react-hook-form';
import { Input } from '../sharedComponents/Input';
import { Button } from '@material-ui/core';
import { useToken } from '../../custom-hooks'
import { balance_server_calls } from '../../api';
import { useAuth, useUser } from 'reactfire';



interface BalanceState {
    id: number,
	name: string,
	amount: number,
	category: string,
    token: string
}



export const BalanceForm = () => {

    const auth = useAuth()
    const { register, handleSubmit } = useForm<BalanceState>();
    const {status, data:user} = useUser()
    const onSubmit: SubmitHandler<BalanceState> = (data) => {
        balance_server_calls.create(data)
    }
    
    const onSubmitDelete = (deldata: any) => {
        
        balance_server_calls.delete(deldata)
    }
    if (status !== "loading" && user != null) {
        const token = user.uid
    return (
        <div>
            <form onSubmit = {handleSubmit(onSubmit)}>
                
                
                <div>
                    <label htmlFor="name">Savings</label>
                    <Input {...register('name')} name="name" placeholder='Name' />
                </div>
                <div>
                    <label htmlFor="amount"> Amount</label>
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
                
                
                <Button variant='contained' color='primary' type='submit'>Submit</Button>
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