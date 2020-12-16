import { StatusBar } from 'expo-status-bar';
import React, {useState, useEffect} from 'react';
import { StyleSheet, Text, View, SafeAreaView, Image, TextInput, Button } from 'react-native';
import apiCalls from './apiCalls.js'
const testName = 'laurenzside';
import HomeScreen from './app/screens/HomeScreen.js'

export default function App() {
  const [channelId , setChannelId] = useState('');
  const [thumbnail , setThumbnail] = useState(null);
  const [description , setDescription] = useState('');
  const [title , setTitle] = useState('');
  const [youtubersName, onChangeText] = useState('');
  const [wantsData, setWantsData] = useState(false);




  // useEffect(() =>{
  //   apiCalls.getChannel(testName)
  //   .then (({ data }) => {
  //     setChannelId(data.items[0].id)
  //     setThumbnail(data.items[0].snippet.thumbnails.default.url)
  //     setDescription(data.items[0].snippet.description)
  //     setTitle(data.items[0].snippet.title)
  //   })
  //   .catch((err) => {
  //     console.log(err)
  //   })
  // }, [])


  return (
    <HomeScreen></HomeScreen>
    // <SafeAreaView style={styles.container}>
    //   <Text style={styles.text} >welcome to viewtubeWatchDog!!</Text>
    //   <TextInput
    //   style={{ height: 40, width: 100, borderColor: 'gray', borderWidth: 1 }}
    //   onChangeText={text => onChangeText(text)}
    //   value={youtubersName}
    //   />
    //   <Image source = {{
    //     width: 60,
    //     height: 60,
    //     uri: thumbnail ? thumbnail: null,
    //   }}/>
    //   <StatusBar style="auto" />
    // </SafeAreaView>
  );
}

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: 'pink',
//     alignItems: 'center',
//     justifyContent: 'center'
//   },
//   text: {
//     height: 100,
//     color: 'blue'
//   }
// });
