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

export default class complaints extends Component {
  render() {
    return(
      <Container>
        <Grid>
          <Col>
            <Row 
              style={{ backgroundColor: '#89A3B3', borderWidth:3, borderColor:'white',}}
              onPress={() => this.props.navigation.navigate('addcomplaints')}
            >
              <View style={{ flex:1, justifyContent:'center', alignItems:'center'}}>
                <View> 
                  <Text style={{fontSize:20, color:'white',}}>Add Complaint</Text>  
                </View>
                <View>
                  <Image
                    source={require('./img/add.png')}
                    style={styles.icon}
                  /> 
                </View>   
              </View>
            </Row > 
            <Row 
              style={{ backgroundColor: '#B8C789', borderWidth:3, borderColor:'white',}}
              onPress={() => this.props.navigation.navigate('complaints')}
            >
              <View  style={{ flex:1, justifyContent:'center', alignItems:'center'}}>
                <View> 
                  <Text style={{fontSize:20, color:'white',}}>Old Requests</Text>  
                </View>
                <View > 
                  <Image 
                    source={require('./img/old.png')}
                    style={styles.icon4}
                  /> 
                </View>    
              </View>
            </Row > 
          </Col>
         
        </Grid>
      </Container>
    );
  }
}

const styles = StyleSheet.create({
  icon: {
    marginTop:20,
    width: 44,
    height: 44,
  },
  icon2: {
    width: 100,
    height: 100,
  },
  icon3: {
    marginTop:10,
    width: 56,
    height: 56,
  },
  icon4: {
    marginTop:10,
    width: 60,
    height: 60,
  }
}); 