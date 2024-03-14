import React, { useRef, useState } from "react";
import { View, Text, TextInput, TouchableOpacity, ScrollView, WebView } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { LinearGradient } from 'expo-linear-gradient';
import { AntDesign } from '@expo/vector-icons';
import { MaterialIcons } from '@expo/vector-icons';
import { Linking } from 'react-native';
function DocUpload({ navigation }) {
  const [canview, setCanView] = useState(false);
  const [grUploaded, setGrUploaded] = useState(0);
  const [cnt, setCnt] = useState(1);
  const [scnt, setSCnt] = useState(1);
  const [ascnt, setaSCnt] = useState(1);
  const [Prevshow, setPrevshow] = useState(false);

   const setCanViewFunction = () => {
 
  Linking.openURL('https://drive.google.com/file/d/1-5Rhy3YpW1VoIBzwlFR1f_uSvccI-IbH/view?usp=sharing');
};
  const handleClick = () => {
    setGrUploaded(grUploaded + 1);
  };

  const isDisabled = () => {
    return grUploaded < 2;
  };


  const handleAdd = () => {
    if (cnt < 5) setCnt(cnt + 1);
  };

  const shandleAdd = () => {
    if (scnt < 5) setSCnt(scnt + 1);
  };


  const ashandleAdd = () => {
    if (ascnt < 5) setaSCnt(ascnt + 1);
  };

  return (
    <View style={{ flex: 1 }}>
      <LinearGradient
        colors={['white', '#4CAF50']}
        start={[0, 0]}
        end={[1, 1]}
        style={{ flex: 1,justifyContent: "center", alignItems: "center", }}
      >
        <View style={{ width: "90%", flex: 1, backgroundColor: "#FFFFFF", justifyContent: "center", alignItems: "center", marginLeft: 10, marginBottom: 10, marginTop: 30, borderRadius: 30 }}>
          <ScrollView style={{ width: "85%", paddingTop: 20 }}>
            <View style={{ flexDirection: "row", width: "100%", justifyContent: "center", alignItems: "center", marginBottom: 20 }}>
              <Text style={{ fontSize: 24, fontWeight: "bold", color: "#66bb6a" }}>DocuVault</Text>
            </View>
            <View style={{ flexDirection: "column", justifyContent: "space-between" }}>
              
              <View style={{ flex: 1 }}>
                <Text style={{ fontSize: 18, fontWeight: "bold", marginBottom: 10 }}>Upload GR</Text>
                <ScrollView style={{ maxHeight: "auto" }}>
                  {Array.from({ length: cnt }).map((_, index) => (
                    <View key={index} style={{ flexDirection: "row", alignItems: "center" }}>
                      <TextInput style={{ flex: 1, borderWidth: 1, borderColor: "#4B5563", padding: 10, marginBottom: 10 }} placeholder="Enter GR Number" />
                      <TouchableOpacity style={{ marginLeft: 10, borderWidth: 1, borderColor: "#4B5563", padding: 10, borderRadius: 10 }} onPress={handleClick}>
                      <MaterialIcons name="cloud-upload" size={24} color="black" />
                      </TouchableOpacity>
                    </View>
                  ))}
                </ScrollView>
                {cnt < 5 && (
                  <TouchableOpacity style={{ flexDirection: "row", alignItems: "center", marginTop: 10 }} onPress={handleAdd}>
                    <Ionicons name="add-circle" size={24} color="#66bb6a" />
                    <Text style={{ color: "#66bb6a", marginLeft: 5 }}>Add More</Text>
                  </TouchableOpacity>
                )}
              </View>

              <View style={{}}>
                <Text style={{ fontSize: 18, fontWeight: "bold", marginBottom: 10 }}>Upload Invoice Copy</Text>
                <ScrollView style={{ maxHeight: "auto" }}>
                  {Array.from({ length: scnt }).map((_, index) => (
                    <View key={index} style={{ flexDirection: "row", alignItems: "center" }}>
                      <TextInput style={{ flex: 1, borderWidth: 1, borderColor: "#4B5563", padding: 10, marginBottom: 10 }} placeholder="Enter Invoice Number" />
                     <TouchableOpacity style={{ marginLeft: 10, borderWidth: 1, borderColor: "#4B5563", padding: 10, borderRadius: 10 }} onPress={handleClick}>
                     <MaterialIcons name="cloud-upload" size={24} color="black" />
                      </TouchableOpacity>
                    </View>
                  ))}
                </ScrollView>
                {scnt < 5 && (
                  <TouchableOpacity style={{ flexDirection: "row", alignItems: "center", marginTop: 10 }} onPress={shandleAdd}>
                    <Ionicons name="add-circle" size={24} color="#66bb6a" />
                    <Text style={{ color: "#66bb6a", marginLeft: 5 }}>Add More</Text>
                  </TouchableOpacity>
                )}
              </View>
            </View>
            <View style={{ flexDirection: "row", justifyContent: "center", marginTop: 20 }}>
              <Text style={{ color: "#EF4444", fontSize: 16 }}>File type: PDF, Max File Size: 2 MB</Text>
            </View>
            {/* <View style={{ width: "100%", padding: 8 }}>
              <View style={{ flexDirection: "row", width: "100%", justifyContent: "center", alignItems: "center", marginBottom: 20 }}>
                <Text style={{ fontSize: 20, fontWeight: "bold", color: "#66bb6a" }}>Upload Additional Documents</Text>
              </View>
              <View style={{ width: "95%", flexDirection: "row", justifyContent: "space-between" }}>
                <View style={{}}>
                  <TouchableOpacity style={{ width: 100, alignItems: "center", marginLeft: 10, borderWidth: 1, borderColor: "#4B5563", padding: 10, borderRadius: 10 }} >
                    <Ionicons name="add-circle" size={32} color="gray" />
                  </TouchableOpacity>
                </View>
                <View style={{}}>
                  <TouchableOpacity style={{ width: 100, alignItems: "center", marginLeft: 10, borderWidth: 1, borderColor: "#4B5563", padding: 10, borderRadius: 10 }} >
                    <Ionicons name="add-circle" size={32} color="gray" />
                  </TouchableOpacity>
                </View>
              </View>
            </View> */}
             <View style={{}}>
                <Text style={{ fontSize: 18, fontWeight: "bold", marginBottom: 10 }}>Additional Document</Text>
                <ScrollView style={{ maxHeight: "auto" }}>
                  {Array.from({ length: ascnt }).map((_, index) => (
                    <View key={index} style={{ flexDirection: "row", alignItems: "center" }}>
                      <TextInput style={{ flex: 1, borderWidth: 1, borderColor: "#4B5563", padding: 10, marginBottom: 10 }} placeholder="Enter Document Number" />
                     <TouchableOpacity style={{ marginLeft: 10, borderWidth: 1, borderColor: "#4B5563", padding: 10, borderRadius: 10 }} onPress={handleClick}>
                     <MaterialIcons name="cloud-upload" size={24} color="black" />
                      </TouchableOpacity>
                    </View>
                  ))}
                </ScrollView>
                {ascnt < 5 && (
                  <TouchableOpacity style={{ flexDirection: "row", alignItems: "center", marginTop: 10 }} onPress={ashandleAdd}>
                    <Ionicons name="add-circle" size={24} color="#66bb6a" />
                    <Text style={{ color: "#66bb6a", marginLeft: 5 }}>Add More</Text>
                  </TouchableOpacity>
                )}
              </View>
            <TouchableOpacity
              style={{ backgroundColor: "#66bb6a", padding: 15, borderRadius: 10, justifyContent: "center", alignItems: "center", marginTop: 20 }}
              onPress={() => navigation.navigate('Done')}
            >
              <Text style={{ color: "#FFFFFF", fontSize: 18, fontWeight: "bold" }}>Submit</Text>
            </TouchableOpacity>

            <View style={{ backgroundColor: "#F3F4F6", marginBottom: "15%", marginTop: "15%" }}>
              {canview ? (
                <WebView
                  source={{ uri: "../assets/ewaygmn(_.pdf" }}
                  style={{ height: "95%", width: "100%" }}
                />
              ) : (
               
                  <TouchableOpacity
                    style={{ borderColor: "#34D399" }}
                   onPress={setCanViewFunction}
                  >
                    <Text style={{ color:  "#FFF" , backgroundColor: isDisabled() ? "#a5d6a7" : "#66bb6a", padding: 15, borderRadius: 10, textAlign: "center" ,fontSize: 18, fontWeight: "bold"}}>
                      Preview
                    </Text>
                  </TouchableOpacity>
                
              )}
            </View>
          </ScrollView>
        </View>
      </LinearGradient>
    </View>
  );
}

