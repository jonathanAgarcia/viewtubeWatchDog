import React, { useState } from 'react';
import { StyleSheet, Text, View, SafeAreaView, Image, TextInput, Button } from 'react-native';

function SearchScreen({navigation}) {
  const [youtubersName, setName] = useState('');
  return (
    <SafeAreaView style={styles.screenContainer}>
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
          navigation.navigate('Results', {name: youtubersName})}
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