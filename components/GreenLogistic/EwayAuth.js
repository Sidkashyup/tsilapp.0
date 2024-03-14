import React, { useState } from 'react';
import { View, Text, TextInput, Button } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { AntDesign } from '@expo/vector-icons';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { LinearGradient } from 'expo-linear-gradient';

function Ewayauth() {
  const [ewayBillNum, setEwayBillNum] = useState('');
  const navigation = useNavigation();

  const handleSubmit = () => {
    navigation.navigate('GreenForm');
  };

  return (
    <LinearGradient
      colors={['white', 'green']}
      start={{ x: 0, y: 0 }}
      end={{ x: 1, y: 1 }}
      style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}
    >
      <View style={{ backgroundColor: 'white', width: '85%', height: '50%', justifyContent: 'center', alignItems: 'center', borderRadius: 10 }}>
        <Text style={{ fontSize: 24, fontWeight: 'bold', color: '#66bb6a', marginBottom: 10 }}>Let's Fetch</Text>
        <View style={{ borderWidth: 2, width: 50, borderColor: '#66bb6a', marginBottom: 20 }}></View>
        <Text style={{ fontSize: 16, color: '#888', marginBottom: 10 }}>Enter E-Way Bill Number</Text>
        <View style={{ backgroundColor: '#eeeeee', padding: 5, flexDirection: 'row', alignItems: 'center', marginBottom: 20, width: '80%', borderRadius: 5 }}>
          <MaterialCommunityIcons name="ticket-confirmation-outline" size={24} color="#bdbdbd" />
          <TextInput
            style={{ flex: 1, fontSize: 14, marginLeft: 5 , color:"#bdbdbd" }}
            placeholder="E-Way Bill Number"
            onChangeText={(text) => setEwayBillNum(text)}
            value={ewayBillNum}
            keyboardType="numeric"
          />
        </View>
        <View style={{ flexDirection: 'row', justifyContent: 'space-around', width: '100%', paddingBottom: 20,borderRadius: 10 }}>
          <Button
            title="Submit"
            onPress={handleSubmit}
            color="#66bb6a"
          />
        </View>
      </View>
    </LinearGradient>
  );
}

export default Ewayauth;
