import React, { Component } from 'react';
import './About.css'

// From https://medium.com/technoetics/create-basic-login-forms-using-create-react-app-module-in-reactjs-511b9790dede
class About extends Component {
  render() {
    return (
        <div>
          
          <div class="bgvid-container">
          <video id="background-vid" iconstyle="100%" margin="auto" autoplay="autoplay" muted loop>
              <source src={require('./website_clip.mp4')} type="video/mp4" />
          </video>
          </div>

            <body>
            <div className="main">
            <h2>Our Mission</h2>
            <p id="mission">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi.</p>
        
            <h1>The Founders</h1>
            <div class="row">
                <div class="column"><img alt="icon" src={require('./Drew_Richardson.jpeg')} onmouseover="this.src='icon2.png';" onmouseout="this.src='icon.png';" style={iconstyle}/><div class="name">MEMBER NAME</div></div>
                <div class="column"><img alt="icon" src={require('./Drew_Richardson.jpeg')} onmouseover="this.src='icon2.png';" onmouseout="this.src='icon.png';" style={iconstyle}/><div class="name">MEMBER NAME</div></div>
                <div class="column"><img alt="icon" src={require('./Drew_Richardson.jpeg')} onmouseover="this.src='icon2.png';" onmouseout="this.src='icon.png';" style={iconstyle}/><div class="name">MEMBER NAME</div></div>
            </div>
        
            <h1>Our Story</h1>
            <p id="desc">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
        
            <h1>The Professionals</h1>
            <p id="desc">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
            <div className="row">
            <div className="column"><img alt="icon" src={require('./Drew_Richardson.jpeg')} style={iconstyle}/></div>
            <div className="column"><img alt="icon" src={require('./Drew_Richardson.jpeg')} style={iconstyle}/></div>
            <div className="column"><img alt="icon" src={require('./Drew_Richardson.jpeg')} style={iconstyle}/></div>
            <div className="column"><img alt="icon" src={require('./Drew_Richardson.jpeg')} style={iconstyle}/></div>
            </div>
        
            <h1>The Team</h1>
            <p id="desc">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
            <div className="row">
            <div className="column"><img alt="icon" src={require('./Drew_Richardson.jpeg')} style={iconstyle}/><img alt="icon" src={require('./Drew_Richardson.jpeg')} style={iconstyle}/><img alt="icon" src={require('./Drew_Richardson.jpeg')} style={iconstyle}/></div>
            <div className="column"><img alt="icon" src={require('./Drew_Richardson.jpeg')} style={iconstyle}/><img alt="icon" src={require('./Drew_Richardson.jpeg')} style={iconstyle}/><img alt="icon" src={require('./Drew_Richardson.jpeg')} style={iconstyle}/></div>
            <div className="column"><img alt="icon" src={require('./Drew_Richardson.jpeg')} style={iconstyle}/><img alt="icon" src={require('./Drew_Richardson.jpeg')} style={iconstyle}/><img alt="icon" src={require('./Drew_Richardson.jpeg')} style={iconstyle}/></div>
            <div className="column"><img alt="icon" src={require('./Drew_Richardson.jpeg')} style={iconstyle}/><img alt="icon" src={require('./Drew_Richardson.jpeg')} style={iconstyle}/><img alt="icon" src={require('./Drew_Richardson.jpeg')} style={iconstyle}/></div>
            </div>
        
            <h1>The Alumni</h1>
            <p id="desc">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
            <div className="row">
            <div className="column"><img alt="icon" src={require('./Drew_Richardson.jpeg')} style={iconstyle}/></div>
            <div className="column"><img alt="icon" src={require('./Drew_Richardson.jpeg')} style={iconstyle}/></div>
            <div className="column"><img alt="icon" src={require('./Drew_Richardson.jpeg')} style={iconstyle}/></div>
            <div className="column"><img alt="icon" src={require('./Drew_Richardson.jpeg')} style={iconstyle}/></div>
            </div>
        
            <h1>The Sponsors</h1>
            <p id="desc">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
            <div className="row">
            <div className="column"><img alt="icon" src={require('./Drew_Richardson.jpeg')} style={iconstyle}/></div>
            <div className="column"><img alt="icon" src={require('./Drew_Richardson.jpeg')} style={iconstyle}/></div>
            <div className="column"><img alt="icon" src={require('./Drew_Richardson.jpeg')} style={iconstyle}/></div>
            <div className="column"><img alt="icon" src={require('./Drew_Richardson.jpeg')} style={iconstyle}/></div>
            </div>
        
            </div>
        </body>
      </div>
    );
  }
}

const iconstyle = {
  width: "200px",
  height: "200px"
};

export default About;
