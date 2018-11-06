import React, { Component } from 'react';
import './App.css';
import { Layout, Header, Navigation, Drawer, Content} from "react-mdl";
import Main from './components/main';
import { Link } from 'react-router-dom';

class App extends Component {
  render() {
    return (

      <div className="demo-big-content">
        <Layout>
          <Header className="header-color" title="Okinawa Memory Initiative" scroll>
            <Navigation>
            <Link to="/home">Home</Link>
              <Link to="/about">About</Link>
              <Link to="/thevault">Vault Page</Link>
              <Link to="/documents">Documents</Link>
              <Link to="/events">Events</Link>
              <Link to="/donate">Donate</Link>
              <Link to="/gailproject">Gail Project</Link>
              <Link to="/signin">Sign In</Link>
            </Navigation>
          </Header>
        
          <Drawer title="Okinawa Memory Initiative">
            <Navigation>
            <Link to="/home">Home</Link>
              <Link to="/about">About</Link>
              <Link to="/thevault">Vault Page</Link>
              <Link to="/documents">Documents</Link>
              <Link to="/events">Events</Link>
              <Link to="/donate">Donate</Link>
              <Link to="/gailproject">Gail Project</Link>
              <Link to="/signin">Sign In</Link>
            </Navigation>
          </Drawer>
          <Content>
            <div className="page-content" />
            <Main/> 
          </Content>
        </Layout>

      </div>

    );
  }
}

export default App;
