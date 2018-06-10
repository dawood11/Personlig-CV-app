import React, {Component} from 'react';
import { StyleSheet, Text, View, FlatList } from 'react-native';
import * as firebase from 'firebase';

var subjectsDB = []

export default class Subject extends Component {
  database = firebase.database().ref(this.props.navigation.state.params.study).on('value', this.gotData, this.errData)
  
  constructor(props){
    super(props)
    this.state = {
      subjectsList: '',
      loaded: false
   }
   setTimeout(() => this.setState({loaded: true}), 2000);   
  }
  firebaseConfig = {
    apiKey: "AIzaSyBCecp-v6LgXCPf9IrOUyPUYAPyGaImAb0",
    authDomain: "helloworld-7103b.firebaseapp.com",
    databaseURL: "https://helloworld-7103b.firebaseio.com",
    projectId: "helloworld-7103b",
    storageBucket: "helloworld-7103b.appspot.com",
  };
  
  //database = firebase.database().ref('Bachelor').on('value', this.gotData, this.errData)
  
  gotData(data) {
    subjectsDB = data.val();
    console.log(subjectsDB)
  }
  errData(err) {
    console.log('ERROR');
    console.log(err);
  }

  static navigationOptions = {
    title: 'Subject'
  }

  render() {
    setTimeout(() => this.setState({subjectsList : subjectsDB}), 1000);

    return (
      <View style={styles.container}>
        {this.state.loaded ? <FlatList
          data = {this.state.subjectsList}
          renderItem = {
            ({item}) =>
              <View style={styles.courseContainer}>
                <Text style={styles.courseID}>{`${item.key}`}</Text>
                <Text style={styles.courseName}> - {`${item.courseName}`}</Text>
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
    backgroundColor: 'skyblue',
  },
  courseContainer:{
    flexDirection: 'row',
    paddingBottom: 5
  },
  courseID:{
    color: 'white',
    fontWeight: 'bold',
  },
  courseName:{
    color: 'white',
  },
});