export default DocUpload;




// import React, { useRef, useState } from "react";
// import { View, Text, TextInput, TouchableOpacity, ScrollView , WebView } from "react-native";
// import { Ionicons } from "@expo/vector-icons";
// import { LinearGradient } from 'expo-linear-gradient'; // Import LinearGradient
// // import { useNavigation } from "@react-navigation/native";
// // import { Link } from "react-router-dom";

// function DocUpload({navigation}) {
//   // const navigation = useNavigation();
//    const [canview, setCanView] = useState(false);
//   const [grUploaded, setGrUploaded] = useState(0);
//   const [cnt, setCnt] = useState(1);
//   const [scnt, setSCnt] = useState(1);

//   const fileInput1 = useRef(null);
//   const fileInput2 = useRef(null);
//   const fileInput3 = useRef(null);

//   const handleClick = (fileInput, setUploaded, num, index) => {
//     fileInput.current.click();
//     if ((num === 0 && index === 0) || (num === 1 && index === 0))
//       setGrUploaded(grUploaded + 1);
//   };

//   const isDisabled = () => {
//     return grUploaded < 2;
//   };

//   const setCanViewFunction = () => {
//     setCanView(true);
//   };

//   const handleAdd = () => {
//     if (cnt < 5) setCnt(cnt + 1);
//   };

