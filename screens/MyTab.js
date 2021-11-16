import React, {Component} from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';

import {DrawerActions} from 'react-navigation-drawer';

class Home extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <View style={styles.container}>
        <TouchableOpacity
          onPress={() => this.props.navigation.dispatch(DrawerActions.openDrawer())}
        >
          <Text style={styles.textStyle}>
            openDrawer
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => this.props.navigation.dispatch(DrawerActions.closeDrawer())}
        >
          <Text style={styles.textStyle}>
            closeDrawer
          </Text>
        </TouchableOpacity>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'flex-end'
  },
  textStyle: {
    fontSize: 20,
    fontWeight: 'bold',
  }
});

export default Home;