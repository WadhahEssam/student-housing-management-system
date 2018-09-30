import React, { Component } from "react";
import {
  AppRegistry,
  Text,
  asyncStorageKey,
  View,
  TextInput,
  Alert,
  TouchableOpacity,
  StyleSheet,
  Image,
  KeyboardAvoidingView,
  ScrollView,
  Picker
} from 'react-native';
 


import {
  Label,
  Left,
  Right,
  Icon,
  List,
  ListItem,
  Button,
  Form, 
  Container,
  Item,
  Input,
  Header,
  Content,
  Card,
  CardItem,
  Body,
} from 'native-base';
 
import { createDrawerNavigator, createStackNavigator, DrawerItems, SafeAreaView } from 'react-navigation'
 
import logout from './logout';
 
import Home from "./Home";
 

 
const drawernav = createDrawerNavigator({

  // For each screen that you can navigate to, create a new entry like this:
  Home: {
    screen: Home ,
  },
  Logout: {
    screen: logout
  }
},
 
);


 export default drawernav;

// initialRouteName: 'Home',
// drawerPosition: 'left',
// contentComponent: CustomDrawerContentComponent,
// drawerOpenRoute: 'DrawerOpen',
// drawerCloseRoute: 'DrawerClose',
// drawerToggleRoute: 'DrawerToggle'