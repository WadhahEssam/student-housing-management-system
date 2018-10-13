import React, { Component } from "react";
import { createStackNavigator } from 'react-navigation';

import drawernav from './drawer';
import complaints from './ComplaintsScreen';
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
  complaints:{
    screen:complaints,
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
}, 
  // only for testing
  {initialRouteName: 'Home'}
);
 
export default AppNavigator;