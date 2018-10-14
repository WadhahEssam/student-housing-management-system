import React, { Component } from "react";
import {
  Text,
  View,
  StyleSheet,
  Image,
} from 'react-native';
import {
  Container,
} from 'native-base';
import { Col, Row, Grid } from 'react-native-easy-grid';

export default class home extends Component {
  render() {
    return (
      <Container>
        <Grid>
          <Row
            style={{ backgroundColor: '#A57086', borderWidth: 3, borderColor: 'white', }}
            onPress={() => this.props.navigation.navigate('reserveRoom')}
          >
            <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
              <View>
                <Text style={{ fontSize: 40, color: 'white', }}>Reserve</Text>
                <Text style={{ fontSize: 40, color: 'white', textAlign: 'center' }}>Room</Text>
              </View>
              <View >
                <Image
                  source={require('./img/take.png')}
                  style={styles.icon}
                />
              </View>
            </View>
          </Row >
          <Row
            style={{ backgroundColor: '#C1D3A2', borderWidth: 3, borderColor: 'white', }}
          >
            <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
              <View>
                <Text style={{ fontSize: 40, color: 'white', }}>Change</Text>
                <Text style={{ fontSize: 40, color: 'white', textAlign: 'center' }}>Room</Text>
              </View>
              <View >
                <Image
                  source={require('./img/change.png')}
                  style={styles.icon2}
                />
              </View>
            </View>
          </Row >
        </Grid>
      </Container>
    )
  }
}

const styles = StyleSheet.create({
  icon: {
    marginTop: 20,
    width: 80,
    height: 80,
  },
  icon2: {
    width: 120,
    height: 120,
  }
});


