import React, {Component} from 'react';
import { StyleSheet, Image, Dimensions, Text, View, Button, FlatList } from 'react-native';
import ProgressBar from '.././ProgressBar/ProgressBar';
import Subjects from './Subjects/Subjects';
import * as firebase from 'firebase';

var educationDB = []
let iProfilePictureSize = Dimensions.get('window').width/3;

export default class Education extends Component {
  database = firebase.database().ref('Education').on('value', this.gotData, this.errData)  
  state = {
    educationList: '',
    loaded: false
  }
  constructor(props){
    super(props)
    setTimeout(() => this.setState({loaded: true}), 2000);
  }

  gotData(data) {
    educationDB = data.val();
    console.log(educationDB)
  }
  errData(err) {
    console.log('ERROR');
    console.log(err);
  }

  static navigationOptions = {
    title: 'Education'
  }
  
  render() {
    const { navigate } = this.props.navigation;
    setTimeout(() => this.setState({educationList : educationDB}), 1000);
     
    return (
      <View style={styles.container}>
        {this.state.loaded ?  <FlatList
          data = {this.state.educationList}
          renderItem = {
            ({item}) =>
              <View style={styles.subContainer}>
                <View style={styles.EducationTitleContainer}>
                  <View>
                    <Text style={styles.EducationSubTitle}>{`${item.educationTitle}`}</Text>
                    <Text style={styles.EducationSubTitle}>{`${item.educationSubtitle}`}</Text>
                  </View>
                  <Button title='i' onPress={() => navigate('Subjects', {study:`${item.type}`})}/>
                </View>
                <ProgressBar progress={item.complete}/>
              </View>
          }
        /> : <Text style={{color: 'white'}}>Loading...</Text>}
    </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'skyblue'
  },
  subContainer: {
    paddingTop: 5,
    paddingBottom: 5,
    borderBottomColor: 'black',
    borderBottomWidth: 1,   
  },
  EducationSubTitle: {
    color: 'white'
  },
  EducationTitleContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
  }
});