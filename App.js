import { createAppContainer, createStackNavigator } from 'react-navigation'

import HomeScreen from './src/screens/HomeScreen'
import SignInScreen from './src/screens/SignInScreen'
import SignUpScreen from './src/screens/SignUpScreen'
import LoadingScreen from './src/screens/LoadingScreen'

import * as firebase from 'firebase'

// Copy these fields from your firebase account
var firebaseConfig = {
  apiKey: "",
  authDomain: "",
  databaseURL: "",
  projectId: "",
  storageBucket: "",
  messagingSenderId: "",
  appId: ""
}
firebase.initializeApp(firebaseConfig)

const mainNavigator = createStackNavigator(
  {
    Home: { screen: HomeScreen },
    SignIn: { screen: SignInScreen },
    SignUp: { screen: SignUpScreen },
    Load: { screen: LoadingScreen }
  },
  {
    initialRouteName: 'Load'
  }
)

const MyApp = createAppContainer(mainNavigator)

export default MyApp