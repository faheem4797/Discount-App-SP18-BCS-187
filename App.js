import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      
      <Text style={styles.text1}> Name: Hamza Rehman</Text>
      <Text style={styles.text2}> Reg. No: FA17-BCS-049</Text>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#eff542',
    alignItems: 'center',
    justifyContent: 'center',
    fontSize: 15,
  },
  text1:{
    fontSize:20,
    fontWeight: 'bold',
  },
  text2: {
    fontSize: 25,
    fontStyle: "italic",
  }
});
