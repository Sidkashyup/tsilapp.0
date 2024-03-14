
import React, { useState } from "react";
import { View, Text, StyleSheet, TextInput, TouchableOpacity } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { MaterialCommunityIcons } from '@expo/vector-icons';

function Verify({ navigation }) {
  const [TSLNum, setTSLNum] = useState('');
  const [placeholder, setPlaceholder] = useState('');

  const handleButtonPress = (text) => {
    setPlaceholder(text);
  };

  return (
    <LinearGradient
      colors={["white", "#66bb6a"]}
      style={styles.background}
    >
      <View style={styles.container}>

<Text style={{   textAlign: 'center',  fontSize: 24, fontWeight: 'bold', color: '#66bb6a', marginBottom: 10 }}>Have a Look At Your Document</Text>

        <View style={styles.divider}></View>
        <Text style={styles.selectedItem}>Select {placeholder}</Text>

        <View style={{ backgroundColor: '#eeeeee', padding: 5, flexDirection: 'row', alignItems: 'center', marginBottom: 20, width: '80%', borderRadius: 5 }}>
          <MaterialCommunityIcons name="ticket-confirmation-outline" size={24} color="#bdbdbd" />
          <TextInput
            style={{ flex: 1, fontSize: 14, marginLeft: 5, color: "#bdbdbd" }}
            placeholder={`Enter ${placeholder}`}
            onChangeText={(text) => setTSLNum(text)}
            value={TSLNum}
            keyboardType="numeric"
          />
        </View>

        <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('Pdffill')}>
          <Text style={styles.buttonText}>Submit</Text>
        </TouchableOpacity>
        
        <View style={[styles.divider, { marginTop: 60 }]}></View>

        <View style={styles.buttonContainer}>
          <TouchableOpacity
            style={styles.additionalButton}
            onPress={() => handleButtonPress('E-way bill No')}
          >
            <Text style={styles.additionalButtonText}>E-way</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.additionalButton}
            onPress={() => handleButtonPress('GR No.')}
          >
            <Text style={styles.additionalButtonText}>GR No.</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.additionalButton}
            onPress={() => handleButtonPress('TSL No.')}
          >
            <Text style={styles.additionalButtonText}>TSL</Text>
          </TouchableOpacity>
        </View>

      </View>

    </LinearGradient>
  );
}

const styles = StyleSheet.create({

  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
    marginBottom: 20,
  },
  additionalButton: {
    borderWidth: 2,
    borderColor: '#66bb6a',
    backgroundColor: '#66bb6a',
    borderRadius: 25,
    paddingVertical: 5,
    paddingHorizontal: 20,
    width: '32%',
  },
  additionalButtonText: {
    color: 'white',
    fontWeight: '600',
    textAlign: 'center',
  },
  background: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  container: {
    backgroundColor: "white",
    width: "90%",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 10,
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#66bb6a",
    marginBottom: 10,
  },
  divider: {
    borderBottomWidth: 2,
    borderBottomColor: "#66bb6a",
    width: "100%",
    marginBottom: 10,
  },
  selectedItem: {
    fontSize: 16,
    color: "gray",
    marginBottom: 20,
  },
  button: {
    backgroundColor: "#66bb6a",
    borderRadius: 20,
    paddingHorizontal: 20,
    paddingVertical: 10,
  },
  buttonText: {
    color: "white",
    fontWeight: "bold",
  },
});

export default Verify;











// import React, { useState } from "react";
// import { View, Text, TextInput, TouchableOpacity  , Picker } from "react-native";
// import { LinearGradient } from 'expo-linear-gradient'; // Import LinearGradient
// import { MdOutlineConfirmationNumber } from "react-icons/md";
// import { MaterialIcons } from '@expo/vector-icons';
// // Assuming you are using React Navigation for navigation


// function verify({navigation}) {
//    // React Navigation hook for navigation
//     const [selectPart, setSelectPart] = useState("Select Item");

//     const handleChange = (value) => {
//         setSelectPart(value);
//     };

//     return (
//         <View style={{ flex: 1 }}>
//             <LinearGradient
//                 colors={['white', '#66bb6a']}
//                 start={[0, 0]}
//                 end={[1, 1]}
//                 style={{ flex: 1 }}
//             >  
//                 <View style={{   flex: 1, justifyContent: 'center', alignItems: 'center' , paddingEnd:20 }}>
//                     <View style={{  width: '90%', height: 'auto', backgroundColor: 'white', borderWidth: 2, borderRadius: 10, borderColor: '#66bb6a', padding: 20 }}>
//                         <Text style={{   textAlign: 'center',  fontSize: 24, fontWeight: 'bold', color: '#66bb6a', marginBottom: 10 }}>Have a Look At Your Document</Text>
// <View style={{ justifyContent: "center", alignItems: "center", borderWidth: 2, borderColor: '#66bb6a', marginBottom: 10,  marginLeft: 85,  marginEnd: 85, width: '40%' }}></View>             
//   <Text style={{  textAlign: 'center' , color: 'gray', marginBottom: 10, fontSize: 16 }}>{selectPart}</Text>
//            <View style={{ padding:8, backgroundColor: '#E5E7EB', width: '100%', marginBottom: 8, flexDirection: 'row', borderRadius: 10 }}>
//       <MaterialIcons name="confirmation-number" size={24} color="gray" style={{ marginTop: 4, marginRight: 4 }} />
//       <TextInput
//         style={{ flex: 1, backgroundColor: '#E5E7EB', fontSize: 14 }}
//         keyboardType="numeric"
//         placeholder={selectPart}
//       />
//     </View>
//                         <TouchableOpacity  onPress={() => navigation.navigate('Pdffill')}>
//                             <View style={{  textAlign: 'center', borderWidth: 2, borderColor: '#66bb6a', backgroundColor: '#66bb6a', borderRadius: 30, paddingVertical: 10, paddingHorizontal: 20 }}  >
//                                 <Text style={{  textAlign: 'center' , color: 'white', fontWeight: 'bold' }}>Submit</Text>
//                             </View>
//                         </TouchableOpacity>
  
//                     </View>
//                 </View>
//             </LinearGradient>
//         </View>
//     );
// }

// export default verify;





