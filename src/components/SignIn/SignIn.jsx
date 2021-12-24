import React, {useState} from 'react';
// import { firebase } from 'firebase/app';
import { useAuth, AuthCheck, useUser } from 'reactfire';
import { signInWithPopup, GoogleAuthProvider } from 'firebase/auth';
import { Container, Button, makeStyles, Typography, Snackbar,  } from '@material-ui/core';
import { RouteComponentProps, withRouter } from "react-router-dom";
import {Alert, AlertProps } from '@mui/material';

// Functional Component Created inside of this component
// Will only be used to close snackbar
const MuiAlert = (props) => {
    return <Alert elevation={6} variant='filled' {...props}/>
}


const useStyles = makeStyles({
    googleButton:{
        backgroundColor: 'rgb(66,133,244)',
        marginTop: '2em',
        padding: '0',
        color: 'white',
        height: '100%',
        width: '100%',
        border: 'none',
        textAlign: 'center',
        boxShadow: 'rgb(0 0 0 / 25%) 0px 2px 4px 0px',
        fontSize: '48px',
        lineHeight: '600px',
        display: 'block',
        borderRadius: '1px',
        fontFamily: 'Roboto, arial, sans-serif',
        cursor: 'pointer'
    },
    googleLogo:{
        width: '48px',
        height: '48px',
        display: 'block'
    },
    typographyStyle: {
        fontFamily: 'Roboto, arial, sans-serif;',
        textAlign: 'center',
        fontSize: '2em'
    },
    containerStyle: {
        marginTop: '2em'
    },
    snackBar: {
        color: 'white',
        backgroundColor: '#4caf50'
    }

})

// interface SignInProps{
//     history: RouteComponentProps["history"];
//     location: RouteComponentProps['location'];
//     match: RouteComponentProps['match'];
//   }


export const SignIn = withRouter( (props) => {
    const provider = new GoogleAuthProvider();
    const {userStatus, data: user } = useUser();
    const auth = useAuth();
    // console.log(auth)
    // const currentUser = auth.currentUser
    // console.log(currentUser)
    
    const classes = useStyles();
    const { history } = props
    const [open, setOpen] = useState(false);

    const handleSnackOpen = () => {
        setOpen(true)
    }

    const handleSnackClose = (event, reason) => {
        if(reason === 'clickaway'){
            return;
        }

        setOpen(false)
        history.push('/')
    }

    const sign_in = async () => {
        const response = await signInWithPopup(auth, provider);
        if(response.user){
            handleSnackOpen()
        }
     };
 
    const sign_out = async () => {
        await auth.signOut();
    }

    return (
        <div>
            <Container maxWidth = 'sm' className={classes.containerStyle}>
                
                
                <AuthCheck fallback={
                    <Button className={classes.googleButton} onClick={sign_in}>Sign In</Button>
                }>
                    <Button className={classes.googleButton} variant='contained' color='secondary' onClick={sign_out}>Sign Out</Button>
                </AuthCheck>
                <Snackbar message={'Success'} open={open} autoHideDuration={6000} onClose={handleSnackClose}>
                <Alert onClose={handleSnackClose} severity="success">
                    Successful Sign In - Redirect in 6 secs
                </Alert>
                </Snackbar>

            </Container>
        </div>
    )
})
