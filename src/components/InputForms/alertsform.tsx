import React from 'react';

import { useForm, SubmitHandler } from 'react-hook-form';
import { Input } from '../sharedComponents/Input';
import { Button } from '@material-ui/core';

import { alerts_server_calls } from '../../api';



interface AlertsState {
    id: number,
	alerttext: string,
	condition: number,
	userid: string
}



export const AlertsForm = () => {

   
    const { register, handleSubmit } = useForm<AlertsState>();

    const onSubmit: SubmitHandler<AlertsState> = (data) => {
        alerts_server_calls.create(data)
    }
    
    const onSubmitDelete = (deldata: any) => {
        
        alerts_server_calls.delete(deldata)
    }

    return (
        <div>
            <form onSubmit = {handleSubmit(onSubmit)}>
                
                
                <div>
                    <label htmlFor="alerttext">Alert Text</label>
                    <Input {...register('alerttext')} name="alerttext" placeholder='Alert Text' />
                </div>
                <div>
                    <label htmlFor="condition"> Condition</label>
                    <Input {...register('condition')} name="condition" placeholder='Condition' />
                </div>
                <div>
                    <label htmlFor="userid"> User ID</label>
                    <Input {...register('userid')} name="userid" placeholder='User ID' />
                </div>
                
                <Button type='submit'>Submit</Button>
            </form>
            
            

        
        </div>
    )
}