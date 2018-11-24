import React, { Component } from "react";
import {
  Text,
  View,
  StyleSheet,
  Image,
} from 'react-native';
import {
  Icon,
  Button,
  Fab,
  Container,
  Header,
  Left,
  Right,
  Body,
  Segment
} from 'native-base';

export default class addmaintain extends Component {
  state = {
    active: 'true',
  }

  render() {
    return (
      <Container>
        <Header hasSegment style={{paddingTop: -20, height: 50, backgroundColor: 'white'}}>
          <Body>
            <Segment style={{backgroundColor: 'white'}}>
              <Button first active><Icon name="arrow-back" /></Button>
              <Button ><Icon name="arrow-back" /></Button>
              <Button ><Icon name="arrow-back" /></Button>
              <Button last><Icon name="arrow-forward" /></Button>
            </Segment>
          </Body>
        </Header>
        <Fab
          active={this.state.active}
          direction="up"
          containerStyle={{ }}
          style={{ backgroundColor: '#5067FF' }}
          position="bottomRight"
          onPress={() => this.props.navigation.navigate('CreateMaintenanceRequest')}
        >
          <Icon name="add" />
        </Fab>
      </Container>
    );
  }
}
const styles = StyleSheet.create({

}); 