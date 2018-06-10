import React from 'react';
import { 
  StyleSheet, 
  View, 
  ScrollView, 
  StatusBar, 
  Button, 
} from 'react-native';
import ProfilePicture from './src/components/ProfilePicture/ProfilePicture';
import PhotoGrid from './src/components/PhotoGrid/PhotoGrid';


export default class Route extends React.Component {
  constructor(props){
    super(props)
  }

  static navigationOptions = {
    header: null
  }
  render() {
    const { navigate } = this.props.navigation;    

    return (
      <ScrollView contentContainerStyle={styles.container}>
        <StatusBar
          backgroundColor="blue"
          barStyle="dark-content"
          //StatusBarAnimation='fade'
          hidden={true}
          translucent={true}
        />
          <ProfilePicture/>
          <PhotoGrid navigation={this.props.navigation}/>
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
//      marginTop: 24,
      flex: 1
  },
});
