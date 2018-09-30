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
import { Col, Row, Grid } from 'react-native-easy-grid';

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
  Root,
  Item,
  Input,
  Header,
  Content,
  Body,
  Card,
  CardItem,
  Textarea,
  Title,
  Picker
} from 'native-base';
import {Font , AppLoading
} from 'expo';
 
export default class maintain extends React.Component {
 



  render(){
return(
  <Container>
  

  
  <CardItem>
              <Icon active name="hammer" />
              <Text style={{color:'gray' , fontSize:18  , fontWeight:"bold"}}>Maintenance Request</Text>
              
             </CardItem>

  
  <Content padder>
    <Form>
    <Item rounded style={{ marginTop:10,}}>
            <Input placeholder='Subject..'  placeholderTextColor='gray'    /> 
          </Item>
      <Textarea rowSpan={5} bordered placeholder="Please mention your maintenance request.."
      placeholderTextColor='gray'  
      />
       
    </Form>
    <Content>
      
          <Item rounded style={{ marginTop:10,}}>
            <Input placeholder='Building Number..'  placeholderTextColor='gray' textAlign='center'   /> 
          </Item>
         
          
         
          <Item rounded style={{ marginTop:10,}}>
            <Input placeholder='Room Number..' placeholderTextColor='gray' textAlign='center' /> 
          </Item>
          
        </Content> 

    <Button  
           full
            rounded
            style={{marginTop:10}}
             light
             
            >
       
             
            <Text style={{ fontSize:20,fontWeight:"bold" ,textAlign:'center'  }}>Send</Text>   
          </Button>
          
          
          
  </Content>

</Container>

)



} }

 