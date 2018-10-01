import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';

export default class ProfileScreen extends React.Component {

  constructor(props) {
    super(props)
    const { params } = this.props.navigation.state;
    this.state = {
      name: params.name
    }
  }
  static navigationOptions = {
    title: 'Welcome',
  };

  render() {
    const { goBack } = this.props.navigation;
    return (
      <View style={styles.container}>
        <Text>app {this.state.name}!</Text>
        <Button
          title="Go back!!!"
          onPress={() => {
            console.log('nnnn');
            goBack()
        }}/>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
