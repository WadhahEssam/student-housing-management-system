import React, { Component, } from "react";
import { createStackNavigator } from 'react-navigation';

import drawernav from './drawer';
import complaints from './ComplaintsScreen';
import DrawerButton from './DrawerButton';
import maintain from "./maintain";
import rooms from './rooms.js';
import LoginScreen from './LoginScreen'; 
import addcomplaints from "./addcomplaints";
import change from './change';
import maintainScreen from './maintainScreen';
import reserveRoom from './reserveRoom';
import Splash from './splash'


const AppNavigator = createStackNavigator({
  // Splash:{
  //   screen:Splash,
  //   navigationOptions: {
  //     headerVisible: false,
  //     header: null,
  //     gesturesEnabled: false,
  //     swipeEnabled: false
  //   }
  // },
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
  maintainScreen:{
    screen:maintainScreen,
    navigationOptions:{
      title:'Maintainence'
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
  },
  reserveRoom:{
    screen:reserveRoom,
    navigationOptions:{
      title:'Reserve Room'
    }
  }
}, 
  // only for testing
  {initialRouteName: 'maintainScreen'}
);
 
export default AppNavigator;