import React, { Component } from 'react';
import YTSearch from 'youtube-api-search';
import VideoDetail from './video_detail';
import './Videos.css';
const API_KEY = 'AIzaSyBdVut9QCzqAHBzfDEh30yUp4E529som6s';

class Videos extends Component {
  constructor(props){
    super(props);

    this.state = { 
        videos: [],
        selectedVideo: null
    };

    this.videoSearch('Okinawa History');
}

videoSearch(searchTerm) {
  YTSearch({key: API_KEY, term: searchTerm}, (data) => {
    console.log(data);
      this.setState({ 
          videos: data,
          selectedVideo: data[0]
      });
  });
}

  render() {
    return (
      <div id="vidroot">
        <div class="vidcon">
          <VideoDetail video={this.state.selectedVideo}/>
        </div>
      </div>
    );
  }
}

export default Videos;
