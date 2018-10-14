import React, { Component } from "react";
import {
  View,
  StyleSheet,
  Image,
  AsyncStorage,
  ActivityIndicator
} from 'react-native';
import { Container, Header, Content, Card, CardItem, Text, Body, Button } from 'native-base';
import { Col, Row, Grid } from 'react-native-easy-grid';
import { Font, AppLoading } from "expo";

const NUMBER_OF_BUILDINGS = 30;

export default class Reserve extends Component {

  state = { 
    buildings: [],
    loadingFont: true,
    selectedBuilding: null,
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
    this.setState({ buildings });
  }

  selectBuilding = () => {
    
  }

  render() {
    // to solve error with font
    if (this.state.loadingFont) {
      return <Expo.AppLoading />;
    }

    const buildingButtons = this.state.buildings.map(building => {
      return(
        <View key={building}>
          <Button rounded style={styles.buildingButton} onPress={this.selectBuilding}>
            <Text>{building}</Text>
          </Button>
        </View>
      );
    })

    return (
      <Container style={{padding: 10}}>
        <Content>
          {/* The buildings card */}
          <Card>
            <CardItem header bordered>
              <Text style={{fontWeight: '800'}}>Choose Building</Text>
            </CardItem>
            <CardItem>
              <Body style={styles.buildingButtonsBody}>
                {buildingButtons}
              </Body>
            </CardItem>
            <CardItem bordered footer style={{flexDirection: 'row', justifyContent: 'center' }}>
              <Button style={styles.buildingStatusButton}>
                <ActivityIndicator color="white" />
              </Button>
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
  buildingStatusButton: {
    width: 200,
    justifyContent: 'center',
    alignItems: 'center', 
    backgroundColor: '#A3A3A3'
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
    alignItems: 'center'
  }

});








