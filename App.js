import React, { Component } from "react";
import {
  AppRegistry,
  Text,
  View,

} from 'react-native';
 
 import AppNavigator  from './screens/stacknav'
// import logout from './screens/logout'; 
// import HomeScreen from "./screens/HomeScreen";
//import drawer from "./screens/drawer";
import Home from "./screens/Home";
import maintain from "./screens/maintain";
import addcomplaints from "./screens/addcomplaints";
 
 

  

export default class App extends React.Component {

  render() {
    return (
      <AppNavigator />




    );
  }
}
