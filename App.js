import * as React from 'react';
import { StyleSheet, SafeAreaView } from 'react-native';
// import { StyleSheet, View, Text, SafeAreaView } from 'react-native';

// import { createNativeStackNavigator } from '@react-navigation/native-stack';

import  BottomNavigator  from './components/BottomNavigator';

// const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <BottomNavigator/>
      </SafeAreaView>
  );
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center'
    /*
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    */
  },
});

