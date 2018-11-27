import React, { Component } from 'react';
import logo from '../../logo.svg';
import './App.css';
import Login from '../Login/Login';
import SignUp from '../SignUp/SignUp';
import About from '../About/About';
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
              <Link to="/thevault">Vault Page</Link>
              <Link to="/documents">Documents</Link>
              <Link to="/details">Details</Link>
              <Link to="/events">Events</Link>
              <Link to="/donate">Donate</Link>
              <Link to="/gailproject">Gail Project</Link>
              <Link to="/Login">Sign In</Link>
            </Navigation>
          </Header>
        
          <Drawer title="Okinawa Memory Initiative">
            <Navigation>
            <Link to="/home">Home</Link>
              <Link to="/about">About</Link>
              <Link to="/thevault">Vault Page</Link>
              <Link to="/documents">Documents</Link>
              <Link to="/details">Details</Link>
              <Link to="/Events">Events</Link>
              <Link to="/donate">Donate</Link>
              <Link to="/gailproject">Gail Project</Link>
              <Link to="/Login">Sign In</Link>
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
