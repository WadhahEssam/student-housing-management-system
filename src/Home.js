import React, { Component } from "react";
import {
  Text,
  View,
  StyleSheet,
  Image,
  AsyncStorage,
} from 'react-native';
import {
  Container,
} from 'native-base';
import { Col, Row, Grid } from 'react-native-easy-grid';

export default class home extends Component {
  static navigationOptions = {
    drawerLaber: 'Logout',
    drawerIcon: () => (
      <Image
        source={require('./img/home.png')}
        style={styles.icon}
      />
    )
  };

  async componentDidMount() {

  }

  render() {
    return (
      <Container>
        <Grid>
          <Row
            style={{ backgroundColor: '#6CBACB', borderWidth: 1, borderColor: 'white', }}

          >
            <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
              <View>
                <Text style={{ fontSize: 20, color: 'white', textAlign: 'center' }}>Student Name</Text>
                <Text style={{ fontSize: 20, color: 'white', textAlign: 'center' }}>
                  _____________________________
                </Text>
                <Text style={{ fontSize: 20, color: 'white', textAlign: 'center' }}>Building Number</Text>
                <Text style={{ fontSize: 20, color: 'white', textAlign: 'center' }}>Room</Text>
              </View>

            </View>
          </Row >
        </Grid>
        <Grid>
          <Row>
            <Col
              style={{ backgroundColor: '#BB73A3', borderWidth: 1, borderColor: 'white', }}
              onPress={() => this.props.navigation.navigate('complaints')}
            >
              <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', marginBottom: 10, }}>
                <View>
                  <Text style={{ fontSize: 20, color: 'white', }}> Complaints</Text>
                </View>
                <View>
                  <Image
                    source={require('./img/add.png')}
                    style={{ width: 40, height: 40, marginTop: 10 }}
                  />
                </View>
              </View>
            </Col >
            <Col
              style={{ backgroundColor: '#B1D49A', borderWidth: 1, borderColor: 'white', }}
              onPress={() => this.props.navigation.navigate('maintainScreen')}
            >
              <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                <View>
                  <Text style={{ fontSize: 20, color: 'white', }}> Maintenance</Text>
                </View>
                <View>
                  <Image
                    source={require('./img/maintain.png')}
                    style={{ width: 45, height: 45, marginTop: 10 }}
                  />
                </View>
              </View>
            </Col >
          </Row>
          <Row>
            <Col

              style={{ backgroundColor: '#CAB7A2', borderWidth: 1, borderColor: 'white', }}
              onPress={() => this.props.navigation.navigate('rooms')}
            >
              <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                <View>
                  <Text style={{ fontSize: 20, color: 'white', }}> Reserve Room</Text>
                </View>
                <View>
                  <Image
                    source={require('./img/room.png')}
                    style={{ width: 80, height: 80 }}
                  />
                </View>
              </View>
            </Col >
            <Col
              style={{ backgroundColor: '#858786', borderWidth: 1, borderColor: 'white', }}

            >
              <View style={{
                flex: 1, justifyContent: 'center', alignItems: 'center',
                marginBottom: 10,
              }}>
                <View>
                  <Text style={{ fontSize: 20, color: 'white', }}> Leave Room</Text>
                </View>
                <View>
                  <Image
                    source={require('./img/leave.png')}
                    style={{ width: 40, height: 40, marginTop: 30, }}
                  />
                </View>
              </View>
            </Col >
          </Row>
        </Grid>
      </Container>
    )
  }
}

const styles = StyleSheet.create({
  icon: {
    marginTop: 5,
    width: 32,
    height: 32,
  },
  icon2: {
    width: 100,
    height: 100,
  }
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