import React, { Component } from 'react';
import { ActivityIndicator, StyleSheet } from 'react-native';
import { View, Container, Content, List, Text, Left, Body, Right, Icon, CardItem, Card, Badge } from 'native-base';

class ComplaintListTap extends Component {

  renderListItems = () => {
    if (this.props.complaints != null) {
      return this.props.complaints.slice(0).reverse().map((complaint) => {
        const isClosed = complaint.replay !== null;
        const statusClosedLabel = (
          <Badge danger style={{position: 'relative', right: 3}}>
            <Text style={{fontSize: 13}}>Closed</Text>
          </Badge>
        );
        const statusOpenLabel = (
          <Badge primary style={{position: 'relative', right: 3}}>
            <Text style={{fontSize: 13}}>Open</Text>
          </Badge>
        );
        const closedIcon = <Icon style={{color: '#D9544E', fontSize: 30, width: 30 }} name="md-lock" />;
        const openIcon = <Icon style={{color: '#4050B5', fontSize: 30, width: 30 }} name="md-pulse" />;

        const replayField = (
          <CardItem footer bordered>
            <Body>
              <Text style={{color: '#D9544E', fontWeight: '600'}}>Replay :</Text>
              <Text note style={{color: '#D9544E'}}>{complaint.replay}</Text>
            </Body>
          </CardItem>
        );
        return (
          <Card key={complaint.id}>
            <CardItem header bordered>
              <Left>
                {(isClosed) ? closedIcon : openIcon}
                <Body>
                  <Text>{complaint.title}</Text>
                  <Text note>{complaint.created_at}</Text>
                </Body>
              </Left>

              <Right>
                {(isClosed) ? statusClosedLabel : statusOpenLabel}
              </Right>
            </CardItem>
            <CardItem>
              <Body>
                <Text style={{fontWeight: '600'}}>Description :</Text>
                <Text>
                  {complaint.description}
                </Text>
              </Body>
            </CardItem>
            {(isClosed) ? replayField : <View/>}
          </Card>
        );
      });
    } else {
      return <ActivityIndicator size={60} color="#4050B5" />
    }
  }

  render() {
    console.log(this.props.complaints);
    return (
      <Container>
        <Content padder>
          <List>
            {this.renderListItems()}
          </List>
        </Content>
      </Container>
    )
  }
}

const styles = StyleSheet.create({

}); 

export default ComplaintListTap;