import React from 'react';
import ReactDOM from 'react-dom';
import { Home, Calendar, SignIn, Expenses, Investments, Balance, Alerts, NavBar } from './components';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter as Router, Switch, Route} from 'react-router-dom';

import './styles.css'
import { Provider } from 'react-redux';


import { FirebaseAppProvider, AuthCheck } from 'reactfire'; 
import 'firebase/auth'; 
import { firebaseConfig } from './firebaseConfig' 

ReactDOM.render(
  <React.StrictMode>
    <FirebaseAppProvider firebaseConfig={firebaseConfig}>
    <Router>
      <NavBar></NavBar>
      <Switch>

        <Route exact path='/'>
          <Home title={'Personal Budgeting App'}/>
        </Route>

        <Route path='/calendar'>
          <Calendar></Calendar>
        </Route>

        <Route path='/signin'>
          <SignIn></SignIn>

        </Route>
        <Route path='/balance'>
          <Balance></Balance>

        </Route>
        <Route path='/expenses'>
          <Expenses></Expenses>

        </Route>
        <Route path='/investments'>
          <Investments></Investments>
        </Route>

        <Route path='/alerts'>
          <Alerts></Alerts>
        </Route>

      </Switch>
    </Router>
    </FirebaseAppProvider>
  </React.StrictMode>,
  document.getElementById('root')
);
// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
