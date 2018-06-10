import React, {Component} from 'react';
import { StyleSheet, Text, View, Dimensions } from 'react-native';

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
    backgroundColor: '#FFF',
    borderRadius: windowSize/2,
    paddingHorizontal: windowSize-10,
    paddingVertical: 5,
  },
  complete: {
    backgroundColor: 'steelblue',
    borderRadius: windowSize/2,
    paddingVertical: 5,
    position: 'absolute',
  },
});