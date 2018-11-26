import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Home from '../Home/Home';
import Vault from '../Vault/Vault';
import About from '../About/About';
import Documents from '../Documents/Documents';
import Events from '../Events/Events';
import Donate from '../Donate/Donate';
import GailProject from '../GailProject/GailProject';
import Login from '../Login/Login';

const Main = () => (
    <Switch>
        <Route path="/thevault" component={Vault} />
        <Route path="/home" component={Home} />
        <Route path="/about" component={About} />
        <Route path="/documents" component={Documents} />
        <Route path="/events" component={Events} />
        <Route path="/donate" component={Donate} />
        <Route path="/gailproject" component={GailProject} />
        <Route path="/Login" component={Login} />
    </Switch>
)

export default Main;