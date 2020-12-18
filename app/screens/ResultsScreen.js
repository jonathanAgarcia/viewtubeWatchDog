import React, {useState, useEffect} from 'react';
import apiCalls from '../../apiCalls.js';
import { StyleSheet, Text, View, SafeAreaView, Image, TextInput, Button, TouchableOpacity, ScrollView} from 'react-native';

function ResultsScreen({navigation, route}) {

  const [channelId , setChannelId] = useState('');
  const [thumbnail , setThumbnail] = useState(null);
  const [description , setDescription] = useState('');
  const [title , setTitle] = useState('');
  const [keyword, setKeyWords] = useState('no key words given');
  const [viewCount, setViewCount] = useState(0)

    useEffect(() =>{

      function fetchByMatch() {
        console.log('match search just ran')
        apiCalls.getChannelBySearch(route.params.name.split(' ').join('').toLowerCase())
          .then (({ data }) => {
            if (!data.items) {
              navigation.navigate('search')
              alert('No match, please try another name or search type')
              return;
            }
             /**I had to add this nested channel search due to the limited data provided
              * with a match search and that my current set up is using the route.params
              * and i need to make the api call with a channel id.
              *
              */
            apiCalls.getChannelByChannelId(data.items[0].id.channelId)
              .then (({ data }) => {
                if (!data.items) {
                  navigation.navigate('search')
                  alert('No match, please try another name or search type')
                  return;
                }
                console.log('nested channel search just ran')
                setViewCount(data.items[0].statistics.viewCount)
                setKeyWords(data.items[0].brandingSettings.channel.keywords)
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
          })
          .catch((err) => {
            navigation.navigate('search')
            alert(err + '\nPlease try another name or search type')
            return;
          })
        }

      function fetchByChannelId() {
        console.log('channel search just ran')
        console.log(channelId)
        apiCalls.getChannelByChannelId(route.params.name)
          .then (({ data }) => {
            if (!data.items) {
              navigation.navigate('search')
              alert('No match, please try another name or search type')
              return;
            }
            setViewCount(data.items[0].statistics.viewCount)
            setKeyWords(data.items[0].brandingSettings.channel.keywords)
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


      function fetchByUserName() {
        console.log('user search just ran')
        apiCalls.getChannelByUserName(route.params.name.split(' ').join('').toLowerCase())
          .then (({ data }) => {
            if (!data.items) {
              navigation.navigate('search')
              alert('No match, please try another name or search type')
              return;
            }
            if (data.items[0].statistics.viewCount < 1000) {
              alert('This may not be the youtuber you are looking for, the view count is less then 1000')
            }
            setViewCount(data.items[0].statistics.viewCount)
            setKeyWords(data.items[0].brandingSettings.channel.keywords)
            setChannelId(data.items[0].id)
            setThumbnail(data.items[0].snippet.thumbnails.medium.url)
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
        } else if (route.params.searchType === 'channelSearch') {
          fetchByChannelId()
        } else if (route.params.searchType === 'matchSearch') {
          /**this was a way to toggel off match search due to api quota issues */

          // navigation.navigate('search')
          // alert('match search is under construction');
          // return;
          fetchByMatch()
        }
    } else {
      alert('please include a name and search type')
      navigation.navigate('search')
      return;
    }
  }, [route.params])

  return (
    <ScrollView>
    <SafeAreaView style={styles.container}>
      <Text style={styles.headline} >This is {title}</Text>
      <Image source = {{
        width: 200,
        height: 200,
        uri: thumbnail ? thumbnail: null,
      }}/>
      <Text style={styles.headline} >This is how {title} describes this channel</Text>
      <Text style={styles.text} >{description}</Text>
      <Text style={styles.headline} >Some keywords {title} associates with this channel</Text>
      <Text style={styles.text} >{keyword ? keyword.split(' ').join(' | ') : `${title} does not provide any keywords for their channel`}</Text>

      <TouchableOpacity
            style={styles.commentsButton}
            onPress={() =>
              navigation.navigate('Comments', {channelId: channelId, channelName:title })
            }>
            <Text>check out some comments</Text>
      </TouchableOpacity>
    </SafeAreaView>
    </ScrollView>
  );
}

  const styles = StyleSheet.create({
  container: {
    marginTop: 70,
    flex: 1,
    alignItems: 'center',
    justifyContent: 'flex-start'
  },
  text: {
    margin: 10,
    alignItems: 'center',
    justifyContent: 'center',
    color: 'black'
  },
  headline: {
    margin: 10,
    fontWeight: 'bold',
  },
  commentsButton: {
      marginTop: 50,
      height: 40,
      width: 200,
      borderRadius: 100,
      backgroundColor: '#87cefa',
      justifyContent: 'center',
      alignItems: 'center',
      borderColor: '#87cefa'
  }
});

export default ResultsScreen;

