import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { Button, Nav, Navbar, NavItem, NavDropdown, MenuItem} from 'react-bootstrap';
import { Col, Container, Row, Footer } from "mdbreact";
import "font-awesome/css/font-awesome.min.css";
import "bootstrap-css-only/css/bootstrap.min.css";
import "mdbreact/dist/css/mdb.css";

class App extends Component {
  render() {
    return (
      <div className="App"> 
        <Nav bsStyle="tabs" activeKey="1">
        <NavItem eventKey="0" href="/item">
          Logo
        </NavItem>
        <NavItem eventKey="1" href="/home">
          Home
        </NavItem>
        <NavItem eventKey="2" title="Item">
          About
        </NavItem>
        <NavItem eventKey="3" title="Item">
          The Vault
        </NavItem>
        <NavItem eventKey="4" title="Item">
          Documents
        </NavItem>
        <NavItem eventKey="5" title="Item">
          Events
        </NavItem>
        <NavItem eventKey="6" title="Item">
          Gail Project
        </NavItem>
        <NavDropdown eventKey="7" title="sign-in" id="nav-dropdown">
          <MenuItem eventKey="7.1">Create An Account</MenuItem>
          <MenuItem eventKey="7.2">Another action</MenuItem>
          <MenuItem eventKey="7.3">Something else here</MenuItem>
          <MenuItem divider />
          <MenuItem eventKey="7.4">Separated link</MenuItem>
        </NavDropdown>
      </Nav>
      <Footer color="blue" className="font-small pt-4 mt-4">
  <Container fluid className="text-center text-md-left">
    <Row>
      <Col md="6">
      <h5 className="title">Footer</h5>
      <p>
        Okinawa Project
      </p>
      </Col>
      <Col md="6">
      <h5 className="title">Links</h5>
      <ul>
        <li className="list-unstyled">
          <a href="#!">About Us</a>
        </li>
        <li className="list-unstyled">
          <a href="#!">Contact</a>
        </li>
        <li className="list-unstyled">
          <a href="#!">Resources</a>
        </li>
      </ul>
      </Col>
    </Row>
  </Container>
  <div className="footer-copyright text-center py-3">
    <Container fluid>
      &copy; {new Date().getFullYear()} Copyright:{" "}
      <a href="https://www.MDBootstrap.com"> MDBootstrap.com </a>
    </Container>
  </div>
</Footer>
        {/* <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit! <code>src/App.js</code> and save to reload.
          </p>
          <Button bsStyle = 'success'>Hello</Button>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React!!
          </a>
        </header> */}
      </div>
    );
  }
}

export default App;
