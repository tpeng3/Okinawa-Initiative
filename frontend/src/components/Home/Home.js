import React, { Component } from 'react';
import './Home.css';
class Home extends Component {
    render(){
        return(
        <div className="home-container">
            <div className="home-left">
                <h1>Okinawa Memory Initiative</h1>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi.</p>
            
                <h1>Our Story</h1>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
            </div>
            <div className="home-center"></div>
            <div className="home-right">
                <img className="home-map" src="https://www.welt-atlas.de/datenbank/karten/karte-6-865.gif"/>
            </div>
        </div>
        )
    }
}


export default Home;