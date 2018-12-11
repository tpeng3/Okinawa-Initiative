import React, { Component } from 'react';
import "./Gallery.css";
import { get_articles } from '../../lib/article_api'

class Gallery extends Component {
    constructor() {
        super();
        this.state = {
            data: []
        }
        get_articles()
            .then(response => {
                this.setState({data:response.data})
            });
    };
    navigateToDoc(data){
        this.props.history.push({
            pathname: '/docpage',
            state: {data: data} 
        });
    };
    createGalleryPics(file){
        return (
            <div className="carousel-item">
            <img className="d-block w-100" src={file.thumb} alt="Second slide" onClick={this.navigateToDoc.bind(this, file)}/>
            <div className="gallery-caption d-none d-md-block">
                <div id="carousel-text">
                <h5><b>Seed Store</b></h5>
                <p>"This is a seed store. The old gent has made himself a pair of bifocals by taping two pairs of glasses together. Hi is using the far vision through the top pai only now, but back to his newspapers he will look through both. Notice the cans in the back made out of old beer cans. The tin shps make most of their products out of empty beer cans, funnels, pencil boxes, and cartons & boxes of all sizes. You will notice he smokes Camel cigarettes with an ivory holder, and the dragon ash tray is Okinawan pottery. Oh, on the extreme left at the level of his shoulder is a funnel made of old Shlitz cans."</p>
                </div>
            </div>
        </div>
        )
    };
    createGalleryItems(data){
        return data.map(this.createGalleryPics.bind(this));
    };
    render(){
        return(
            <div className ="category-tabs">
 
            <div id="galleryExampleIndicators" className="carousel slide" data-ride="carousel">
            <ol className="gallery-indicators">
            <li data-target="#galleryExampleIndicators" data-slide-to="0" className="active"></li>
            </ol>
            <div className="gallery-inner">
                <div className="carousel-item active">
                <img className="d-block w-100" src="https://gailproject.ucsc.edu/files/fullsize/b216fd90cd505896d93f1bcdf67c6bcd.jpg" alt="First slide"/>
                    <div className="gallery-caption d-none d-md-block">
                        <div id="carousel-text">
                        <h5 id="carousel-text"><b>Tatooed Hand</b></h5>
                        <p id="carousel-text"> This old lady has the tattooed hands and was smoking a cigarette with the holder which turns up at the end. They are very common here. Also from her behavior while I was taking the picture. I decided she was also quite familiar with saki. The lady in the background is grinding beans in a mortor and pestal type grinder.</p>
                        </div>
                    </div>
                </div>
                {this.createGalleryItems(this.state.data)}
            </div>

            <a className="gallery-control-prev" href="#galleryExampleIndicators" role="button" data-slide="prev">
                <span className="gallery-control-prev-icon" aria-hidden="true"></span>
                <span className="sr-only">Previous</span>
            </a>
            <a className="gallery-control-next" href="#galleryExampleIndicators" role="button" data-slide="next">
                <span className="gallery-control-next-icon" aria-hidden="true"></span>
                <span className="sr-only">Next</span>
            </a>
            </div>
        </div>
        )
    }
}

export default Gallery;
