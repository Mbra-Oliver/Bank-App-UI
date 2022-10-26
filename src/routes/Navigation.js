import {View, Text} from 'react-native';
import React from 'react';
import {NavigationContainer} from '@react-navigation/native';

import {createNativeStackNavigator} from '@react-navigation/native-stack';

import Dashboard from '../ecrans/Dashboard';
import Transaction from '../ecrans/Transaction';

const Navigation = () => {
  const Stack = createNativeStackNavigator();
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="dashboard"
        screenOptions={{headerShown: false}}>
        <Stack.Screen name="dashboard" component={Dashboard} />
        <Stack.Screen name="transactions" component={Transaction} />
     
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Navigation;
