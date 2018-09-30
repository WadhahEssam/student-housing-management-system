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



   export default class home extends React.Component {
   static navigationOptions = {
     drawerLaber: 'Logout',
     drawerIcon:()=>(
       <Image
   source={require('./home.png')}
   style={styles.icon}
   />
    )
  }

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
             onPress={() => this.props.navigation.navigate('rooms')}>


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














































// import React, { Component } from "react";
// import {
//   AppRegistry,
//   Text,
//   asyncStorageKey,
//   View,
//   TextInput,
//   Alert,
//   TouchableOpacity,
//   StyleSheet,
//   Image,
//   KeyboardAvoidingView,
//   ScrollView,
//   Picker
// } from 'react-native';
 
 

// import {
//   Label,
//   Drawer,
//   Left,
//   Right,
//   Icon,
//   List,
//   ListItem,
//   Button,
//   Form,
//   Container,
//   Item,
//   Input,
//   Header,
//   Content,
//   Card,
//   CardItem,
// } from 'native-base';
 

// export default class home extends React.Component {
//   static navigationOptions = {
//     drawerLaber: 'Logout',
//     drawerIcon:()=>(
//       <Image
//   source={require('./home.png')}
//   style={styles.icon}
//   />
//     )
//   }



//   render(){
    
// return(
//   <Container>
 
//          <Content>
//           <Card> 
//             <CardItem>
//               <Icon active name="home" />
//               <Text style={{color:'gray' , fontSize:18  , fontWeight:"bold"}}>Student Housing</Text>
              
//              </CardItem>
//              <CardItem>
//               <Icon active name="create" />
//               <Text>Add Complaints.</Text>
//               <Right>
//                 <Icon name="arrow-forward"
//                 onPress={() => this.props.navigation.navigate('complaints')}>
                
//                 </Icon>
//               </Right>
//              </CardItem>


//              <CardItem>
//               <Icon active name="hammer" />
//               <Text>Maintenance Request.</Text>
//               <Right>
//                 <Icon style={{marginRight:6}}   name="arrow-forward"  
//                 onPress={() => this.props.navigation.navigate('maintain')}>
//                 </Icon>
//               </Right>
//              </CardItem>


//               <CardItem>
//               <Icon active name="git-pull-request" />
//               <Text  >Change Room.</Text>
//               <Right>
               
//                 <Icon 
//                  onPress={() => this.props.navigation.navigate('change')} name="arrow-forward"   >
//                 </Icon>
               
//               </Right>
//              </CardItem>


//            </Card>
//         </Content>




         
//       </Container>

// )



// } }

// const styles = StyleSheet.create({
//   icon: {
//     width: 24,
//     height: 24,
//   },
// });