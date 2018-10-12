import React, { Component } from "react";
import axios from 'axios';
import qs from 'querystring';
import { env } from '../env';

import {
  Text,
  asyncStorageKey,
  View,
  StyleSheet,
  Image,
  ImageBackground,
  KeyboardAvoidingView,
  ScrollView,
  AsyncStorage,
  BackHandler
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

export default class Login extends Component {
  state = {
    email: '',
    password: '',
    error: null,
    loading: false,
  }

  login(email, password) {
    this.setState({error: null});
    axios.post(`${env.url}/login`, qs.stringify({email, password}))
    .then(async (response) => {
      console.log(response.data.access_token);
      await AsyncStorage.setItem('token', response.data.access_token);
      this.props.navigation.navigate('Home');
    })
    .catch(error => {
      console.log(error);
      this.setState({error: 'Wrong Credentials'});
    });
  }

  renderError = () => {
    return (
      <View style={styles.errorView}>
        <Text style={styles.errorText}>
          {this.state.error}
        </Text>
      </View>
    );
  }

  async componentWillMount() {
    const token = await AsyncStorage.getItem('token');
    if(!token) {
      console.log('user is not logged in');
    } else {
      console.log('user is logged in with token '+ token);
      this.props.navigation.navigate('Home');
    }
  }

  // componentDidMount() {
  //   BackHandler.addEventListener('hardwareBackPress', this.handleBackButton);
  // }
  
  // componentWillUnmount() {
  //   BackHandler.removeEventListener('hardwareBackPress', this.handleBackButton);
  // }
  
  // handleBackButton() {
  //   return true;
  // }

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
                  {!(this.state.error) ? <View></View> : this.renderError()}
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
  }, 
  errorView: {
    backgroundColor: '#DC1A2A',
    height: 40, 
    justifyContent: 'center',
    alignItems: 'center',
    opacity: 0.8,
    borderRadius: 3,
  },
  errorText: {
    color: 'white',
  }
});
 
