import React from 'react';
import { View, Text, TouchableOpacity, ImageBackground, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const TrackVehicle = () => {
  const navigation = useNavigation();

  return (
    <ImageBackground
      source={{ uri: 'https://img.freepik.com/free-photo/woman-using-smartphone-technology_23-2149491868.jpg?w=360&t=st=1708424156~exp=1708424756~hmac=805e9d58fae3ac101bf30ab4b1cdeca405d4fc67235834565925b14a31ee4a77' }}
      style={styles.backgroundImage}
    >
      <View style={styles.container}>
        <Text style={styles.text}>
          Explore Track My Vehicle for real-time insights on the go!
        </Text>
        <TouchableOpacity
          style={styles.button}
          onPress={() => navigation.navigate('VehicleTracking')}
        >
          <Text style={styles.buttonText}>Track My Vehicle</Text>
        </TouchableOpacity>
      </View>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  backgroundImage: {
    justifyContent: 'center',
    alignItems: 'center',
    height:"100vh",
    paddingVertical:300
  },
  container: {
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    height:170,
    padding: 30,
    borderRadius: 10,
    alignItems: 'center',
  },
  text: {
    fontSize: 20,
    fontWeight: 'bold',
    color: 'white',
    textAlign: 'center',
    marginBottom: 20,
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
});

export default TrackVehicle;
