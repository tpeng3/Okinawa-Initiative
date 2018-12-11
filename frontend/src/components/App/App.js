import React, { Component } from 'react';
import './App.css';
import { Layout, Header, Navigation, Drawer, Content} from "react-mdl";
import Main from '../Main/Main';
import { Link, Router } from 'react-router-dom';
import * as ReactMDL from 'react-mdl';
// import '../../extra/material.js';

class App extends Component {
  render() {
    return (
      <div className="demo-big-content">
        <Layout>
          <Header className="header-color" title="Okinawa Memory Initiative" scroll>
            <Navigation>
              <a href="/home">Home</a>
              <a href="/about">About</a>
              <a href="/thevault">Vault</a>
              <a href="/documents">Documents</a>
              <a href="/events">Events</a>
              <a href="https://secure.ucsc.edu/s/1069/index.aspx?sid=1069&gid=1001&pgid=780&cid=1749">Donate</a>
              <a href="https://gailproject.ucsc.edu/">Gail Project</a>
            </Navigation>
          </Header>
        
          <Drawer title="Okinawa Memory Initiative">
            <Navigation>
              <a href="/home">Home</a>
              <a href="/about">About</a>
              <a href="/thevault">Vault</a>
              <a href="/documents">Documents</a>
              <a href="/events">Events</a>
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
