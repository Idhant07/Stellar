import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import HomeScreen from './screens/HomeScreen';
import DailyPicsScreen from './screens/DailyPic';
import SpaceCraftScreen from './screens/SpaceCraft';
import StarMapScreen from './screens/StarMap';
const Stack = createStackNavigator()

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home" screenOptions={{
        headerShown: false
      }}>
    <Stack.Screen name="Home" component={HomeScreen}/>
    <Stack.Screen name="SpaceCrafts" component={SpaceCraftScreen}/>
    <Stack.Screen name="StarMap" component={StarMapScreen}/>
    <Stack.Screen name="DailyPics" component={DailyPicsScreen}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
