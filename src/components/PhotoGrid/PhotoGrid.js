import React, {Component} from 'react';
import { 
  StyleSheet, 
  View, 
  ScrollView, 
  Image, 
  Dimensions, 
  TouchableHighlight, 
} from 'react-native';
import { borderColor, skyBlueBackground } from '../../../Styling';

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
        
          <TouchableHighlight style={styles.photoWrap} onPress={() => console.log('Pressed image 3')}>
            <Image source={require('./PhotoGridImages/PhotoGridImage3.jpg')} style={styles.photo}/>
          </TouchableHighlight>
        
          <TouchableHighlight style={styles.photoWrap} onPress={() => console.log('Pressed image 4')}>
            <Image source={require('./PhotoGridImages/PhotoGridImage4.jpg')} style={styles.photo}/>
          </TouchableHighlight>
        
          <TouchableHighlight style={styles.photoWrap} onPress={() => console.log('Pressed image 5')}>
            <Image source={require('./PhotoGridImages/PhotoGridImage5.jpg')} style={styles.photo}/>
          </TouchableHighlight>
        
        </View>
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: skyBlueBackground
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
    borderColor: borderColor,
    borderWidth: 2,
  }
});