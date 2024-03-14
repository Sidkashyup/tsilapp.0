import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, ImageBackground } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const GreenLogistic = ({navigation}) => {
  const [num,setNum]=useState(0);
  const handleCarbonFoot=()=>{
    setNum(20);
  };
  const handleInTransit=()=>{
    setNum(7);
  };
  const handleDeliver=()=>{
    setNum(10);
  };
  return (
    <ImageBackground
      source={{ uri: 'https://cdn.pixabay.com/photo/2016/11/17/10/04/road-1831154_1280.jpg' }}
      style={styles.backgroundImage}
    >
      <View style={{flexDirection:"column",justifyContent:"space-between"}}>
      <View style={styles.container}>
        <Text style={styles.text}>
          Experience the Paperless and secure-digital green logistics!
        </Text>
        <TouchableOpacity
          style={styles.button}
          onPress={() => navigation.navigate('Ewayauth')}
        >
          <Text style={styles.buttonText}>Green Logistics</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.container2}>
        <Text style={styles.text}>
          Historical Statistical Data
        </Text>
        <View style={{flexDirection:"row",justifyContent:"space-evenly"}}>
        <TouchableOpacity
          style={styles.button2}
          onPress={handleInTransit}
        >
          <Text style={styles.buttonText2}>In-Transit</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.button2}
          onPress={handleDeliver}
        >
          <Text style={styles.buttonText2}>Delivered</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.button2}
          onPress={handleCarbonFoot}
        >
          <Text style={styles.buttonText2}>Carbon Footprint saved</Text>
        </TouchableOpacity>
        </View>
        <Text style={styles.text3}>{num}</Text>
        </View>
      </View>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  backgroundImage: {
    display:"flex",
    justifyContent: 'center',
    alignItems: 'center',
    height:"100vh",
    paddingVertical:300
  },
  container: {
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    height:250,
    padding: 30,
    borderRadius: 10,
    alignItems: 'center',
  },
  container2: {
    
    height:250,
    padding: 30,
    borderRadius: 10,
    alignItems: 'center',
  },
  text: {
    fontSize: 24,
    fontWeight: 'bold',
    color: 'white',
    textAlign: 'center',
    marginBottom: 20,
  },
  text3: {
    fontSize: 18,
    fontWeight: 'bold',
    color: 'white',
    textAlign: 'center',
    marginTop: 10,
  },
  button: {
    borderWidth: 2,
    borderColor: '#66bb6a',
    backgroundColor: '#66bb6a',
    borderRadius: 25,
    paddingVertical: 10,
    paddingHorizontal: 25,
  },
  buttonText: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 16,
  },
  button2: {
    borderWidth: 2,
    borderColor: '#66bb6a',
    backgroundColor: '#66bb6a',
    borderRadius: 25,
    paddingVertical: 10,
    paddingHorizontal: 12,
    marginRight:5,
    marginLeft:5
  },
  buttonText2: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 10,
  },
});

export default GreenLogistic;
