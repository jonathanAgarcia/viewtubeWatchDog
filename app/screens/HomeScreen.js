import React from 'react';
import { ImageBackground, StyleSheet, View, Text, Image, Button, } from "react-native";

function HomeScreen( {navigation}) {
  return (
    <ImageBackground
      style={styles.background}
      source={require("../assets/appbackground.jpg")}>
      <Image
        style= {styles.logo}
        source={require("../assets/updatedlogo1.png")}/>
      <View>
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
    justifyContent: 'center',
    alignItems: 'center',
  },
  logo: {
    width: 250,
    height: 250,
    position: 'absolute',
    top: -30,
  },
  enterButton: {
    margin: 30,
    height: 40,
    width: 80,
    borderWidth: 1,
    borderColor: '#87cefa',
    borderRadius: 100,
    justifyContent: 'center',
    bottom: -60,
    backgroundColor:'#87cefa'
  },
  descriptionContainer:{
    alignSelf: 'auto',
    justifyContent: 'flex-start',
    alignItems: 'center',
  },
  description: {
    alignItems: 'baseline',
    fontStyle: 'italic',
    color: '#083b66',
    fontWeight: 'bold',
    textAlign: 'center'
  }
})

export default HomeScreen;