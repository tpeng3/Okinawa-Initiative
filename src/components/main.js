import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Home from './home';
import Vault from './thevault';
import About from './about';
import Documents from './documents';
import Events from './events';
import Donate from './donate';
import GailProject from './gailproject';
import SignIn from './signin';

const Main = () => (
    <Switch>
        <Route path="/thevault" component={Vault} />
        <Route path="/home" component={Home} />
        <Route path="/about" component={About} />
        <Route path="/documents" component={Documents} />
        <Route path="/events" component={Events} />
        <Route path="/donate" component={Donate} />
        <Route path="/gailproject" component={GailProject} />
        <Route path="/signin" component={SignIn} />
    </Switch>
)

export default Main;