import axios from 'axios'

let url = 'http://django-env.zq9wn6yevd.us-west-2.elasticbeanstalk.com/'

export function get_articles() {
    return axios.get(url + 'api/v1/article/')
}