import React from 'react';
import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './screens/Home/Home';
import Login from './screens/Login/Login';
import Campaigns from './screens/Campaigns/Campaigns';
import CreateCampaign from './screens/CreateCampaign/CreateCampaign';
import Edit from './screens/EditCampaign/Edit';

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/" exact component={Login} />
        <Route path="/home" component={Home} />
        <Route path="/campaigns" component={Campaigns} />
        <Route path="/createCampaign" component={CreateCampaign} />
        <Route path="/edit" component={Edit} />

      </Switch>
    </Router>
  );
}

export default App;
