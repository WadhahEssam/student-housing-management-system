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
  ImageBackground,
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

export default class Login extends Component {
  state = {
    email: '',
    password: '',
    error: '',
    loading: false,
  }

  login(email, password) {
    var that = this;
    try {
      firebase.auth().signInWithEmailAndPassword(email, password).then(function (user) {
        console.log(user)
       that.props.navigation.navigate('Home')
      })
    } catch(error) {
      console.log(error.toString())
    }
  }

  render() {
    return (
      <KeyboardAvoidingView 
        style={styles.container} 
        behavior="padding" 
        enabled
      >
        <Container style={styles.container} >
          <ImageBackground
            source={require('./img/background.png')}
            style={{width: '100%', height: '100%'}}
          > 
            <View  style={styles.cent} >
              <Image source={require('./img/logo.png')}
                style={styles.img}  
              />
            </View>
            <ScrollView>
              <View style={styles.formView}>
                <Form>
                  <Item floatingLabel>
                    <Label style={{color:'#dedbdc'}}> KSU Email </Label>
                    <Input 
                      autoCorrect={false}
                      style={styles.textinput}
                      autoCapitalize="none"
                      onChangeText={(email) => this.setState({ email })}
                      keyboardType="email-address"
                      placeholderTextColor="white"
                      selectionColor="white"
                    />
                  </Item >
                  <Item floatingLabel>
                    <Label style={{color:'#dedbdc'}}> Password </Label>
                    <Input 
                      autoCorrect={false} 
                      secureTextEntry={true}
                      style={styles.textinput}
                      autoCapitalize="none"
                      onChangeText={(password) => this.setState({ password })}
                      placeholderTextColor="white"
                      selectionColor="white"
                    />
                  </Item>
                  <View style={styles.loginButtonView}>
                    <Button 
                      style={styles.loginButton}
                      full
                      block
                      info
                      onPress={() => this.login(this.state.email, this.state.password)}
                    >
                      <Text style={{ color: 'white', fontWeight:'bold' }}>Login</Text>
                    </Button>
                  </View>
                </Form>
              </View>
            </ScrollView>
          </ImageBackground>
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
    height: 60,
    color: 'white',
  },
  formView: {
    flex:1,
    justifyContent: 'center',
    padding: 30,
    position: 'relative',
    right: 10,
    bottom: 40,
  },
  img: {
    flex:1,
    marginTop:20,
    width: 240,
    height: 15, 
  },
  cent:{
    flex:1,
    justifyContent: 'center', 
    alignItems:'center',
    alignContent: 'center',
  },
  loginButton: {
    flex: 1,
    marginTop: 15,
    borderRadius: 3,
    opacity: 0.9,
    borderColor: 'white',
    backgroundColor: '#396388',
  },
  loginButtonView: {
    flex: 1,
    padding: 20
  }
});
 
