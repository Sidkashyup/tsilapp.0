import React, { useState } from 'react';
import { View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
// import Navbar from '../components/Navbar';
// import Footer from '../components/Footer';
import HomePage from "./Homepage"
// import GreenForm from '../components/GreenForm';
// import GreenFormSubmit from '../components/GreenFormSubmit';
// import Ewaybill from '../components/Ewaybill';
// import Temp2 from '../components/Temp2';
// import Dashboard from './Dashboard';
// import Pdffill from './Pdffill';
// import Verify from './Verify';
// import AuthorizationForm from '../components/AuthorizationForm';
// import Payment from '../components/Payment';
// import Grpdfalldoc from '../components/Grpdfalldoc';
// import Ewaybillgrpalldoc from '../components/Ewaybillgrpalldoc';
// import DocUpload from "../components/DocUpload";
// import Trip from '../components/Trip';
// import VehicleTracking from '../components/VehicleTracking';
// import Ewayauth from '../components/Ewayauth';
// import Temp23 from '../components/Temp23';
// import VehicleRc from '../components/VehicleRc';
// import TrackAuth from '../components/TrackAuth';
// import UserDropDown from '../components/UserDropDown';
// import TrackVehicle from '../components/TrackVehicle';
// import DocumentLibrary from '../components/DocumentLibrary';
// import GreenLogistic from '../components/GreenLogistic';
// import LoadingPage from '../components/LoadingPage';
// import Existinguser from '../components/ExistingUser';
// import Misreport from '../components/MisReport';
// import Intransitmsi from '../components/InTransitMis';
// import MisMain from '../components/MisMain';

const Stack = createStackNavigator();

function Main() {
  const [formData, setFormData] = useState({});
  const [greenFormInfo, setGreenFormInfo] = useState({});
  const [userBtn, setUserBtn] = useState(false);
  const [loginData, setLoginData] = useState({
    Phone: "",
    MobileOtp: "",
    isVerified: null,
    auth: true
  });

  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={HomePage} />
        
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default Main;
