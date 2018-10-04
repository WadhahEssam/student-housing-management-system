import React, { Component } from "react";
import {
  Text,
  StyleSheet,
  Image,
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

export default class IS extends Component {
  static navigationOptions = {
    drawerLaber: 'Logout',
    drawerIcon: () => (
      <Image
        source={require('./img/out.png')}
        style={styles.icon}
      />
    )
  };

  componentDidMount() {
    this.props.navigation.navigate('LoginScreen');
  }

  render(){
    return(
      <Text>logout successfully</Text>
    )
  }
}
 
const styles = StyleSheet.create({
  wrapper:{
      marginLeft:10
  },
  icon:{
      width:24,
      height:24
  }
});