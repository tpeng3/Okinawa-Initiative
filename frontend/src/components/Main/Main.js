import React from 'react';
import { Switch, Route, BrowserRouter } from 'react-router-dom';
import Home from '../Home/Home';
import Vault from '../Vault/Vault';
import Gallery from '../Gallery/Gallery';
import About from '../About/About';
import Documents from '../Documents/Documents';
import VideoDetails from  '../Details/VidDet';
import ArticleDetails from  '../Details/ArtDet';
import GalleryDetails from  '../Details/GalDet';
import Events from '../Events/Events';
import Donate from '../Donate/Donate';
import GailProject from '../GailProject/GailProject';
import DocPage from '../DocPage/DocPage';
import Videos from '../Videos/Videos';

const Main = () => (
    <BrowserRouter>
    <Switch>
        <Route path="/home" component={Home} />
        <Route path="/about" component={About} />
        <Route path="/thevault" component={Vault} />
        <Route path="/videos" component={Videos} />
        <Route path="/documents" component={Documents} />
        <Route path="/viddet" component={VideoDetails} />
        <Route path="/artdet" component={ArticleDetails} />
        <Route path="/galdet" component={GalleryDetails} />
        <Route path="/gallery" component={Gallery} />
        <Route path="/events" component={Events} />
        <Route path="/donate" component={Donate} />
        <Route path="/gailproject" component={GailProject} />
        <Route
            path="/docpage"
            render={props => <DocPage {...props} />}/>
        <Route path="/" component={Home} />
    </Switch>
    </BrowserRouter>
)

export default Main;