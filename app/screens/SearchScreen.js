import React, { useState } from 'react';
import { StyleSheet, Text, View, SafeAreaView, Image, TextInput, Button, TouchableOpacity, TouchableWithoutFeedback, Keyboard } from 'react-native';

function SearchScreen({navigation}) {
  const [youtubersName, setName] = useState('');
  const [buttonSelected, setButtonSelected] = useState('');
  const [matchSelected, setMatchButton] = useState(false);
  const [userSelected, setUserMatch] = useState(false);
  const [channelSelected, setChannelButton] = useState(false);


  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
    <SafeAreaView style={styles.screenContainer}>
      <Text>Choose how you would like to search</Text>
        <View style ={styles.radioButtons}>
          <TouchableOpacity
            disabled={userSelected}
            style={styles.userSearchButton}
            onPress={() => {
              setButtonSelected('userSearch')
              setMatchButton(false)
              setUserMatch(true)
              setChannelButton(false)
                }
              }>
              <Text>By UserName</Text>
          </TouchableOpacity>

          <TouchableOpacity
            disabled={channelSelected}
            style={styles.userSearchButton}
            onPress={() => {
              setButtonSelected('channelSearch')
              setMatchButton(false)
              setUserMatch(false)
              setChannelButton(true)
                }
              }>
              <Text>By Channel ID</Text>
          </TouchableOpacity>
          <TouchableOpacity
            disabled={matchSelected}
            style={styles.userSearchButton}
            onPress={() => {
              setButtonSelected('matchSearch')
              setMatchButton(true)
              setUserMatch(false)
              setChannelButton(false)
                }
              }>
              <Text>By Match</Text>
          </TouchableOpacity>
        </View>
      <View style={styles.inputContainer}>
        <TextInput
        clearButtonMode={'always'}
        style={styles.inputField}
        onSubmiteEditing={() => setName('')}
        onChangeText={text => setName(text)}
        value={youtubersName}
        />
      </View>
      <View style={styles.getInfoButton}>
      <Button
        title='Search'
        onPress={() =>
        navigation.navigate('Results', {name: youtubersName, searchType: buttonSelected})}
       />
      </View>
    </SafeAreaView>
    </TouchableWithoutFeedback>
  );
}

  const styles = StyleSheet.create({
    screenContainer:{
      marginTop: 70,
      flex: 1,
      justifyContent: 'flex-start',
      alignItems: 'center'
    },
    radioButtons:{
      flexDirection: 'row',
      margin: 20,
      height: 40,
      width: '100%',
      justifyContent: 'center'
    },
    userSearchButton:{
      flex:1,
      marginLeft: 10,
      marginRight: 10,
      height: 20,
      width: 20,
      borderRadius: 100,
      backgroundColor: '#ccc',
      justifyContent: 'center',
      alignItems: 'center'
    },
    inputContainer:{
      justifyContent: 'center',
      alignItems: 'center'
    },
    inputField:{
      borderWidth: 1,
      position: 'absolute',
      height: 40,
      width: '50%',
      justifyContent : 'center',
      alignItems: 'center'
    },
    getInfoButton: {
      margin: 30,
      height: 40,
      width: 80,
      borderWidth: 1,
      borderRadius: 100,
      justifyContent: 'center'
    }
  })
export default SearchScreen;
