import React from "react";
import { View, TextInput, Text , Image, TouchableOpacity , ScrollView} from "react-native";
import { LinearGradient } from 'expo-linear-gradient'; // Import LinearGradient
import { Linking } from 'react-native';

const Trip = ({navigation}) => {

  const tostershow = () => {
    // Show toast message
    toast.success('OTP sent successfully!', {
      position: "bottom-right",
      autoClose: 3000, // 3 seconds
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    });
  };

  const openExcel = () => {
    Linking.openURL('https://docs.google.com/spreadsheets/d/13d0z3MUpjc2G3E7YfuZgMgolXA67_p2a/edit?usp=sharing&ouid=100245542192786751805&rtpof=true&sd=true');
  };

  return (

   <View style={{ flex: 1  }}>
            <LinearGradient
                colors={['white', '#4CAF50']}
                start={[0, 0]}
                end={[1, 1]}
                style={{ flex: 1 }}
            >  
     
    <View style={{ width:"95%", flex: 1, backgroundColor: "#FFFFFF", justifyContent: "center", alignItems: "center" ,  marginLeft:10,  marginBottom:10,  marginTop:10,  borderRadius:30 , height:"90%"  }}>

    <View style={{ alignItems: 'center', justifyContent: 'center', padding: 24 }}>
  <Image style={{ height: 228, width: 328 }} source={{ uri: 'https://www.locate2u.com/wp-content/uploads/A-1-98.webp' }} />
</View>

      <ScrollView style={{ backgroundColor: 'white',width:"95%", borderRadius: 10, padding: 16  }}>
          {/* Content */}
            {/* Replace input fields with TextInput */}
            <View style={{flexDirection:"row"  , width: '100%' , justifyContent:"space-between"  }} >
             <Text style={{ color: '#888', marginBottom: 4 }}>Trip ID-TSL-XXxxxx</Text>
              <Text style={{ color: '#888', marginBottom: 4 }}>TSL: 123345</Text>
            
            </View>

<View style={{ flexDirection: 'row', justifyContent: 'space-between', marginBottom: 16 }}>
      <View style={{ flex: 1, marginRight: 8 }}>
        <Text style={{ color: '#888', marginBottom: 4 }}>Vehicle Number</Text>
        <TextInput
          style={{ backgroundColor: '#ccc', borderRadius: 8, padding: 8 }}
          placeholder="XXXXXX"
          editable={false}
        />
      </View>
      <View style={{ flex: 1, marginLeft: 8 }}>
        <Text style={{ color: '#888', marginBottom: 4 }}>Driver Name</Text>
        <TextInput
          style={{ backgroundColor: '#ccc', borderRadius: 8, padding: 8 }}
          placeholder="XXXXXX"
          editable={false}
        />
      </View>
    </View>

    <View style={{ borderTopWidth: 1, borderTopColor: '#ccc', paddingTop: 16, marginBottom: 16 , width:"100%" }}>
      <View style={{ flexDirection: 'col',  marginBottom: 16 , width:"100%" }}>
        <Text style={{ color: '#888' , width:"100%" }}>Source</Text>
        <Text style={{ color: '#000', fontSize: 14, fontWeight: 'bold' , width:"100%" }}>
          Chinsurah - Magra, Hooghly District, West Bengal, India
        </Text>
      </View>
      <View style={{ flexDirection: 'col', marginBottom: 8 ,  width:"100%"   }}>
         <Text style={{ color: '#888' , width:"100%" }}>Destination</Text>
        <Text style={{ color: '#000', fontSize: 14, fontWeight: 'bold' }}>
          New Delhi, Delhi, India
        </Text>
      </View>
      <Text style={{ color: '#000' }}>Last Location: 10 Jan 11:49 AM, Aurangabad District, Bihar, India</Text>
    </View>

    <View style={{ marginBottom: 16  , width:"100%" }}>
      <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', marginBottom: 8   , width:"100%"}}>
        <Text style={{ color: '#000' }}>Created at: 09 Jan 12:41 PM</Text>
        <Text style={{ color: '#0f0' }}>Status: RUNNING</Text>
      </View>
      <View style={{ flexDirection: 'col', flexWrap: 'wrap', marginBottom: 16  , width:"100%" }}>
        <View style={{ width: '50%', marginBottom: 8 }}>
          <Text style={{ color: '#888' }}>Total Distance: 1419 km</Text>
        </View>
        <View style={{ width: '50%', marginBottom: 8 }}>
          <Text style={{ color: '#888' }}>Distance Travel: 442 km</Text>
        </View>
        <View style={{ width: '50%', marginBottom: 8 }}>
          <Text style={{ color: '#888' }}>Average Km/hr: 16.3 km</Text>
        </View>
        <View style={{ width: '50%', marginBottom: 8 }}>
          <Text style={{ color: '#888' }}>ETA: XXX</Text>
        </View>
        <View style={{ width: '50%', marginBottom: 8 }}>
          <Text style={{ color: '#888' }}>ETD: XXX</Text>
        </View>
      </View>
      <Text style={{ color: '#888', marginBottom: 16 }}>Remarks/Delay Reason: Fuel Shortage, heavy rain etc.</Text>
    </View>

            {/* ... rest of the content ... */}
            <TouchableOpacity style={{ backgroundColor: '#66bb6a', borderRadius: 10, padding: 8, marginTop: 16 }}>
              <Text style={{ color: 'white', textAlign: 'center' }}>Timeline</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={openExcel} style={{ backgroundColor: '#66bb6a', borderRadius: 10, padding: 8, marginTop: 16 }}>
              <Text style={{ color: 'white', textAlign: 'center' }}>Download Report</Text>
            </TouchableOpacity>
            <TouchableOpacity style={{ backgroundColor: '#66bb6a', borderRadius: 10, padding: 8, marginTop: 16 }}>
              <Text style={{ color: 'white', textAlign: 'center' }}>Save</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => navigation.navigate("TrackVehicle")} style={{ backgroundColor: '#66bb6a', borderRadius: 10, padding: 8, marginTop: 16 , marginBottom:30  }} >
              <Text style={{ color: 'white', textAlign: 'center'  }}>Close</Text>
            </TouchableOpacity>

          {/* Map Container */}
          <View style={{ backgroundColor: 'white', width: '50%', marginRight: 5, borderRadius: 10 }}>
            <Image source={Map} style={{ flex: 1, resizeMode: 'cover' }} />
            {/* Implement native map component */}
          </View>
      
  
      </ScrollView>
    </View>
        
            </LinearGradient>
        </View>
  );
}

export default Trip;