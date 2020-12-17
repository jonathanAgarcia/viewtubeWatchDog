import React, { useState } from 'react';
import { StyleSheet, Text, View, SafeAreaView, Image, TextInput, Button, TouchableOpacity } from 'react-native';

function SearchScreen({navigation}) {
  const [youtubersName, setName] = useState('');
  const [buttonSelected, setButtonSelected] = useState('');


  return (
    <SafeAreaView style={styles.screenContainer}>
      <Text>Choose how you would like to search</Text>
      <View style ={styles.radioButtons}>
        <TouchableOpacity
          style={styles.userSearchButton}
          onPress={() =>
            setButtonSelected('userSearch')}>
            <Text>By UserName</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.userSearchButton}
          onPress={() =>
            setButtonSelected('channelSearch')}>
            <Text>By Channel ID</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.userSearchButton}
          onPress={() =>
            setButtonSelected('matchSearch')}>
            <Text>By Match</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.inputContainer}>
        <TextInput
        style={styles.inputField}
        onChangeText={text => setName(text)}
        value={youtubersName}
        />
      </View>
      <View style={styles.getInfoButton}>
      <Button
        title='get info'
        onPress={() =>
        navigation.navigate('Results', {name: youtubersName, searchType: buttonSelected})}
       />
      </View>
    </SafeAreaView>
  );
}

  const styles = StyleSheet.create({
    screenContainer:{
      flex: 1,
      justifyContent: 'center',
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
      margin: 10,
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
      margin: 20,
      height: 40,
      width: '50%',
      justifyContent: 'center'
    }
  })
export default SearchScreen;
