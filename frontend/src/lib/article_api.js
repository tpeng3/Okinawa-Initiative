import axios from 'axios'

// The url that points to our Django backend
let url = 'http://django-env.zq9wn6yevd.us-west-2.elasticbeanstalk.com/'
// let url = 'http://localhost:8000/'

// To use this api, you must first download in your browser a plug-in to 
// allow cross-origin resource sharing 
// https://chrome.google.com/webstore/detail/allow-control-allow-origi/nlfbmbojpeacfghkpbjhddihlkkiljbi?hl=en

export function get_articles() {
    return axios.get(url + 'api/v1/article/')
}

export function get_documents() {
    return axios.get(url + 'api/v1/document/')
}

export function get_videos() {
    return axios.get(url + 'api/v1/videos/')
}