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
        <Stack.Screen name="Menu" component={Home}/>
        <Stack.Screen name="Créer une liste" component={ListCreator} />
        <Stack.Screen name="Liste" component={List}/>
      </Stack.Navigator>
    </NavigationContainer>
  ); 
}
