import 'react-native-gesture-handler';
import { StatusBar } from 'expo-status-bar';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import React from 'react';
import HomeScreen from './app/screens/HomeScreen.js';
import SearchScreen from './app/screens/SearchScreen.js';
import ResultsScreen from './app/screens/ResultsScreen.js';

const Stack = createStackNavigator();

function App() {
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


