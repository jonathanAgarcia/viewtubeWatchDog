import React, {useState, useEffect} from 'react';
import apiCalls from '../../apiCalls.js';
import { StyleSheet, Text, View, SafeAreaView, Image, TextInput, Button } from 'react-native';

function ResultsScreen({navigation, route}) {

  const [channelId , setChannelId] = useState('');
  const [thumbnail , setThumbnail] = useState(null);
  const [description , setDescription] = useState('');
  const [title , setTitle] = useState('');

    useEffect(() =>{

      let ignore = false;

      function fetchByMatch() {
        console.log('match search just ran')
        apiCalls.getChannelBySearch(route.params.name.split(' ').join('').toLowerCase())
          .then (({ data }) => {
            if (!data.items) {
              navigation.navigate('search')
              alert('No match, please try another name or search type')
              return;
            }
            setChannelId(data.items[0].id.channelId)
            setThumbnail(data.items[0].snippet.thumbnails.default.url)
            setDescription(data.items[0].snippet.description)
            setTitle(data.items[0].snippet.title)
          })
          .catch((err) => {
            navigation.navigate('search')
            alert(err + '\nPlease try another name or search type')
            return;
          })
        }

      function fetchByChannelId() {
        console.log('channel search just ran')
        apiCalls.getChannelByChannelId(route.params.name)
          .then (({ data }) => {
            if (!data.items) {
              navigation.navigate('search')
              alert('No match, please try another name or search type')
              return;
            }
            setChannelId(data.items[0].id.channelId)
            setThumbnail(data.items[0].snippet.thumbnails.default.url)
            setDescription(data.items[0].snippet.description)
            setTitle(data.items[0].snippet.title)
          })
          .catch((err) => {
            navigation.navigate('search')
            alert(err + '\nPlease try another name or search type')
            return;
          })
        }


      function fetchByUserName() {
        console.log('user search just ran')
        apiCalls.getChannelByUserName(route.params.name.split(' ').join('').toLowerCase())
          .then (({ data }) => {
            if (!data.items) {
              navigation.navigate('search')
              alert('No match, please try another name or search type')
              return;
            }
            setChannelId(data.items[0].id)
            setThumbnail(data.items[0].snippet.thumbnails.default.url)
            setDescription(data.items[0].snippet.description)
            setTitle(data.items[0].snippet.title)
          })
          .catch((err) => {
            navigation.navigate('search')
            alert(err + '\nPlease try another name or search type')
            return;
          })
        }

      if (route.params.name.length > 0 && route.params.searchType.length > 0) {
        if (route.params.searchType === 'userSearch') {
          fetchByUserName()
          return () => {
            ignore = true;
          }
        } else if (route.params.searchType === 'channelSearch') {
          fetchByChannelId()
          return () => {
            ignore = true;
          }
        } else if (route.params.searchType === 'matchSearch') {
          navigation.navigate('search')
          alert('match search is under construction');
          return;
          fetchByMatch()
          return () => {
            ignore = true;
          }
        }
    } else {
      alert('please include a name and search type')
      navigation.navigate('search')
      return;
    }
  }, [route.params])

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

export default ResultsScreen;

