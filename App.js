import 'react-native-gesture-handler';
import { StatusBar } from 'expo-status-bar';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import React, {useState, useEffect} from 'react';
import { StyleSheet, Text, View, SafeAreaView, Image, TextInput, Button } from 'react-native';
import apiCalls from './apiCalls.js';
//const testName = 'laurenzside';
import HomeScreen from './app/screens/HomeScreen.js';
import SearchScreen from './app/screens/SearchScreen.js';
import ResultsScreen from './app/screens/ResultsScreen.js';
const Stack = createStackNavigator();


function App() {
  const [channelId , setChannelId] = useState('');
  const [thumbnail , setThumbnail] = useState(null);
  const [description , setDescription] = useState('');
  const [title , setTitle] = useState('');
  const [youtubersName, onChangeText] = useState('');
  const [wantsData, setWantsData] = useState(false);


  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name='Home' component={HomeScreen}/>
        <Stack.Screen name='search' component={SearchScreen}/>
        <Stack.Screen name='Results' component={ResultsScreen}/>
      </Stack.Navigator>
    <StatusBar style="auto" />
    </NavigationContainer>
  );
}


export default App;


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
