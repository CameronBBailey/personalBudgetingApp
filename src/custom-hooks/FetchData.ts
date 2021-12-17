import React, { useState, useEffect } from 'react';
import { investment_server_calls, alerts_server_calls, balance_server_calls, expenses_server_calls } from '../api';

import { useAuth } from 'reactfire'










export const useGetDataInvestments = () => {
    const [investmentData, setData] = useState<any>([]);

    async function handleDataFetch(){
        const result = await investment_server_calls.get();
        setData(result)
    }

    // Introducing the useEffect Hook to add our data to react State
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

    // Introducing the useEffect Hook to add our data to react State
    useEffect( () => {
        handleDataFetch();
    }, [])

    return {alertData, getData:handleDataFetch}
}


export const useGetDataBalance = () => {
    const [balanceData, setData] = useState<any>([]);

    async function handleDataFetch(){
        const result = await balance_server_calls.get();
        setData(result)
    }

    // Introducing the useEffect Hook to add our data to react State
    useEffect( () => {
        handleDataFetch();
    }, [])

    return {balanceData, getData:handleDataFetch}
}


export const useGetDataExpenses = () => {
    const [expenseData, setData] = useState<any>([]);

    async function handleDataFetch(){
        const result = await expenses_server_calls.get();
        setData(result)
    }

    // Introducing the useEffect Hook to add our data to react State
    useEffect( () => {
        handleDataFetch();
    }, [])

    return {expenseData, getData:handleDataFetch}
}





