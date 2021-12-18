import React from 'react';
import { AlertTable } from '../../components'
import { AlertsForm } from '../InputForms/alertsform';
import { makeStyles } from '@material-ui/core';
const useStyles = makeStyles({
    main:
    {padding: '4rem',
     
} 
})
export const Alerts = () => {
    const classes = useStyles();
    return (
        <div className={classes.main}>
            <h1>Alerts</h1>
            <AlertsForm/>
            <AlertTable />
        </div>
    )
}