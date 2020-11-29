import React, { Componenet, useState } from 'react';
import { Text, View, StyleSheet, TextInput, Button, Modal, TouchableHighlight, FlatList } from 'react-native';
import Constants from 'expo-constants';

export default function App() {
  const [getOriginalPrice,setOriginalPrice] = useState("");
  const [getDiscountPercentage,setDiscountPercentage] = useState("");
  const [getOriginalPriceArray,setOriginalPriceArray] = useState([]);
  const [getDiscountPercentageArray,setDiscountPercentageArray] = useState([]);
  const [getModalVisible, setModalVisible] = useState(false);


  const discountCalculation =()=> {
    if (isNaN(getDiscountPercentage) || isNaN(getOriginalPrice) || (getOriginalPrice < 0) || (getDiscountPercentage < 0) || (getDiscountPercentage > 100))
      return "Please Enter a Positive Number";
    else return (getOriginalPrice / 100) * getDiscountPercentage;
  };
  const finalPriceCalculation =()=> {
    if (isNaN(getDiscountPercentage) || isNaN(getOriginalPrice) || (getOriginalPrice < 0) || (getDiscountPercentage < 0) || (getDiscountPercentage > 100))
      return "Please Enter a Positive Number less than 100";
    else return (getOriginalPrice - (getOriginalPrice / 100) * getDiscountPercentage);
  };
  const saveButton =()=> {
    if (!isNaN(getOriginalPrice) && !isNaN(getDiscountPercentage)) {
      setOriginalPriceArray([...getOriginalPriceArray, getOriginalPrice]);
      setDiscountPercentageArray([...getDiscountPercentageArray, getDiscountPercentage]);
    }
  };

  return (
    <View style={styles.container}>
      <Modal
        animationType="slide"
        transparent={true}
        visible={getModalVisible}
      >
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            <View style={styles.container}>
            <FlatList
              data={getOriginalPriceArray}
              extraData={getDiscountPercentageArray}
              renderItem={({ item, index }) => (
                <View>
                  <Text style={styles.item}>
                    Original Price: {item} 
                    Discount Perecntage:{getDiscountPercentageArray[index]}
                  </Text>
                  <Text style={{textAlign:'center'}}>
                    Final Product Price:{item - (item / 100) * getDiscountPercentageArray[index]}
                  </Text>
                </View>
              )}
            />
          </View>


            <TouchableHighlight
              style={{ ...styles.openButton, backgroundColor: "#2196F3" }}
              onPress={() => {
                setModalVisible(!getModalVisible);
              }}
            >
              <Text style={styles.textStyle}>Hide Modal</Text>
            </TouchableHighlight>
          </View>
        </View>
      </Modal>
      <View style={{alignItems: 'center'}}>
        <Text style={styles.discountHeader}>Discount App</Text>
      </View>
      
      <View style={{width: '95%'}}>
        <View style={styles.inputContainersWithText}>
          <Text>Original Price:</Text>
          <TextInput
            style={styles.inputContainers}
            onChangeText={getOriginalPrice => setOriginalPrice(getOriginalPrice)}
            value={getOriginalPrice}
            keyboardType={'number-pad'}
          />
        </View>
        <View style={styles.inputContainersWithText}>
          <Text>Discount Percentage:</Text>
          <TextInput
            style={styles.inputContainers}
            onChangeText={getDiscountPercentage => setDiscountPercentage(getDiscountPercentage)}
            value={getDiscountPercentage}
            keyboardType={'number-pad'}
          />
        </View>
      </View>
      <View>
        <Text style={styles.inputContainersWithText}>
          Discounted Amount: {discountCalculation()}
        </Text>
        <Text style={styles.inputContainersWithText}>
          Final Price: {finalPriceCalculation()}
        </Text>
      </View>
      <View>
        <Text>{getOriginalPriceArray}</Text>
        <Text>{getDiscountPercentageArray}</Text>
      </View>
      <View>
        <Button 
          onPress={saveButton} 
          title="Save Calculations"
        />
      </View>

      <TouchableHighlight
        style={styles.openButton}
        onPress={() => {
          setModalVisible(true);
        }}
      >
        <Text style={styles.textStyle}>Show Modal</Text>
      </TouchableHighlight>
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
  discountHeader: {
    marginBottom:'50px',
    fontWeight:'bold',
    fontSize: '25px'
  },
  inputContainersWithText: {
    width: '100%',
    flexDirection:'row',
    justifyContent: 'space-between',
    margin: '10px'
  },
  inputContainers: {
    height: '30px',
    backgroundColor:'#ffffff',
    width:'60%'
  },
  
});
