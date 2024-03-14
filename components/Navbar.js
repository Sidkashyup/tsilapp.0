import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { DrawerContentScrollView, DrawerItemList, DrawerItem, createDrawerNavigator } from '@react-navigation/drawer';
import { FontAwesome } from '@expo/vector-icons';
import GreenLogistic from "./GreenLogistic/Greenlogistic"
import TrackVehicle from "./TraceTruck/Trackvehicle"
import DocumentLibrary from "./DocumentLibrary/Documentlibrary"
import AboutUs from "./AboutUs/Aboutus"
import MisReport from "./MIS/MisMain"
import CustomerGreenCell from "./CustomerGreenCell/CustomerGreenCell"
import ContactUs from "./Contactus/ContactUs"
const Drawer = createDrawerNavigator();

const Navbar = () => {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  const handleToggleDrawer = () => {
    setIsDrawerOpen(!isDrawerOpen);
  };

  return (
    <Drawer.Navigator drawerContent={props => <CustomDrawerContent {...props} />}>
      <Drawer.Screen name="Home" component={GreenLogistic} />
      <Drawer.Screen name="About Us" component={AboutUs} />
      <Drawer.Screen name="Trace-My-Truck" component={TrackVehicle} />
      <Drawer.Screen name="Document Library" component={DocumentLibrary} />
      <Drawer.Screen name="Mis Report" component={MisReport} />
      <Drawer.Screen name="Customer Green Cell" component={CustomerGreenCell} />
      <Drawer.Screen name="Contact Us" component={ContactUs} />
    </Drawer.Navigator>
  );
};



const CustomDrawerContent = (props) => {
  return (
    <DrawerContentScrollView {...props}>

      <DrawerItemList {...props} />
      <DrawerItem
        label="Close"
        onPress={() => props.navigation.closeDrawer()}
      />
    </DrawerContentScrollView>
  );
};

export default Navbar;
