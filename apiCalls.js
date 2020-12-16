import axios from 'axios';
const keys = require('./config.js');

const searchChannelUrl = `https://youtube.googleapis.com/youtube/v3/channels?part=snippet%2CcontentDetails%2Cstatistics%2C%20localizations%2C%20topicDetails%2C%20brandingSettings&forUsername=`
const restOfParams = `&maxResults=20&prettyPrint=true&key=${keys.ytKey}`


const getChannel = (youtuberName) => {
  return axios.get(`${searchChannelUrl}${youtuberName}${restOfParams}`);
}

const apiCalls = {
  getChannel : getChannel,
}

export default apiCalls