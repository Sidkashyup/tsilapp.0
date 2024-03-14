import { Text, SafeAreaView, StyleSheet, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

//icons
import { Ionicons } from '@expo/vector-icons';
import { Entypo } from '@expo/vector-icons';
import { FontAwesome } from '@expo/vector-icons';
import { MaterialIcons } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons';
import { MaterialCommunityIcons } from '@expo/vector-icons';

import {
  createDrawerNavigator,
  DrawerContentScrollView,
  DrawerItemList,
  DrawerItem,
} from '@react-navigation/drawer';
import { createStackNavigator } from '@react-navigation/stack';
import { Signup } from './components/Signup';
import Login from './components/Login';
import Navbar from './components/Navbar';
import GreenLogistic from './components/GreenLogistic/Greenlogistic';
import { IconButton } from 'react-native-paper';
import LoadingPage from './components/LoadingPage';
import AuthorizationForm from './components/GreenLogistic/AuthorizationForm';
import Ewayauth from './components/GreenLogistic/EwayAuth';
import GreenForm from './components/GreenLogistic/GreenForm';
import AboutUs from './components/AboutUs/Aboutus';
import ContactUs from './components/Contactus/ContactUs';
import DocUpload from './components/GreenLogistic/DocUpload';
import CustomerGreenCell from './components/CustomerGreenCell/CustomerGreenCell';
import Done from './components/GreenLogistic/Done';

//vehicle tracking
import TrackVehicle from './components/TraceTruck/Trackvehicle';
import Trip from './components/TraceTruck/Trip';
import VehicleTracking from './components/TraceTruck/VehicleTracking';

//document library
import DocumentLibrary from './components/DocumentLibrary/Documentlibrary';
import Verify from './components/DocumentLibrary/Verify';
import Pdffill from './components/DocumentLibrary/Pdffill';

import Otpverify from './components/Otpverify';

//mis report
import MisMain from './components/MIS/MisMain';
import MisReport from './components/MIS/Misreport';
import InTransitMis from './components/MIS/Intransitmsi';
import ExistingUser from './components/MIS/ExistingUser';
// You can import supported modules from npm
import { Card } from 'react-native-paper';

// or any files within the Snack
import AssetExample from './components/AssetExample';
import Main from './pages/main';
const Stack = createStackNavigator();
const AuthStack = createStackNavigator();
const MainStack = createStackNavigator();
const Drawer = createDrawerNavigator();


const AuthNavigator = () => (
  <AuthStack.Navigator>
    <AuthStack.Screen name="Signup" component={Signup} />
    <AuthStack.Screen name="Login" component={Login} />
  </AuthStack.Navigator>
);

const MainNavigator = () => (
  <MainStack.Navigator>
    <MainStack.Screen
      name="DrawerNavigator"
      component={DrawerNavigator}
      options={{ headerShown: false }}
    />
  </MainStack.Navigator>
);

const CustomDrawerContent = (props) => (
  <DrawerContentScrollView {...props}>
    <View style={{ padding: 20 }}>
      <Text style={{ fontSize: 24, fontWeight: 'bold' }}>
        Transvue solutions
      </Text>
    </View>
    <DrawerItemList {...props} />
  </DrawerContentScrollView>
);

const DrawerNavigator = () => (
  <Drawer.Navigator
    drawerContent={(props) => <CustomDrawerContent {...props} />}>
    <Drawer.Screen
      name="GreenLogistic"
      component={GreenLogisticStack}
      options={{
        title: 'Home',
        drawerIcon: ({ focused, color, size }) => (
          <Entypo name="home" size={24} color="black" />
        ),
        drawerLabelStyle: { fontWeight: 'bold' },
      }}
    />
    <Drawer.Screen
      name="Tracking"
      component={TrackingStack}
      options={{
        title: 'Wheel On Drive',
        drawerIcon: ({ focused, color, size }) => (
          <FontAwesome name="map-marker" size={24} color="black" />
        ),
        drawerLabelStyle: { fontWeight: 'bold' },
      }}
    />
    <Drawer.Screen
      name="DocumentLibrary"
      component={DocumentLibraryStack}
      options={{
        title: 'Library',
        drawerIcon: ({ focused, color, size }) => (
          <Ionicons name="library-sharp" size={24} color="black" />
        ),
        drawerLabelStyle: { fontWeight: 'bold' },
      }}
    />
    <Drawer.Screen
      name="MisMain"
      component={MisMainStack}
      options={{
        title: 'Info-Desk',
        drawerIcon: ({ focused, color, size }) => (
          <AntDesign name="piechart" size={24} color="black" />
        ),
        drawerLabelStyle: { fontWeight: 'bold' },
      }}
    />
    <Drawer.Screen
      name="AboutUs"
      component={AboutUs}
      options={{
        title: 'About Us',
        drawerIcon: ({ focused, color, size }) => (
          <FontAwesome name="users" size={24} color="black" />
        ),
        drawerLabelStyle: { fontWeight: 'bold' },
      }}
    />
    <Drawer.Screen
      name="ContactUs"
      component={ContactUs}
      options={{
        title: 'Contact Us',
        drawerIcon: ({ focused, color, size }) => (
          <MaterialIcons name="contacts" size={24} color="black" />
        ),
        drawerLabelStyle: { fontWeight: 'bold' },
      }}
    />
    <Drawer.Screen
      name="CustomerGreenCell"
      component={CustomerGreenCell}
      options={{
        title: 'Customer Green Cell',
        drawerIcon: ({ focused, color, size }) => (
          <AntDesign name="customerservice" size={24} color="black" />
        ),
        drawerLabelStyle: { fontWeight: 'bold' },
      }}
    />
    <Drawer.Screen
      name="Logout"
      component={Signup}
      options={{
        title: 'Logout',
        drawerIcon: ({ focused, color, size }) => (
          <Ionicons name="log-out" size={size} color={color} />
        ),
        drawerLabelStyle: { fontWeight: 'bold' },
        headerShown: false,
      }}
      onPress={() => {
        // Perform logout actions here
        navigation.navigate('Signup'); // Navigate to Signup component
      }}
    />
  </Drawer.Navigator>
);

const GreenLogisticStack = () => (
  <Stack.Navigator>
    <Stack.Screen
      name="GreenLogistic"
      component={GreenLogistic}
      options={{ headerShown: false }}
    />
    <Stack.Screen
      name="Ewayauth"
      component={Ewayauth}
      options={{ headerShown: false }}
    />
    <Stack.Screen
      name="GreenForm"
      component={GreenForm}
      options={{ headerShown: false }}
    />
    <Stack.Screen
      name="DocUpload"
      component={DocUpload}
      options={{ headerShown: false }}
    />
    <Stack.Screen
      name="AuthorizationForm"
      component={AuthorizationForm}
      options={{ headerShown: false }}
    />
    <Stack.Screen
      name="TrackVehicle"
      component={TrackVehicle}
      options={{ headerShown: false }}
    />
    <Stack.Screen
      name="Done"
      component={Done}
      options={{ headerShown: false }}
    />
  </Stack.Navigator>
);
//TrackVehicle
const TrackingStack = () => (
  <Stack.Navigator>
    <Stack.Screen
      name="TrackVehicle"
      component={TrackVehicle}
      options={{ headerShown: false }}
    />
    <Stack.Screen
      name="Trip"
      component={Trip}
      options={{ headerShown: false }}
    />
    <Stack.Screen
      name="VehicleTracking"
      component={VehicleTracking}
      options={{ headerShown: false }}
    />
  </Stack.Navigator>
);

const DocumentLibraryStack = () => (
  <Stack.Navigator>
    <Stack.Screen
      name="DocumentLibrary"
      component={DocumentLibrary}
      options={{ headerShown: false }}
    />
    <Stack.Screen
      name="Verify"
      component={Verify}
      options={{ headerShown: false }}
    />
    <Stack.Screen
      name="Pdffill"
      component={Pdffill}
      options={{ headerShown: false }}
    />
  </Stack.Navigator>
);

const MisMainStack = () => (
  <Stack.Navigator>
      <Stack.Screen
      name="MisMain"
      component={MisMain}
      options={{
        headerShown: false }}
    />
    <Stack.Screen
      name="ExistingUser"
      component={ExistingUser}
      options={{ headerShown: false }}
    />
    <Stack.Screen
      name="MisReport"
      component={MisReport}
      options={{ headerShown: false }}
    />
    <Stack.Screen
      name="InTransitMis"
      component={InTransitMis}
      options={{ headerShown: false }}
    />
  </Stack.Navigator>
);

const RootNavigator = () => (
  <Stack.Navigator>
    <Stack.Screen
      name="LoadingPage"
      component={LoadingPage}
      options={{ headerShown: false }}
    />
    <Stack.Screen
      name="Signup"
      component={Signup}
      options={{
        title: 'Transvue Soultions',
      }}
    />
    <Stack.Screen name="Login" component={Login} />
    <Stack.Screen
      name="DrawerNavigator"
      component={DrawerNavigator}
      options={{ headerShown: false }}
    />

    <Stack.Screen name="AboutUs" component={AboutUs} />
       <Stack.Screen name="ContactUs" component={ContactUs} />
    <Stack.Screen name="CustomerGreenCell" component={CustomerGreenCell} />
  </Stack.Navigator>
);

export default function App() {
  return (
    <NavigationContainer>
      <RootNavigator />
    </NavigationContainer>
  );
}
