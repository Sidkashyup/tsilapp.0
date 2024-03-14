import React, { useState } from 'react';
import { View, Text, TextInput, ScrollView, TouchableOpacity, Image } from 'react-native';
import { MdConfirmationNumber, MdEmail } from 'react-icons/md';
import { FaTruck, FaUser } from 'react-icons/fa';
import { LinearGradient } from 'expo-linear-gradient'; // Import at the top
import PopupImage from "./pyimg.jpeg"
import VehicleRc from './VehicleRc';


function GreenForm({ formData, greenFormInfo, setGreenFormInfo , navigation }) {
  const [payment, setPayment] = useState(false);
  const [showPopup, setShowPopup] = useState(false);
  const [popupContent, setPopupContent] = useState(null);
  const [PropAuth,setPropAuth]=useState(false);
  const handleChange = (name, value) => {
    setGreenFormInfo({ ...greenFormInfo, [name]: value });
  };

  const closePopup = () => {
    setShowPopup(false);
    setPayment(true);
  };

  const Paymentgo = () => {
    // Assuming PopupImage is imported from somewhere else
setPopupContent(
  <Image
    source={require('./pyimg.jpeg')}
    style={{ borderRadius:20, width: '300%', height: '310%', transform: [{ scale: 0.3 }] }}
  />
);
    setShowPopup(true);
  };

  return (
    
    <View style={styles.container}>
      <LinearGradient
        colors={['white', '#4CAF50']}
        start={[0, 0]}
        end={[1, 1]}
        style={styles.gradient}
      >
        <View style={[styles.innerContainer, {  flex: 1, justifyContent: 'center' , }]}>

         <ScrollView style={{ flex: 1 , marginTop:10 , marginBottom: 10 }}>
          <View style={{ marginHorizontal: 20, backgroundColor: 'white', padding: 20, borderRadius: 10  }}>
      <Text style={{ fontSize: 24, fontWeight: 'bold', color: '#66bb6a', marginBottom: 10 , marginLeft: 80  }}>Green Form</Text>
            
            <View style={{ marginBottom: 10 }}>
              <View style={{ backgroundColor: '#eeeeee', flexDirection: 'row', alignItems: 'center', borderRadius: 5, marginBottom: 10 }}>
                <TextInput
                  style={{ flex: 1, backgroundColor: '#eeeeee', padding: 10 }}
              placeholder="Vehicle Number"
                  // onChangeText={(value) => handleChange('GRNumber', value)}
                />
              </View>
              <View style={{ backgroundColor: '#eeeeee', flexDirection: 'row', alignItems: 'center', borderRadius: 5, marginBottom: 10 }}>
                <TextInput
                  style={{ flex: 1, backgroundColor: '#eeeeee', padding: 10 }}
              placeholder="GR Number"
                  // onChangeText={(value) => handleChange('GRNumber', value)}
                />
              </View>
              <View style={{ backgroundColor: '#eeeeee', flexDirection: 'row', alignItems: 'center', borderRadius: 5, marginBottom: 10 }}>
                <TextInput
                  style={{ flex: 1, backgroundColor: '#eeeeee', padding: 10 }}
                                placeholder="Date"
                  // value={greenFormInfo.Date}
                  onChangeText={(value) => handleChange('Date', value)}
                />
              </View>
                <View style={{ backgroundColor: '#eeeeee', flexDirection: 'row', alignItems: 'center', borderRadius: 5, marginBottom: 10 }}>
                <TextInput
                  style={{ flex: 1, backgroundColor: '#eeeeee', padding: 10 }}
                                placeholder="Driver License Number"

                  // value={greenFormInfo.Date}
                  onChangeText={(value) => handleChange('Date', value)}
                />
              </View>
                <View style={{ backgroundColor: '#eeeeee', flexDirection: 'row', alignItems: 'center', borderRadius: 5, marginBottom: 10 }}>
                <TextInput
                  style={{ flex: 1, backgroundColor: '#eeeeee', padding: 10 }}
                  // value={greenFormInfo.Date}
                                placeholder="Driver Number"

                  onChangeText={(value) => handleChange('Date', value)}
                />
              </View>
                <View style={{ backgroundColor: '#eeeeee', flexDirection: 'row', alignItems: 'center', borderRadius: 5, marginBottom: 10 }}>
                <TextInput
                  style={{ flex: 1, backgroundColor: '#eeeeee', padding: 10 }}
                                placeholder="Source Email"

                  // value={greenFormInfo.Date}
                  onChangeText={(value) => handleChange('Date', value)}
                />
              </View>
                <View style={{ backgroundColor: '#eeeeee', flexDirection: 'row', alignItems: 'center', borderRadius: 5, marginBottom: 10 }}>
                <TextInput
                  style={{ flex: 1, backgroundColor: '#eeeeee', padding: 10 }}
                                placeholder="Source Number"
                  // value={greenFormInfo.Date}
                  onChangeText={(value) => handleChange('Date', value)}
                />
              </View>
                <View style={{ backgroundColor: '#eeeeee', flexDirection: 'row', alignItems: 'center', borderRadius: 5, marginBottom: 10 }}>
                <TextInput
                  style={{ flex: 1, backgroundColor: '#eeeeee', padding: 10 }}
                                placeholder="Destination Email"
                  // value={greenFormInfo.Date}
                  onChangeText={(value) => handleChange('Date', value)}
                />
              </View>
                 <View style={{ backgroundColor: '#eeeeee', flexDirection: 'row', alignItems: 'center', borderRadius: 5, marginBottom: 10 }}>
                <TextInput
                  style={{ flex: 1, backgroundColor: '#eeeeee', padding: 10 }}
              placeholder="Destination Number"
                  // value={greenFormInfo.Date}
                  onChangeText={(value) => handleChange('Date', value)}
                />
              </View>
            </View>

            {/* Additional input fields */}

            <View style={{ flexDirection: 'row', justifyContent: 'space-evenly', paddingBottom: 10 }}>
              {!payment && (
                <TouchableOpacity
              style={{ borderWidth: 2, borderColor: '#66bb6a', backgroundColor: '#66bb6a', borderRadius: 30, paddingVertical: 10, paddingHorizontal: 20 }}
              onPress={Paymentgo}
            >
              <Text style={{ color: 'white', fontWeight: 'bold' }}>Payment Gateway</Text>
            </TouchableOpacity>
              )}
                      {payment && <VehicleRc PropAuth={PropAuth} setPropAuth={setPropAuth} navigation={navigation}/>}

            </View>
          </View>

          {showPopup && (
            <TouchableOpacity onPress={closePopup} style={{  position: 'absolute', top: 0, left: 0, right: 0, bottom: 0, backgroundColor: 'rgba(0, 0, 0, 0.5)', justifyContent: 'center', alignItems: 'center' }}>
              <View style={{ justifyContent: 'center', alignItems: 'center',  width: "90%", height: "90%" }}>
                {popupContent}
              </View>
            </TouchableOpacity>
          )}
          </ScrollView>
        </View>
      </LinearGradient>
    </View>
  );
}

const styles = {
  container: {
    flex: 1,
  },
  gradient: {
    flex: 1,
  },
  innerContainer: {
    flex: 1,
  },
};

export default GreenForm;