//   const shandleAdd = () => {
//     if (scnt < 5) setSCnt(scnt + 1);
//   };

//   return (
//        <View style={{ flex: 1  }}>
//             <LinearGradient
//                 colors={['white', '#4CAF50']}
//                 start={[0, 0]}
//                 end={[1, 1]}
//                 style={{ flex: 1 }}
//             >  
    
//     <View style={{ width:"95%", flex: 1, backgroundColor: "#FFFFFF", justifyContent: "center", alignItems: "center" ,  marginLeft:10,  marginBottom:10,  marginTop:130 ,  borderRadius:30 }}>
//       <ScrollView style={{ width: "85%" , paddingTop:20   }}>
//         <View style={{ flexDirection: "row", width: "100%", justifyContent: "center", alignItems: "center", marginBottom: 20 }}>
//           <Text style={{ fontSize: 24, fontWeight: "bold", color: "#34D399" }}>DocuVault</Text>
//         </View>
//         <View style={{ flexDirection: "col", justifyContent: "space-between" }}>

//           <View style={{ flex: 1,  }}>
//             <Text style={{ fontSize: 18, fontWeight: "bold", marginBottom: 10 }}>Upload GR</Text>
//             <ScrollView style={{ maxHeight: "auto" }}>
//               {Array.from({ length: cnt }).map((_, index) => (
//                 <View key={index} style={{ flexDirection: "row", alignItems: "center" }}>
//                   <TextInput style={{ flex: 1, borderWidth: 1, borderColor: "#4B5563", padding: 10, marginBottom: 10 }} placeholder="Enter GR Number" />
//                   <TouchableOpacity style={{ marginLeft: 10, borderWidth: 1, borderColor: "#4B5563", padding: 10, borderRadius: 10 }} onPress={() => handleClick(0, index)}>
// <Ionicons
//   name="add-circle"
//   size={32}
//   color="#4B5563"
//   onPress={() => handleClick(fileInput1, setGrUploaded, 0, index)}
// />
//                   </TouchableOpacity>
//                 </View>
//               ))}
//             </ScrollView>
//             {cnt < 5 && (
//               <TouchableOpacity style={{ flexDirection: "row", alignItems: "center", marginTop: 10 }} onPress={handleAdd}>
//                 <Ionicons name="add-circle" size={24} color="#34D399" />
//                 <Text style={{ color: "#34D399", marginLeft: 5 }}>Add More</Text>
//               </TouchableOpacity>
//             )}
//           </View>

