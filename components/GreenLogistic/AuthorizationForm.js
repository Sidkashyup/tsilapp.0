import React, { useEffect, useState, useRef } from "react";
import { View, Text, TextInput, TouchableOpacity } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { AntDesign } from '@expo/vector-icons';
import { useNavigation } from "@react-navigation/native";

function AuthorizationForm({ navigation }) {
  const [isVerified, setVerified] = useState(null);
  const [otp, setOtp] = useState(Array(6).fill("")); // Initialize otp as an array of 6 empty strings
  const correctOTP = [1, 2, 3, 4, 5, 6];

  const refs = useRef([...Array(6)].map(() => React.createRef()));



  const handleChange = (value, index) => {
    const newOtp = [...otp];
    newOtp[index] = value; // Update the specific otp box value
    setOtp(newOtp);
    if (value.length === 1 && index < 5) {
      // Move focus to the next input
      refs.current[index + 1].current.focus();
    }
  };

  const handleVerify = () => {
    const otpNum = otp.map(Number); // Convert otp array elements to numbers
    if (JSON.stringify(otpNum) === JSON.stringify(correctOTP)) {
      setVerified(true);
    } else {
      setVerified(false);
    }
  }

  return (
    <LinearGradient
      colors={['white', 'green']}
      style={{ flex: 1  }}
    >
      <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
        <View style={{ width: "75%", height: "60%", backgroundColor: "white", borderRadius: 10, padding: 10,paddingTop:50 }}>
          <Text style={{ fontSize: 24, fontWeight: "bold", color: "#66bb6a", marginBottom: 10 , textAlign:"center" }}>
            Authorization Form
          </Text>
          <View style={{ borderWidth: 2, width: "10%", borderColor: "#66bb6a", alignSelf: "center" }} />
          <Text style={{ color: "gray", marginBottom: 20,textAlign:"center", marginTop:10 }}>
            OTP sent to concerned party
          </Text>
          <View style={{ flexDirection: "row", justifyContent: "space-around", width: "100%", paddingHorizontal: 20 , marginBottom:20 , alignContent:"center" }}>
            {otp.map((value, index) => (
              <TextInput
                key={index}
                ref={refs.current[index]}
                style={{ backgroundColor: "#cfd8dc", flex: 1, paddingHorizontal:7,marginHorizontal: 5, textAlign: "center" }}
                onChangeText={(value) => handleChange(value, index)}
                keyboardType="number-pad"
                maxLength={1}
              />
            ))}
            {isVerified === true && <AntDesign name="checkcircle" size={24} color="#66bb6a" />}
            {isVerified === false && <AntDesign name="closecircle" size={24} color="red" />}
          </View>

          <View style={{ flexDirection: "row", justifyContent: "space-around", width: "100%" }}>
            <TouchableOpacity
              style={{ borderWidth: 2, borderColor: "#66bb6a", backgroundColor: "#66bb6a", borderRadius: 20, padding: 10 }}
              onPress={handleVerify}
            >
              <Text style={{ color: "white", fontWeight: "bold" }}>Verify</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={{
                borderWidth: 2,
                borderColor: isVerified ? "#66bb6a" : "#a5d6a7",
                backgroundColor: isVerified ? "#66bb6a" : "#a5d6a7",
                borderRadius: 20,
                padding: 10,
                paddingBottom:10,
                opacity: isVerified ? 1 : 0.5
              }}
              disabled={!isVerified}
              onPress={()=>navigation.navigate("GreenForm")}
            >
              <Text style={{ color:  "white" , fontWeight: "bold" }}>Submit</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </LinearGradient>
  );
}

export default AuthorizationForm;
