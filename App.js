import React from 'react';
import { createStackNavigator } from 'react-navigation';

import Route from './Route';
import ProfilePicture from './src/components/ProfilePicture/ProfilePicture';
import PhotoGrid from './src/components/PhotoGrid/PhotoGrid';
import Work from './src/components/Work/Work';
import Education from './src/components/Education/Education';
import Subjects from './src/components/Education/Subjects/Subjects';
import * as firebase from 'firebase';

firebase.initializeApp({
  apiKey: "AIzaSyBCecp-v6LgXCPf9IrOUyPUYAPyGaImAb0",
  authDomain: "helloworld-7103b.firebaseapp.com",
  databaseURL: "https://helloworld-7103b.firebaseio.com",
  projectId: "helloworld-7103b",
  storageBucket: "helloworld-7103b.appspot.com",
});

export default class App extends React.Component {
  render() {
    return (
        <RootStack/>
    );
  }
}

const RootStack = new createStackNavigator({
    Home: { screen: Route },
    Work: { screen: Work },
    Education: { screen: Education },
    Subjects: { screen: Subjects}
  },
);