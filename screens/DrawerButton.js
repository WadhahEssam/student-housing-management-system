import React, { Component } from "react";
import {
  Text,
  View,
  TouchableOpacity,
  StyleSheet,
  Image,
} from 'react-native';
 
const DrawerButton = ({navigation})=>(
<TouchableOpacity
style={styles.wrapper}
onPress={()=> navigation.openDrawer()}
> 
<Image
source={require('./draw.png')}
style={styles.icon}
/>


</TouchableOpacity>



);

const styles = StyleSheet.create({
wrapper:{
    marginLeft:10
},
icon:{
    width:24,
    height:24
}


});
export default DrawerButton;