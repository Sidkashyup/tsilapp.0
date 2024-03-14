import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  Dimensions,
  ScrollView,
} from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { RadioButton } from "react-native-paper";

const { width, height } = Dimensions.get("window");

const Signup = ({ navigation }) => {
  const [user, setUser] = useState({
    pan: "",
    gst: "",
    mobile: "",
    email: "",
    mobileOtp: "",
    emailOtp: "",
    userType: "",
    username: "",
    aadhar: "",
    mobileOtpVerified:null,
    emailOtpVerified:null
  });
  const [verificationText,setVerificationText]=useState("");
  const correctOTP={
    mobileOtp:"931869",
    emailOtp:"931869"
  };
  const handleVerifyMobile = (text) => {
    // Convert text to string and then trim
    const trimmedText = String(text).trim();
    const trimmedCorrectOTP = correctOTP.mobileOtp.trim();
  
    if (trimmedText == trimmedCorrectOTP) {
      setVerificationText("Mobile OTP verified Successfully");
      setUser({ ...user, mobileOtpVerified: true });
    } else {
      setVerificationText("Mobile OTP Incorrect");
      setUser({ ...user, mobileOtpVerified: false });
    }
  };
  
  
  const handleVerifyEmail = (text) => {
    // Add your verification logic here
    if (text === correctOTP.emailOtp) {
      setVerificationText("Email OTP verified Suceessfully");
      setUser({ ...user, emailOtpVerified: true });
    } else {
      setVerificationText("Email OTP Incorrect");
      setUser({ ...user, emailOtpVerified: false });
    }
  };

  const handleSubmit = () => {
    // Add your form submission logic here
    console.log("Submitting signup form");
    // Redirect to login page
    navigation.navigate("Login");
  };

  return (
    <LinearGradient colors={["white", "#66bb6a"]} style={styles.container}>
      <View style={styles.formContainer}>
        <ScrollView>
          <Text
            style={[styles.heading, { textAlign: "center", color: "#66bb6a" }]}
          >
            Create New Account
          </Text>
          <View style={styles.radioContainer}>
            <View style={styles.radioItem}>
              <RadioButton
                value="Retail"
                status={user.userType === "Retail" ? "checked" : "unchecked"}
                onPress={() => setUser({...user,userType:"Retail"})}
                color="#66bb6a"
              />
              <Text>Retail User</Text>
            </View>
            <View style={styles.radioItem}>
              <RadioButton
                value="Corporate"
                status={user.userType === "Corporate" ? "checked" : "unchecked"}
                onPress={() => setUser({...user,userType:"Corporate"})}
                color="#66bb6a"
              />
              <Text>Corporate User</Text>
            </View>
          </View>
          {user.userType === "Retail" && (
            <>
              <View style={styles.inputContainer}>
                <TextInput
                  style={[styles.input, { width: "100%" }]}
                  placeholder="Enter your Aadhar Number"
                  onChangeText={newText => setUser({...user,aadhar:newText})}
                />
              </View>
              <View style={styles.inputContainer}>
                <TextInput
                  style={[styles.input, { width: "100%" }]}
                  placeholder="Enter your Customer Name"
                  onChangeText={newText => setUser({...user,username:newText})}
                />
              </View>
            </>
          )}
          {user.userType === "Corporate" && (
            <>
              <View style={styles.inputContainer}>
                <TextInput
                  style={[styles.input, { width: "100%" }]}
                  placeholder="Enter your GST Number"
                  onChangeText={newText => setUser({...user,gst:newText})}
                />
              </View>
              <View style={styles.inputContainer}>
                <TextInput
                  style={[styles.input, { width: "100%" }]}
                  placeholder="Enter your Company Name"
                  onChangeText={newText => setUser({...user,username:newText})}
                />
              </View>
            </>
          )}
          <View style={styles.inputContainer}>
            <TextInput
              style={[styles.input, { width: "100%" }]}
              placeholder="Enter your PAN Number"
              value={user.pan}
              onChangeText={newText => setUser({...user,pan:newText})}
            />
          </View>

          <View style={styles.inputContainer}>
            <TextInput
              style={[styles.input, { width: "100%" }]}
              placeholder="Enter your Mobile Number"
              value={user.mobile}
              onChangeText={newText => setUser({...user,mobile:newText})}
            />
          </View>
          <View style={styles.inputContainer}>
            <TextInput
              style={[styles.input, { width: "70%" }]}
              placeholder="Enter OTP for Mobile"
              value={user.mobileOtp}
              onChangeText={newText => setUser({...user,mobileOtp:newText})}
            />
            <TouchableOpacity
              style={styles.button}
              onPress={handleVerifyMobile}
            >
              <Text style={{ textAlign: "center", color: "white" }}>
                Verify
              </Text>
            </TouchableOpacity>
          </View>
          <View style={styles.inputContainer}>
            <TextInput
              style={[styles.input, { width: "100%" }]}
              placeholder="Enter your Email"
              value={user.email}
              onChangeText={newText => setUser({...user,email:newText})}
            />
          </View>
          <View style={styles.inputContainer}>
            <TextInput
              style={[styles.input, { width: "70%" }]}
              placeholder="Enter OTP for Email"
              value={user.emailOtp}
              onChangeText={newText => setUser({...user,emailOtp:newText})}
            />
            <TouchableOpacity style={styles.button} onPress={handleVerifyEmail}>
              <Text style={{ textAlign: "center", color: "white" }}>
                Verify
              </Text>
            </TouchableOpacity>
          </View>
          <View>
            <Text>{verificationText}</Text>
          </View>
          <TouchableOpacity style={styles.submitButton} onPress={handleSubmit}>
            <Text style={{ color: "white", fontWeight: "bold" }}>Submit</Text>
          </TouchableOpacity>
        </ScrollView>
      </View>
      <TouchableOpacity onPress={() => navigation.navigate("Login")}>
        <Text style={{ textAlign: "center", color: "white" }}>
          Already have an account? Login here  
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
  heading: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 20,
    width: "100%",
    alignItems: "center",
  },
  formContainer: {
    width: "100%",
    backgroundColor: "white",
    padding: 20,
    borderRadius: 10,
    marginBottom: 10,
  },
  inputContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    height: height * 0.08,
    marginBottom: 10,
    paddingHorizontal: 10,
  },
  input: {
    width: "100%",
    height: 40,
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 5,
    marginBottom: 10,
    paddingHorizontal: 10,
  },
  button: {
    backgroundColor: "#66bb6a",
    color: "#10B981",
    padding: 10,
    borderRadius: 5,
  },
  submitButton: {
    backgroundColor: "#66bb6a",
    color: "red",
    fontWeight: "bold",
    width: "100%",
    alignItems: "center",
    padding: 10,
    borderRadius: 5,
    marginTop: 10,
  },
  radioContainer: {
    flexDirection: "row",
    marginBottom: 20,
  },
  radioItem: {
    flexDirection: "row",
    alignItems: "center",
    marginRight: 20,
  },
});

export { Signup };
