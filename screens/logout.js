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
  ScrollView
} from 'react-native';
 

import {createStackNavigator} from 'react-navigation';

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

export default class IS extends React.Component {
static navigationOptions = {
  drawerLaber: 'Logout',
  drawerIcon:()=>(
    <Image
source={require('./out.png')}
style={styles.icon}
/>
  )
}


  render(){
return(

  <Text>logout successfully</Text>

)



} }

 
const styles = StyleSheet.create({
  wrapper:{
      marginLeft:10
  },
  icon:{
      width:24,
      height:24
  }
  
  
  });