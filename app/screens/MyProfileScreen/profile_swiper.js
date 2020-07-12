import React, { Component } from 'react';
import {
  StyleSheet,
  View,
  Text,
  Image,
} from 'react-native';
import Swiper from 'react-native-swiper';
import { size } from '../../helpers/devices.android';
import Rewind from '../../../assests/images/rewind.png'; 
import Like from  '../../../assests/images/heart.png'; 
import Cardio from  '../../../assests/images/cardio.png';  
import Beach from  '../../../assests/images/beach.png';  
import Foodie from  '../../../assests/images/foodie.png';  
import Beer  from '../../../assests/images/beer.png';
import Music  from '../../../assests/images/music.png';

export default class ProfileSwiper extends Component {
  constructor(props) {
    super(props);
    this.state = {
        swiperShow:false,
    };
  }
  componentDidMount(){
      setTimeout(()=>{
          this.setState({
              swiperShow:true
          });
      },0)
  }
  render() {
    if (this.state.swiperShow) {
      return (
        <Swiper 
          style={styles.wrapper} 
          autoplay
          autoplayTimeout={2}
          animated={true}
        >
          <View style={styles.slide}>
            <View style={styles.title_container}>
              <Image source={Cardio} style={styles.icon_style} />
              <Text style={styles.title_text}>Cardio </Text>
            </View>
            <Text style={styles.text}> Social Dancing , Workout</Text>
          </View>
          <View style={styles.slide}>
            <View style={styles.title_container}>
              <Image source={Beach} style={styles.icon_style}/>
              <Text style={styles.title_text}>Beach</Text>
            </View>
            <Text style={styles.text}>Kayaking , Waverunner</Text>
          </View>
          <View style={styles.slide}>
            <View style={styles.title_container}>
              <Image source={Foodie} style={styles.icon_style}/>
              <Text style={styles.title_text}>Foodie</Text>
            </View>
            <Text style={styles.text}>Cooking , Dinner , Brunch</Text>
          </View>
          <View style={styles.slide}>
            <View style={styles.title_container}>
              <Image source={Beer} style={styles.icon_style} />
              <Text style={styles.title_text}>Drinking</Text>
            </View>
            <Text style={styles.text}>Coffee , Wine Tasting</Text>
          </View>
          <View style={styles.slide}>
            <View style={styles.title_container}>
              <Image source={Music} style={[styles.icon_style, ]}/>
              <Text style={styles.title_text}>Music</Text>
            </View>
            <Text style={styles.text}>Sing , Karaoke , Instruments</Text>
          </View>
        
        </Swiper>
      );
    } else {
      return (
        <View />
      )
    }
  }
}

const styles = StyleSheet.create({
  wrapper: {
    height: 100
  },
  title_container: { 
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
  },
  title_text: {
    fontSize: size(22),
    fontWeight: '700',
    color: '#363636',
  },
  icon_style: {
    width: size(35),
    height: size(35),
    resizeMode: 'contain',
    marginRight: size(10),
  },
  slide: {
    height: 100,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    marginTop: size(10),
    color: '#363636',
    fontSize: size(16),
  }
});