import React, {Component} from 'react';
import { StyleSheet, Text, View, Button, FlatList, BackHandler } from 'react-native';
import { textColor, skyBlueBackground } from '../../../Styling';
import ProgressBar from '.././ProgressBar/ProgressBar';
import * as firebase from 'firebase';

export default class Education extends Component {
  constructor(props){
    super(props)

    this.onEducationFound = this.onEducationFound.bind(this);
    this.onEducationNotFound = this.onEducationNotFound.bind(this);

    this.state = {
      educationList: '',
      errorMsg: ''
    }
  }

  componentDidMount() {
    firebase.database().ref('Education').on('value', this.onEducationFound, this.onEducationNotFound);
    BackHandler.addEventListener('hardwareBackPress', function () {
      console.log('hhhh')
      return true;
    })
  }

  componentWillUnmount() {
    firebase.database().ref('Education').off();
  }

  onEducationFound(data) {
    this.setState({educationList: data.val()})
  }
  onEducationNotFound(err) {
    console.log('ERROR');
    console.log(err);
    this.setState({errorMsg: err})
  }

  static navigationOptions = {
    title: 'Education'
  }
  
  render() {
    const { navigate } = this.props.navigation;
    return (
      <View style={styles.container}>
        {this.state.educationList != '' ?  <FlatList
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
        /> : <Text style={{color: textColor}}>Loading...</Text>}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: skyBlueBackground
  },
  subContainer: {
    paddingTop: 5,
    paddingBottom: 5,
    borderBottomColor: 'black',
    borderBottomWidth: 1,   
  },
  EducationSubTitle: {
    color: textColor
  },
  EducationTitleContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
  }
});