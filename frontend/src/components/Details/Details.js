import React, { Component } from 'react';
import Image from './Image.js';
import './Details.css';
import data from '../../static/gail_data.json';

class Details extends Component {
    createImage(image){
        return <Image source={image} key={image} />;
    };
    createFile(file){
        return (
            <body>
            <div id='root'></div>
            <div class="doc">
            <div id="side-image">
                <Image source={file.image} key={file.image}/>
            </div>
            <div class="info">
            <h2>{file.title}</h2>
            <p id="desc">{file.desc}</p>
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
        return(
            <body>
            <div id='root'></div>
            <div class="doc">
                {this.createFiles(data.files)}
            </div>
            </body>
        )
    }
}
export default Details;