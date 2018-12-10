import React, { Component } from 'react';
import Image from '../Image.js';
import './Details.css';
import { get_videos } from '../../lib/article_api'

class VideoDetails extends Component {
    constructor() {
        super();
        this.state = {
            data: []
        }
        get_videos()
            .then(response => {
                this.setState({data:response.data})
            })
    }
    navigateToVid(data){
        this.props.history.push({
            pathname: '/videos',
            state: {data: data} 
        });
    };
    createFile(file){
        return (
            <body>
            <div id='root'></div>
            <div class="doc">
            <div class="side-image">
                <img src={file.thumb} alt="" onClick={this.navigateToVid.bind(this, file)}/>
            </div>
            <div class="info">
            <h3>{file.title}</h3>
            {/* <p id="desc">{file.body}</p> */}
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
export default VideoDetails;