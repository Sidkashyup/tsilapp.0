
import React, { useState } from 'react';
import { View, Text, ScrollView, TouchableOpacity } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient'; // Import at the top
import { Linking } from 'react-native';
const Intransitmsi = () => {
  const [trackby, setTrackby] = useState('');
  const [startDate, setStartDate] = useState(null);
  const openExcel = () => {
    Linking.openURL('https://docs.google.com/spreadsheets/d/13d0z3MUpjc2G3E7YfuZgMgolXA67_p2a/edit?usp=sharing&ouid=100245542192786751805&rtpof=true&sd=true');
  };
  
 const tslAll = () => {
  Linking.openURL('https://drive.google.com/file/d/1J3iKpuoEoFw0_XjjbySeivlKrXeZIz9v/view?usp=sharing');
};
  return (
      <View  style={styles.container}>
      <LinearGradient
        colors={['white', '#66bb6a']}
        start={[0, 0]}
        end={[1, 1]}
        style={[styles.gradient,{ flex: 1,justifyContent: "center", alignItems: "center" }]}
      >
        <View style={[styles.innerContainer, { flex: 1, paddingTop: 150, paddingBottom: 150,width:"85%"}]}>

      <View style={{ backgroundColor: 'white', flex: 1, padding: 10, borderWidth: 2,borderColor: '#66bb6a' }}>
        <Text style={{ fontSize: 24, fontWeight: 'bold', color: '#66bb6a', textAlign: 'center', padding: 10 }}>
          MIS-REPORT
        </Text>
       <ScrollView horizontal>
  {/* Row 1 */}
  <View  style = {{flexDirection:"col"}}   > 
  <View style={{ flexDirection: 'row', marginTop: 10 }}>
   <View style={{ borderColor: 'white',  borderWidth: 2, backgroundColor: '#66bb6a', flex: 1, padding: 10, height: 50 }}>
  <Text style={{ color: 'white', fontSize: 15, textAlign: 'center' }}>E-Way No.</Text>
</View>
<View style={{ borderColor: 'white',  borderWidth: 2, backgroundColor: '#66bb6a', flex: 1, padding: 10, height: 50 }}>
  <Text style={{ color: 'white', fontSize: 15, textAlign: 'center' }}>TSL No.</Text>
</View>

<View style={{ borderColor: 'white',  borderWidth: 2, backgroundColor: '#66bb6a', flex: 1, padding: 10, height: 50 }}>
  <Text style={{ color: 'white', fontSize: 15, textAlign: 'center' }}>GR No.</Text>
</View>

<View style={{ borderColor: 'white',  borderWidth: 2, backgroundColor: '#66bb6a', flex: 1, padding: 10, height: 50 }}>
  <Text style={{ color: 'white', fontSize: 15, textAlign: 'center' }}> Vichical No.</Text>
</View>

<View style={{ borderColor: 'white',  borderWidth: 2, backgroundColor: '#66bb6a', flex: 1, padding: 10, height: 50 }}>
  <Text style={{ color: 'white', fontSize: 15, textAlign: 'center' }}>Date-of-DPOD</Text>
</View>


<TouchableOpacity onPress={() => { /* handle navigation */ }} >
  <View style={{ backgroundColor: '#66bb6a', padding: 10, height: 50, borderWidth: 2, borderColor: 'white', justifyContent: 'center', alignItems: 'center' }}>
    <Text style={{ color: 'white', fontSize: 15 }}>Tracking-status</Text>
  </View>
</TouchableOpacity>



<View style={{ borderColor: 'white',  borderWidth: 2, backgroundColor: '#66bb6a', flex: 1, padding: 10, height: 50 }}>
  <Text style={{ color: 'white', fontSize: 15, textAlign: 'center' }}>  Last-Location</Text>
</View>

<View style={{ borderColor: 'white',  borderWidth: 2, backgroundColor: '#66bb6a', flex: 1, padding: 10, height: 50 }}>
  <Text style={{ color: 'white', fontSize: 15, textAlign: 'center' }}>Last-Location_Dilivery</Text>
</View>

 <View style={{ borderColor: 'white',  borderWidth: 2, backgroundColor: '#66bb6a', flex: 1, padding: 10, height: 50 }}>
  <Text style={{ color: 'white', fontSize: 15, textAlign: 'center' }}>Dispatch-Date</Text>
</View>
<View style={{ borderColor: 'white',  borderWidth: 2, backgroundColor: '#66bb6a', flex: 1, padding: 10, height: 50 }}>
  <Text style={{ color: 'white', fontSize: 15, textAlign: 'center' }}>Reporting-Date</Text>
</View>

<View style={{ borderColor: 'white',  borderWidth: 2, backgroundColor: '#66bb6a', flex: 1, padding: 10, height: 50 }}>
  <Text style={{ color: 'white', fontSize: 15, textAlign: 'center' }}>Delivery-Date</Text>
</View>

<View style={{ borderColor: 'white',  borderWidth: 2, backgroundColor: '#66bb6a', flex: 1, padding: 10, height: 50 }}>
  <Text style={{ color: 'white', fontSize: 15, textAlign: 'center' }}> Otp-Send-Date</Text>
</View>

<View style={{ borderColor: 'white',  borderWidth: 2, backgroundColor: '#66bb6a', flex: 1, padding: 10, height: 50 }}>
  <Text style={{ color: 'white', fontSize: 15, textAlign: 'center' }}>DPOD-Date_30min</Text>
</View>


<View style={{ borderColor: 'white',  borderWidth: 2, backgroundColor: '#66bb6a', flex: 1, padding: 10, height: 50 }}>
  <Text style={{ color: 'white', fontSize: 15, textAlign: 'center' }}>DPOD-Remark</Text>
</View>

<TouchableOpacity onPress={tslAll} >
  <View style={{ backgroundColor: '#66bb6a', padding: 10, height: 50, borderWidth: 2, borderColor: 'white', justifyContent: 'center', alignItems: 'center' }}>
    <Text style={{ color: 'white', fontSize: 15 }}>View-Doc-ALL</Text>
  </View>
</TouchableOpacity>


    {/* Add similar views for other columns */}
  </View>


   <View style={{ flexDirection: 'row' }}>
   <View style={{ borderColor: 'white',  borderWidth: 2, backgroundColor: '#CCCCCC', flex: 1, padding: 10, height: 50 }}>
  <Text style={{ color: 'white', fontSize: 15, textAlign: 'center' }}>E-Way No.</Text>
</View>
<View style={{ borderColor: 'white',  borderWidth: 2, backgroundColor: '#CCCCCC', flex: 1, padding: 10, height: 50 }}>
  <Text style={{ color: 'white', fontSize: 15, textAlign: 'center' }}>TSL No.</Text>
</View>

<View style={{ borderColor: 'white',  borderWidth: 2, backgroundColor: '#CCCCCC', flex: 1, padding: 10, height: 50 }}>
  <Text style={{ color: 'white', fontSize: 15, textAlign: 'center' }}>GR No.</Text>
</View>

<View style={{ borderColor: 'white',  borderWidth: 2, backgroundColor: '#CCCCCC', flex: 1, padding: 10, height: 50 }}>
  <Text style={{ color: 'white', fontSize: 15, textAlign: 'center' }}> Vichical No.</Text>
</View>

<View style={{ borderColor: 'white',  borderWidth: 2, backgroundColor: '#CCCCCC', flex: 1, padding: 10, height: 50 }}>
  <Text style={{ color: 'white', fontSize: 15, textAlign: 'center' }}>Date-of-DPOD</Text>
</View>


<TouchableOpacity onPress={openExcel} >
  <View style={{ backgroundColor: '#CCCCCC', padding: 10, height: 50, borderWidth: 2, borderColor: 'white', justifyContent: 'center', alignItems: 'center' }}>
    <Text style={{ color: 'white', fontSize: 15 }}>Tracking-status</Text>
  </View>
</TouchableOpacity>


<View style={{ borderColor: 'white',  borderWidth: 2, backgroundColor: '#CCCCCC', flex: 1, padding: 10, height: 50 }}>
  <Text style={{ color: 'white', fontSize: 15, textAlign: 'center' }}>  Last-Location</Text>
</View>

<View style={{ borderColor: 'white',  borderWidth: 2, backgroundColor: '#CCCCCC', flex: 1, padding: 10, height: 50 }}>
  <Text style={{ color: 'white', fontSize: 15, textAlign: 'center' }}>Last-Location_Dilivery</Text>
</View>

 <View style={{ borderColor: 'white',  borderWidth: 2, backgroundColor: '#CCCCCC', flex: 1, padding: 10, height: 50 }}>
  <Text style={{ color: 'white', fontSize: 15, textAlign: 'center' }}>Dispatch-Date</Text>
</View>
<View style={{ borderColor: 'white',  borderWidth: 2, backgroundColor: '#CCCCCC', flex: 1, padding: 10, height: 50 }}>
  <Text style={{ color: 'white', fontSize: 15, textAlign: 'center' }}>Reporting-Date</Text>
</View>

<View style={{ borderColor: 'white',  borderWidth: 2, backgroundColor: '#CCCCCC', flex: 1, padding: 10, height: 50 }}>
  <Text style={{ color: 'white', fontSize: 15, textAlign: 'center' }}>Delivery-Date</Text>
</View>

<View style={{ borderColor: 'white',  borderWidth: 2, backgroundColor: '#CCCCCC', flex: 1, padding: 10, height: 50 }}>
  <Text style={{ color: 'white', fontSize: 15, textAlign: 'center' }}> Otp-Send-Date</Text>
</View>

<View style={{ borderColor: 'white',  borderWidth: 2, backgroundColor: '#CCCCCC', flex: 1, padding: 10, height: 50 }}>
  <Text style={{ color: 'white', fontSize: 15, textAlign: 'center' }}>DPOD-Date_30min</Text>
</View>


<View style={{ borderColor: 'white',  borderWidth: 2, backgroundColor: '#CCCCCC', flex: 1, padding: 10, height: 50 }}>
  <Text style={{ color: 'white', fontSize: 15, textAlign: 'center' }}>DPOD-Remark</Text>
</View>

<TouchableOpacity onPress={tslAll} >
  <View style={{ backgroundColor: '#CCCCCC', padding: 10, height: 50, borderWidth: 2, borderColor: 'white', justifyContent: 'center', alignItems: 'center' }}>
    <Text style={{ color: 'white', fontSize: 15 }}>View-Doc-ALL</Text>
  </View>
</TouchableOpacity>



    {/* Add similar views for other columns */}
  </View>
<View style={{ flexDirection: 'row' }}>
   <View style={{ borderColor: 'white',  borderWidth: 2, backgroundColor: '#CCCCCC', flex: 1, padding: 10, height: 50 }}>
  <Text style={{ color: 'white', fontSize: 15, textAlign: 'center' }}>E-Way No.</Text>
</View>
<View style={{ borderColor: 'white',  borderWidth: 2, backgroundColor: '#CCCCCC', flex: 1, padding: 10, height: 50 }}>
  <Text style={{ color: 'white', fontSize: 15, textAlign: 'center' }}>TSL No.</Text>
</View>

<View style={{ borderColor: 'white',  borderWidth: 2, backgroundColor: '#CCCCCC', flex: 1, padding: 10, height: 50 }}>
  <Text style={{ color: 'white', fontSize: 15, textAlign: 'center' }}>GR No.</Text>
</View>

<View style={{ borderColor: 'white',  borderWidth: 2, backgroundColor: '#CCCCCC', flex: 1, padding: 10, height: 50 }}>
  <Text style={{ color: 'white', fontSize: 15, textAlign: 'center' }}> Vichical No.</Text>
</View>

<View style={{ borderColor: 'white',  borderWidth: 2, backgroundColor: '#CCCCCC', flex: 1, padding: 10, height: 50 }}>
  <Text style={{ color: 'white', fontSize: 15, textAlign: 'center' }}>Date-of-DPOD</Text>
</View>


<TouchableOpacity onPress={openExcel} >
  <View style={{ backgroundColor: '#CCCCCC', padding: 10, height: 50, borderWidth: 2, borderColor: 'white', justifyContent: 'center', alignItems: 'center' }}>
    <Text style={{ color: 'white', fontSize: 15 }}>Tracking-status</Text>
  </View>
</TouchableOpacity>


<View style={{ borderColor: 'white',  borderWidth: 2, backgroundColor: '#CCCCCC', flex: 1, padding: 10, height: 50 }}>
  <Text style={{ color: 'white', fontSize: 15, textAlign: 'center' }}>  Last-Location</Text>
</View>

<View style={{ borderColor: 'white',  borderWidth: 2, backgroundColor: '#CCCCCC', flex: 1, padding: 10, height: 50 }}>
  <Text style={{ color: 'white', fontSize: 15, textAlign: 'center' }}>Last-Location_Dilivery</Text>
</View>

 <View style={{ borderColor: 'white',  borderWidth: 2, backgroundColor: '#CCCCCC', flex: 1, padding: 10, height: 50 }}>
  <Text style={{ color: 'white', fontSize: 15, textAlign: 'center' }}>Dispatch-Date</Text>
</View>
<View style={{ borderColor: 'white',  borderWidth: 2, backgroundColor: '#CCCCCC', flex: 1, padding: 10, height: 50 }}>
  <Text style={{ color: 'white', fontSize: 15, textAlign: 'center' }}>Reporting-Date</Text>
</View>

<View style={{ borderColor: 'white',  borderWidth: 2, backgroundColor: '#CCCCCC', flex: 1, padding: 10, height: 50 }}>
  <Text style={{ color: 'white', fontSize: 15, textAlign: 'center' }}>Delivery-Date</Text>
</View>

<View style={{ borderColor: 'white',  borderWidth: 2, backgroundColor: '#CCCCCC', flex: 1, padding: 10, height: 50 }}>
  <Text style={{ color: 'white', fontSize: 15, textAlign: 'center' }}> Otp-Send-Date</Text>
</View>

<View style={{ borderColor: 'white',  borderWidth: 2, backgroundColor: '#CCCCCC', flex: 1, padding: 10, height: 50 }}>
  <Text style={{ color: 'white', fontSize: 15, textAlign: 'center' }}>DPOD-Date_30min</Text>
</View>


<View style={{ borderColor: 'white',  borderWidth: 2, backgroundColor: '#CCCCCC', flex: 1, padding: 10, height: 50 }}>
  <Text style={{ color: 'white', fontSize: 15, textAlign: 'center' }}>DPOD-Remark</Text>
</View>

<TouchableOpacity onPress={tslAll} >
  <View style={{ backgroundColor: '#CCCCCC', padding: 10, height: 50, borderWidth: 2, borderColor: 'white', justifyContent: 'center', alignItems: 'center' }}>
    <Text style={{ color: 'white', fontSize: 15 }}>View-Doc-ALL</Text>
  </View>
</TouchableOpacity>



    {/* Add similar views for other columns */}
  </View>
<View style={{ flexDirection: 'row' }}>
   <View style={{ borderColor: 'white',  borderWidth: 2, backgroundColor: '#CCCCCC', flex: 1, padding: 10, height: 50 }}>
  <Text style={{ color: 'white', fontSize: 15, textAlign: 'center' }}>E-Way No.</Text>
</View>
<View style={{ borderColor: 'white',  borderWidth: 2, backgroundColor: '#CCCCCC', flex: 1, padding: 10, height: 50 }}>
  <Text style={{ color: 'white', fontSize: 15, textAlign: 'center' }}>TSL No.</Text>
</View>

<View style={{ borderColor: 'white',  borderWidth: 2, backgroundColor: '#CCCCCC', flex: 1, padding: 10, height: 50 }}>
  <Text style={{ color: 'white', fontSize: 15, textAlign: 'center' }}>GR No.</Text>
</View>

<View style={{ borderColor: 'white',  borderWidth: 2, backgroundColor: '#CCCCCC', flex: 1, padding: 10, height: 50 }}>
  <Text style={{ color: 'white', fontSize: 15, textAlign: 'center' }}> Vichical No.</Text>
</View>

<View style={{ borderColor: 'white',  borderWidth: 2, backgroundColor: '#CCCCCC', flex: 1, padding: 10, height: 50 }}>
  <Text style={{ color: 'white', fontSize: 15, textAlign: 'center' }}>Date-of-DPOD</Text>
</View>


<TouchableOpacity onPress={openExcel}>
  <View style={{ backgroundColor: '#CCCCCC', padding: 10, height: 50, borderWidth: 2, borderColor: 'white', justifyContent: 'center', alignItems: 'center' }}>
    <Text style={{ color: 'white', fontSize: 15 }}>Tracking-status</Text>
  </View>
</TouchableOpacity>


<View style={{ borderColor: 'white',  borderWidth: 2, backgroundColor: '#CCCCCC', flex: 1, padding: 10, height: 50 }}>
  <Text style={{ color: 'white', fontSize: 15, textAlign: 'center' }}>  Last-Location</Text>
</View>

<View style={{ borderColor: 'white',  borderWidth: 2, backgroundColor: '#CCCCCC', flex: 1, padding: 10, height: 50 }}>
  <Text style={{ color: 'white', fontSize: 15, textAlign: 'center' }}>Last-Location_Dilivery</Text>
</View>

 <View style={{ borderColor: 'white',  borderWidth: 2, backgroundColor: '#CCCCCC', flex: 1, padding: 10, height: 50 }}>
  <Text style={{ color: 'white', fontSize: 15, textAlign: 'center' }}>Dispatch-Date</Text>
</View>
<View style={{ borderColor: 'white',  borderWidth: 2, backgroundColor: '#CCCCCC', flex: 1, padding: 10, height: 50 }}>
  <Text style={{ color: 'white', fontSize: 15, textAlign: 'center' }}>Reporting-Date</Text>
</View>

<View style={{ borderColor: 'white',  borderWidth: 2, backgroundColor: '#CCCCCC', flex: 1, padding: 10, height: 50 }}>
  <Text style={{ color: 'white', fontSize: 15, textAlign: 'center' }}>Delivery-Date</Text>
</View>

<View style={{ borderColor: 'white',  borderWidth: 2, backgroundColor: '#CCCCCC', flex: 1, padding: 10, height: 50 }}>
  <Text style={{ color: 'white', fontSize: 15, textAlign: 'center' }}> Otp-Send-Date</Text>
</View>

<View style={{ borderColor: 'white',  borderWidth: 2, backgroundColor: '#CCCCCC', flex: 1, padding: 10, height: 50 }}>
  <Text style={{ color: 'white', fontSize: 15, textAlign: 'center' }}>DPOD-Date_30min</Text>
</View>


<View style={{ borderColor: 'white',  borderWidth: 2, backgroundColor: '#CCCCCC', flex: 1, padding: 10, height: 50 }}>
  <Text style={{ color: 'white', fontSize: 15, textAlign: 'center' }}>DPOD-Remark</Text>
</View>

<TouchableOpacity onPress={tslAll} >
  <View style={{ backgroundColor: '#CCCCCC', padding: 10, height: 50, borderWidth: 2, borderColor: 'white', justifyContent: 'center', alignItems: 'center' }}>
    <Text style={{ color: 'white', fontSize: 15 }}>View-Doc-ALL</Text>
  </View>
</TouchableOpacity>



    {/* Add similar views for other columns */}
  </View>

 </View>

  {/* Add additional rows in a similar manner */}
</ScrollView>

      </View>
    </View>

      </LinearGradient>
    </View>
  );
};

const styles = {
  container: {
    flex: 1,
  },
  gradient: {
    flex: 1,
  },
};

export default Intransitmsi;

