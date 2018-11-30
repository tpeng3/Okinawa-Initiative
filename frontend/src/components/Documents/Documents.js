import React, { Component } from 'react';
import "./Documents.css";

class Documents extends Component {
    render(){
        return(
        <div id="main">
        <div>
            <div className ="big-box">
                <div id="jumbotron1">
                    <h1>Welcome to the Documents page!</h1>
                    <p>Please browse through our collection of 9000+ Documents!</p>

                </div>
            </div>
        <div>
         
         <div id="container">
            <div className ="filter-box">
                <div class="FlexCon">
                    <div class="FlexIt">Filter
                    <a href="#" class="btn btn-primary" role="button">Directives</a>
                    <a href="#" class="btn btn-primary" role="button">Maps</a>
                    <a href="#" class="btn btn-primary" role="button">Alphabetical</a>
                    <a href="#" class="btn btn-primary" role="button">Numerical</a>
                    <a href="#" class="btn btn-primary" role="button">Oldest</a>
                    <a href="#" class="btn btn-primary" role="button">Most Recent</a></div>
                </div>
            </div>

            <div className ="documents">
                <div class="FlexContainer">
                  <div class="FlexItem">Protestant Against The Explosion Toll Of Pupils At Camp Hardy</div>
                  <div class="FlexItem">The Five Year Resettlement Plan</div>
                  <div class="FlexItem">Speech to Bolivia Emigrants</div>
                  <div class="FlexItem">MG Directive No. 23</div>
                  <div class="FlexItem">Map of Okinawa</div>
                  <div class="FlexItem">APO 179</div>
                  <div class="FlexItem">Ryukyu Shimpo</div>
                  <div class="FlexItem">Directive No, 131</div>
                  <div class="FlexItem">Okinawa, 1953</div>
                  <div class="FlexItem">Petition from Hideyoshi Uehara</div>
                  <div class="FlexItem">AID 602: Resettlement Expenditures</div>
                  <div class="FlexItem">MG Directive Number 9</div>
                  <div class="FlexItem">Document 13</div>
                  <div class="FlexItem">Document 14</div>
                  <div class="FlexItem">Document 15</div>
                  <div class="FlexItem">Document 16</div>
                  <div class="FlexItem">Document 17</div>
                  <div class="FlexItem">Document 18</div>
                  <div class="FlexItem">Document 19</div>
                  <div class="FlexItem">Document 20</div>
                </div>
                </div>
                </div>
                </div> 
              </div>
            </div>
        )
        
    }
}

export default Documents;