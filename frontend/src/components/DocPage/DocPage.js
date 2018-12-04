import React, { Component } from 'react';
import Image from '../Image.js';
// import './DocPage.css';
import data from '../../static/gail_data.json';
import { get_articles } from '../../lib/article_api'
import { withRouter } from 'react-router';

class DocPage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data: {},
        }

        if(this.props.location.state || 0){
            console.log(this.props.location.state)
            this.state.data = this.props.location.state.data
        }
    }

    render(images){
        console.log(this.state.data)
        return(
            <div>
                <h3>{this.state.data.title}</h3>
                <div><img src={this.state.data.thumb} alt=""/></div>
                <div>{this.state.data.date}</div>
                <div>{this.state.data.author}</div>
                <div>{this.state.data.body}</div>
            </div>
        )
    }
}
export default DocPage;