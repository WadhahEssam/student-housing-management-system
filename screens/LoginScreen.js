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
 
 

import {
  Label,
  Button,
  Form,
  Container,
  Item,
  Input,
  Header,
  Content
} from 'native-base';
 
import * as firebase from 'firebase';
<script src="https://www.gstatic.com/firebasejs/5.4.2/firebase.js"></script>

// Initialize Firebase
const config = {
  apiKey: "AIzaSyCfyg6_PWs-0zqMz5VA1ATJ4zmP4p2bt3U",
  authDomain: "login-chatguid.firebaseapp.com",
  databaseURL: "https://login-chatguid.firebaseio.com",
  projectId: "login-chatguid",
  storageBucket: "login-chatguid.appspot.com",
  messagingSenderId: "989571864187"
};
firebase.initializeApp(config);


    export default class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = { email: '', password: '', error: '', loading: false };

  }
  login(email, password) {
    var that =this;
    try {
      firebase.auth().signInWithEmailAndPassword(email, password).then(function (user) {
        console.log(user)
       that.props.navigation.navigate('Home')
        
      })

    }

    catch (error) {
      console.log(error.toString())
      

    }
  }
 
  
 

  render() {
    return (

      <KeyboardAvoidingView style={styles.container} behavior="padding" enabled>
       
         <Container style={styles.container} >
         <View  style={styles.cent} >
         <Image source={require('./logo.png')}
            style={styles.img}  />
      
            </View>
           
<ScrollView>
           <View style={styles.textinput}>
            <Form>
              <Item floatingLabel>
                <Label> KSU Student Email </Label>
                <Input autoCorrect={false}
                  style={styles.textinput}
                  autoCapitalize="none"
                  onChangeText={(email) => this.setState({ email })}
                />

              </Item >
              < Item floatingLabel>
                <Label> Password </Label>
                <Input autoCorrect={false} secureTextEntry={true}
                  style={styles.textinput}
                  autoCapitalize="none"
                  onChangeText={(password) => this.setState({ password })}
                />
              </Item>
              <Button style={{ marginTop: 10 }}

                full
                rounded
                success
                onPress={() => this.login(this.state.email, this.state.password)}
              >
                <Text style={{ color: 'white' }}>Login</Text>
              </Button>
               

            </Form>
            </View>
            </ScrollView>
 
          
        </Container>
 
        
      </KeyboardAvoidingView>
    );
  }
}
 

const styles = StyleSheet.create({
  

  container: {
    flex:1,
     

    
  },
  ground: {
    backgroundColor: '#fff'  
  },
 
  textinput: { 
    flex:1,
       
    justifyContent: 'center',



  },
   
  img: {
    flex:1,
    
     marginTop:20,
     width: 270,
     height: 20, 
    
     
    
 
   },
   cent:{
    flex:1,
    justifyContent: 'center', 
     alignItems:'center',
     alignContent: 'center',
     borderBottomColor: '#E6E6E6',
    borderBottomWidth: 2, 
       
   }
});
 
