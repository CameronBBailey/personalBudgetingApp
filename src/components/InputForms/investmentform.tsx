import React from 'react';

import { useForm, SubmitHandler } from 'react-hook-form';
import { Input } from '../sharedComponents/Input';
import { Button } from '@material-ui/core';

import { investment_server_calls } from '../../api';



interface InvestmentState {
    id: number,
	name: string,
	ticker: string,
	amount: number,
	purchaseprice: number
}



export const InvestmentForm = () => {

   
    const { register, handleSubmit } = useForm<InvestmentState>();

    const onSubmit: SubmitHandler<InvestmentState> = (data) => {
        investment_server_calls.create(data)
    }
    
    const onSubmitDelete = (deldata: any) => {
        
        investment_server_calls.delete(deldata)
    }

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
                
                <Button type='submit'>Submit</Button>
            </form>
            
            

        
        </div>
    )
}