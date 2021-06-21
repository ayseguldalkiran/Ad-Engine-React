import React from 'react';
import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './screens/Home/Home';
import Login from './screens/Login/Login';
import SignUp from './screens/SignUp/SignUp';
import Customer from './screens/Customer/Customer';
import Campaigns from './screens/Campaigns/Campaigns';
import PendingCampaigns from './screens/PendingCampaigns/PendingCampaigns';
import CreateCampaign from './screens/CreateCampaign/CreateCampaign';

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/" exact component={Login} />
        <Route path="/signUp" exact component={SignUp} />
        <Route path="/home" component={Home} />
        <Route path="/customer" component={Customer} />
        <Route path="/pendingCampaigns" component={PendingCampaigns} />
        <Route path="/campaigns" component={Campaigns} />
        <Route path="/createCampaign" component={CreateCampaign} />
      </Switch>
    </Router>
  );
}

export default App;
