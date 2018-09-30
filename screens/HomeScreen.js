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
  Body,
  Card,
  CardItem,
} from 'native-base';

export default class Home extends React.Component {
  render() {
    return (
      <Container >
        <Header />
        <Content style={styles.all}>
          <Card> 
            <CardItem>
              <Body>
                <Text  style={styles.text}>
                   You are not in the student housing,
                   </Text>
                   <Text  style={styles.text1}>
                   Do you want to reserve a room?
                </Text>
              </Body>
            </CardItem>
          </Card>
        </Content>
     
        <View style={{ flex: 1, flexDirection: 'row', justifyContent: 'space-between' }}>
        <View style={{ flex: 1, paddingLeft: 10,  }}>
       <Button 
            iconLeft
            full
            rounded
            large light 
            onPress={() => this.props.navigation.navigate('IS')}
            >
       
             
            <Text style={{ fontSize:30,fontWeight:"bold" ,textAlign:'center'  }}>Yes</Text>   
          </Button>
          </View>
        
         <View style={{ flex: 1, paddingRight: 10 }}>
          <Button 
            iconLeft
            full
            rounded
            large light
            onPress={() => this.props.navigation.navigate('Elec')}
            >
              
            
            
           <Text style={{ fontSize:30,fontWeight:"bold", textAlign:'center' }} >No</Text>
         </Button>
         </View>
         </View>
         </Container> 
    );
  }
}   
 

const styles = StyleSheet.create({
  

  text: {
 

    fontSize: 20,
     

    
  },
  text1: {
 

    fontSize: 30,
     

    
  },
   all:{
    marginTop:16,
   },
});
