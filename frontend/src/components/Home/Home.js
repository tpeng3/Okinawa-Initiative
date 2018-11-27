import React, { Component } from 'react';
import './Home.css';
class Home extends Component {
    render(){
        return(
        <div>
            <div className="home-container">
                <div className="home-left">
                    <h1>Okinawa Memory Initiative</h1>
                    <p>An international, public history project that explores the founding years of the American military occupation of Okinawa.</p>
                </div>
                <div className="home-center"></div>
                <div className="home-right">
                    {/* <img className="home-map" src="https://www.welt-atlas.de/datenbank/karten/karte-6-865.gif"/> */}
                </div>
            </div>
            <div>
                <h1>Featured Items</h1>


            </div>
        </div>
        )
    }
}


export default Home;