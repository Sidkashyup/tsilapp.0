
import React, { useEffect, useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  ImageBackground,
  TouchableOpacity,
  Animated,
} from 'react-native';
import * as Animatable from 'react-native-animatable';

const LoadingPage = ({ navigation }) => {
  const [counter, setCounter] = useState(4);
  useEffect(() => {
    const timer =
      counter > 0 && setInterval(() => setCounter(counter - 1), 400);
    if (counter === 0) {
      navigation.navigate('Signup');
    }
    return () => clearInterval(timer);
  }, [counter]);



  return (
    <ImageBackground
      source={{
        uri: 'https://img.freepik.com/free-photo/aerial-view-winding-road-surrounded-by-greens-trees_181624-38224.jpg?w=1060&t=st=1708156294~exp=1708156894~hmac=83c0f67f0bf8210a4782851395afd2b6ba245aa9b3cceaebfd97ef5c652c6e5a',
      }}
      style={styles.background}>
      <View style={styles.container}>
        <View style={styles.header}>
          <Text style={styles.title}> Welcome To Green Logistics </Text>
          <Text style={styles.subtitle}>
            Let's Join Hands To make Earth Green
          </Text>
          <Text style={styles.counter}>{counter}</Text>
        </View>
        <View style={styles.animationContainer}>
          <Animatable.Image
            source={{
              uri: 'https://cdn-icons-png.freepik.com/256/1037/1037503.png?ga=GA1.2.1892030951.1708074756&',
            }}
            style={ { width: 70, height: 70 }}
            duration={1500}
            useNativeDriver
          />
          <Animatable.Image
            source={{
              uri: 'https://cdn-icons-png.freepik.com/256/2107/2107330.png?ga=GA1.2.1892030951.1708074756&',
            }}
            style={{
              width: 70,
              height: 70,
            }}
            animation={{
              from: { translateX: -50 },
              to: { translateX: 50 }, // Adjust the range to keep the truck within the same distance
            }}
            easing="linear"
            iterationCount="infinite"
            duration={1500} // Adjust the duration as per your requirement
            useNativeDriver
          />
          <Animatable.Image
            source={{
              uri: 'https://cdn-icons-png.freepik.com/256/2346/2346543.png?ga=GA1.2.1892030951.1708074756&',
            }}
            style={ { width: 70, height: 70 }}
            duration={1500}
            useNativeDriver
          />
        </View>
        <View style={styles.buttonContainer}>
          <TouchableOpacity
            onPress={() => {
              setCounter(0); 
              navigation.navigate('Signup'); 
            }}>
            <Text style={styles.skipButton}>Skip</Text>
          </TouchableOpacity>
        </View>
      </View>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  background: {
    flex: 1,
    resizeMode: 'cover',
    justifyContent: 'center',
  },
  container: {
    flex: 1,
    padding: 20,
    justifyContent: 'space-evenly',
    height: '100%',
  },
  header: {
    alignItems: 'center',
    marginBottom: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
    color: 'white',
  },
  subtitle: {
    fontSize: 18,
    textAlign: 'center',
    color: 'white',
  },
  counter: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
    color: 'white',
  },
  animationContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 20,
    width: '100%',
  },
  animation: {
    width: 100,
    height: 50,

    bottom: 0,
  },
  truck: {
    transform: [{ translateX: -50 }],
  },
  earth: {
    transform: [{ translateY: 50 }],
  },
  buttonContainer: {
    alignItems: 'center',
  },
  skipButton: {
    fontSize: 16,
    fontWeight: 'bold',
    color: 'white',
    backgroundColor: '#66bb6a',
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderRadius: 10,
  },
});

export default LoadingPage;
