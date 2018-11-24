
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
            <Button onPress={() => {this.submitComplaint()}} style={{marginTop: 10}} block success={this.state.isSubmitted} >
              <Text>Submit</Text>
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

}); 