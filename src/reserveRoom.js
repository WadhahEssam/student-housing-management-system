import React, { Component } from "react";
import axios from 'axios';
import qs from 'querystring';
import { env } from '../env';
import {
  View,
  StyleSheet,
  Image,
  AsyncStorage,
  ActivityIndicator
} from 'react-native';
import { Container, Header, Content, Card, CardItem, Text, Body, Button, Icon } from 'native-base';

const NUMBER_OF_BUILDINGS = 30;

const COLORS = {
  building: '#4050B5',
  selectedBuilding: '#2A3477',
  floor: '#C7B751',
  selectedFloor: '#A09341',
  wing: '#3EA683',
  selectedWing: '#2D7A60',
  room: '#AC5894',
  selectedRoom: '#773D66',
  takenRoom: '#CE2B28',
  success: '#6AAF6F'
}

export default class Reserve extends Component {

  state = { 
    buildings: [],
    floors: [],
    rooms: [],
    loadingFont: true,
    selectedBuilding: null,
    selectedFloor: null,
    selectedWing: {number: 0, string: 'none'},
    loadingRooms: true,
    selectedRoom: null,
  }

  async componentWillMount() {
    // to solve error with font
    await Expo.Font.loadAsync({
      Roboto: require("native-base/Fonts/Roboto.ttf"),
      Roboto_medium: require("native-base/Fonts/Roboto_medium.ttf"),
      Ionicons: require("@expo/vector-icons/fonts/Ionicons.ttf"),
    });
    this.setState({ loadingFont: false });

    // filling the buildings
    let buildings = []
    for(let i = 0; i < NUMBER_OF_BUILDINGS; i++) {
      buildings.push(i+1);
    }

    // filling the floors
    let floors = [] 
    floors.push({number: 5, string: 'fifth'});
    floors.push({number: 4, string: 'forth'});
    floors.push({number: 3, string: 'third'});
    floors.push({number: 2, string: 'second'});
    floors.push({number: 1, string: 'first'});

    this.setState({ buildings, floors });
  }
  
  fetchRooms = async () => {
    if (this.state.loadingRooms) {
      const building = this.state.selectedBuilding;
      const floor = this.state.selectedFloor.number;
      const wing = this.state.selectedWing.number;
      const rooms = await axios.post(
        `${env.url}/getRoomsForWing`, 
        qs.stringify({building, floor, wing})
      );
      this.setState({loadingRooms: false, rooms: rooms.data})
    }
  }

  submit = async () => {
    const token = await AsyncStorage.getItem('token');
    const room_id = this.state.selectedRoom.id;
    
    axios.post(`${env.url}/setStudentRoom`, qs.stringify({token, room_id}))
    .then(response => {
      console.log(response.data)
      this.setState({selectedFloor: null, selectedBuilding:null, selectedWing: {number: 0, string: 'none'}, selectedRoom: null })
      this.props.navigation.navigate('Home', {newRoom: 'true'});
    })
    .catch(error => {console.log(error)});

  }

