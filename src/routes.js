import React from 'react';
import { Route } from 'react-router';
import App from './components/App';
import Home from './components/views/home';
import BillSplit from './components/views/billSplit';
import CreateAccount from './components/views/createAccount';
import CurrentTransactions from './components/views/currentTransactions';
import Help from './components/views/help';
import MainMenu from './components/views/mainMenu';
import Notification from './components/views/notificationSettings';
import Search from './components/views/search';



export default (
  <Route path='/' component={App}>
    <IndexRoute component={Home} />
    <Route path='billSplit' component={BillSplit} />
    <Route path='createAccount' component={CreateAccount} />
    <Route path='currentTransactions' component={CurrentTransactions} />
    <Route path='help' component={Help} />
    <Route path='mainMenu' component={MainMenu} />
    <Route path='notificationSettings' component={Notification} />
    <Route path='search' component={Search} />
    <Route path='*' component={Home} />
  </Route>
);
