import React, { Component } from "react";
import AppNavigator  from './src/stacknav'
import { Root } from "native-base"; // this enables the toast

export default class App extends Component {
  render() {
    return (
      <Root>     
        <AppNavigator />
      </Root>
    );
  }
}
