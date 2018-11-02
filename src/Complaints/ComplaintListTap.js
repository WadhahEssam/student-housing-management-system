import React, { Component } from 'react';
import { ActivityIndicator } from 'react-native';
import { View, Container, Header, Content, List, ListItem, Thumbnail, Text, Left, Body, Right, Button, Icon } from 'native-base';

class ComplaintListTap extends Component {
  renderListItems = () => {
    if (this.props.complaints != null) {
      return this.props.complaints.slice(0).reverse().map((complaint) => {
        const isClosed = complaint.replay !== null;
        return (
          <ListItem key={complaint.id} thumbnail androidRippleColor>
            <Left style={{width: 30}}>
              {(isClosed) ? 
                <Icon style={{color: '#B8BCBC', fontSize: 30, width: 30 }} name="md-lock" />
              : 
                <Icon style={{color: '#4050B5', fontSize: 30, width: 30 }} name="md-pulse" />
              }
              
            </Left>
            <Body>
              <Text>{complaint.title}</Text>
              <Text note numberOfLines={1} style={{fontSize: 10}}>{complaint.created_at}</Text>
              <Text note numberOfLines={7}>{complaint.description}</Text>
            </Body>
            {(isClosed) ? 
              <Right>
                <Button small style={{backgroundColor: "#B8BCBC"}} >
                  <Text>Replay</Text>
                </Button>
              </Right>
              : 
              <View />
            }
          </ListItem>
        );
      });
    } else {
      return <ActivityIndicator />
    }
  }

  render() {
    console.log(this.props.complaints);
    return (
      <Container>
        <Content>
          <List>
            {this.renderListItems()}
          </List>
        </Content>
      </Container>
    )
  }
}

export default ComplaintListTap;