import React, { Component } from "react";
import { StyleSheet, AsyncStorage } from 'react-native';
import { Container, Icon, Tab, Tabs, TabHeading } from 'native-base';
import AddComplaintTap from "./Complaints/AddComplaintTap";
import ComplaintListTap from "./Complaints/ComplaintListTap";
import axios from 'axios';
import qs from 'querystring';
import { env } from '../env';

export default class complaints extends Component {
  state = {
    loading: true,
  }

  async componentWillMount() {
    // fixing native-base font problem
    await Expo.Font.loadAsync({
      Roboto: require("native-base/Fonts/Roboto.ttf"),
      Roboto_medium: require("native-base/Fonts/Roboto_medium.ttf"),
      Ionicons: require("@expo/vector-icons/fonts/Ionicons.ttf"),
    });
    this.setState({ loading: false });

    // getting the complaints
    const token = await AsyncStorage.getItem('token');
    axios.post(`${env.url}/getComplaintsForStudent`, qs.stringify({token}))
    .then(async (response) => {
      console.log(response.data);
    })
    .catch(error => {
      console.log(error);
    });
  }

  render() {
    if (this.state.loading) {
      return <Expo.AppLoading />;
    }

    return(
      <Container>
        <Tabs>
          <Tab heading={<TabHeading><Icon name="list" /></TabHeading>}>
            <ComplaintListTap/>
          </Tab>
          <Tab heading={<TabHeading><Icon name="add" /></TabHeading>}>
            <AddComplaintTap/>
          </Tab>
        </Tabs>
      </Container>
    );
  }
}

const styles = StyleSheet.create({
  
}); 