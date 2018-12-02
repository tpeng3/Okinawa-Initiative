import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Home from '../Home/Home';
import Vault from '../Vault/Vault';
import About from '../About/About';
import Documents from '../Documents/Documents';
import Details from  '../Details/Details';
import Events from '../Events/Events';
import Donate from '../Donate/Donate';
import GailProject from '../GailProject/GailProject';
import DocPage from '../DocPage/DocPage';

const Main = () => (
    <Switch>
        <Route path="/thevault" component={Vault} />
        <Route path="/home" component={Home} />
        <Route path="/about" component={About} />
        <Route path="/documents" component={Documents} />
        <Route path="/details" component={Details} />
        <Route path="/events" component={Events} />
        <Route path="/donate" component={Donate} />
        <Route path="/gailproject" component={GailProject} />
        <Route
            path="/docpage"
            render={props => <DocPage {...props} />}/>
        <Route path="/" component={Home} />
    </Switch>
)

export default Main;