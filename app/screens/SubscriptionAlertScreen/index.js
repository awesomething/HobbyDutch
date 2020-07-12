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
               Your trial is expired ! 
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
                source={require('../../../assests/images/stop.png')}
              />
            </View>
            <View style={{alignItems: 'center', marginTop: 30}}>
              <Text style={{fontWeight: 'bold', fontSize: 15}}>
                You have to buy Subscription to enjoy this App ! 
              </Text>

              <Text style={{ fontSize: 15}}>
                Subscribe now to be a part of us !
              </Text>
            </View>

            <View style={{flexDirection:'row',marginTop:20}}>
            <View
              style={{
              
                alignItems: 'center',
                justifyContent: 'center',
              }}>
              <Image
                style={{width: 20, height: 20}}
                source={require('../../../assests/images/tick.png')}
              />
            </View>
            <View style={{marginTop:0,marginLeft:10,width:100}}>
            <Text>
                Services 
              </Text>
            </View>
          
            </View>

            <View style={{flexDirection:'row',marginTop:20}}>
            <View
              style={{
              
                alignItems: 'center',
                justifyContent: 'center',
              }}>
              <Image
                style={{width: 20, height: 20}}
                source={require('../../../assests/images/tick.png')}
              />
            </View>
            <View style={{marginTop:0,marginLeft:10,width:100}}>
            <Text>
                Advantages
              </Text>
            </View>
          
            </View>

            <View style={{flexDirection:'row',marginTop:20}}>
            <View
              style={{
              
                alignItems: 'center',
                justifyContent: 'center',
              }}>
              <Image
                style={{width: 20, height: 20}}
                source={require('../../../assests/images/tick.png')}
              />
            </View>
            <View style={{marginTop:0,marginLeft:10,width:100}}>
            <Text>
               Add-ons
              </Text>
            </View>
          
            </View>

            <View style={{flexDirection:'row',marginTop:20}}>
            <View
              style={{
              
                alignItems: 'center',
                justifyContent: 'center',
              }}>
              <Image
                style={{width: 20, height: 20}}
                source={require('../../../assests/images/tick.png')}
              />
            </View>
            <View style={{marginTop:0,marginLeft:10,width:100}}>
            <Text>
                Bonuses 
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
        width: '60%',
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
            Subscribe Now 
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
