import React, { Component } from "react";
import {
  View,
  StyleSheet,
  Image,
  AsyncStorage,
  ActivityIndicator
} from 'react-native';
import { Container, Header, Content, Card, CardItem, Text, Body, Button, Icon } from 'native-base';
import { Col, Row, Grid } from 'react-native-easy-grid';
import { Font, AppLoading } from "expo";

const NUMBER_OF_BUILDINGS = 30;

const COLORS = {
  building: '#4050B5',
  selectedBuilding: '#2A3477',
  floor: '#C7B751',
  selectedFloor: '#A09341',
  wing: '#3EA683',
  selectedWing: '#2D7A60',
  room: '',
}

export default class Reserve extends Component {

  state = { 
    buildings: [],
    floors: [],
    loadingFont: true,
    selectedBuilding: null,
    selectedFloor: null,
    selectedWing: {number: 0, string: 'none'},
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
    floors.push({number: 1, string: 'first'});
    floors.push({number: 2, string: 'second'});
    floors.push({number: 3, string: 'third'});
    floors.push({number: 4, string: 'forth'});
    floors.push({number: 5, string: 'fifth'});

    // filling the wings 
    // used different way for wings so 
    // i didn't use state to store it
    
    this.setState({ buildings, floors });
  }

  render() {
    // to solve error with font
    if (this.state.loadingFont) {
      return <Expo.AppLoading />;
    }

    const buildingButtons = this.state.buildings.map(building => {
      return(
        <View key={building}>
          <Button 
          rounded style={(this.state.selectedBuilding === building) ? styles.selectedBuildingButton : styles.buildingButton } 
          onPress={(e) => {this.setState({selectedBuilding: building});}}
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
        onPress={() => {this.setState({selectedFloor: floor})}}
        >
          <Text>
            {floor.string}
          </Text>
        </Button>
      );
    });

    const wingsButtons = (
      <View>
        <View style={{position: 'relative', left: 50}}>
          <Button style={(this.state.selectedWing.number === 1) ? styles.selectedWingButton : styles.wingButton} onPress={() => {this.setState({selectedWing: {number: 1, string: 'first'}})}}>
            <Text>First</Text>
          </Button>
        </View>

        <View style={{ flexDirection: 'row' }}>
          <Button style={(this.state.selectedWing.number === 2) ? styles.selectedWingButton : styles.wingButton} onPress={() => {this.setState({selectedWing: {number: 2, string: 'second'}})}}>
            <Text>Second</Text>
          </Button>

          <Button style={(this.state.selectedWing.number === 4) ? styles.selectedWingButton : styles.wingButton} onPress={() => {this.setState({selectedWing: {number: 4, string: 'forth'}})}}>
            <Text>Forth</Text>
          </Button>
        </View>

        <View style={{position: 'relative', left: 50}}>
          <Button style={(this.state.selectedWing.number === 3) ? styles.selectedWingButton : styles.wingButton} onPress={() => {this.setState({selectedWing: {number: 3, string: 'third'}})}}>
            <Text>Third</Text>
          </Button>
        </View>
      </View>
    );

    console.log(this.state);
    return (
      <Container style={{padding: 10}}>
        <Content>

          {/* The buildings card */}
          <Card>
            <CardItem bordered style={{justifyContent: 'center'}}>
              <Text 
              style={{fontWeight: '800', color: COLORS.building, fontSize: 20}}
              >
                Choose Building
              </Text>
            </CardItem>
            <CardItem>
              <Body style={styles.buildingButtonsBody}>
                {buildingButtons}
              </Body>
            </CardItem>
            <CardItem bordered footer style={{flexDirection: 'row', justifyContent: 'center' }}>
              {this.state.selectedBuilding === null
              ?
              <Button disabled style={styles.statusButtonWaiting}>
                 <ActivityIndicator color="white" /> 
              </Button>
              :
              <Button disabled style={styles.statusButton}>
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
                Choose Floor
              </Text>
            </CardItem>
            <CardItem>
              <Body style={styles.buildingButtonsBody}>
                {floorsButtons}
              </Body>
            </CardItem>
            <CardItem bordered footer style={{flexDirection: 'row', justifyContent: 'center' }}>
              {this.state.selectedFloor === null
              ?
              <Button disabled style={styles.statusButtonWaiting}>
                 <ActivityIndicator color="white" /> 
              </Button>
              :
              <Button disabled style={styles.statusButton}>
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
                Choose Wing
              </Text>
            </CardItem>
            <CardItem>
              <Body style={styles.buildingButtonsBody}>
                {wingsButtons}
              </Body>
            </CardItem>
            <CardItem bordered footer style={{flexDirection: 'row', justifyContent: 'center' }}>
              {this.state.selectedWing.number === 0
              ?
              <Button disabled style={styles.statusButtonWaiting}>
                 <ActivityIndicator color="white" /> 
              </Button>
              :
              <Button disabled style={styles.statusButton}>
                <Text style={{fontSize: 15, position: 'relative', left: 20 }}>{this.state.selectedWing.string + ' Wing'}</Text>
                <Icon type="FontAwesome" name="check" />
              </Button>
              }
            </CardItem>
          </Card>
          
        </Content>
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
  statusButtonWaiting: {
    width: 200,
    justifyContent: 'center',
    alignItems: 'center', 
    backgroundColor: '#A3A3A3'
  }, 
  statusButton: {
    width: 200,
    justifyContent: 'center',
    alignItems: 'center', 
    backgroundColor: '#5D9D62'
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
    width: 48, 
    justifyContent: 'center', 
    alignItems: 'center',
    backgroundColor: COLORS.building
  },
  selectedBuildingButton: {
    margin: 3, 
    width: 48, 
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
  }

});








