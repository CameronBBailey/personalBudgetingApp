import React from 'react';
import { makeStyles } from '@material-ui/core';
import { Link } from 'react-router-dom';
import { AuthCheck } from 'reactfire'; // New Import
import { Suspense } from 'react';


const useStyles = makeStyles({
    root:{
        padding: '0',
        margin: '0'
    },
    navbar_container: {
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        backgroundColor: 'limegreen',
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
        padding: '1.3em',
        color: 'black',
        fontWeight: 'bold',
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
                        <Suspense fallback={'loading...'}>
                        <AuthCheck fallback={
                            <li>
                            <Link to="/signin" className={classes.nav_a}>SignIn/SignOut</Link>
                        </li>
                        }>
                        <li>
                            <Link to="/calendar" className={classes.nav_a}>Calendar</Link>
                        </li>
                        <li>
                            <Link to="/expenses" className={classes.nav_a}>Expenses</Link>
                        </li>
                        <li>
                            <Link to='/balance'  className={classes.nav_a}>Savings</Link>
                        </li>
                        <li>
                            <Link to="/investments" className={classes.nav_a}>Investments</Link>
                        </li>
                        <li>
                            <Link to="/alerts" className={classes.nav_a}>Alerts</Link>
                        </li>
                        <li>
                            <Link to="/signin" className={classes.nav_a}>SignIn/SignOut</Link>
                        </li>
                        <li>
                            <Link to="/Budget" className={classes.nav_a}>Budget</Link>
                        </li>
                        </AuthCheck>
                        </Suspense>
                    </ul>
                </div>
            </nav>
        </div>
    )
}