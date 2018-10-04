import React, { Component } from "react";
import {
  Text,
  StyleSheet,
  Image,
  AsyncStorage,
} from 'react-native';

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

  async componentDidMount() {
    await AsyncStorage.removeItem('token');
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