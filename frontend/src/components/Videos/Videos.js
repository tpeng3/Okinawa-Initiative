import React, { Component } from 'react';
import './Videos.css';

class Videos extends Component {
  constructor(props){
    super(props);

    this.state = { 
        data: {},
        videos: [],
        selectedVideo: null
    };

    if(this.props.location.state || 0){
      console.log(this.props.location.state)
      this.state.data = this.props.location.state.data
  }
}

  render() {
    const videoId = this.state.data.url.replace('https://www.youtube.com/watch?v=', '');
    const url = `https://www.youtube.com/embed/${videoId}`;
    return (
      <div id="vidroot">
        <div class="vidcon">
          <div class="video">
            <div className="embed-responsive embed-responsive-16by9">
                <iframe className="embed-responsive-item" src={url}></iframe>
            </div>
            <div className="viddetails">
                <div>{this.state.data.title}</div>
                <div>{this.state.data.body}</div>
            </div>
        </div>
        </div>
      </div>
    );
  }
}

export default Videos;
