import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import SignUp from '../components/Signup';
import Login from '../components/Login';
import AuthContent from '../components/AuthContent';

function HomePage({ loginData, setLoginData }) {
  const [isSignUp, setIsSignUp] = useState(true);

  return (
    <View style={styles.container}>
      <View style={styles.background}>
        <View style={styles.authContainer}>
          <View style={isSignUp ? styles.signUpContainer : styles.loginContainer}>
            <Text style={styles.heading}>{isSignUp ? 'Create Your Account' : 'Login'}</Text>
            <View style={styles.divider} />
            <View style={styles.contentContainer}>
              {isSignUp ? <SignUp isSignUp={isSignUp} setIsSignUp={setIsSignUp} /> : <AuthContent isSignUp={isSignUp} setIsSignUp={setIsSignUp} />}
            </View>
          </View>
          <TouchableOpacity style={styles.switchButton} onPress={() => setIsSignUp(!isSignUp)}>
            <Text style={styles.switchButtonText}>{isSignUp ? 'Already have an account? Sign in' : 'Create an account'}</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  background: {
    backgroundColor: 'white',
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  authContainer: {
    width: '75%',
    height: '75%',
    backgroundColor: 'white',
    borderRadius: 20,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  signUpContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  loginContainer: {
    flex: 1,
    backgroundColor: 'green',
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },
  heading: {
    fontSize: 24,
    fontWeight: 'bold',
    color: 'green',
    marginBottom: 10,
  },
  divider: {
    borderWidth: 2,
    width: 50,
    borderColor: 'green',
    marginBottom: 20,
  },
  contentContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  switchButton: {
    padding: 10,
    backgroundColor: 'transparent',
    alignItems: 'center',
  },
  switchButtonText: {
    color: 'green',
    fontWeight: 'bold',
  },
});

export default HomePage;
