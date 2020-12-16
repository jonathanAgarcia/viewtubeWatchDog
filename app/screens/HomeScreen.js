import React from 'react';
import { ImageBackground, StyleSheet, View, Text, Image} from "react-native";

function HomeScreen(props) {
  return (
    <ImageBackground style={styles.background} source={require("../assets/appbackground.jpg")}>
      <Image style= {styles.logo} source={require("../assets/applogo.png")}/>
      <View style={styles.enterButton}>
        <Text>ENTER</Text>
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
  }
})

export default HomeScreen;