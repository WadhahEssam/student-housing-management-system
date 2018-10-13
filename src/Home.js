import React, { Component } from "react";
import axios from 'axios';
import qs from 'querystring';
import { env } from '../env';
import {
  Text,
  View,
  StyleSheet,
  Image,
  AsyncStorage,
  ActivityIndicator
} from 'react-native';
import {
  Container,
} from 'native-base';
import { Col, Row, Grid } from 'react-native-easy-grid';

export default class home extends Component {
  state = {
    student: null,
    token: null,
    room: 'loading',
  }
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
    const token = await AsyncStorage.getItem('token');
    const student = await axios.post(`${env.url}/getInfo`, qs.stringify({ token }));
    const room = await axios.post(`${env.url}/getStudentRoom`, qs.stringify({ token }));

    this.setState({ token, student: student.data, room: room.data });
    console.log(this.state);
  }

  renderStudentInformation = () => {
    if (!this.state.student) {
      return(
        <ActivityIndicator color="white" style={{ marginTop: 20 }} />
      );
    } 
    return(
      <View>
        <View>
          <Text style={{ fontSize: 20, color: 'white', textAlign: 'center' }}>{this.state.student.name}</Text>
        </View>
        <View>
          <Text style={{ fontSize: 13, color: 'white', textAlign: 'center', marginTop: 3}}>{this.state.student.email}</Text>
        </View>
      </View>
    );
  }

  renderRoomInformation = () => {
    // while data is fetching
    if(this.state.room === 'loading') {
      return (
        <ActivityIndicator color="white" style={{ marginTop: 20 }} />
      );
    }
    // if student doesn't have a room
    else if (this.state.room === "") {
      return (
        <View>
          <Text style={{ fontSize: 15, color: 'white', textAlign: 'center' }}>You Don't Have Room</Text>
        </View> 
      );
    } 
    // if student has a room
    else {
      return (
        <View>
          <Text style={{ fontSize: 20, color: 'white', textAlign: 'center' }}>You have a room</Text>
        </View> 
      );
    }
  }

  renderButtons = () => {
    return(
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
    );
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
                <Image
                  source={require('./img/student.png')}
                  style={{ width: 45, height: 45, marginBottom: 10 }}
                />
              </View>
              {this.renderStudentInformation()}
            </View>
          </Row >
          <Row
            style={{ backgroundColor: '#FF5767', borderWidth: 1, borderColor: 'white', }}
          >
            <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
              <Image
                source={require('./img/building.png')}
                style={{ width: 45, height: 45, marginBottom: 10 }}
              />
              {this.renderRoomInformation()}
            </View>
          </Row>
        </Grid>
        {this.renderButtons()}
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