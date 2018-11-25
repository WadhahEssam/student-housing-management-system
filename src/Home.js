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
    newDataAvailable: true,
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

  componentDidMount() {
    this.fetchData();

    // attaching even listerner so the screen 
    // fetches the data making sure the user
    // didn't change his room 
    const didBlurSubscription = this.props.navigation.addListener(
      'willFocus',
      payload => {
        console.log(this.props.navigation.getParam('newRoom'));
        if(this.props.navigation.getParam('newRoom') !== undefined) {
          this.fetchData();
        }
      }
    );
  }

  fetchData = async () => {
    const token = await AsyncStorage.getItem('token');
    const student = await axios.post(`${env.url}/getInfo`, qs.stringify({ token }));
    const room = await axios.post(`${env.url}/getStudentRoom`, qs.stringify({ token }));

    this.setState({ token, student: student.data, room: room.data, newDataAvailable: false });
    console.log('fetching ...');
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
          <Text style={{ fontSize: 22, color: 'white', textAlign: 'center' }}>{this.state.student.name}</Text>
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
        <View style={styles.noRoomInformationBox}>
          <Text style={{ fontSize: 15, color: 'white', textAlign: 'center' }}>You Don't Have Room</Text>
        </View> 
      );
    } 
    // if student has a room
    else {
      return (
        <View>
          <View style={styles.roomInformationBox}>
            <View style={styles.roomInformationItemBox}>
              <Text style={styles.roomInformationItemText}>
                Building : {this.state.room.building}
              </Text>
            </View>
            
            <View style={styles.roomInformationItemBox}>
              <Text style={styles.roomInformationItemText}>
                Floor : {this.state.room.floor}
              </Text>
            </View>

            <View style={styles.roomInformationItemBox}>
              <Text style={styles.roomInformationItemText}>
                Wing : {this.state.room.wing}
              </Text>
            </View>

            <View style={styles.roomInformationItemBox}>
              <Text style={styles.roomInformationItemText}>
                Room : {this.state.room.room_number}
              </Text>
            </View>
          </View> 
        </View>
      );
    }
  }

  renderButtons = () => {
    if (this.state.room === "loading") {
      return (
        <View/>
      );
    }
    // if student doesn't have a room
    else if (this.state.room === "") {
      return(
        <Grid style={{padding: 7}}>
          <Row>
            <Col
              style={{ backgroundColor: '#CAB7A2', borderWidth: 1, borderColor: 'white', }}
              onPress={() => this.props.navigation.push('reserveRoom')}
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
              onPress={() => this.props.navigation.navigate('logout')}
            >
              <View style={{
                flex: 1, justifyContent: 'center', alignItems: 'center',
                marginBottom: 10,
              }}>
                <View>
                  <Text style={{ fontSize: 20, color: 'white', }}> Logout</Text>
                </View>
                <View>
                  <Image
                    source={require('./img/logout.png')}
                    style={{ width: 40, height: 40, marginTop: 30, }}
                  />
                </View>
              </View>
            </Col >
          </Row>
        </Grid>
      );
    } 
    // if student has a room 
    else {
      return(
          <Grid style={{padding: 7}}>
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
                onPress={() => this.props.navigation.navigate('MaintenanceRequests')}
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
                onPress={() => this.props.navigation.navigate('reserveRoom')}
              >
                <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                  <View>
                    <Text style={{ fontSize: 20, color: 'white', }}>Change Room</Text>
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
                onPress={() => axios.post(`${env.url}/clearStudentRoom`, qs.stringify({ token: this.state.token }))
                  .then(() => {this.setState({room: ""})})
                }
              >
                <View style={{
                  flex: 1, justifyContent: 'center', alignItems: 'center',
                  marginBottom: 10,
                }}>
                  <View>
                    <Text style={{ fontSize: 20, color: 'white', }}>Leave Room</Text>
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
  }

  render() {

    return (
      <Container>
        <Grid style={{padding: 7}}>
          <Row
          style={{ backgroundColor: '#6CBACB', borderWidth: 1, borderColor: 'white' }}
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
          style={{ backgroundColor: '#FF5767', borderWidth: 1, borderColor: 'white' }}
          >
            <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
              <Image
                source={require('./img/building.png')}
                style={{ width: 45, height: 45, marginBottom: 15 }}
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
  }, 
  roomInformationBox: {
    borderColor: 'white',
    borderWidth: 1,
    borderRadius: 3,
    flexDirection: 'row',
  },
  roomInformationItemBox: {
    height: '100%',
    paddingVertical: 10,
    paddingHorizontal: 10,
    borderRightWidth: 1,
    borderColor: 'white',
    backgroundColor: '#E76C7C',
  },
  noRoomInformationBox: {
    borderColor: 'white',
    borderWidth: 1,
    borderRadius: 3,
    flexDirection: 'row',
    paddingVertical: 15,
    paddingHorizontal: 20
  },
  roomInformationItemText: {
    color: 'white'
  }
});

