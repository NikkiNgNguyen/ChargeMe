import React, { Component } from "react";
// import Dashboard from "./Views/Dashboard.js";
// import Groups from "./Views/Groups.js";
// import History from "./Views/History.js";
import Home from "./Views/Home.js";
import BillSplit from "./Views/billSplit";
import CreateAccount from "./Views/createAccount";
import CurrentTransactions from "./Views/currentTransactions";
import Help from "./Views/help";
import MainMenu from "./Views/mainMenu";
import Notification from "./Views/notificationSettings";
import Search from "./Views/search";
import Login from "./Views/login";
import FriendsList from "./Views/friendsList";
import ReceiptScanner from "./Views/receiptScanner";
import Navbar from "./Components/Navbar"
import {BrowserRouter, Route,Switch} from "react-router-dom";
class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div>
        <Navbar/>
        <Switch>
        <Route path="/billSplit" component={BillSplit} />
        <Route path="/createAccount" component={CreateAccount} />
        <Route path="/currentTransactions" component={CurrentTransactions} />
        <Route path="/help" component={Help} />
        <Route path="/mainMenu" component={MainMenu} />
        <Route path="/notificationSettings" component={Notification} />
        <Route path="/search" component={Search} />
        <Route path="/login" component={Login} />
        <Route path="/receiptScanner" component={ReceiptScanner} />
        <Route path="/friendsList" component={FriendsList} />
        <Route exact path="/" component={Home} />
        </Switch>
        </div>
    </BrowserRouter>
    );
  }
}
export default App;
