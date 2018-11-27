import React, { Component } from 'react';

let Image = function statelessFunctionComponentClass(props){
    let source = props.source;
    // document.getElementById("title").innerHTML = props.title;
    let style = {
        width: '200px',
        margin: '10px 5px 0px 5px'
    };

    return (
        <div>
        <img src={source} style={style}/>
        </div>
    );
};

export default Image;