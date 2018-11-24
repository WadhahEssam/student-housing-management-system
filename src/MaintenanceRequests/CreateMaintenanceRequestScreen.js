
import React, { Component } from "react";
import {
  View,
  StyleSheet,
  Image,
} from 'react-native';
import { Container, Content, Input, Item, Form, Textarea, Button, Text, Icon } from 'native-base';


export default class CreateMaintenanceRequestScreen extends Component {
  state = {
    active: 'true',
    title: '',
    description: '',
    isSubmitted: null,
    selectedType: null,
  }

  render() {
    console.log(this.state);
    return (
      <Container>
        <Content padder>
          <Form>
            <Item regular>
              <Input 
                value={this.state.title} 
                onChangeText={(title) => {this.setState({title})}}
                selectionColor="#4050B5" 
                placeholder='Title' 
              />
            </Item>
            <Textarea 
              value={this.state.description} 
              onChangeText={(description) => {this.setState({description})}} 
              selectionColor="#4050B5" 
              style={{paddingVertical: 5}} 
              rowSpan={5} 
              bordered 
              placeholder="Description" 
            />
            <View style={styles.typeButtons}>
              <Button 
                style={[styles.typeButton, styles.eButton]}
                onPress={() => {this.setState({selectedType: 'electricity'})}}
              >
                <View>
                  <Image
                    source={require('../img/light.png')}
                    style={{ width: 30, height: 30, left: 35}}
                  />
                </View>
              </Button>
              <Button 
                style={[styles.typeButton, styles.cButton]}
                onPress={() => {this.setState({selectedType: 'carpentry'})}}
              >
                <View>
                  <Image
                    source={require('../img/technics.png')}
                    style={{ width: 30, height: 30, left: 35}}
                  />
                </View>
              </Button>
              <Button 
                style={[styles.typeButton, styles.pButton]}
                onPress={() => {this.setState({selectedType: 'plumbing'})}}
              >
                <View>
                  <Image
                    source={require('../img/washing.png')}
                    style={{ width: 30, height: 30, left: 35}}
                  />
                </View>
              </Button>
            </View>
            <Button 
              onPress={() => {this.submitComplaint()}} 
              style={{marginTop: 10, backgroundColor: '#8A6C99'}} 
              block 
              success={this.state.isSubmitted} 
            >
              <Text>SUBMIT</Text>
            </Button>
          </Form>
          <View alignItems="cetner" style={styles.infoBox}>
            <Icon style={{color: 'white'}} name="warning" />
            <Text style={{color: 'white', fontSize: 12}}>
              Housing adminstraion will recieve your complaint and replay to it soon after you submit it.
            </Text>
          </View>
        </Content>
      </Container>
    );
  }
}
const styles = StyleSheet.create({
  typeButtons: {
    marginTop: 10,
    marginBottom: 10,
    flexDirection: 'row',
    justifyContent: 'space-evenly',
  },
  typeButton: {
    width: 100,
    height: 50
  },
  eButton: {
    backgroundColor: '#BFB48B',
  },
  cButton: {
    backgroundColor: '#C2776F',
  },
  pButton: {
    backgroundColor: '#838383',
  }
}); 