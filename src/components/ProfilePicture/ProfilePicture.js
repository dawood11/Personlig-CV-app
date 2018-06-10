import React, {Component} from 'react';
import { StyleSheet, Image, Dimensions, Text, View } from 'react-native';

let iProfilePictureSize = Dimensions.get('window').width/2;


export default class ProfilePicture extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Image source={require('./ProfilePicture.jpg')} style={styles.ProfilePicture}/>
        <View style={styles.labelContainer}>
          <Text style={styles.name}>Dawood Ahmad</Text>
          <Text style={styles.jobTitle}>Junior front-end developer</Text>
          <Text style={styles.jobTitle}>Ambita AS</Text>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    paddingTop: 50,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'steelblue',
    borderBottomColor: 'black',
    borderBottomWidth: 5,
  },
  ProfilePicture: {
    width: iProfilePictureSize,
    height: iProfilePictureSize,
    borderRadius: iProfilePictureSize/2,
    borderWidth: 2,
    borderColor: 'skyblue',
  },
  labelContainer:{
    paddingTop: 10,
    flexDirection: 'column',
    alignItems: 'center',
  },
  name:{
    fontSize: 20,
    color: 'white',
    fontWeight: 'bold',
  },
  jobTitle:{
    fontSize: 15,
    color: 'white',
  }
});