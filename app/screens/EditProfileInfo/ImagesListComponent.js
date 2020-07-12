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
  ActivityIndicator,
  Alert,
  FlatList,
} from 'react-native';

import styles from './style';
const selectedImagesUri= [
  
      'https://firebasestorage.googleapis.com/v0/b/ebigs-tinder.appspot.com/o/General%2FGallery%2F1.jpg?alt=media&token=d554d673-c044-410a-8a21-b6b093299527',
  


];

export default class EditProfileInfo extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      isLoading:false,
      modalVisibleStatus: false,
      imagesUri: [
        {
          image:
            'https://firebasestorage.googleapis.com/v0/b/ebigs-tinder.appspot.com/o/General%2FGallery%2F1.jpg?alt=media&token=d554d673-c044-410a-8a21-b6b093299527',
        },

        {
          image:
            'https://firebasestorage.googleapis.com/v0/b/ebigs-tinder.appspot.com/o/General%2FGallery%2F2.jpg?alt=media&token=403dad12-51b2-47ea-942a-34d5881fa0b6',
        },

        {
          image:
            'https://firebasestorage.googleapis.com/v0/b/ebigs-tinder.appspot.com/o/General%2FGallery%2F3.jpg?alt=media&token=11269f00-b091-40dc-9d53-e962dca2740b',
        },

        {
          image:
            'https://firebasestorage.googleapis.com/v0/b/ebigs-tinder.appspot.com/o/General%2FGallery%2F4.jpg?alt=media&token=151f5340-bc49-4fe4-bee5-3ef8da291edf',
        },

        {
          image:
            'https://firebasestorage.googleapis.com/v0/b/ebigs-tinder.appspot.com/o/General%2FGallery%2F5.jpg?alt=media&token=c7d88a2b-a6f2-41b8-b037-e1d7f038b172',
        },
        {
          image:
            'https://firebasestorage.googleapis.com/v0/b/ebigs-tinder.appspot.com/o/General%2FGallery%2F7.jpg?alt=media&token=27060360-08fe-45db-b3e0-e1aed7c91f5e',
        },
        {
          image:
            'https://firebasestorage.googleapis.com/v0/b/ebigs-tinder.appspot.com/o/General%2FGallery%2F8.jpg?alt=media&token=6c097fb6-f733-43c9-8826-9e486aa85931',
        },
        {
          image:
            'https://firebasestorage.googleapis.com/v0/b/ebigs-tinder.appspot.com/o/General%2FGallery%2F9.jpg?alt=media&token=d2133450-eb87-473b-9dfc-910d06262fb8',
        },
        {
          image:
            'https://firebasestorage.googleapis.com/v0/b/ebigs-tinder.appspot.com/o/General%2FGallery%2F10.jpg?alt=media&token=4e953cbc-de3f-41e8-ada4-9739dd2f8508',
        },
        {
          image:
            'https://firebasestorage.googleapis.com/v0/b/ebigs-tinder.appspot.com/o/General%2FGallery%2F11.jpg?alt=media&token=144c172a-73be-4678-9883-d4d5aded916e',
        },
      ],

     
    };
  }

  showModalFunction(visible) {
    this.setState({modalVisibleStatus: visible});
  }

  delImage=(item)=>{
    this.setState({
      isLoading:true
    })

    selectedImagesUri.pop(item)

    this.setState({
      isLoading:false
    })



  }

  _renderSelectedItem = ({item, index}) => (
    <TouchableOpacity
      activeOpacity={0.5}
     >
      <View style={styles.Category} key={index}>
        <View style={styles.imageView}>
          <Image
            style={styles.imageStyle}
            source={{
              uri: item,
            }}
          />
        </View>
       
        <View style={{position: 'absolute', left: 100, top: 170}}>
        <TouchableOpacity onPress={()=> this.delImage(item)}>
                  <Image
                    style={styles.iconStyle}
                    source={require('../../../assests/images/delImage.png')}
                  />
                      </TouchableOpacity>
                </View>
    
        
      </View>
    </TouchableOpacity>

  );
  pushImageToArray=(image)=>{

    const selectedImage=image;

    selectedImagesUri.push(selectedImage)

    console.log(selectedImagesUri)
    this.showModalFunction(!this.state.modalVisibleStatus)





  }

  _renderModalItem = ({item, index}) => (
    <TouchableOpacity
      activeOpacity={0.5}
      onPress={() =>
        this.pushImageToArray(item.image)
      }>
      <View style={styles.Category} key={index}>
        <View style={styles.imageView}>
          <Image
            style={styles.imageStyle}
            source={{
              uri: item.image,
            }}
          />
        </View>
       
      </View>
    </TouchableOpacity>

  );

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
    }


    return (
      <ScrollView>
        {/* {this.state.dataSource.map((item, key) => (   */}
        <View style={styles.mainContainer}>
          <StatusBar backgroundColor="#FF4A00FF" barStyle="light-content" />
          <Modal
            transparent={false}
            animationType={'slide'}
            visible={this.state.modalVisibleStatus}
            onRequestClose={() => {
              this.showModalFunction(!this.state.modalVisibleStatus);
            }}>
            <SafeAreaView>
              <ScrollView>
                <View
                  style={{
                    flex: 1,
                  }}>
                  <View style={styles.ModalInsideView}>
                    <View style={{alignItems: 'center', alignSelf: 'center'}}>
                      <TouchableOpacity
                        onPress={() => {
                          this.showModalFunction(
                            !this.state.modalVisibleStatus,
                          );
                        }}>
                        <Image
                          style={{width: 30, height: 30}}
                          source={require('../../../assests/images/close.png')}
                        />
                      </TouchableOpacity>
                    </View>

                    <FlatList
                      horizontal={false}
                      data={this.state.imagesUri}
                      keyExtractor={(item, index) => item.id}
                      numColumns={3}
                      renderItem={this._renderModalItem}
                    />
                  </View>
                </View>
              </ScrollView>
            </SafeAreaView>
          </Modal>
          <View style={{width: '100%'}}>



          <FlatList
                      horizontal={false}
                      data={selectedImagesUri}
                      keyExtractor={(item, index) => item.id}
                      numColumns={3}
                      renderItem={this._renderSelectedItem}
                    />



   

            <View style={{alignItems: 'center', marginTop: 20, flex: 2}}>
              <View style={styles.roundBtn}>
                <TouchableOpacity
                  style={{alignItems: 'center'}}
                  onPress={() => {
                    this.showModalFunction(true);
                  }}>
                  <View>
                    <Text style={{color: 'white', fontSize: 16}}>
                      Add Media
                    </Text>
                  </View>
                </TouchableOpacity>
              </View>
            </View>
          </View>
        </View>
      </ScrollView>
    );
  }
}
