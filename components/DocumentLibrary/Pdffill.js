import React, { useState } from "react";
import { View, Text, TextInput, Button, StyleSheet, Image } from "react-native";
import { ScrollView, TouchableOpacity } from "react-native-gesture-handler";
import { LinearGradient } from 'expo-linear-gradient'; // Import LinearGradient
import { Linking } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome'; // Assuming you're using FontAwesome icons

import { Ionicons } from "@expo/vector-icons";
// import { useNavigation } from "@react-navigation/native";

// const QRCode = require("../components/qr-code.png");

const Pdffill = ({navigation}) => {


  // const navigation = useNavigation();
  const [selectPart, setSelectPart] = useState("Select");
  const [doc, setDoc] = useState("select");
  const [pdfFrame, setPdfFrame] = useState("");
  const [docNum, setDocNum] = useState("");


 const tslAll = () => {
  Linking.openURL('https://drive.google.com/file/d/1J3iKpuoEoFw0_XjjbySeivlKrXeZIz9v/view?usp=sharing');
};

const  tslGreen = () => {
  Linking.openURL('https://drive.google.com/file/d/1ar79FCwYgXt-PPCN6MupqFx96pT86lrR/view?usp=sharing');
};
const tslDPOD = () => {
  Linking.openURL('https://drive.google.com/file/d/1VGCh5nIlc2mqe97THfr2QFMnTyaH1aUl/view?usp=sharing');
};
const tslGMN = () => {
  Linking.openURL('https://drive.google.com/file/d/1-5Rhy3YpW1VoIBzwlFR1f_uSvccI-IbH/view?usp=sharing');
};

const tslTSL = () => {
  Linking.openURL('https://drive.google.com/file/d/1dZzDTaUOnAmd-uls9c8CJIztj0Z5sNfo/view?usp=sharing');
};
  const functionSet = () => {
    if (selectPart === "Green From") {
      setPdfFrame("greenFormPdf(.pdf");
    } else if (selectPart === "TSL") {
      setPdfFrame("ewaygmn(.pdf");
    } else if (selectPart === "DPOD") {
      setPdfFrame("pg.pdf");
    } else if (selectPart === "GMN") {
      setPdfFrame("ewaygmn(_.pdf");
    } else if (selectPart === "Select") {
      setPdfFrame("");
    } else if (selectPart === "viewAll") {
      setPdfFrame("AllDoc.pdf");
    }
  };

  const handleDocChange = (text) => {
    setDocNum(text);
  };
  

  return (


       <View style={{ flex: 1  }}>
            <LinearGradient
                colors={['white', '#4CAF50']}
                start={[0, 0]}
                end={[1, 1]}
                style={{ flex: 1 }}
            >  
    
    <View style={{  width:"95%", flex: 1, backgroundColor: "#FFFFFF", justifyContent: "center", alignItems: "center" ,  marginLeft:10,  marginBottom:10,  marginTop:20 ,  borderRadius:30 }}>
      
        <View style={[styles.inputContainer , { width:"95%"} ] }>
         
          <View style={{flexDirection:"row" , justifyContent:"space-evenly" ,alignItems: "center",  width:"100%"}} >
          {/* <Text  style={{margin:15 , fontSize:20 }}>Select Document Type:</Text> */}
          
         <TouchableOpacity style={{ margin:12, fontSize:5 }} >
          <Ionicons name="close-circle" size={24} color="black" />
          </TouchableOpacity>
          <TouchableOpacity
style={{ alignItems: "center", justifyContent: "center", textAlign:"center" }} onPress={() => navigation.navigate('DocumentLibrary')}
        >
          <Ionicons name="home" size={24} color="black"  style={{ alignItems:"center" , justifyContent:"center"  , textAlign:"center" }} />
        </TouchableOpacity>
        
          </View>
    <View style={{flexDirection:"row", width:"85%"  ,marginLeft:"2%"}  }>
          {/* <TextInput
            style={[styles.textInput , { width:"90%", fontSize:10 } ]}
            placeholder="Enter document number"
            onChangeText={handleDocChange}
            value={docNum}
          /> */}
  {/* <TouchableOpacity style={{ backgroundColor: '#66bb6a', borderRadius: 10, width: "50%", justifyContent: "center", alignContent: "center", flexDirection: "row", alignItems: "center" , paddingVertical: 10, paddingHorizontal: 10  , marginRight:"10%" ,marginLeft:"1%"}}>
  <Icon name="search" size={30} color="white" />
      </TouchableOpacity> */}
   </View>
        </View>
     
         <View style={styles.pdfContainer}>
        <View style={{width:"95%"  } }>
          <Text style={ { marginTop:120, marginBottom:15, fontSize:20 }} >Select Document Part:</Text>
           <TouchableOpacity   onPress={tslGreen}  style={{backgroundColor: '#66bb6a', borderRadius: 10, padding: 8,  }}>
              <Text style={{ color: 'white', textAlign: 'center' }}>Green Form</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={tslTSL} style={{ backgroundColor: '#66bb6a', borderRadius: 10, padding: 8, marginTop: 16 }}>
              <Text style={{ color: 'white', textAlign: 'center' }}>TSL</Text>
            </TouchableOpacity>
          
            <TouchableOpacity   onPress={tslDPOD}  style={{ backgroundColor: '#66bb6a', borderRadius: 10, padding: 8, marginTop: 16 }}>
              <Text style={{ color: 'white', textAlign: 'center' }}>DPOD</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={tslGMN} style={{ backgroundColor: '#66bb6a', borderRadius: 10, padding: 8, marginTop: 16 , marginBottom:30  }} >
              <Text style={{ color: 'white', textAlign: 'center'  }}>GMN</Text>
            </TouchableOpacity>
              <TouchableOpacity    onPress={tslAll}
 style={{ backgroundColor: '#66bb6a', borderRadius: 10, padding: 8,  marginBottom:60  }} >
              <Text style={{ color: 'white', textAlign: 'center'  }}>View All</Text>
            </TouchableOpacity>
        </View>
        
       </View>
       
      </View>
         
            </LinearGradient>
        </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#66bb6a",
  },
  formContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    width: "100%",
    padding: 10,
  },
  inputContainer: {
    width: "100%",
    marginBottom: 10,
  },
  textInput: {
    borderWidth: 1,
    borderColor: "gray",
    borderRadius: 5,
    padding: 10,
    marginBottom: 10,
  },
  picker: {
    borderWidth: 1,
    borderColor: "gray",
    borderRadius: 5,
    marginBottom: 10,
  },
  qrCode: {
    width: 200,
    height: 200,
    marginBottom: 10,
  },
  pdfContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    width: "100%",
    padding: 10,
  },
  pdfViewer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    width: "100%",
  },
  previewButton: {
    borderWidth: 1,
    borderColor: "#66bb6a",
    borderRadius: 10,
    padding: 10,
    backgroundColor: "#66bb6a",
  },
  previewButtonText: {
    color: "white",
    fontWeight: "bold",
  },
  homeButton: {
    position: "absolute",
    bottom: 20,
    right: 20,
  },
});

export default Pdffill;
