import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack'
const Stack = createStackNavigator()

import Home from './screens/Home'
import ListCreator from './screens/ListCreator'
import List from './screens/List'


export default function App() {
  return (
    
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={Home}/>
        <Stack.Screen name="Create List"  component={ListCreator} />
        <Stack.Screen name="List" component={List}/>
      </Stack.Navigator>
    </NavigationContainer>
  ); 
}
