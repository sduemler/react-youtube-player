import axios from 'axios';

const KEY = 'AIzaSyC_zkZm9ZffKQBT5A4eJrCo3--o-bbIEL0';

export default axios.create({
    baseURL:  'https://www.googleapis.com/youtube/v3',
    params: {
        part: 'snippet',
        maxResults: 5,
        key: KEY
    }
});