import axios from 'axios';
const keys = require('./config.js');

const searchByUserNameUrl = `https://youtube.googleapis.com/youtube/v3/channels?part=snippet%2CcontentDetails%2Cstatistics%2C%20localizations%2C%20topicDetails%2C%20brandingSettings&forUsername=`;
const searchByUserParams = `&maxResults=20&prettyPrint=true&key=${keys.ytKey}`;

const searchByNameMatchUrl = `https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=10&q=`;
const searchByNameParams = `&type=channel&key=${keys.ytKey}`;

const getChannelByUserName = (youtuberName) => {
  return axios.get(`${searchByUserNameUrl}${youtuberName}${searchByUserParams}`);
}

const getChannelBySearch = (searchName) => {
  return axios.get(`${searchByNameMatchUrl}${searchName}${searchByNameParams}`);
}



const apiCalls = {
  getChannelByUserName : getChannelByUserName,
}

export default apiCalls