import React, {Component} from 'react';
import {
  StyleSheet,
  View,
  Text,
  TouchableOpacity,
  Image,
  Platform,
  ScrollView,
  Share,
  StatusBar,
  ActivityIndicator,
  AsyncStorage,
  Alert,
} from 'react-native';
import Icon from 'react-native-vector-icons/SimpleLineIcons';

import {size} from '../../helpers/devices';
import * as Statics from '../../helpers/statics';
import database from '@react-native-firebase/database';

import EditProfile from '../EditProfileInfo/index';
import styles from './styles';
import MessagesScreen from '../MyMessagesScreen/index';
// onPress={this.props.navigation.navigate('Messages')}
export default class FeedsScreen extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoading: false,
      name: '',
      details: '',
      matchedUser: '',
      imagesArray: [],
    };
  }

  async componentDidMount() {
    const matchedUser = await AsyncStorage.getItem('matchedUser');

    console.log('feeds', matchedUser);
    this.setState({
      matchedUser: matchedUser,
    });

    this.fetchUserInfo();
  }

  fetchUserInfo = () => {
    const that = this;

    try {
      database()
        .ref('/Users/' + this.state.matchedUser)
        .once('value', function(data) {
          const firebaseObject = data.val();

          that.setState({
            name: firebaseObject.name,
            details: `Phone # : ${firebaseObject.phone} \nInterest : ${
              firebaseObject.interest
            } \nOccupation: ${firebaseObject.occupation}`,
            imagesArray: firebaseObject.eventImages,

            isLoading: false,
          });

          console.log(that.state.matchedUserData);
        });
    } catch (error) {
      Alert.alert(error.toString());
    }
  };

  shareMessage = () => {
    Share.share({
      message: '',
    })
      .then(result => console.log(result))
      .catch(errorMsg => console.log(errorMsg));
  };
  render() {
    if (this.state.isLoading) {
      return (
        <View>
          <StatusBar backgroundColor="#29AB87" barStyle="light-content" />

          <ActivityIndicator
            color="#29AB87"
            size="large"
            style={{marginTop: 10}}
          />
        </View>
      );
    } else {
      return (
        <ScrollView>
          <View style={styles.container}>
            <View style={{marginTop: size(5)}}>
              <View style={styles.profile_pic_container}>
                <Image
                  source={{
                    uri:this.state.imagesArray[0],
                  }}
                  style={styles.profile_pic_style}
                />

                <View
                  style={{
                    position: 'absolute',
                    left: 0,
                    top: 220,
                    backgroundColor: 'rgba(52, 52, 52, 0.8)',
                    width: '100%',
                    height: 80,
                    alignContent: 'center',
                    justifyContent: 'center',
                    alignItems: 'center',
                  }}>
                  <Text style={{color: '#FF4A00FF', fontSize: 20}}>
                    You got
                  </Text>

                  <Text
                    style={{
                      fontSize: 35,
                      color: '#FF4A00FF',
                      fontWeight: 'bold',
                    }}>
                    an Event Partner
                  </Text>
                </View>

                <View
                  style={{
                    position: 'absolute',
                    left: 200,
                    top: 430,

                    borderRadius: 60,
                    height: 65,
                    width: 65,
                    alignContent: 'center',
                    justifyContent: 'center',
                    alignItems: 'center',
                  }}>
                  <Image
                    style={styles.iconStyle}
                    source={require('../../../assests/images/like.jpeg')}
                  />
                </View>

                <View
                  style={{
                    position: 'absolute',
                    left: 270,
                    top: 430,

                    borderRadius: 60,
                    height: 65,
                    width: 65,
                    alignContent: 'center',
                    justifyContent: 'center',
                    alignItems: 'center',
                  }}>
                  <Image
                    style={styles.iconStyle}
                    source={require('../../../assests/images/dislike.jpeg')}
                  />
                </View>
                <View
                  style={{
                    position: 'absolute',
                    left: 345,
                    top: 430,

                    borderRadius: 60,
                    height: 65,
                    width: 65,
                    alignContent: 'center',
                    justifyContent: 'center',
                    alignItems: 'center',
                  }}>
                  <Image
                    style={styles.iconStyle}
                    source={require('../../../assests/images/download.png')}
                  />
                </View>

                <View style={{marginTop: 10}}>
                  <View style={{marginLeft:20,width: '100%'}}>
                  
                   
                    <Text style={styles.details}>{this.state.name}</Text>
                  </View>

                  <View
                    style={{
                      flexDirection: 'row',
                      width: '100%',
                      marginLeft: 20,
                    }}>
                    <Text style={[styles.details, {fontSize: 13}]}>
                      20 minutes ago
                    </Text>
                  </View>

                  <View
                    style={{
                      alignItems: 'center',
                      width: '100%',
                      marginVertical: 40,
                      marginTop: 30,
                      marginBottom: 50,
                      marginRight: 20,
                    }}>
                    <Text style={styles.details}>{this.state.details}</Text>
                  </View>
                  <View>
                    <TouchableOpacity onPress={this.shareMessage}>
                      <View
                        style={{
                          alignItems: 'center',
                          width: Statics.DEVICE_WIDTH,
                        }}>
                        <Text style={styles.share}>SHARE THIS</Text>
                        <Text style={styles.shareL2}>
                          SEE WHAT A FRIEND THIINKS
                        </Text>
                      </View>
                    </TouchableOpacity>
                  </View>
                </View>
              </View>
            </View>
            <View
              style={{
                height: 1,
                width: '100%',
                backgroundColor: '#ebebe8',
                marginTop: 0,
              }}
            />
            <View
              style={{
                flex: 1,
                justifyContent: 'flex-end',
                marginBottom: 20,
                marginTop: 50,
              }}>
              <View style={styles.navigation_container}>
                <View style={styles.navigation_inner_container}>
                  <TouchableOpacity
                    style={styles.button_container}
                    // onPress={() => this.pushToScreen('Settings')}
                  >
                    <Image
                      source={require('../../../assests/images/dislike.jpeg')}
                      style={styles.button_style}
                    />
                  </TouchableOpacity>
                </View>

                <View style={styles.navigation_inner_container}>
                  <TouchableOpacity
                    style={styles.button_container}
                    onPress={() => navigation.navigate('EditProfile')}>
                    <Image
                      source={require('../../../assests/images/emoji.png')}
                      style={styles.button_style}
                    />
                  </TouchableOpacity>
                </View>
                <View style={styles.navigation_inner_container}>
                  <TouchableOpacity
                    style={styles.button_container}
                    // onPress={() => this.pushToScreen('Edit')}
                  >
                    <Image
                      source={require('../../../assests/images/like.jpeg')}
                      style={styles.button_style}
                    />
                  </TouchableOpacity>
                </View>
              </View>
            </View>
          </View>
        </ScrollView>
      );
    }
  }
}
