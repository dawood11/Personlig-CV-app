import {
  createStackNavigator,
} from 'react-navigation';
import HomeScreen from './HomeScreen'
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

const App = createStackNavigator({
  Home: { screen: HomeScreen },
  Work: { screen: Work },
  Education: { screen: Education },
  Subjects: { screen: Subjects}
});

export default App;