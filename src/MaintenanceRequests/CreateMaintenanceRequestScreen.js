
import React, { Component } from "react";
import {
  View,
  StyleSheet,
  Image,
  AsyncStorage
} from 'react-native';
import { Spinner, Container, Content, Input, Item, Form, Textarea, Button, Text, Icon, Toast } from 'native-base';
import axios from 'axios';
import qs from 'querystring';
import { env } from '../../env';

const COLORS = {
  eColor: '#A39977',
  eColorSelected: '#8A6C99',
  cColor: '#A66962',
  cColorSelected: '#8A6C99',
  pColor: '#9C9C9C',
  pColorSelected: '#8A6C99',
  submitButton: '#8A6C99',
  submitButtonSuccessful: '#3CAB47'
}

export default class CreateMaintenanceRequestScreen extends Component {
  state = {
    active: 'true',
    title: '',
    description: '',
    isSubmitted: null,
    type: null,
    isFetching: false,
    showToast: false
  }

  submitRequest = async () => {
    this.setState({isFetching: true});
    const token = await AsyncStorage.getItem('token');
    const {title, description, type} = this.state;
    if (title.length == 0 || description.length == 0 || type == null) {
      Toast.show({
        text: "Please fill the title and the description and select the request type!",
        type: "danger",
        duration: 4000
      })
      this.setState({isFetching: false});
    } else {
      axios.post(`${env.url}/createMaintenanceRequest`, qs.stringify({token, title, description, type}))
      .then(async (response) => {
        this.setState({isFetching: false, isSubmitted: true, title: '', description: '', type: ''});
        // this.props.refreshComplaints() 
        setTimeout(() => {
          this.setState({isSubmitted: false});
        }, 1000)
      })
      .catch(error => {
        console.log(error);
        Toast.show({
          text: "Something wrong happened !",
          type: "danger",
          duration: 4000
        })
        this.setState({isFetching: false});
      });
    }
  }

  renderButtonContent = () => {
    if (this.state.isFetching) {
      return <Spinner color="white" />
    } else if (this.state.isSubmitted) {
      return <Icon style={{color: 'white'}} name="md-checkmark" />
    } else {
      return <Text>Add Request</Text> 
    }
  }

  render() {
    console.log(this.state);
    const eColor = (this.state.type === 'electricity') ? COLORS.eColorSelected : COLORS.eColor;
    const cColor = (this.state.type === 'carpentry') ? COLORS.cColorSelected : COLORS.cColor;
    const pColor = (this.state.type === 'plumbing') ? COLORS.pColorSelected : COLORS.pColor;
    const submitButtonColor = (!this.state.isSubmitted) ? COLORS.submitButton : COLORS.submitButtonSuccessful;
    return (
      <Container>
        <Content padder>
          <Form>
            <Item regular style={{borderRadius: 4, marginVertical: 10}}>
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
              style={{paddingVertical: 5, borderRadius: 4, marginVertical: 10}} 
              rowSpan={5} 
              bordered 
              placeholder="Description" 
            />
            <View style={styles.typeButtons}>
              <Button 
                style={[styles.typeButton, {backgroundColor: eColor,}]}
                onPress={() => {this.setState({type: 'electricity'})}}
              >
                <View>
                  <Image
                    source={require('../img/light.png')}
                    style={{ width: 30, height: 30, left: 35}}
                  />
                </View>
              </Button>
              <Button 
                style={[styles.typeButton, {backgroundColor: cColor,}]}
                onPress={() => {this.setState({type: 'carpentry'})}}
              >
                <View>
                  <Image
                    source={require('../img/technics.png')}
                    style={{ width: 30, height: 30, left: 35}}
                  />
                </View>
              </Button>
              <Button 
                style={[styles.typeButton, {backgroundColor: pColor,}]}
                onPress={() => {this.setState({type: 'plumbing'})}}
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
              onPress={() => {this.submitRequest()}} 
              style={{marginTop: 10, backgroundColor: submitButtonColor}} 
              block 
              success={this.state.isSubmitted} 
            >
              {this.renderButtonContent()}
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
}); 