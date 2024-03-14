import React from 'react';
import { View, Text, TouchableOpacity, ImageBackground, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const MisMain = ({navigation}) => {

  return (
    <ImageBackground
      source={{ uri: 'https://img.freepik.com/premium-photo/business-people-meeting-office-writing-memos-sticky-notes-planning-strategy-brainstorming-colleagues-thinking-concept_1423-3766.jpg?w=1060' }}
      style={styles.backgroundImage}
    >
      <View style={styles.container}>
        <Text style={styles.text}>
          Warp to MIS Reports Universe
        </Text>
        <TouchableOpacity
          style={styles.button}
          onPress={() => navigation.navigate('ExistingUser')}
        >
          <Text style={styles.buttonText}>Begin Your Data Journey</Text>
        </TouchableOpacity>
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
    height:150,
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

export default MisMain;
