import React, { Component } from "react";
import {
  AppRegistry,
  Text,
  View,
} from 'react-native';
 import AppNavigator  from './src/stacknav'
import Splash from "./src/splash";
import maintain from "./src/maintain";
import addcomplaints from "./src/addcomplaints";
// import logout from './src/logout'; 
// import HomeScreen from "./src/HomeScreen";
//import drawer from "./src/drawer";

export default class App extends Component {
  render() {
    return (
      
      
      <AppNavigator />
    );
  }
}
