import React, { Component } from 'react';
import './About.css'

// From https://medium.com/technoetics/create-basic-login-forms-using-create-react-app-module-in-reactjs-511b9790dede
class About extends Component {
  render() {
    return (
        <div>
            <body>
            <div className="main">
            <h2>Our Mission</h2>
            <p id="mission">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi.</p>
        
            <h1>The Founders</h1>
            <div className="row">
                <div className="column"><img alt="icon" src="icon.png" onmouseover="this.src='icon2.png';" onmouseout="this.src='icon.png';" style={width}/>MEMBER NAME</div>
                <div className="column"><img alt="icon" src="icon.png" onmouseover="this.src='icon2.png';" onmouseout="this.src='icon.png';" style={width}/>MEMBER NAME</div>
                <div className="column"><img alt="icon" src="icon.png" onmouseover="this.src='icon2.png';" onmouseout="this.src='icon.png';" style={width}/>MEMBER NAME</div>
            </div>
        
            <h1>Our Story</h1>
            <p id="desc">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
        
            <h1>The Professionals</h1>
            <p id="desc">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
            <div className="row">
            <div className="column"><img alt="icon" src="icon.png" style={width}/></div>
            <div className="column"><img alt="icon" src="icon.png" style={width}/></div>
            <div className="column"><img alt="icon" src="icon.png" style={width}/></div>
            <div className="column"><img alt="icon" src="icon.png" style={width}/></div>
            </div>
        
            <h1>The Team</h1>
            <p id="desc">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
            <div className="row">
            <div className="column"><img alt="icon" src="icon.png" style={width}/><img alt="icon" src="icon.png" style={width}/><img alt="icon" src="icon.png" style={width}/></div>
            <div className="column"><img alt="icon" src="icon.png" style={width}/><img alt="icon" src="icon.png" style={width}/><img alt="icon" src="icon.png" style={width}/></div>
            <div className="column"><img alt="icon" src="icon.png" style={width}/><img alt="icon" src="icon.png" style={width}/><img alt="icon" src="icon.png" style={width}/></div>
            <div className="column"><img alt="icon" src="icon.png" style={width}/><img alt="icon" src="icon.png" style={width}/><img alt="icon" src="icon.png" style={width}/></div>
            </div>
        
            <h1>The Alumni</h1>
            <p id="desc">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
            <div className="row">
            <div className="column"><img alt="icon" src="icon.png" style={width}/></div>
            <div className="column"><img alt="icon" src="icon.png" style={width}/></div>
            <div className="column"><img alt="icon" src="icon.png" style={width}/></div>
            <div className="column"><img alt="icon" src="icon.png" style={width}/></div>
            </div>
        
            <h1>The Sponsors</h1>
            <p id="desc">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
            <div className="row">
            <div className="column"><img alt="icon" src="icon.png" style={width}/></div>
            <div className="column"><img alt="icon" src="icon.png" style={width}/></div>
            <div className="column"><img alt="icon" src="icon.png" style={width}/></div>
            <div className="column"><img alt="icon" src="icon.png" style={width}/></div>
            </div>
        
            </div>
        </body>
      </div>
    );
  }
}

const width = {
  width: "100%"
};

export default About;
