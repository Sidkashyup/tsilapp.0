import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity } from 'react-native';

function VehicleRc({ PropAuth, setPropAuth, navigation }) {
  const [isChecked, setIsChecked] = useState(false);

  const handleCheckboxChange = () => {
    setIsChecked(!isChecked);
  };
  const handleButtonClick = () => {
    if (PropAuth) {
      navigation.navigate('DocUpload'); // Navigate to DocUploadPage
    } else {
      navigation.navigate('AuthorizationForm'); // Navigate to AuthPage
    }
    setPropAuth(true);
  };

  return (
    <View style={{ marginTop: 20 }}>
      <View
        style={{
          flexDirection: 'col',
          justifyContent: 'space-between',
          marginBottom: 10,
        }}>
        <Text
          style={{
            textAlign: 'center',
            fontSize: 25,
            fontWeight: 'bold',
            color: '#66bb6a',
          }}>
          Driver Information
        </Text>

        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            paddingTop: 4,
            paddingBottom: 4,
          }}>
          <Text style={{ fontSize: 15, color: '#888888', fontWeight: 'bold' }}>
            License Number
          </Text>
          <Text style={{ fontSize: 15, color: '#888888', fontWeight: 'bold' }}>
            xxxxxx
          </Text>
        </View>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            paddingTop: 4,
            paddingBottom: 4,
          }}>
          <Text style={{ fontSize: 15, color: '#888888', fontWeight: 'bold' }}>
            Driver Name
          </Text>
          <Text style={{ fontSize: 15, color: '#888888', fontWeight: 'bold' }}>
            xxxxxx
          </Text>
        </View>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            paddingTop: 4,
            paddingBottom: 4,
          }}>
          <Text style={{ fontSize: 15, color: '#888888', fontWeight: 'bold' }}>
            Stater
          </Text>
          <Text style={{ fontSize: 15, color: '#888888', fontWeight: 'bold' }}>
            xxxxxx
          </Text>
        </View>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            paddingTop: 4,
            paddingBottom: 4,
          }}>
          <Text style={{ fontSize: 15, color: '#888888', fontWeight: 'bold' }}>
            Date-of-Birth
          </Text>
          <Text style={{ fontSize: 15, color: '#888888', fontWeight: 'bold' }}>
            xxxxxx
          </Text>
        </View>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            paddingTop: 4,
            paddingBottom: 4,
          }}>
          <Text style={{ fontSize: 15, color: '#888888', fontWeight: 'bold' }}>
            Permanent Address
          </Text>
          <Text style={{ fontSize: 15, color: '#888888', fontWeight: 'bold' }}>
            xxxxxx
          </Text>
        </View>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            paddingTop: 4,
            paddingBottom: 4,
          }}>
          <Text style={{ fontSize: 15, color: '#888888', fontWeight: 'bold' }}>
            Expiration Date
          </Text>
          <Text style={{ fontSize: 15, color: '#888888', fontWeight: 'bold' }}>
            xxxxxx
          </Text>
        </View>
      </View>

      {/* Additional driver information fields */}

      <View
        style={{
          flexDirection: 'col',
          justifyContent: 'space-between',
          marginBottom: 10,
        }}>
        <Text
          style={{
            textAlign: 'center',
            fontSize: 25,
            fontWeight: 'bold',
            color: '#66bb6a',
          }}>
          Vehicle Information
        </Text>

        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            paddingTop: 4,
            paddingBottom: 4,
          }}>
          <Text style={{ fontSize: 15, color: '#888888', fontWeight: 'bold' }}>
            Owner Name
          </Text>
          <Text style={{ fontSize: 15, color: '#888888', fontWeight: 'bold' }}>
            xxxxxx
          </Text>
        </View>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            paddingTop: 4,
            paddingBottom: 4,
          }}>
          <Text style={{ fontSize: 15, color: '#888888', fontWeight: 'bold' }}>
            Chassis Number
          </Text>
          <Text style={{ fontSize: 15, color: '#888888', fontWeight: 'bold' }}>
            xxxxxx
          </Text>
        </View>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            paddingTop: 4,
            paddingBottom: 4,
          }}>
          <Text style={{ fontSize: 15, color: '#888888', fontWeight: 'bold' }}>
            Policy Number
          </Text>
          <Text style={{ fontSize: 15, color: '#888888', fontWeight: 'bold' }}>
            xxxxxx
          </Text>
        </View>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            paddingTop: 4,
            paddingBottom: 4,
          }}>
          <Text style={{ fontSize: 15, color: '#888888', fontWeight: 'bold' }}>
            Engine Number
          </Text>
          <Text style={{ fontSize: 15, color: '#888888', fontWeight: 'bold' }}>
            xxxxxx
          </Text>
        </View>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            paddingTop: 4,
            paddingBottom: 4,
          }}>
          <Text style={{ fontSize: 15, color: '#888888', fontWeight: 'bold' }}>
            Fitness Validity
          </Text>
          <Text style={{ fontSize: 15, color: '#888888', fontWeight: 'bold' }}>
            xxxxxx
          </Text>
        </View>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            paddingTop: 4,
            paddingBottom: 4,
          }}>
          <Text style={{ fontSize: 15, color: '#888888', fontWeight: 'bold' }}>
            Permanent Address
          </Text>
          <Text style={{ fontSize: 15, color: '#888888', fontWeight: 'bold' }}>
            xxxxxx
          </Text>
        </View>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            paddingTop: 4,
            paddingBottom: 4,
          }}>
          <Text style={{ fontSize: 15, color: '#888888', fontWeight: 'bold' }}>
            Vehicle Category
          </Text>
          <Text style={{ fontSize: 15, color: '#888888', fontWeight: 'bold' }}>
            xxxxxx
          </Text>
        </View>
      </View>

      {/* Additional vehicle information fields */}

      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'center',
          alignItems: 'center',
          marginTop: 10,
        }}>
        {PropAuth && (
          <View style={{ flexDirection: 'row', alignItems: 'center' }}>
            <TouchableOpacity onPress={handleCheckboxChange}>
              <View
                style={{
                  flexDirection: 'row',
                  alignItems: 'center',
                  marginRight: 5,
                }}>
                <View
                  style={{
                    width: 20,
                    height: 20,
                    borderWidth: 1,
                    borderColor: 'green',
                    justifyContent: 'center',
                    alignItems: 'center',
                  }}>
                  {isChecked && (
                    <View
                      style={{
                        width: 10,
                        height: 10,
                        backgroundColor: 'green',
                        borderRadius: 5,
                      }}
                    />
                  )}
                </View>
                <Text style={{ marginLeft: 5 }}>
                  I/we consent the above Information is true
                </Text>
              </View>
            </TouchableOpacity>
          </View>
        )}
      </View>

      <View
        style={{
          justifyContent: 'center',
          alignItems: 'center',
          marginTop: 10,
        }}>
        <TouchableOpacity
          disabled={PropAuth ? !isChecked : false}
          style={{
            backgroundColor: PropAuth ? (isChecked ? '#66bb6a' : "#a5d6a7") : '#66bb6a',
            borderRadius: 30,
            paddingVertical: 10,
            paddingHorizontal: 20,
          }}>
          <Text
            style={{ color: 'white', fontWeight: 'bold' }}
            onPress={handleButtonClick}>
            {PropAuth ? 'Generate GMN' : 'Authorize'}
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

export default VehicleRc;
