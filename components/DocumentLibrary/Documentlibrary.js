import React from 'react';
import { View, Text, TouchableOpacity, ImageBackground, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const DocumentLibrary = ({navigation}) => {
  return (
    <ImageBackground
      source={{ uri: 'https://cdn.pixabay.com/photo/2018/03/05/10/06/wallet-3200395_1280.jpg' }}
      style={styles.backgroundImage}
    >
      <View style={styles.container}>
        <Text style={styles.text}>
          Keeping track of your vehicle documents has never been easier!
        </Text>
        <TouchableOpacity
          style={styles.button}
          onPress={() => navigation.navigate('Verify')}
        >
          <Text style={styles.buttonText}>Show My Papers</Text>
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
    height:200,
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

export default DocumentLibrary;
