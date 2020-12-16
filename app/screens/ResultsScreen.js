import React, {useState, useEffect} from 'react';
import apiCalls from '../../apiCalls.js';
import { StyleSheet, Text, View, SafeAreaView, Image, TextInput, Button } from 'react-native';

function ResultsScreen({navigation, route}) {

  const [channelId , setChannelId] = useState('');
  const [thumbnail , setThumbnail] = useState(null);
  const [description , setDescription] = useState('');
  const [title , setTitle] = useState('');

    useEffect(() =>{
    apiCalls.getChannelByUserName(route.params.name.split(' ').join('').toLowerCase())
    .then (({ data }) => {
      setChannelId(data.items[0].id)
      setThumbnail(data.items[0].snippet.thumbnails.default.url)
      setDescription(data.items[0].snippet.description)
      setTitle(data.items[0].snippet.title)
    })
    .catch((err) => {
      console.log(err)
    })
  }, [])

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.text} >welcome to viewtubeWatchDog!!</Text>
      <Image source = {{
        width: 60,
        height: 60,
        uri: thumbnail ? thumbnail: null,
      }}/>
    </SafeAreaView>
  );
}

  const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  },
  text: {
    height: 100,
    color: 'blue'
  }
});

// function getYouTubersChannelInfo (name) {
//   apiCalls.getChannel(name)
//     .then (({ data }) => {
//       setChannelId(data.items[0].id)
//       setThumbnail(data.items[0].snippet.thumbnails.default.url)
//       setDescription(data.items[0].snippet.description)
//       setTitle(data.items[0].snippet.title)
//     })
//     .catch((err) => {
//       console.log(err)
//     })
// }

export default ResultsScreen;