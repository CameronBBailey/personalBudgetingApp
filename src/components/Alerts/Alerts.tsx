import React from 'react';
import Button from '@material-ui/core/Button';
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