//           <View style={{  }}>
//             <Text style={{ fontSize: 18, fontWeight: "bold", marginBottom: 10 }}>Upload Invoice Copy</Text>
//             <ScrollView style={{ maxHeight:"auto"}}>
//               {Array.from({ length: scnt }).map((_, index) => (
//                 <View key={index} style={{ flexDirection: "row", alignItems: "center" }}>
//                   <TextInput style={{ flex: 1, borderWidth: 1, borderColor: "#4B5563", padding: 10, marginBottom: 10 }} placeholder="Enter Invoice Number" />
//                   <TouchableOpacity style={{ marginLeft: 10, borderWidth: 1, borderColor: "#4B5563", padding: 10, borderRadius: 10 }} onPress={() => handleClick(1, index)}>

// <Ionicons
//   name="add-circle"
//   size={32}
//   color="gray"
//   onPress={() => handleClick(fileInput2, setGrUploaded, 1, index)}
// />
//                   </TouchableOpacity>
//                 </View>
//               ))}
//             </ScrollView>
//             {scnt < 5 && (
//               <TouchableOpacity style={{ flexDirection: "row", alignItems: "center", marginTop: 10 }} onPress={shandleAdd}>
//                 <Ionicons name="add-circle" size={24} color="#34D399" />
//                 <Text style={{ color: "#34D399", marginLeft: 5 }}>Add More</Text>
//               </TouchableOpacity>
//             )}
//           </View>
//         </View>
//         <View style={{ flexDirection: "row", justifyContent: "center", marginTop: 20 }}>
//           <Text style={{ color: "#EF4444", fontSize: 16 }}>File type: PDF, Max File Size: 2 MB</Text>
//         </View>
//  <View style={{width: "100%", padding: 8 }}>
      
//          <View style={{ flexDirection: "row", width: "100%", justifyContent: "center", alignItems: "center", marginBottom: 20 }}>
//           <Text style={{ fontSize: 20, fontWeight: "bold", color: "#34D399" }}>Upload Additional Documents</Text>
//         </View>
//       <View style={{ width: "95%", flexDirection: "row", justifyContent: "space-between" ,  }}>
//   <View style={{ }}>
//      <TouchableOpacity style={{ width:100, alignItems:"center", marginLeft: 10, borderWidth: 1, borderColor: "#4B5563", padding: 10, borderRadius: 10 }} >
//       <Ionicons name="add-circle" size={32} color="gray" />
//     </TouchableOpacity>
//   </View>
//   <View style={{ }}>
//   <TouchableOpacity style={{  width:100, alignItems:"center", marginLeft: 10, borderWidth: 1, borderColor: "#4B5563", padding: 10, borderRadius: 10 }} >
//         <Ionicons name="add-circle" size={32} color="gray" />
//     </TouchableOpacity>
//   </View>
// </View>
//       {/* Other components */}
//     </View>


        
//         <TouchableOpacity
//           style={{ backgroundColor: "#34D399", padding: 15, borderRadius: 10, justifyContent: "center", alignItems: "center", marginTop: 20  }} onPress={() => navigation.navigate('Done')}
         
//         >
//           <Text style={{ color: "#FFFFFF", fontSize: 18, fontWeight: "bold" }} >Submit</Text>
//         </TouchableOpacity>

//   <View style={{ backgroundColor: "#F3F4F6", marginBottom: "15%", marginTop: "15%" }}>
//               {canview ? (
//                 <WebView
//                   source={{ uri: "ewaygmn(_.pdf" }}
//                   style={{ height: "95%", width: "100%" }}
//                 />
//               ) : (
//                 <TouchableOpacity
//                   disabled={isDisabled()}
//                   style={{ borderColor: "#34D399" }}
//                   onPress={setCanViewFunction}
//                 >
//                   <Text style={{ color: !isDisabled() ? "#FFF" : "#000", backgroundColor: !isDisabled() ? "#34D399" : "#C6F6D5", padding: 10, borderRadius: 10, textAlign: "center" }}>
//                     Preview
//                   </Text>
//                 </TouchableOpacity>
//               )}
//             </View>

//       </ScrollView>
//     </View>
        
//             </LinearGradient>
//         </View>
//   );
// }

// export default DocUpload;