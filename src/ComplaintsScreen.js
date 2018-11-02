import React, { Component } from "react";
import { StyleSheet } from 'react-native';
import { Container, Icon, Tab, Tabs, TabHeading } from 'native-base';
import AddComplaintTap from "./Complaints/AddComplaintTap";
import ComplaintListTap from "./Complaints/ComplaintListTap";

export default class complaints extends Component {
  constructor(props) {
    super(props);
    this.state = { loading: true };
  }

  async componentWillMount() {
    await Expo.Font.loadAsync({
      Roboto: require("native-base/Fonts/Roboto.ttf"),
      Roboto_medium: require("native-base/Fonts/Roboto_medium.ttf"),
      Ionicons: require("@expo/vector-icons/fonts/Ionicons.ttf"),
    });
    this.setState({ loading: false });
  }

  render() {
    if (this.state.loading) {
      return <Expo.AppLoading />;
    }

    return(
      <Container>
        <Tabs>
          <Tab heading={ <TabHeading><Icon name="add" /></TabHeading>}>
            <AddComplaintTap/>
          </Tab>
          <Tab heading={ <TabHeading><Icon name="list" /></TabHeading>}>
            <ComplaintListTap/>
          </Tab>
        </Tabs>
      </Container>
    );
  }
}

const styles = StyleSheet.create({
  
}); 