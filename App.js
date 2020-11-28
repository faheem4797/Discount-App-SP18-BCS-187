import React, { Componenet, useState } from 'react';
import { Text, View, StyleSheet, TextInput } from 'react-native';
import Constants from 'expo-constants';

export default function App() {
  const [getOriginalPrice,setOriginalPrice] = useState("");
  const [getDiscountPercentage,setDiscountPercentage] = useState("");


  const discountCalculation =()=> {
    return (getOriginalPrice / 100) * getDiscountPercentage;
  };
  const finalPriceCalculation =()=> {
    return (
      getOriginalPrice - (getOriginalPrice / 100) * getDiscountPercentage);
  };


  return (
    <View>
      <View style={{width: '100%', flexDirection:'row'}}>
        <Text>Original Price:</Text>
        <TextInput
          style={{height: '40px', backgroundColor:'orange',width:'60%'}}
          onChangeText={getOriginalPrice => setOriginalPrice(getOriginalPrice)}
          value={getOriginalPrice}
          keyboardType={'number-pad'}
        />
      </View>
      <View style={{width: '100%', flexDirection:'row'}}>
        <Text>Discount Percentage:</Text>
        <TextInput
          style={{height: '40px', backgroundColor:'orange',width:'60%'}}
          onChangeText={getDiscountPercentage => setDiscountPercentage(getDiscountPercentage)}
          value={getDiscountPercentage}
          keyboardType={'number-pad'}
        />
      </View>
      <Text>
        Discounted Amount: {discountCalculation()}</Text>
        <Text>
          Final Price: {finalPriceCalculation()}
        </Text>
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
