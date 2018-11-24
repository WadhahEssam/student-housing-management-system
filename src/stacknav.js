import React, { Component, } from "react";
import { createStackNavigator } from 'react-navigation';

import drawernav from './drawer';
import complaints from './Complaints/ComplaintsScreen';
import DrawerButton from './DrawerButton';
import maintain from "./maintain";
import rooms from './rooms.js';
import LoginScreen from './LoginScreen'; 
import addcomplaints from "./addcomplaints";
import change from './change';
import maintainScreen from './MaintenanceRequests/MaintenanceScreen';
import reserveRoom from './reserveRoom';
import Splash from './splash'
import CreateMaintenanceRequestScreen from "./MaintenanceRequests/CreateMaintenanceRequestScreen";


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
      title:'KSU Campus',
      headerLeft:<DrawerButton navigation={navigation} />
    })
  },
  CreateMaintenanceRequest :{
    screen: CreateMaintenanceRequestScreen, 
    navigationOptions: {
      title: 'Create Request',
    }
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
  MaintenanceRequests:{
    screen:maintainScreen,
    navigationOptions:{
      title:'Maintenance Requests'
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
  // {initialRouteName: 'MaintenanceRequests'}
);
 
export default AppNavigator;