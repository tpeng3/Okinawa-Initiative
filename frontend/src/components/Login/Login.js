import React, { Component } from 'react';
import './Login.css';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import AppBar from 'material-ui/AppBar';
import RaisedButton from 'material-ui/RaisedButton';
import TextField from 'material-ui/TextField';

// From https://medium.com/technoetics/create-basic-login-forms-using-create-react-app-module-in-reactjs-511b9790dede
class Login extends Component {
  render() {
    return (
        <div>
            <MuiThemeProvider>
                <div>
                <AppBar
             title="Register"
           />
            <div style={center}>
                <TextField
                    hintText="Enter your Username"
                    floatingLabelText="Username"
                    onChange = {(event,newValue) => this.setState({username:newValue})}
                    />
                <br/>
                    <TextField
                    type="password"
                    hintText="Enter your Password"
                    floatingLabelText="Password"
                    onChange = {(event,newValue) => this.setState({password:newValue})}
                    />
                    <br/>
                    <RaisedButton label="Submit" primary={true} style={style} onClick={(event) => this.handleClick(event)}/>
                    <RaisedButton label="Sign Up" primary={true} style={style} onClick={(event) => this.handleClick(event)}/>
                </div>
                </div>
            </MuiThemeProvider>
      </div>
    );
  }
}

const style = {
    margin: 15,
};
const center = {
    margin: "auto",
    width: "35%",
    padding: "10px"
}

export default Login;
