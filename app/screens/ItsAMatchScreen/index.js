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

import Loader from '../Loader/loader';

import {size} from '../../helpers/devices';
import * as Statics from '../../helpers/statics';
import database from '@react-native-firebase/database';
import ChatScreen from '../ChatScreen/index';
import EditProfile from '../EditProfileInfo/index';
import styles from './styles';
import {createStackNavigator} from 'react-navigation-stack';
import MessagesScreen from '../MyMessagesScreen/index';
// onPress={this.props.navigation.navigate('Messages')}
class FeedsScreen extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoading: true,
      name: '',
      details: '',
      matchedUserId: '',
      imagesArray: [],
      loading: false,
      message: '',
    };
  }

  async componentDidMount() {
    const matchedUser = this.props.navigation.getParam('matchedUser', 0);

    console.log('shhhahbaz', matchedUser);

    try {
      database()
        .ref('/Users/' + matchedUser)
        .on('value', querySnapShot => {
          let data = querySnapShot.val() ? querySnapShot.val() : {};
          let firebaseObject = {...data};
          console.log('User Data', firebaseObject);

          this.setState({
            matchedUserId: firebaseObject.id,
            name: firebaseObject.name,
            details: `Hi ! , I am glad that we have matched.I have interest in ${
              firebaseObject.interest
            }
            \n My occupation is  ${firebaseObject.occupation}
            \n Please chat with me through this app , or call me at ${
              firebaseObject.phone
            }  , `,
            imagesArray: firebaseObject.eventImages,
            isLoading: false,
          });
        });
    } catch (error) {
      Alert.alert(error.toString());
    }

    console.log(this.state.matchedUserId);
  }

  shareMessage = () => {
    Share.share({
      message: `Hi! I have matched an event partner for my upcomming event in HobbyDutch.My event partner name is ${
        this.state.name
      }.Please checkout this app in Playstore or ios App Store`,
    })
      .then(result => console.log(result))
      .catch(errorMsg => console.log(errorMsg));
  };

  dislike = () => {
    this.setState({
      loading: true,
    });

    setTimeout(() => {
      this.setState({loading: false});
      Alert.alert('You have disliked the person');
    }, 3000);
  };

  happy = () => {
    this.setState({
      loading: true,
    });

    setTimeout(() => {
      this.setState({loading: false});
      Alert.alert('We are glad that you are happy');
    }, 3000);
  };

  like = () => {
    this.setState({
      loading: true,
    });

    setTimeout(() => {
      this.setState({loading: false});
      Alert.alert('You have liked the person');
    }, 3000);
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
            <Loader visible={this.state.loading} />
            <View style={{marginTop: size(5)}}>
              <View style={styles.profile_pic_container}>
                <Image
                  source={{
                    uri: this.state.imagesArray[0],
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
                    left: 270,
                    top: 430,
                    height: 65,
                    width: 65,
                    alignContent: 'center',
                    justifyContent: 'center',
                    alignItems: 'center',
                  }}>
                  <TouchableOpacity
                    onPress={() =>
                      this.props.navigation.navigate('Chat', {
                        matchedUserId: this.state.matchedUserId,
                        name: this.state.name,
                      })
                    }>
                    <Image
                      style={[styles.iconStyle, {borderRadius: 0}]}
                      source={require('../../../assests/images/chat.png')}
                    />
                  </TouchableOpacity>
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
                  <TouchableOpacity
                    onPress={() => this.props.navigation.goBack()}>
                    <Image
                      style={styles.iconStyle}
                      source={require('../../../assests/images/download.png')}
                    />
                  </TouchableOpacity>
                </View>

                <View style={{marginTop: 10}}>
                  <View style={{marginLeft: 20, width: '100%'}}>
                    <Text style={styles.name}>{this.state.name}</Text>
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
                      marginLeft: 20,
                      marginTop: 30,
                      marginBottom: 20,
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
                marginTop: 20,
              }}>
              <View style={styles.navigation_container}>
                <TouchableOpacity
                  onPress={() => this.dislike()}
                  // onPress={() => this.pushToScreen('Edit')}
                >
                  <View style={styles.navigation_inner_container}>
                    <Image
                      source={require('../../../assests/images/dislike.jpeg')}
                      style={styles.button_style}
                    />
                  </View>
                </TouchableOpacity>

                <View style={styles.navigation_inner_container}>
                  <TouchableOpacity onPress={() => this.happy()}>
                    <Image
                      source={require('../../../assests/images/emoji.png')}
                      style={styles.button_style}
                    />
                  </TouchableOpacity>
                </View>
                <View style={styles.navigation_inner_container}>
                  <TouchableOpacity
                    onPress={() => this.like()}
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

const stack = createStackNavigator({
  Home: {
    screen: FeedsScreen,
    navigationOptions: {
      header: null,
    },
  },
  Chat: {
    screen: ChatScreen,
    navigationOptions: {
      header: null,
    },
  },
});

export default stack;
