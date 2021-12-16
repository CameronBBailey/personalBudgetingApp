import React from 'react';
import { InvestmentTable } from '../../components'
import { useGetDataInvestments } from '../../custom-hooks'
import { InvestmentForm } from '../InputForms';


export const Investments = () => {
    const { investmentData, getData } = useGetDataInvestments()
    return (
        <div>
            <h1>Investments</h1>
            <InvestmentForm />
            <InvestmentTable ></InvestmentTable>
        </div>
    )
}