import React, { Component } from 'react';
import './DocPage.css';

class DocPage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data: {},
        }

        if(this.props.location.state || 0){
            this.state.data = this.props.location.state.data
        }
    }

    render(images){
        return(
            <div className="docpage">
                <h3>{this.state.data.title}</h3>
                <div id="docpic"><img src={this.state.data.thumb} alt=""/></div>
                <div>{this.state.data.body}</div>
                <div>{this.state.data.author}</div>
                <div>{this.state.data.date}</div>
            </div>
        )
    }
}
export default DocPage;