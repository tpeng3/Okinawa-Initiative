import React, { Component } from 'react';
import './App.css';
import { Layout, Header, Navigation, Drawer, Content} from "react-mdl";
import Main from '../Main/Main';
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
              <Link to="/thevault">Vault</Link>
              <Link to="/documents">Documents</Link>
              <Link to="/events">Events</Link>
              <a href="https://secure.ucsc.edu/s/1069/index.aspx?sid=1069&gid=1001&pgid=780&cid=1749">Donate</a>
              <a href="https://gailproject.ucsc.edu/">Gail Project</a>
            </Navigation>
          </Header>
        
          <Drawer title="Okinawa Memory Initiative">
            <Navigation>
            <Link to="/home">Home</Link>
              <Link to="/about">About</Link>
              <Link to="/thevault">Vault Page</Link>
              <Link to="/documents">Documents</Link>
              <Link to="/events">Events</Link>
              <a href="https://secure.ucsc.edu/s/1069/index.aspx?sid=1069&gid=1001&pgid=780&cid=1749">Donate</a>
              <a href="https://gailproject.ucsc.edu/">Gail Project</a>
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
