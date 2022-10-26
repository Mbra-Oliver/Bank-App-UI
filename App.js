/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import {NavigationContainer} from '@react-navigation/native';

import React from 'react';
import {SafeAreaView, StyleSheet, Text} from 'react-native';

import Navigation from './src/routes/Navigation';

const App = () => {
  return (
    <SafeAreaView style={styles.root}>
      <Navigation />
    </SafeAreaView>
  );
};

export default App;

const styles = StyleSheet.create({
  root: {
    flex: 1,
  },
});
