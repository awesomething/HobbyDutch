import * as React from 'react';
import {
  StyleSheet,
  View,
  Text,
  Image,
  AsyncStorage,
  StatusBar,
  ScrollView,
  Dimensions,
  Button,
  TextInput,
  Switch,
  TouchableOpacity,
  SafeAreaView,
  Modal,
  Share,
  Alert,
} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import {ProgressSteps, ProgressStep} from 'react-native-progress-steps';

import styles from './style';

import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';
import NotificationScreen from '../NotificationSettingsScreen/index';

export default class SubscriptionScreen extends React.Component {
  render() {
    return (
      <ScrollView>
        <View style={styles.mainContainer}>
          <StatusBar backgroundColor="#FF4A00FF" barStyle="light-content" />

          <View style={styles.viewContainer}>
            <View style={{flex: 2, alignItems: 'center', marginTop: 50}}>
              <Text
                style={{fontSize: 25, fontWeight: 'bold', color: '#FF4A00FF'}}>
               Make friends easily with us ! 
              </Text>
            </View>
            <View
              style={{
                flex: 4,
                marginTop: 50,
                alignItems: 'center',
                justifyContent: 'center',
              }}>
              <Image
                style={{width: 100, height: 100}}
                source={require('../../../assests/images/paypal.png')}
              />
            </View>
            <View style={{alignItems: 'center', marginTop: 30}}>
              <Text style={{fontWeight: 'bold', fontSize: 15}}>
                We are family of 3 Millions+ people
              </Text>

              <Text style={{ fontSize: 15}}>
                Subscribe now to be a part of us !
              </Text>
            </View>
          </View>

          <View
            style={{
              borderWidth: 1,
              borderColor: '#8a8986',
              marginTop: 50,
              backgroundColor: '#e8e8e8',
              width: '100%',
              height: 150,
            }}>
            <View style={{alignItems: 'center', marginTop: 10}}>
              <View style={{alignItems: 'center'}}>
                <Text style={{fontSize: 25, fontWeight: 'bold'}}>1 </Text>

                <Text style={{fontSize: 17}}>month</Text>
              </View>

              <View style={{marginTop:10}}>

                <Text style={{fontSize:20,fontWeight:'bold'}}>
                  $ 4.99
                </Text>
              </View>
            </View>

       
          </View>

          <View>

<View style={{alignItems: 'center', justifyContent: 'center'}}>
    <View
      style={{
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 10,
        width: '50%',
        marginTop: 40,
        height: 50,
        flexDirection: 'row',
        backgroundColor: '#FF4A00FF',
        alignItems: 'center',
        justifyContent: 'center',
      }}>
      <TouchableOpacity
       
        style={{alignItems: 'center', width: '100%'}}>
        <View
          style={{
            width: '100%',
            alignItems: 'center',
            justifyContent: 'center',
          }}>
          <Text style={{color: '#FFF', fontSize: 15}}>
            Comming Soon
          </Text>
        </View>
      </TouchableOpacity>
    </View>
  </View>
</View>

<View style={{alignItems:'center',marginTop:40}}>

  <Text style={{fontSize:10}}>
    Standard charges may apply
  </Text>
</View>
        </View>
      </ScrollView>
    );
  }
}
