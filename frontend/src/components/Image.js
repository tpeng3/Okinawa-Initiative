import React from 'react';

let Image = function statelessFunctionComponentClass(props){
    let source = props.source;
    // document.getElementById("title").innerHTML = props.title;
    let style = {
        width: '300px',
        margin: '10px 5px 0px 5px'
    };

    return (
        <div>
        <img src={source} style={style} alt=""/>
        </div>
    );
};

export default Image;