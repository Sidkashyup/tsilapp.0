import React, { useState } from 'react';
import { ScrollView, View, Text, TextInput, TouchableOpacity } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { FontAwesome } from '@expo/vector-icons';

const CustomerGreenCell = ({navigation}) => {
  const [rating, setRating] = useState(0);

  const handleRatingClick = (num) => {
    if (rating < 5 && num === 1) setRating(rating + 1);
    else if (rating > 0 && num === 0) setRating(rating - 1);
  };

  return (
    <LinearGradient colors={['#ffffff', '#66ff66']} style={{ flex: 1 }}>
      <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', padding: 10 }}>
          <View style={{ width: '85%',  backgroundColor: 'white', borderRadius: 10, shadowColor: '#000', shadowOffset: { width: 0, height: 2 }, shadowOpacity: 0.25, shadowRadius: 4, elevation: 5, padding: 30 }}>
            <Text style={{ fontSize: 24, fontWeight: 'bold', color: '#66bb6a', marginBottom: 10, textAlign: 'center' }}>Customer Feedback</Text>
            <View style={{ borderWidth: 2, width: 30, borderColor: '#66bb6a', marginBottom: 20, alignSelf: 'center' }} />
            <Text style={{ color: 'gray', fontSize: 14, marginBottom: 10, textAlign: 'center' }}>Your insights drive our growth. Share your experience.</Text>
            <View style={{ width: '100%', alignItems: 'center' }}>
              <TextInput
                placeholder="Enter Your Message"
                style={{ width: '90%',height:100, backgroundColor: '#f0f0f0', padding: 10, marginBottom: 10, borderRadius: 5 }}
                multiline
              />
              <View style={{ flexDirection: 'row', marginBottom: 10 }}>
                {[...Array(rating)].map((_, index) => (
                  <FontAwesome key={index} name="star" size={32} color="#FFD700" onPress={() => handleRatingClick(0)} />
                ))}
                {[...Array(5 - rating)].map((_, index) => (
                  <FontAwesome key={index} name="star-o" size={32} color="#FFD700" onPress={() => handleRatingClick(1)} />
                ))}
              </View>
              <TouchableOpacity style={{ backgroundColor: '#66bb6a', padding: 10, paddingHorizontal: 20, borderRadius: 20, marginTop: 20 }} onPress={() => navigation.navigate('DrawerNavigator')}>
                <Text style={{ color: 'white', fontSize: 16, fontWeight: 'bold', textAlign: 'center' }}>Submit Feedback</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </ScrollView>
    </LinearGradient>
  );
};

export default CustomerGreenCell;
