import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  Alert 
} from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import OTPInputView from "@twotalltotems/react-native-otp-input";
const Login = ({ navigation }) => {
  const [mobileNumber, setMobileNumber] = useState("");
  const [otp, setOtp] = useState("");
  const [isOtpCorrect, setIsOtpCorrect] = useState(false);

  const handleVerifyOtp = () => {
    // Verify OTP logic here
    if (otp === "123456") {
      setIsOtpCorrect(true);
    } else {
      setIsOtpCorrect(false);
    }
  };

  const handleLogin = () => {
    // Add your login logic here
    navigation.navigate("DrawerNavigator");
  };

  return (
    <LinearGradient colors={["white", "green"]} style={styles.container}>
      <View style={styles.formContainer}>
        <Text
          style={[styles.heading, { textAlign: "center", color: "#66bb6a" }]}
        >
          Login
        </Text>
        <View style={styles.inputContainer}>
          <TextInput
            style={[styles.input, { width: "100%" }]}
            placeholder="Enter your Mobile Number"
            value={mobileNumber}
            onChangeText={setMobileNumber}
          />
        </View>
        <View style={styles.inputContainer}>
          <TextInput
            style={[styles.input, { width: "70%" }]}
            placeholder="Enter OTP"
            value={otp}
            onChangeText={setOtp}
          />
          <TouchableOpacity style={styles.button} onPress={handleVerifyOtp}>
            <Text style={{ textAlign: "center", color: "white" }}>Verify</Text>
          </TouchableOpacity>
        </View>
        <TouchableOpacity
          style={[
            styles.button,
            {
              backgroundColor: isOtpCorrect ? "#66bb6a" : "#c8e6c9",
              marginLeft: 10,
            },
          ]}
          onPress={handleLogin}
          disabled={!isOtpCorrect}
        >
          <Text style={{ color: "white", fontWeight: "bold" }}>Login</Text>
        </TouchableOpacity>
      </View>
      <TouchableOpacity onPress={() => navigation.navigate("Signup")}>
        <Text
          style={{
            textAlign: "center",
            color: "white",
            fontWeight: "bold",
            fontSize: 18,
          }}
        >
          Create new account
        </Text>
      </TouchableOpacity>
    </LinearGradient>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 20,
  },
  formContainer: {
    width: "95%",
    minHeight: "50%",
    backgroundColor: "white",
    padding: 20,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 10,
    marginBottom: 10,
  },
  heading: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 20,
  },
  inputContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    width: "100%",
    marginBottom: 20,
  },
  input: {
    height: 40,
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 5,
    paddingHorizontal: 10,
    flex: 1,
  },
  button: {
    backgroundColor: "#66bb6a",
    padding: 10,
    borderRadius: 5,
    marginLeft: 10,
  },
});

export default Login;
