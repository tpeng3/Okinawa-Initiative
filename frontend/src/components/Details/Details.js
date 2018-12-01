import React, { Component } from 'react';
import Image from './Image.js';
import './Details.css';
import data from '../../static/gail_data.json';
import { get_articles } from '../../lib/article_api'

class Details extends Component {
    constructor() {
        super();
        this.state = {
            data: []
        }
        get_articles()
            .then(response => {
                this.setState({data:response.data})
                console.log(response)
            })
    }

    componentWillMount() {
        get_articles()
            .then(response => {
                this.setState({data:response.data})
                console.log(response)
            })
    }

    createImage(image){
        return <Image source={image} key={image} />;
    };
    createFile(file){
        return (
            <body>
            <div id='root'></div>
            <div class="doc">
            <div id="side-image">
                <Image source={file.thumb} key={file.thumb}/>
            </div>
            <div class="info">
            <h2>{file.title}</h2>
            <p id="desc">{file.slug}</p>
                <div class="details"><p id="author"><b>By: </b>{file.author}</p>
                <p id="date"><b>Date Added: </b>{file.date}</p></div>
            </div></div>
            </body>
        )
    }
    createFiles(files){
        return files.map(this.createFile);
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
export default Details;