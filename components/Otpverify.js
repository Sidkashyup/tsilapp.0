// import React, { useState } from "react";
// import { View, Text, Button, TextInput } from "react-native";
// import OTPInputView from "@twotalltotems/react-native-otp-input";
// import auth from "@react-native-firebase/auth";
// import { useNavigation } from "@react-navigation/native";


// const Otpverify = ({ mobile, setmobile }) => {
//   const [otp, setOtp] = useState("");
//   const [ph, setPh] = useState("");
//   const [loading, setLoading] = useState(false);
//   const [showOTP, setShowOTP] = useState(false);
//   const [user, setUser] = useState(null);
//   const [verificationId, setVerificationId] = useState("");

//   const navigation = useNavigation();

//   const onSignup = async () => {
//     setLoading(true);
//     try {
//       const confirmation = await auth().signInWithPhoneNumber(ph);
//       setLoading(false);
//       setShowOTP(true);
//       setVerificationId(confirmation.verificationId); // Store the verificationId
//       toast.success("OTP sent successfully!");
//     } catch (error) {
//       console.error(error);
//       setLoading(false);
//     }
//   };

//   const onOTPVerify = async () => {
//     setLoading(true);
//     try {
//       const credential = auth.PhoneAuthProvider.credential(verificationId, otp);
//       await auth().signInWithCredential(credential);
//       setLoading(false);
//       setUser(res.user);
//       navigation.navigate("Home");
//     } catch (error) {
//       console.error(error);
//       setLoading(false);
//     }
//   };

//   return (
//     <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
//       {user ? (
//         <View style={{ flexDirection: "row", alignItems: "center" }}>
          
//           <Text style={{ fontSize: 20, fontWeight: "bold", marginLeft: 10 }}>
//             Successfully Sign-Up
//           </Text>
//         </View>
//       ) : showOTP ? (
//         <View>
//           <Text>An OTP is sent to +{ph}</Text>
//           <OTPInputView
//             pinCount={6}
//             autoFocusOnLoad
//             codeInputFieldStyle={{ borderWidth: 1, borderRadius: 5 }}
//             onCodeFilled={(code) => setOtp(code)}
//           />
//           <Button title="Verify" onPress={onOTPVerify} disabled={loading} />
//         </View>
//       ) : (
//         <View>
//           <TextInput
//             placeholder="Enter your phone number"
//             value={ph}
//             onChangeText={setPh}
//           />
//           <Button title="Get OTP" onPress={onSignup} disabled={loading} />
//         </View>
//       )}
//     </View>
//   );
// };

// export default Otpverify;