  render() {
    // console.log(this.state);

    // boolean checks if you can fetch the room or not 
    const roomCanBeFetched = (this.state.selectedBuilding !== null && this.state.selectedFloor !== null && this.state.selectedWing.number !== 0);

    const canSubmit = (this.state.selectedBuilding !== null && this.state.selectedFloor !== null && this.state.selectedWing.number !== 0 && this.state.selectedRoom !== null);

    // check if it is the fifth floor 
    // cuz it only has one wing 
    let isFifthFloor;
    if (this.state.selectedFloor !== null) {
      isFifthFloor = (this.state.selectedFloor.number == 5) ? true : false ;
    } else {
      isFifthFloor = false;
    }

    // to solve error with font
    if (this.state.loadingFont) {
      return <Expo.AppLoading />;
    }

    const buildingButtons = this.state.buildings.map(building => {
      return(
        <View key={building}>
          <Button 
          rounded style={(this.state.selectedBuilding === building) ? styles.selectedBuildingButton : styles.buildingButton } 
          onPress={(e) => {this.setState({selectedBuilding: building, loadingRooms: true, selectedRoom: null});}}
          >
            <Text>{building}</Text>
          </Button>
        </View>
      );
    });

    const floorsButtons = this.state.floors.map(floor => {
      // choosing the color 
      let color;
      if (!!this.state.selectedFloor) {
        if (this.state.selectedFloor.number == floor.number) {
          color = COLORS.selectedFloor;
        }
        else {
          color = COLORS.floor;
        }
      }
      else {
        color = COLORS.floor;
      }
      
      return(
        <Button 
        key={floor.number} 
        block 
        full  
        style={{width: '100%', margin: 3, borderRadius: 4, backgroundColor: color, height: 30}}
        onPress={() => {this.setState({selectedFloor: floor, loadingRooms: true, selectedRoom: null})}}
        >
          <Text>
            {floor.string}
          </Text>
        </Button>
      );
    });

    const wingsButtonsInFifthFloor = (
      <View>
        <View style={{position: 'relative'}}>
          <Button style={(this.state.selectedWing.number === 1) ? styles.selectedWingButton : styles.wingButton} onPress={() => {this.setState({selectedWing: {number: 1, string: 'first'}, loadingRooms: true, selectedRoom: null})}}>
            <Text>First</Text>
          </Button>
        </View>
      </View>
    );

    const wingsButtons = (
      <View>
        <View style={{position: 'relative', left: 50}}>
          <Button style={(this.state.selectedWing.number === 1) ? styles.selectedWingButton : styles.wingButton} onPress={() => {this.setState({selectedWing: {number: 1, string: 'first'}, loadingRooms: true, selectedRoom: null})}}>
            <Text>First</Text>
          </Button>
        </View>

        <View style={{ flexDirection: 'row' }}>
          <Button style={(this.state.selectedWing.number === 2) ? styles.selectedWingButton : styles.wingButton} onPress={() => {this.setState({selectedWing: {number: 2, string: 'second'}, loadingRooms: true, selectedRoom: null})}}>
            <Text>Second</Text>
          </Button>

          <Button style={(this.state.selectedWing.number === 4) ? styles.selectedWingButton : styles.wingButton} onPress={() => {this.setState({selectedWing: {number: 4, string: 'forth'}, loadingRooms: true, selectedRoom: null})}}>
            <Text>Forth</Text>
          </Button>
        </View>

        <View style={{position: 'relative', left: 50}}>
          <Button style={(this.state.selectedWing.number === 3) ? styles.selectedWingButton : styles.wingButton} onPress={() => {this.setState({selectedWing: {number: 3, string: 'third'}, loadingRooms: true, selectedRoom: null})}}>
            <Text>Third</Text>
          </Button>
        </View>
      </View>
    );

    return (
      <Container style={{padding: 10}}>
        <Content>

          {/* The buildings card */}
          <Card>
            <CardItem bordered style={{justifyContent: 'center'}}>
              <Text 
              style={{fontWeight: '800', color: COLORS.building, fontSize: 20}}
              >
                Buildings
              </Text>
            </CardItem>
            <CardItem>
              <Body style={styles.buildingButtonsBody}>
                {buildingButtons}
              </Body>
            </CardItem>
            <CardItem 
            bordered={this.state.selectedBuilding !== null} 
            footer 
            style={{flexDirection: 'row', justifyContent: 'center' }}
            >
              {this.state.selectedBuilding === null
              ?
              <View/>
              :
              <Button transparent success disabled style={styles.statusButton}>
                <Text style={{fontSize: 20, position: 'relative', left: 20 }}>{this.state.selectedBuilding}</Text>
                <Icon type="FontAwesome" name="check" />
              </Button>
              }
            </CardItem>
          </Card>

          {/* The floors card */}
          <Card>
            <CardItem bordered style={{justifyContent: 'center'}}>
              <Text 
              style={{fontWeight: '800', color: COLORS.floor, fontSize: 20}}
              >
                Floors
              </Text>
            </CardItem>
            <CardItem>
              <Body style={styles.buildingButtonsBody}>
                {floorsButtons}
              </Body>
            </CardItem>
            <CardItem 
            bordered={this.state.selectedFloor !== null} 
            footer style={{flexDirection: 'row', justifyContent: 'center' }}
            >
              {this.state.selectedFloor === null
              ?
              <View/>
              :
              <Button transparent disabled style={styles.statusButton}>
                <Text style={{fontSize: 15, position: 'relative', left: 20 }}>{this.state.selectedFloor.string + ' Floor'}</Text>
                <Icon type="FontAwesome" name="check" />
              </Button>
              }
            </CardItem>
         </Card>
          
          {/* The wings card */}
          <Card>
            <CardItem bordered style={{justifyContent: 'center'}}>
              <Text 
              style={{fontWeight: '800', color: COLORS.wing, fontSize: 20}}
              >
                Wings
              </Text>
            </CardItem>
            <CardItem>
              <Body style={styles.buildingButtonsBody}>
                {(isFifthFloor) ? wingsButtonsInFifthFloor : wingsButtons}
              </Body>
            </CardItem>
            <CardItem 
            bordered={this.state.selectedWing.number !== 0} 
            footer 
            style={{flexDirection: 'row', justifyContent: 'center' }}
            >
              {this.state.selectedWing.number === 0
              ?
              <View/>
              :
              <Button transparent disabled style={styles.statusButton}>
                <Text style={{fontSize: 15, position: 'relative', left: 20 }}>{this.state.selectedWing.string + ' Wing'}</Text>
                <Icon type="FontAwesome" name="check" />
              </Button>
              }
            </CardItem>
          </Card>
          
          {/* The rooms card */}
          <Card>
            <CardItem bordered style={{justifyContent: 'center'}}>
              <Text 
              style={{fontWeight: '800', color: COLORS.room, fontSize: 20}}
              >
                Rooms
              </Text>
            </CardItem>
            
            {!roomCanBeFetched ? <View/> : this.renderRooms() }

            <CardItem bordered={this.state.selectedRoom !== null} footer style={{flexDirection: 'row', justifyContent: 'center' }}>
              {!roomCanBeFetched
              ?
              <Button transparent disabled style={styles.statusButtonError}>
                <Text style={{fontSize: 14, position: 'relative', left: 10, color: '#B21515' }}>First Select ( building floor wing )</Text>
                <Icon style={{color: '#B21515'}} type="FontAwesome" name="exclamation-triangle" />
              </Button>
              :
              this.renderSelectRoomButton()
              }
            </CardItem>
          </Card>

          {/* The submitt card */}
          <Card transparent style={{marginBottom: 20}}>
            <CardItem style={{justifyContent: 'center'}}>
              <Button 
              full 
              block 
              disabled={!canSubmit}
              style={{width: 200, height: 70, borderRadius: 5}}
              onPress={()=>{this.submit()}}
              >
                <Text style={{fontSize: 20}}>Submit</Text>
              </Button>
            </CardItem>
          </Card>

        </Content>
      </Container>
    )
  }

