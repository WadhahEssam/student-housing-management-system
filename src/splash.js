import React, { Component } from "react";


import {
  Text,

  View,
  StyleSheet,
  Image,
  ImageBackground,
 BackHandler
} from 'react-native';
 
  
 

class Splash extends Component {
componentWillMount(){
    setTimeout(()=>{  this.props.navigation.navigate('LoginScreen')},3000)


}
   componentDidMount() {
     BackHandler.addEventListener('hardwareBackPress', this.handleBackButton);
   }
  
   componentWillUnmount() {
     BackHandler.removeEventListener('hardwareBackPress', this.handleBackButton);
  }
  
   handleBackButton() {
    return true;
  }
 


 
 
 
  render() {
    return (
      
          <ImageBackground
            source={require('./img/background.png')}
            style={{width: '100%', height: '100%'}}
          > 
            <View  style={styles.cent} >
              <Image source={require('./img/logo.png')}
                style={styles.img}  
              />
            </View>
            <Text>This Is Splash Screen</Text>
            
          </ImageBackground>
       
    ); 
  }
}
export default Splash;

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
 
