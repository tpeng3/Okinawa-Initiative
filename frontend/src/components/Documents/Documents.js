import React, { Component } from 'react';
import { withRouter } from 'react-router';
import "./Documents.css";
import { get_documents } from '../../lib/article_api'
import Image from '../Image.js';
var emptydata = {
    author: "",
    body: "",
    date: "",
    id: -1,
    slug: "",
    thumb: "",
    title: ""
}

class Documents extends Component {
    constructor() {
        super();
        this.state = {
            data: []
        }
        get_documents()
            .then(response => {
                // console.log(response)
                let data = response.data;
                // Fill in the empty row 
                for(let i = 0; i < data.length%4; i++){
                    data.push(emptydata);
                }
                this.setState({data:response.data})
            });
    }

    sortAlphabetically(){
        let data = this.state.data.sort(
            function(a,b){
                var textA = a.title.toUpperCase();
                var textB = b.title.toUpperCase();
                // Make sure the empty tiles are in the back
                if(textA == ''){
                    return 1;
                }
                // Sort in alphabetical order 
                return (textA < textB) ? -1 : (textA > textB) ? 1 : 0;
            });
        this.setState({data:data});
    }

    sortNumerically(){
        let data = this.state.data.sort(
            function(a,b){
                var numA = a.id;
                var numB = b.id;
                // Make sure the empty tiles are in the back
                if(numA == -1){
                    return 1;
                }
                // Sort in alphabetical order 
                return (numA < numB) ? -1 : (numA > numB) ? 1 : 0;
            });
        console.log(data);
        this.setState({data:data});
    }

    sortOldest(){
        let data = this.state.data.sort(
            function(a,b){
                var numA = a.id;
                var numB = b.id;
                // Make sure the empty tiles are in the back
                if(numA == -1){
                    return 1;
                }
                // Sort in alphabetical order 
                return (numA < numB) ? 1 : (numA > numB) ? -1 : 0;
            });
        console.log(data);
        this.setState({data:data});
    }

    navigateToDoc(data){
        console.log(data);
        this.props.history.push({
            pathname: '/docpage',
            state: { data: data} 
        });
    }

    createDocument(file){
        return (
            <img src={file.thumb} className="FlexItem" alt="" onClick={this.navigateToDoc.bind(this, file)}/>
        )
    }
    createDocumentItems(data){
        return data.map(this.createDocument.bind(this));
    };

    render(){
        return(
        <div className="documentcon">
            <div id ="doctitle">
                <h1>Welcome to the Documents page!</h1>
                <p>Please browse through our collection of 9000+ Documents!</p>
            </div>
            
            <div class="doc-grid">
                <div className ="filter-box">
                    <div className="FilterButtons">
                        <div className="FlexIt"><center>Filter</center>
                        {/* <a href="#" className="btn btn-primary" role="button">Directives</a>
                        <a href="#" className="btn btn-primary" role="button">Maps</a> */}
                        <a href="#" className="btn btn-primary" role="button" onClick={this.sortAlphabetically.bind(this)}>Alphabetical</a>
                        {/* <a href="#" className="btn btn-primary" role="button" onClick={this.sortNumerically.bind(this)}>Numerical</a> */}
                        <a href="#" className="btn btn-primary" role="button" onClick={this.sortOldest.bind(this)}>Oldest</a>
                        <a href="#" className="btn btn-primary" role="button" onClick={this.sortNumerically.bind(this)}>Most Recent</a></div>
                    </div>
                </div>

                <div className ="documents">
                    <div className="FlexContainer">
                        {this.createDocumentItems(this.state.data)}
                    </div>
                </div>
            </div> 
        </div>
        )
        
    }
}

export default Documents;