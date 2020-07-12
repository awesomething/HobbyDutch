import { Dimensions } from "react-native";
import { size } from '../../helpers/devices';
import * as Statics from '../../helpers/statics';

export default {
    Container: {
      width:Statics.DEVICE_WIDTH,
      height:Statics.DEVICE_HEIGHT,
      flex: 1,
        backgroundColor:'#fff'
  
      },
      BottomContainer: {
       width:size(20),
       height:size(20),
       
      
        alignItems: 'center',
      },
     
    
  
  icon_style: {
    width: size(35),
    height: size(35),
    resizeMode: 'contain',
  
    alignItems: 'center',
    padding: size(15),
    borderRadius: size(30),
  },
  slide: {
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius:size(30),
    height:50,width:size(50),
    backgroundColor:'white',
    margin:size(10)
  },

  ModalInsideView:{
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginTop: size(22)
  
  },
  
 
 container: {
    flex: 1,
   
  },
  card: {
    flex: 1,
    borderRadius: 4,
    borderWidth: 2,
    borderColor: '#E8E8E8',
    justifyContent: 'center',
    backgroundColor: 'white'
  },
  text: {
    textAlign: 'center',
    fontSize: 25,
    fontWeight:'bold',
    backgroundColor: 'transparent'
  },
  done: {
    textAlign: 'center',
    fontSize: 30,
    color: 'white',
    backgroundColor: 'transparent'
  }

    }