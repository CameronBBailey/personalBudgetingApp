import React from 'react';
import { AlertTable } from '../../components'
import { AlertsForm } from '../InputForms/alertsform';

export const Alerts = () => {
    return (
        <div>
            <AlertsForm/>
            <AlertTable />
        </div>
    )
}