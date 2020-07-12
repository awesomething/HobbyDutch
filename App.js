import 'react-native-gesture-handler';
import SplashScreen from './app/screens/SplashScreen/index.js'
import Login from './app/screens/LoginScreen/index';
import Dashboard from './app/screens/HomeScreen/index';
import auth from '@react-native-firebase/auth';

import React, { Component } from 'react';
import {

  StyleSheet,
  View,
  Text,
  AsyncStorage,
  Alert
 
} from 'react-native';


export default class App extends Component{
  constructor(props) {
    super(props);
    this.state = {
      isLoading: true,
      loggedIn:false
    }
  
  }
  performTimeConsumingTask = async () => {
    return new Promise(resolve =>
      setTimeout(() => {
        resolve('result');
      }, 3000),
    );
  };
  async componentDidMount() {
   
    const data = await this.performTimeConsumingTask();

    if (data !== null) {
      this.setState({ isLoading: false });

    }
  }

  async componentDidMount(){

    try {
      const value = JSON.parse(await AsyncStorage.getItem('@login_details'));
      if (value !== null) {
        // value previously stored
        auth()
          .signInWithEmailAndPassword(value.email, value.password)
          .then(async (res) => {
            try {
              console.log('res', res);
              await AsyncStorage.setItem('id', res.user.uid);


          this.setState({
            loggedIn:true,
            isLoading:false
          })
            } catch (error) {
              Alert.alert(error.tostring())
             
            }
          })
          .catch((error) => {
           
          })
          
      } else {
       this.setState({
         loggedIn:false,
         isLoading:false
       })
      }
    } catch (e) {
      // error reading value
    }
  }
 render(){
  if (this.state.isLoading) {
    return <SplashScreen />;
   }
  else {
return(
    (this.state.loggedIn) ? <Dashboard/> : <Login/>

)
   
   }
 }
};





