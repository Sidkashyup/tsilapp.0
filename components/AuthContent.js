import React from "react";
import { Text, View, StyleSheet, TouchableOpacity } from "react-native";

function AuthContent({ isSignUp, setIsSignUp }) {
  const handleChange = () => {
    setIsSignUp(!isSignUp);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.heading}>Hello, Friend</Text>
      <View style={styles.divider} />
      {isSignUp ? (
        <Text style={styles.text}>
          Fill up your personal details and start the journey with us
        </Text>
      ) : (
        <Text style={styles.text}>Welcome back! Please sign in to continue.</Text>
      )}
      <TouchableOpacity
        onPress={handleChange}
        style={styles.button}
      >
        <Text style={styles.buttonText}>{isSignUp ? "Sign In" : "Sign Up"}</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
  },
  heading: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 10,
  },
  divider: {
    borderWidth: 2,
    width: 50,
    borderColor: "white",
    marginBottom: 10,
  },
  text: {
    marginBottom: 10,
  },
  button: {
    borderWidth: 2,
    borderColor: "white",
    borderRadius: 30,
    paddingHorizontal: 24,
    paddingVertical: 8,
    alignItems: "center",
  },
  buttonText: {
    color: "white",
    fontWeight: "bold",
    fontSize: 16,
  },
});

export default AuthContent;
