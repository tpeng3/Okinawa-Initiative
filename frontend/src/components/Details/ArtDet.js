import React, { Component } from 'react';
import Image from '../Image.js';
import './Details.css';
import { get_articles } from '../../lib/article_api'

class ArticleDetails extends Component {
    constructor() {
        super();
        this.state = {
            data: []
        }
        get_articles()
            .then(response => {
                this.setState({data:response.data})
            })
    }
    navigateToDoc(data){
        this.props.history.push({
            pathname: '/docpage',
            state: {data: data} 
        });
    };
    createFile(file){
        return (
            <body>
            <div id='root'></div>
            <div class="doc">
            <div class="side-image">
                <img src={file.thumb} alt="" onClick={this.navigateToDoc.bind(this, file)}/>
            </div>
            <div class="info">
            <h2>{file.title}</h2>
            <p id="desc">{file.body}</p>
                <div class="details"><p id="author"><b>By: </b>{file.author}</p>
                <p id="date"><b>Date Added: </b>{file.date}</p></div>
            </div></div>
            </body>
        )
    }
    createFiles(files){
        return files.map(this.createFile.bind(this));
    };
    render(images){
        console.log(this.state.data)
        return(
            <body>
            <div id='root'></div>
            <div class="doc">
                {this.createFiles(this.state.data)}
            </div>
            </body>
        )
    }
}
export default ArticleDetails;