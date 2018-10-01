import React, {Component} from 'react';
import { StyleSheet, View, Dimensions } from 'react-native';
import { backgroundColorSsecondary } from '../../../Styling';

let windowSize = Dimensions.get('window').width/2;

export default class Education extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <View style={styles.container}>
          <View style={styles.progressBar}>
            <View style={[styles.complete, {paddingHorizontal: (windowSize-10)*(this.props.progress/100)}]}>
            </View>
          </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  progressBar: {
    backgroundColor: 'white',
    borderRadius: windowSize/2,
    paddingHorizontal: windowSize-10,
    paddingVertical: 5,
  },
  complete: {
    backgroundColor: backgroundColorSsecondary,
    borderRadius: windowSize/2,
    paddingVertical: 5,
    position: 'absolute',
  },
});