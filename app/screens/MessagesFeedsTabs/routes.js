import React from 'react';
import {createAppContainer} from 'react-navigation';
import {createMaterialTopTabNavigator} from 'react-navigation-tabs';
import Icon from 'react-native-vector-icons/FontAwesome5';
import Messages from '../MyMessagesScreen/index';
import Feeds from '../FeedsScreen/index';

const AppNavigator = createMaterialTopTabNavigator(
  {
    Home: Messages,
    Feeds: Feeds,
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
