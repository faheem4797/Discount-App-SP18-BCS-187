import React, { Componenet, useState } from 'react';
import { Text, View, StyleSheet, TextInput } from 'react-native';
import Constants from 'expo-constants';

export default function App() {
  const [getInput,setInput] = useState("");
  return (
    <View>
      <View style={{width: '100%', flexDirection:'row'}}>
        <Text>Original Price:</Text>
        <TextInput
          style={{height: '40px', backgroundColor:'orange',width:'100%'}}
          onChangeText={getInput => setInput(getInput)}
          defaultValue={getInput}
        />
      </View>
      <View style={{width: '100%', flexDirection:'row'}}>
        <Text>Discount Percentage:</Text>
        <TextInput
          style={{height: '40px', backgroundColor:'orange',width:'100%'}}
          onChangeText={getInput => setInput(getInput)}
          defaultValue={getInput}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    paddingTop: Constants.statusBarHeight,
    backgroundColor: '#ecf0f1',
    padding: 8,
  },
  paragraph: {
    margin: 24,
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
  },
});
