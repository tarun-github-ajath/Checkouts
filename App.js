
import React, {Component} from 'react';
import { StyleSheet,View,Text} from 'react-native';
import Main from './src/Main';
import Intro from './src/containers/AppIntro/Intro'
import Login from './src/containers/Login_Signup/Login'

import { createStackNavigator, createAppContainer } from "react-navigation";

class App extends Component {

  static navigationOptions = {
    header: null
  }

  render() {
    return (
      <View style={styles.container}>
        <Main navigation={this.props.navigation} />
      </View>
    );
  }
}

const styles = StyleSheet.create({

  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },

 });

 const AppNavigator = createStackNavigator({
  Home: {
    screen: App
  },

  intro:{
    screen:Intro,
      navigationOptions: {
        header: null
    }
  },

  login:{
    screen:Login,
    navigationOptions:{
      title:'Login'
    }
  }
});

export default createAppContainer(AppNavigator);
