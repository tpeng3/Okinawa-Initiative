import React, { Component } from 'react';
import Image from './Image.js';
import './Documents.css';
import data from './data.json';

class Documents extends Component {
    createImage(image){
        return <Image source={image} key={image} />;
    };
    createImages(images){
        return images.map(this.createImage);
    };
    render(images){
        return(
            <body>
            <div id='root'></div>
            <div class="doc">
                {this.createImages(data.images)}
                {/* <img alt="icon" src="icon.png" onmouseover="this.src='icon2.png';" onmouseout="this.src='icon.png';" style={width}/> */}
            <div id="side-image"></div>
            <div class="info">
            <h2>Title: Lorem ipsum dolor sit amet</h2>
            <p id="desc">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi.</p>
            <div class="details"><p id="author"><b>By: </b></p><p id="date"><b>Date Added: </b></p></div>
            </div></div>
            {/* {this.createImages(data.images)} */}
            </body>
        )
    }
}

const width = {
    width: "100%"
  };

export default Documents;