import React from 'react';

import { useForm, SubmitHandler } from 'react-hook-form';
import { Input } from '../sharedComponents/Input';
import { Button } from '@material-ui/core';
import { useToken } from '../../custom-hooks'
import { investment_server_calls } from '../../api';
import { useAuth, useUser } from 'reactfire';



interface InvestmentState {
    id: number,
	name: string,
	ticker: string,
	amount: number,
	purchaseprice: number,
    token: string,
}



export const InvestmentForm = () => {

   
    const { register, handleSubmit } = useForm<InvestmentState>();
    const auth = useAuth()
    const {status, data:user} = useUser()
    const onSubmit: SubmitHandler<InvestmentState> = (data) => {
        investment_server_calls.create(data)
    }
    
    const onSubmitDelete = (deldata: any) => {
        
        investment_server_calls.delete(deldata)
    }
    if (status !== "loading" && user != null) {
        const token = user.uid
        console.log(token)
    return (
        <div>
            <form onSubmit = {handleSubmit(onSubmit)}>
                
                
                <div>
                    <label htmlFor="name">Investment Name</label>
                    <Input {...register('name')} name="name" placeholder='Name' />
                </div>
                <div>
                    <label htmlFor="ticker"> Ticker</label>
                    <Input {...register('ticker')} name="ticker" placeholder='Ticker' />
                </div>
                <div>
                    <label htmlFor="amount"> Amount</label>
                    <Input {...register('amount')} name="amount" placeholder='Amount' />
                </div>
                <div>
                    <label htmlFor="purchaseprice"> Purchase Price</label>
                    <Input {...register('purchaseprice')} name="purchaseprice" placeholder='Purchase Price' />
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