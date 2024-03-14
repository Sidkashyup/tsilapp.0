import React from 'react';
import { View, Text, Image, TouchableOpacity, ScrollView, StyleSheet } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { Linking } from 'react-native';



function MyComponent({ navigation }) {
  const showToast = () => {
    // Code for showing toast message
  };

  const opnqrcode = () => {
    Linking.openURL('https://drive.google.com/file/d/1YPfuTIQ4LJH0XWXzrE_EbDlqr4GYLhat/view?usp=sharing');
  };

  return (
    <View style={{ flex: 1 }}>
      <LinearGradient
        colors={['white', '#4CAF50']}
        start={[0, 0]}
        end={[1, 1]}
        style={{ flex: 1,justifyContent: "center", alignItems: "center" }}
      >
        <View style={styles.container}>
          <ScrollView style={{ width: '100%', paddingTop: 90 }}>
            <View style={{ width: '100%' }}>
              <Text style={styles.heading}>TSL Generated successfully</Text>
              <View style={styles.content}>
                <View style={styles.textContainer}>
                  <Text style={styles.bigText}>TSL No. 123345</Text>
                  <Text style={styles.smallText}>Congratulations, your participation is valuable to earth and has saved 3 KG Carbon Footprints</Text>
                </View>
                <TouchableOpacity
                  style={styles.button}
                  onPress={() => opnqrcode()}
                >
                  <Text style={styles.buttonText}>Download QR code</Text>
                </TouchableOpacity>


                <TouchableOpacity
                  style={styles.button}
                  onPress={() => navigation.navigate('GreenLogistic')}
                >
                  <Text style={styles.buttonText}>close</Text>
                </TouchableOpacity>
              </View>
            </View>
          </ScrollView>
        </View>
      </LinearGradient>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: '90%',
    flex: 1,
    backgroundColor: '#FFFFFF',
    justifyContent: 'center',
    alignItems: 'center',
    marginLeft: 10,
    marginBottom: 10,
    marginTop: 30,
    borderRadius: 30,
  },
  heading: {
    color: '#66bb6a',
    fontWeight: 'bold',
    fontSize: 18,
    textAlign: 'center',
    width: '100%',
  },
  content: {
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  },
  textContainer: {
    padding: 20,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  },
  bigText: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#66bb6a',
    marginTop: 10,
  },
  smallText: {
    fontSize: 16,
    fontWeight: 'bold',
    textAlign: 'center',
    marginTop: 10,
  },
  imageContainer: {
    alignItems: 'center',
  },
  paragraph: {
    margin: 24,
    marginTop: 0,
    fontSize: 14,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  logo: {
    height: 128,
    width: 128,
  },
  button: {
    borderColor: '#66bb6a',
    backgroundColor: '#66bb6a',
    borderWidth: 1,
    borderRadius: 50,
    paddingHorizontal: 24,
    paddingVertical: 8,
    marginTop: 20,
  },
  buttonText: {
    color: '#fff',
    fontSize: 20,
  },
});

export default MyComponent;