  renderRooms = () => {
    this.fetchRooms();
    const roomButtons = this.state.rooms.map(room => {
      return(
        <View key={room.id}>
          <Button 
          disabled={room.student_id != null}
          style={(room.student_id !== null) ? styles.takenRoomButton : (this.state.selectedRoom === room) ? styles.selectedRoomButton : styles.roomButton } 
          onPress={(e) => {this.setState({selectedRoom: room});}}
          >
            <Text>{room.room_number}</Text>
          </Button>
        </View>
      );
    });

    if (this.state.loadingRooms) {
      return(
        <CardItem bordered>
          <Body style={styles.buildingButtonsBody}>
            <View style={{paddingVertical: 20}}>
              <Text style={{marginBottom: 10, color: COLORS.room}}>Fetching</Text>
              <ActivityIndicator color={COLORS.room} size="large"/>
            </View>
          </Body>
        </CardItem>
      );
    } else {
      return(
        <CardItem bordered>
          <Body style={styles.buildingButtonsBody}>
            {roomButtons}
          </Body>
        </CardItem>
      );
    }
  }

  renderSelectRoomButton = () => {
    if(this.state.selectedRoom === null) {
      return(
        <View>
          <Text style={{color: 'grey'}}>Choose Room</Text>
        </View>
      );
    } else {
      return(
        <Button transparent small disabled style={styles.statusButton}>
          <Text style={{fontSize: 15, position: 'relative', left: 20 }}>{'Room NO. ' + this.state.selectedRoom.room_number }</Text>
          <Icon type="FontAwesome" name="check" />
        </Button>
      );
    }
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
  statusButtonWaiting: {
    width: 200,
    justifyContent: 'center',
    alignItems: 'center', 
  }, 
  statusButtonError: {
    width: 330,
    justifyContent: 'center',
    alignItems: 'center', 
  }, 
  statusButton: {
    width: 200,
    justifyContent: 'center',
    alignItems: 'center', 
  },
  buildingButtonsBody: { 
    flex: 1, 
    flexDirection: 'row', 
    flexWrap: 'wrap', 
    alignContent: 'center', 
    justifyContent: 'center' 
  },
  buildingButton: {
    margin: 3, 
    width: 50, 
    justifyContent: 'center', 
    alignItems: 'center',
    backgroundColor: COLORS.building
  },
  selectedBuildingButton: {
    margin: 3, 
    width: 50, 
    justifyContent: 'center', 
    alignItems: 'center',
    backgroundColor: COLORS.selectedBuilding
  },
  floorButtonsBody: { 
    alignContent: 'center', 
    justifyContent: 'center' 
  },
  wingButton: {
    margin: 3, 
    width: 100, 
    justifyContent: 'center',
    backgroundColor: COLORS.wing
  },
  selectedWingButton: {
    margin: 3, 
    width: 100, 
    justifyContent: 'center',
    backgroundColor: COLORS.selectedWing
  },
  roomButton: {
    margin: 3, 
    width: 70, 
    justifyContent: 'center', 
    alignItems: 'center',
    backgroundColor: COLORS.room
  },
  selectedRoomButton: {
    margin: 3, 
    width: 70, 
    justifyContent: 'center', 
    alignItems: 'center',
    backgroundColor: COLORS.selectedRoom
  },
  takenRoomButton: {
    margin: 3, 
    width: 70, 
    justifyContent: 'center', 
    alignItems: 'center',
    backgroundColor: COLORS.takenRoom
  },

});








