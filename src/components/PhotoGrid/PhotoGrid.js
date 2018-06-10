import React, {Component} from 'react';
import { 
  StyleSheet, 
  View, 
  ScrollView, 
  Text, 
  Image, 
  Dimensions, 
  TouchableHighlight, 
  Navigator
} from 'react-native';

export default class PhotoGrid extends Component {
  constructor(props){
    super(props)
  }
  
  render() {
    const { navigate } = this.props.navigation;    
    return (
      <ScrollView style={styles.container}>
        <View style={styles.photoGrid}>
          <TouchableHighlight style={styles.photoWrap} onPress={() => navigate('Education')}>
            <Image source={require('./PhotoGridImages/Study.jpg')} style={styles.photo}/>
          </TouchableHighlight>
          <TouchableHighlight style={styles.photoWrap} onPress={() => navigate('Work')}>
            <Image source={require('./PhotoGridImages/PhotoGridImage2.jpg')} style={styles.photo}/>
          </TouchableHighlight>
          <View style={styles.photoWrap}>
            <Image source={require('./PhotoGridImages/PhotoGridImage3.jpg')} style={styles.photo}/>
          </View>
          <View style={styles.photoWrap}>
            <Image source={require('./PhotoGridImages/PhotoGridImage4.jpg')} style={styles.photo}/>
          </View>
          <View style={styles.photoWrap}>
            <Image source={require('./PhotoGridImages/PhotoGridImage5.jpg')} style={styles.photo}/>
          </View>
        </View>
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'skyblue'
  },
  photoGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
  photoWrap: {
    margin: 2,
    height: 120,
    width: (Dimensions.get('window').width / 2) - 4,
  },
  photo: {
    flex: 1,
    width: null,
    alignSelf: 'stretch',
    borderRadius: 10,
    borderColor: 'white',
    borderWidth: 2,
  }
});