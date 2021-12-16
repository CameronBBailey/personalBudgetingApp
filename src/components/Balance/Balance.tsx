import React from 'react';
import { BalanceForm } from '../InputForms/balanceform';
import { BalanceTable } from '../Tables/BalanceTable';


export const Balance = () => {
    return (
        <div>
        <BalanceForm ></BalanceForm>
        <BalanceTable ></BalanceTable>
        </div>
    )
}