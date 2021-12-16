import React from 'react';
import { makeStyles } from '@material-ui/core';
import Button from '@material-ui/core/Button';
import { green } from '@material-ui/core/colors';

import { Link } from 'react-router-dom';


const useStyles = makeStyles({
    root:{
        padding: '0',
        margin: '0'
    },
    navbar_container: {
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    
    
    logo_navigation: {
        listStyle: 'none',
        textTransform: 'uppercase',
        textDecoration: 'none'
    },
    navigation: {
        display: 'flex'
    },
    nav_a:{
        display: 'block',
        padding: '1em',
        color: 'black'
    },
    
})




export const NavBar = () => {

    
    const classes = useStyles();

    return (
        <div className={classes.root}>
            {/*New and Updated HTML Code */}
            <nav>
                <div className={classes.navbar_container}>
                    <ul className={ `${classes.navigation} ${classes.logo_navigation}` }>
                        <li>
                            <Link to='/' className={classes.nav_a}>Home</Link>
                        </li>
                        <li>
                            <Link to="/calendar" className={classes.nav_a}>Calendar</Link>
                        </li>
                        <li>
                            <Link to="/expenses" className={classes.nav_a}>Expenses</Link>
                        </li>
                        <li>
                            <Link to='/balance'  className={classes.nav_a}>Balance</Link>
                        </li>
                        <li>
                            <Link to="/investments" className={classes.nav_a}>Investments</Link>
                        </li>
                        <li>
                            <Link to="/alerts" className={classes.nav_a}>Alerts</Link>
                        </li>
                        <li>
                            <Link to="/signin" className={classes.nav_a}>SignIn</Link>
                        </li>
                    </ul>
                </div>
            </nav>
        </div>
    )
}