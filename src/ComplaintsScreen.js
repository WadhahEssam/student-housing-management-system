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
              style={{ backgroundColor: '#0B3861', borderWidth:3, borderColor:'white',}}
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
              style={{ backgroundColor: '#38610B', borderWidth:3, borderColor:'white',}}
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
          <Col>
            <Row 
              style={{ backgroundColor: '#8A0808', borderWidth:3, borderColor:'white',}}
              onPress={() => this.props.navigation.navigate('maintain')}
            >
              <View  style={{ flex:1, justifyContent:'center', alignItems:'center'}}>
                <View> 
                  <Text style={{fontSize:20, color:'white',}}>Maintenance</Text>  
                  <Text style={{fontSize:20, color:'white', textAlign:'center'}} >Request</Text>  
                </View>
                <View>
                  <Image
                    source={require('./img/maintain.png')}
                    style={styles.icon3}
                  /> 
                </View>  
              </View>
            </Row > 
            <Row 
              style={{ backgroundColor: '#FF8000', borderWidth:3, borderColor:'white',}}
              onPress={() => this.props.navigation.navigate('complaints')}
            >
              <View style={{ flex:1, justifyContent:'center', alignItems:'center'}}>
                <View> 
                  <Text style={{fontSize:20, color:'white',}}>Requests</Text>  
                  <Text style={{fontSize:20, color:'white', textAlign:'center'}}>Status</Text>  
                </View>
                <View >
                  <Image
                    source={require('./img/statue.png')}
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