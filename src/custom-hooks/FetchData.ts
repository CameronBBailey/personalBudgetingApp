import React, { useState, useEffect } from 'react';
import { investment_server_calls, alerts_server_calls, balance_server_calls, expenses_server_calls } from '../api';
import { useUser } from 'reactfire'
import { useAuth } from 'reactfire'


export const useToken = () => {
    const {status, data:user} =  useUser()
    if (status !== "loading" && user != null) {
        return (
            user.uid
        )
    } else {
        return(
            'loading'
        )
    }
    
}



export const useGetDataInvestments = (token:any) => {
    const [investmentData, setData] = useState<any>([]);

    async function handleDataFetch(){
        const result = await investment_server_calls.get(token);
        setData(result)
    }

    
    useEffect( () => {
        handleDataFetch();
    }, [])

    return {investmentData, getData:handleDataFetch}
}


export const useGetDataAlerts = () => {
    const [alertData, setData] = useState<any>([]);

    async function handleDataFetch(){
        const result = await alerts_server_calls.get();
        setData(result)
    }

    
    useEffect( () => {
        handleDataFetch();
    }, [])

    return {alertData, getData:handleDataFetch}
}


export const useGetDataBalance = (token:any) => {
    const [balanceData, setData] = useState<any>([]);

    async function handleDataFetch(){
        const result = await balance_server_calls.get(token);
        setData(result)
    }

    
    useEffect( () => {
        handleDataFetch();
    }, [])

    return {balanceData, getData:handleDataFetch}
}


export const useGetDataExpenses = (token:any) => {
    const [expenseData, setData] = useState<any>([]);
    async function handleDataFetch(){
        const result = await expenses_server_calls.get(token);
        setData(result)
    }

    
    useEffect( () => {
        handleDataFetch();
    }, [])

    return {expenseData, getData:handleDataFetch}
}





