import React, {Component} from 'react';
import { StyleSheet, Text, View, FlatList } from 'react-native';
import { textColor, skyBlueBackground } from '../../../../Styling';
import * as firebase from 'firebase';

export default class Subject extends Component {  
  constructor(props){
    super(props)

    this.onSubjectsFound = this.onSubjectsFound.bind(this);
    this.onSubjectsNotFound = this.onSubjectsNotFound.bind(this);

    this.state = {
      subjectsList: '',
      errorMsg: ''
   }
  }

  componentDidMount() {
    const studyType = this.props.navigation.state.params.study
    firebase.database().ref(studyType).on('value', this.onSubjectsFound, this.onSubjectsNotFound);
  }


  componentWillUnmount() {
    firebase.database().ref(studyType).off();
  }

  onSubjectsFound(data) {
    this.setState({subjectsList: data.val()})
  }
  onSubjectsNotFound(err) {
    console.log('ERROR');
    console.log(err);
    this.setState({errorMsg: err})
  }

  static navigationOptions = {
    title: 'Subject'
  }

  render() {
    return (
      <View style={styles.container}>
        {this.state.subjectsList != '' ? <FlatList
          data = {this.state.subjectsList}
          renderItem = {
            ({item}) =>
              <View style={styles.courseContainer}>
                <Text style={styles.courseID}>{`${item.key}`}</Text>
                <Text style={styles.courseName}> - {`${item.courseName}`}</Text>
              </View>
          }
        /> : <Text style={{color: textColor}}>Loading...</Text>}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: skyBlueBackground,
    justifyContent: 'center',
    alignItems: 'center',
  },
  courseContainer:{
    flexDirection: 'row',
    paddingBottom: 5
  },
  courseID:{
    color: textColor,
    fontWeight: 'bold',
  },
  courseName:{
    color: textColor
  },
});