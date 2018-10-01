import React from 'react';
import { StyleSheet, View, StatusBar } from 'react-native';
import ProfilePicture from './src/components/ProfilePicture/ProfilePicture';
import PhotoGrid from './src/components/PhotoGrid/PhotoGrid';

export default class HomeScreen extends React.Component {

  static navigationOptions = {
    header: null
  };

  render() {
    return (
    <View style={styles.container}>
      <StatusBar
        backgroundColor="blue"
        barStyle="dark-content"
        //StatusBarAnimation='fade'
        hidden={true}
        translucent={true}
      />
        <ProfilePicture/>
        <PhotoGrid navigation={this.props.navigation}/>
    </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
//      marginTop: 24,
      flex: 1
  },
});