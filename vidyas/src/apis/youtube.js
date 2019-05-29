import axios from 'axios';

const KEY = "AIzaSyAQBuX5CDoFIYUrJcUvAE5b-6yN_es91qQ";

// GET https://www.googleapis.com/youtube/v3/search

export default axios.create({
    baseURL: 'https://www.googleapis.com/youtube/v3',
    params: {
        part: 'snippet',
        maxResults: 5,
        key: KEY
    }
});