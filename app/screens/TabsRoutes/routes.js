import React from 'react';
import {createAppContainer} from 'react-navigation';
import {createMaterialTopTabNavigator} from 'react-navigation-tabs';
import SwipeProfile from '../SwipeProfileScreen/index';
import Icon from 'react-native-vector-icons/FontAwesome5';
import ProfileScreen from '../MyProfileScreen/index';
import MyMessages from '../MyMessagesScreen/index';
import {Image} from 'react-native';

const AppNavigator = createMaterialTopTabNavigator(
  {
    Home: {
      screen: SwipeProfile,

      navigationOptions: {
        tabBarLabel: ({focused, tintColor}) => (
          <Image
            style={{height: 40, width: 60}}
            source={require('../../../assests/images/logo.png')}
          />
        ),
      },
    },

    Profile: {
      screen: ProfileScreen,

      navigationOptions: {
        tabBarLabel: ({focused, tintColor}) => (
          <Image
            style={{height: 30, width: 30}}
            source={require('../../../assests/images/user.png')}
          />
        ),
      },
    },

    Messages: {
      screen: MyMessages,

      navigationOptions: {
        tabBarLabel: ({focused, tintColor}) => (
          <Image
            style={{height: 30, width: 30}}
            source={require('../../../assests/images/message.png')}
          />
        ),
      },
    },
  },
  {
    tabBarOptions: {
      activeTintColor: '#FF4A00FF',
      inactiveTintColor: '#ABABAB',
      showIcon: false,
      showLabel: true,

      style: {
        backgroundColor: '#fff',
      },
    },
  },
);
export default createAppContainer(AppNavigator);
