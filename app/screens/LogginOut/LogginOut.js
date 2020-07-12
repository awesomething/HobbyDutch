import * as React from 'react';
import {

  View,
  Text,

  ActivityIndicator
} from 'react-native';

export default class Logout extends React.Component{

    render(){
      return(
      <View>
  
        <Text>
          Loggin out , Thanks for comming !
        </Text>
  
        <ActivityIndicator
        animating={true}
      
              color="#FF4A00FF"
              size="large"
              style={{marginTop: 10}}
            />
      </View>
      )
    }
  }