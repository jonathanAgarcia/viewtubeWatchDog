import React from 'react';
import { ImageBackground, StyleSheet, View, Text, Image, Button} from "react-native";

function HomeScreen( {navigation}) {
  return (
    <ImageBackground
      style={styles.background}
      source={require("../assets/appbackground.jpg")}>
      <Image
        style= {styles.logo}
        source={require("../assets/updatedlogo1.png")}/>
      <View style={styles.descriptionContainer}>
        <Text style={styles.description}>A tool for parents to quickly check their childs favorite youtuber without having to search through hundreds of youtube videos</Text>
      </View>
      <View style={styles.enterButton}>
        <Button
          title='ENTER'
          onPress={() =>
          navigation.navigate('search')}
        />
      </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  background: {
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
  logo: {
    width: 250,
    height: 250,
    position: 'absolute',
    top: 30,
  },
  enterButton: {
    width: '100%',
    height: 80,
    backgroundColor: 'green',
    justifyContent: 'center',
    alignItems: 'center',
  },
  descriptionContainer:{
    alignSelf: 'center',
    justifyContent: 'flex-start',
    alignItems: 'center',
  },
  description: {
    marginBottom: 375,
    alignSelf: 'center',
    justifyContent: 'flex-start',
    alignItems: 'center',
    fontStyle: 'italic',
    color: '#083b66',
    fontWeight: 'bold',
    textAlign: 'center'
  }
})

export default HomeScreen;