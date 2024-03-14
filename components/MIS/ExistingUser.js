import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient'; // Import LinearGradient
import { MdOutlineConfirmationNumber } from 'react-icons/md';
// import { View, Text, TextInput, TouchableOpacity, Picker } from "react-native";
import { MaterialIcons } from '@expo/vector-icons'; // Import MaterialIcons from Expo
// Assuming you are using React Navigation for navigation

function Tripgo({ navigation }) {
  // React Navigation hook for navigation
  const [selectPart, setSelectPart] = useState('Select Item');

  const handleChange = (value) => {
    setSelectPart(value);
  };

  return (
    <View style={{ flex: 1 }}>
      <LinearGradient
        colors={['white', '#66bb6a']}
        start={[0, 0]}
        end={[1, 1]}
        style={{ flex: 1 }}>
        <View
          style={{
            flex: 1,
            justifyContent: 'center',
            alignItems: 'center',
            paddingEnd: 20,
          }}>
          <View
            style={{
              width: '90%',
              height: 'auto',
              backgroundColor: 'white',
              borderWidth: 2,
              borderRadius: 10,
              borderColor: '#66bb6a',
              padding: 20,
            }}>
            <Text
              style={{
                textAlign: 'center',
                fontSize: 24,
                fontWeight: 'bold',
                color: '#66bb6a',
                marginBottom: 10,
              }}>
              Let's Start
            </Text>
            <View
              style={{
                justifyContent: 'center',
                alignItems: 'center',
                borderWidth: 2,
                borderColor: '#66bb6a',
                marginBottom: 10,
                marginLeft: 85,
                marginEnd: 85,
                width: '40%',
              }}></View>
            <Text
              style={{
                textAlign: 'center',
                color: 'gray',
                marginBottom: 10,
                fontSize: 16,
              }}>
              Enter E-Way Bill Number
            </Text>
            <View
              style={{
                backgroundColor: 'lightgray',
                flexDirection: 'row',
                alignItems: 'center',
                marginBottom: 10,
                borderRadius: 5,
                padding:10,
              }}>
              <MaterialIcons
                name="confirmation-number"
                size={24}
                color="gray"
                style={{ marginRight: 10 }}
              />
              <TextInput
                style={{ flex: 1, backgroundColor: 'lightgray' }}
                placeholder="E-Way Bill Number"
              />
            </View>
            <TouchableOpacity onPress={() => navigation.navigate('MisReport')}>
              <View
                style={{
                  textAlign: 'center',
                  borderWidth: 2,
                  borderColor: '#66bb6a',
                  backgroundColor: '#66bb6a',
                  borderRadius: 30,
                  paddingVertical: 5,
                  paddingHorizontal: 10,
                }}>
                <Text
                  style={{
                    textAlign: 'center',
                    color: 'white',
                    fontWeight: 'bold',
                  }}>
                  Submit
                </Text>
              </View>
            </TouchableOpacity>

            <View
              style={{
                alignItems: 'center',
                marginTop: 60,
                borderWidth: 2,
                borderColor: '#66bb6a',
                width: '100%',
              }}></View>

            <View
              style={{
                textAlign: 'center',
                justifyContent: 'center',
                alignItems: 'center',
                margin: 10,
                fontSize: 100,
                fontWeight: 100,
              }}>
              <Text
                style={{
                  textAlign: 'center',
                  color: 'gray',
                  marginBottom: 10,
                  fontSize: 16,
                }}>
                Historical Data
              </Text>

              <View
                style={{
                  flexDirection: 'row',
                  justifyContent: 'space-between',
                }}>
                <TouchableOpacity
                  style={{ flex: 1, marginRight: 10 }}
                  onPress={() => navigation.navigate('MisReport')}>
                  <View
                    style={{
                      textAlign: 'center',
                      borderColor: '#66bb6a',
                      backgroundColor: '#66bb6a',
                      borderRadius: 30,
                      paddingVertical: 5,
                      paddingHorizontal: 10,
                    }}>
                    <Text
                      style={{
                        textAlign: 'center',
                        color: 'white',
                        fontWeight: 'bold',
                      }}>
                      Delivered
                    </Text>
                  </View>
                </TouchableOpacity>

                <TouchableOpacity
                  style={{ flex: 1, marginLeft: 10 }}
                  onPress={() => navigation.navigate('InTransitMis')}>
                  <View
                    style={{
                      textAlign: 'center',
                      borderColor: '#66bb6a',
                      backgroundColor: '#66bb6a',
                      borderRadius: 30,
                      paddingVertical: 5,
                      paddingHorizontal: 10,
                    }}>
                    <Text
                      style={{
                        textAlign: 'center',
                        color: 'white',
                        fontWeight: 'bold',
                      }}>
                      Intransit
                    </Text>
                  </View>
                </TouchableOpacity>
              </View>
            </View>
          </View>
        </View>
      </LinearGradient>
    </View>
  );
}

export default Tripgo;
