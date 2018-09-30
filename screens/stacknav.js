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
} from 'native-base';
import { createStackNavigator } from 'react-navigation';

import drawernav from './drawer';
import complaints2 from './complaints2';
import DrawerButton from './DrawerButton';
import maintain from "./maintain";
import rooms from './rooms.js';
import LoginScreen from './LoginScreen'; 
import addcomplaints from "./addcomplaints";
import change from './change'
   

const AppNavigator = createStackNavigator({
LoginScreen:{
screen:LoginScreen,
navigationOptions: {
  headerVisible: false,
  header: null
}
},
  Home:{
    screen: drawernav, 
    navigationOptions:({navigation})=>({
     title:'Home',
     headerLeft:<DrawerButton navigation={navigation} />
  
  
    })
  },
  rooms:{
screen:rooms

  },
  complaints2:{
    screen:complaints2,
    navigationOptions:{
      title:'Complaints'
    }
    
    

  },
 maintain:{
    screen: maintain,
     
  },
 addcomplaints:{
  screen: addcomplaints, 
 }, 
 change:{
   screen:change,
   
 },
 rooms:{
   screen:rooms,
   navigationOptions:{
    title:'Rooms'
  }
 }
 
});
 
export default AppNavigator;