import React, { Component } from 'react';
//import { Tab, Tabs, Grid, Cell, Card, CardTitle, CardText, CardActions, Button, CardMenu, IconButton } from 'react-mdl';

class Vault extends Component {

    render(){
        return(
            <div className ="category-tabs">

                 <div id="carouselExampleIndicators" class="carousel slide" data-ride="carousel">
  <ol class="carousel-indicators">
    <li data-target="#carouselExampleIndicators" data-slide-to="0" class="active"></li>
    <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
    <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
  </ol>
  <div class="carousel-inner">
    <div class="carousel-item active">
      <img class="d-block w-100" src="http://photoartinc.com/wp-content/uploads/2018/02/battle-of-okinawa-hacksaw-ridge-photos-10.jpg" alt="First slide"/>
        <div class="carousel-caption d-none d-md-block">
            <h5>First Slide</h5>
            <p> Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
        </div>
    </div>
    <div class="carousel-item">
      <img class="d-block w-100" src="https://cdn.japantimes.2xx.jp/wp-content/uploads/2015/04/n-battle-c-20150422-870x698.jpg" alt="Second slide"/>
      <div class="carousel-caption d-none d-md-block">
            <h5>Second Slide</h5>
            <p> Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
        </div>
    </div>
    <div class="carousel-item">
      <img class="d-block w-100" src="https://warontherocks.com/wp-content/uploads/2015/04/24th_marines_wwii_iwo_jima.jpg" alt="Third slide"/>
      <div class="carousel-caption d-none d-md-block">
            <h5>Third Slide</h5>
            <p> Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
        </div>
    </div>
  </div>
  <a class="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="sr-only">Previous</span>
  </a>
  <a class="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="sr-only">Next</span>
  </a>
</div>

               <div className ="vault-grid">
                    {/* <h>  */}
                        <article class="main">
                            <center><h4>Title</h4></center>  
                        </article>
                    {/* </h> */}
                    <aside class="aside aside-1">
                        <center><h5>Description of Article</h5></center> 
                        <p>Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Vestibulum tortor quam, feugiat vitae, ultricies eget, tempor sit amet, ante. Donec eu libero sit amet quam egestas semper. Aenean ultricies mi vitae est. Mauris placerat eleifend leo.</p>
                    </aside>
               </div>
            

               <div className ="Box-grid">
                    <article class="Hard-code-article">
                        <center><h4>Hard Coded Article</h4></center>  
                    </article>
                    <aside class="Subscribe">
                        <center><h4>Like what you see?</h4></center> 
                        <p>
                            Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. 
                            Vestibulum tortor quam, feugiat vitae, ultricies eget, tempor sit amet, ante. Donec eu libero 
                            sit amet quam egestas semper. Aenean ultricies mi vitae est. Mauris placerat eleifend leo.
                            <div><a href="#" class="btn btn-primary" role="button">Add Email</a></div>
                            <div><a href="#" class="btn btn-primary" role="button">Subscribe</a></div>
                        </p>
                    </aside>

               </div>

              <center><h4>Videos</h4></center>
                <div className ="videos">
              <div class="FlexContainer">
                  <div class="FlexItem">Video 1</div>
                  <div class="FlexItem">Video 2</div>
                  <div class="FlexItem">Video 3</div>
                  <div class="FlexItem">View More!</div>
                </div>
                </div>

                <center><h4>Articles</h4></center>
                <div className ="articles">
                 <div class="FlexContainer">
                 <div class="FlexItem">Article 1</div>
                  <div class="FlexItem">Article 2</div>
                  <div class="FlexItem">Article 3</div>
                  <div class="FlexItem">View More!</div>
                </div>
                </div>

                <center><h4>Gallery</h4></center>
                <div className ="gallery">
                 <div class="FlexContainer">
                  <div class="FlexItem">Gallery 1</div>
                  <div class="FlexItem">Gallery 2</div>
                  <div class="FlexItem">Gallery 3</div>
                  <div class="FlexItem">View More!</div>
                </div>
                </div>
            </div>
            
        )
    }
}

export default Vault;
