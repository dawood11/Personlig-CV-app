import React, {Component} from 'react';
import { StyleSheet, Image, Dimensions, Text, View } from 'react-native';
import ProgressBar from '.././ProgressBar/ProgressBar';


let iProfilePictureSize = Dimensions.get('window').width/3;

export default class Work extends Component {
  static navigationOptions = {
    title: 'Work experience'
  }

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.subContainer}>
          <Text style={styles.EducationSubTitle}>Master - Programming and network</Text>
          <Text style={styles.EducationSubTitle}>University of Oslo (2016-2018)</Text>
        </View>
    </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'skyblue',
    justifyContent: 'center',
    alignItems: 'center',
  },
  subContainer: {
    paddingTop: 5,
    paddingBottom: 5,
    borderBottomColor: 'black',
    borderBottomWidth: 1,
  },
  EducationSubTitle: {
    color: 'white'
  }
});