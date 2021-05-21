import axios from 'axios';

const KEY = 'AIzaSyAxoMFOS09H02fxOYP9GIQKpEoEHqj6u4I';

export default axios.create({
  baseURL: 'https://www.googleapis.com/youtube/v3',
  params: {
    part: 'snippet',
    type: 'video',
    maxResults: 5,
    key: KEY,
  },
});
