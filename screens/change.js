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
import { Col, Row, Grid } from 'react-native-easy-grid';
export default class IS extends React.Component {
render(){
return(

  <Container>
         
          <Grid>
            <Row style={{ backgroundColor: '#0B3861', borderWidth:3, borderColor:'white',
             }}
             onPress={() => this.props.navigation.navigate('complaints2')}>


<View  style={{ flex:1, justifyContent:'center', alignItems:'center'}}>
              
              <View  > 

              <Text style={{fontSize:40, color:'white',  
            }} > Complaints</Text>  
              </View>
                <View >
 
                <Image
  source={require('./add.png')}
  style={styles.icon}
  /> 
                  
                   
                </View>   
                </View>
                 
                
             
             
            </Row > 
         


<Row style={{ backgroundColor: '#FF8000', borderWidth:3, borderColor:'white',
             }}
             onPress={() => this.props.navigation.navigate('complaints')}>


<View  style={{ flex:1, justifyContent:'center', alignItems:'center'}}>
              
              <View  > 

              <Text style={{fontSize:40, color:'white',  
            }} > Rooms</Text>  
              </View>
                <View >
 
                  
                <Image
  source={require('./room.png')}
  style={styles.icon2}
  /> 
                </View>   
                </View>
                </Row > 
          </Grid>
      </Container>

)



} }

const styles = StyleSheet.create({
  icon: {
    marginTop:20,
    width: 44,
    height: 44,
  },
  icon2: {
     
    width: 100,
    height: 100,}
}); 