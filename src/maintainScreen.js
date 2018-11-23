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
} from 'native-base';

export default class addmaintain extends Component {
  state = {
    active: 'true',
  }

  render() {
    return (
      <Container>
        <Fab
          active={this.state.active}
          direction="up"
          containerStyle={{ }}
          style={{ backgroundColor: '#5067FF' }}
          position="bottomRight"
          onPress={() => this.setState({ active: !this.state.active })}
        >
          <Icon name="add" />
        </Fab>
      </Container>
    );
  }
}
const styles = StyleSheet.create({

}); 