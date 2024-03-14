import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { Entypo } from '@expo/vector-icons';
import { FontAwesome5 } from '@expo/vector-icons';
import { FontAwesome6 } from '@expo/vector-icons';
import { FontAwesome } from '@expo/vector-icons';
import { Fontisto } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons';
import { Linking } from 'react-native';

const ContactUs = () => {
  const openTwitter = () => {
    Linking.openURL('https://x.com/Transvue?t=aopqYWPyDZHrXLAYgGbdPw&s=09');
  };

  return (
    <LinearGradient colors={['#ffffff', '#66bb6a']} style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollViewContent}>
        <View style={styles.wrapper}>
          <View style={[styles.card, {  }]}>
            <Text style={styles.title}>Get In Touch</Text>
            <View style={styles.divider}></View>
            <View style={styles.form}>
              <TextInput style={styles.input} placeholder="Enter Your Name" />
              <TextInput
                style={styles.input}
                placeholder="Enter Your Email Address"
                keyboardType="email-address"
              />
              <TextInput
                style={styles.input}
                placeholder="Enter Your Phone Number"
                keyboardType="phone-pad"
              />
              <TextInput
                style={[styles.input, { height: 100 }]}
                placeholder="Enter Your Message"
                multiline
              />
              <TouchableOpacity style={styles.button}>
                <Text style={styles.buttonText}>Submit</Text>
              </TouchableOpacity>
            </View>
          </View>
          <View style={[styles.socialMedia, { backgroundColor: '#66bb6a' }]}>
            <Text style={styles.socialMediaText}>
              Connect With Us on Social Media
            </Text>
            <View style={styles.socialMediaIcons}>
              <FontAwesome name="whatsapp" size={24} color="green" />
              <FontAwesome5 name="linkedin" size={24} color="#0077b5" />
              <Fontisto name="email" size={24} color="#c71610" />
              <FontAwesome6 name="x-twitter" size={24} color="black" onPress={openTwitter} />
              <AntDesign name="instagram" size={24} color="#cd486b" />
              <AntDesign name="facebook-square" size={24} color="#316FF6" />
            </View>
          </View>
        </View>

      </ScrollView>
    </LinearGradient>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  scrollViewContent: {
    flexGrow: 1,
    width: "100%",
    justifyContent: 'center',
  },
  wrapper: {
    width: '100%',
    backgroundColor: 'white',
    borderRadius: 10,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
    padding: 10,
  },
  card: {
    paddingLeft: 20,
    flex: 1,
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#66bb6a',
    marginBottom: 10,
    textAlign: 'center',
  },
  divider: {
    borderWidth: 2,
    width: 30,
    borderColor: '#66bb6a',
    marginBottom: 20,
    alignSelf: 'center',
  },
  socialMedia: {
    paddingVertical: 20,
    borderTopWidth: 2,
    borderTopColor: '#66bb6a',
    alignItems: 'center',
  },
  socialMediaText: {
    fontSize: 12,
    fontWeight: 'bold',
    color: 'white',
    marginBottom: 10,
  },
  socialMediaIcons: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    width: '100%',
  },
  form: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  input: {
    width: '100%',
    backgroundColor: '#f0f0f0',
    color: 'white', // Set text color to white
    padding: 10,
    marginBottom: 20, // Increase the marginBottom to increase space between inputs
    borderRadius: 5,
  },
  button: {
    backgroundColor: '#66bb6a',
    padding: 10,
    paddingHorizontal: 20,
    borderRadius: 20,

  },
  buttonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
    textAlign: 'center',
  },
});

export default ContactUs;
